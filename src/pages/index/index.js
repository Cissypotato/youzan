
import 'css/common.css' 
import './index.css'


import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

Vue.use(InfiniteScroll);


new Vue({
    el:"#app",
    data:{
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
        bannerList:null
    },
    created(){
         this.getlists()
         this.getBanner()
    },
    methods:{
        getlists(){
            if(this.allLoaded) return
            this.loading=true
            axios.get(url.hotLists,{
                pageNum:this.pageNum,
                pageSize:6
            }).then(res=>{
                let currentList=res.data.lists
                if(currentList.length<this.pageSize){
                    this.allLoaded=true
                }
                if(this.lists){
                    this.lists=this.lists.concat(currentList)
                }else{
                    this.lists=currentList
                }
                
            })  
            this.loading=false
            this.pageNum++
        },
        getBanner(){
            axios.get(url.banner).then(res=>{
                
                this.bannerList=res.data.lists
                console.log(this.bannerList)
            })
        }
    },
    components:{
        Foot,
        Swipe
    }
})