<template>
  <div id="app" v-if="basic">
    <!--v-if="basic"-->
    <div class="app-header">
     <button class="app-icon" @click="menus()"><img src="./assets/images/icon-menu.png" alt=""></button>
      <div class="header-title">{{basic.cnty}}</div>
      <div class="header-info">
        <p>{{now.tmp}}°</p>
        <div class="sign tq"  v-bind:class="getImg()"></div>
      </div>
    </div>

    <div class="app-wrapper" v-show="isMenus">
      <div class="app-menus">
        <div class="menus-cell" v-for="item in forecast">
          <div class="cell-icon">
            <i class="sign tq" v-bind:class="getImg(item.cond.code_d)"></i>
          </div>
          <div class="cell-date">{{item.date}}</div>
          <div class="cell-deg">{{item.tmp.max}}°/{{item.tmp.min}}°</div>
        </div>
      </div>
      <div class="menus-bg" @click="menus()"></div>
    </div>
    <div class="app-body">
     <div class="body-title">
       {{basic.city}}
     </div>
      <div class="body-date">
      Today,{{basic.update.loc.substring(0,10)}}
      </div>
      <div class="body-info">
        <div class="info-img tq" v-bind:class="getImg()">

        </div>
        <div class="info-deg">
         {{now.tmp}}°
        </div>
      </div>
      <div class="info-detail">
        <span>{{now.cond.txt}}</span>，{{suggestion.comf.txt}}
      </div>
      <div class="body-navs">
        <router-link :to="{path:'/forecastInfo'}" class="body-nav" :class="!weatherTabHover?'hover':''">24小时预报</router-link>
        <router-link :to="{path:'/basicInfo'}" class="body-nav" :class="weatherTabHover?'hover':''">基本信息</router-link>
      </div>
      <div class="body-tab-contents">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
export default {
  name: 'app',
  data(){
      return{
        weatherTabHover: '',
        isMenus:false
      }
  },
  components:{},
  methods:{
//      判断是否显示menu菜单
    menus(){
        this.isMenus=!this.isMenus
    },
    //根据当前的链接判断显示24小时预报 还是基本信息
    getUrl(){
        if (this.$route.fullPath==='/forecastInfo'){
            this.weatherTabHover=false
        }
        else if(this.$route.fullPath==='/basicInfo'){
            this.weatherTabHover=true
        }
    },
    //获取当前图片
    getImg (data) {
      if (!data) {
        data = this.now.cond.code
      }
      switch (data) {
        case '100':
          return 'tq1'
        case '101':
          return 'tq2'
        case '102':
          return 'tq3'
        case '103':
          return 'tq3'
        case '104':
          return 'tq3'
        case '200':
          return 'tq31'
        case '201':
          return 'tq31'
        case '202':
          return 'tq31'
        case '203':
          return 'tq31'
        case '204':
          return 'tq31'
        case '205':
          return 'tq31'
        case '206':
          return 'tq31'
        case '207':
          return 'tq31'
        case '208':
          return 'tq31'
        case '209':
          return 'tq32'
        case '210':
          return 'tq32'
        case '211':
          return 'tq32'
        case '212':
          return 'tq32'
        case '213':
          return 'tq32'
        case '300':
          return 'tq4'
        case '301':
          return 'tq4'
        case '302':
          return 'tq5'
        case '303':
          return 'tq5'
        case '304':
          return 'tq6'
        case '305':
          return 'tq8'
        case '306':
          return 'tq9'
        case '307':
          return 'tq10'
        case '308':
          return 'tq11'
        case '309':
          return 'tq8'
        case '310':
          return 'tq11'
        case '311':
          return 'tq12'
        case '312':
          return 'tq13'
        case '313':
          return 'tq20'
        case '400':
          return 'tq15'
        case '401':
          return 'tq16'
        case '402':
          return 'tq17'
        case '403':
          return 'tq18'
        case '404':
          return 'tq7'
        case '405':
          return 'tq7'
        case '406':
          return 'tq7'
        case '407':
          return 'tq14'
        case '500':
          return 'tq23'
        case '501':
          return 'tq23'
        case '502':
          return 'tq33'
        case '503':
          return 'tq31'
        case '504':
          return 'tq32'
        case '507':
          return 'tq21'
        case '508':
          return 'tq32'
        case '900':
          return 'tq1'
        case '901':
          return 'tq1'
        case '999':
          return 'tq1'
      }
    }
  },
  mounted(){
      this.getUrl();
    this.$http.get(this.defUrl+'/weather',{
        params:{
          city:'南京',
          key:this.key
        }
    }).then(function (response) {
      console.log(response.data.HeWeather5[0].now)
      this.$store.state['forecast']=response.data.HeWeather5[0].daily_forecast // 7-10天预报
      this.$store.state['now'] = response.data.HeWeather5[0].now // 实况天气
      this.$store.state['hourly'] = response.data.HeWeather5[0].hourly_forecast // 每小时预报（逐小时预报），最长10天
      this.$store.state['suggestion'] = response.data.HeWeather5[0].suggestion // 生活指数
      this.$store.state['basic'] = response.data.HeWeather5[0].basic
      this.$store.state['city'] = response.data.HeWeather5[0].aqi
      this.getImg(this.now.cond.code)

    })
  },
  computed:{
    ...mapState([
//        用vuex导入state变量
      'defUrl', 'key', 'forecast', 'now', 'hourly', 'suggestion', 'basic', 'city'
    ])
  },
  watch:{
      //监测router是否改变 并且动态的显示24小时预报、基本信息
    $route(){
        this.getUrl()
    }
  }
}
</script>

<style>
</style>
