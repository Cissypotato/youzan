
import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'


import Foot from './components/Foot.vue'

new Vue({
    el:'#app',
    data:{
        topList:null
    },
    components:{
        Foot
    },
    created(){
        this.getTopList()
    },
    methods:{
        getTopList(){
            axios.get(url.topList).then(res=>{
                this.topList=res.data.lists
                console.log(this.topList)
            })
        }
    }
})