import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'

let {keyword,id}=qs.parse(location.search.substr(1))

new Vue({
    el:'#container',
    data:{
        searchList:null,
        keyword,
        isShow:false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            axios.get(url.searchList,{keyword,id}).then(res=>{
                console.table(res.data.lists)
                this.searchList=res.data.lists
            })
        },
        move(){
            console.log(document.body.scrollTop)
            if(document.body.scrollTop>100){ 
                this.isShow=true
            }else{

                this.isShow=false
            }
        },
        toTop(){
            console.log(1)
            Velocity(document.body,'scroll',{duration:1000})
        }

    },
    mixins:[mixin]
})