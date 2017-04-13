<template>
 <div class="body-tab-content">
   <div class="forecast-info border-bottom" v-for="item in hourly">
    <div class="forecast-hd"><img src="../assets/images/tq-1.png" alt=""></div>
     <div class="forecast-bd"><span>{{item.tmp}}°</span></div>
     <div class="forecast-ft">{{item.date.substring(11,16)}}</div>
   </div>
 </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'forecastInfo',
    data(){
      return{

      }
    },
    components:{},
    methods:{},
    mounted(){},
    computed:{
      ...mapState([
        'hourly'
      ])
    },
    watch:{}
  }
</script>
