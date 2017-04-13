<template>
 <div class="body-tab-content">
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >体感温度</p>
       <p class="basic-title">单位：摄氏度°</p>
     </div>
     <div class="basic-num">
       {{now.fl}}°
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >相对湿度</p>
       <p class="basic-title">单位：%</p>
     </div>
     <div class="basic-num">
       {{now.hum}}%
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >降水量</p>
       <p class="basic-title">单位：mm</p>
     </div>
     <div class="basic-num">
       {{now.pcpn}}mm
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >气压</p>
       <p class="basic-title">单位：Pa</p>
     </div>
     <div class="basic-num">
       {{now.pres}}Pa
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >温度</p>
       <p class="basic-title">单位：摄氏度°</p>
     </div>
     <div class="basic-num">
       {{now.tmp}}°
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >能见度</p>
       <p class="basic-title">单位：km</p>
     </div>
     <div class="basic-num">
       {{now.vis}}km
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >风向</p>
     </div>
     <div class="basic-num">
       {{now.wind.deg}}°/{now.wind.dir}}
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p >风力</p>
     </div>
     <div class="basic-num">
      {{now.wind.sc}}级
     </div>
   </div>
   <div class="basic-info border-bottom">
     <div class="basic-hd">
       <p>风速</p>
     </div>
     <div class="basic-num">
       {{now.wind.spd}}kmph
     </div>
   </div>
 </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'basicInfo',
    data(){
        return{

        }
    },
    components:{},
    methods:{},
    mounted(){},
    computed:{
      ...mapState([
          'now'
      ])
    },
    watch:{}
  }
</script>
