<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
                <a class="js-no-follow" v-bind:href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.img">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style>
 .swiper-slide img{width: 100%;height: 100%;}
</style>
<script>
//swiper 在mounted之后生成。
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'Swipe',
    props:['lists'],
    created(){

    },
    mounted(){
        new Swiper('.swiper-container',{
            loop:true,
            pagination:".swiper-pagination"
        })
    }
}
</script>
