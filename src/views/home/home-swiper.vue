<template>
  <van-swipe v-if="sliderList2.length">
    <van-swipe-item v-for="l in sliderList2" :key="l.url">
      <img :src="l.url" style="max-width: 100%;">
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts">
import { IGlobalState } from '@/store';
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex';
import * as Types from '@/store/action-types';

export default defineComponent({
  async setup() {
    // 页面一加载就要获取数据
    // let store = useStore<IGlobalState>();
    // let sliderList = computed(() => store.state.home.sliders);
    // if (sliderList.value.length == 0) { //缓存，如果数据没有获取
    //   await store.dispatch(`home/${Types.SET_SLIDER_LIST}`);
    // }

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000)
    })

    let sliderList2 = [
      { url: '//img2.37wanimg.com/2021/07/06095526PTqX0.jpg' },
      { url: '//img2.37wanimg.com/2021/07/060955366sa8L.jpg' },
      { url: '//img2.37wanimg.com/2021/07/06095543shuHH.jpg' },
      { url: '//img2.37wanimg.com/2021/07/060955167d48G.jpg' }
    ]
    return {
      // sliderList,
      sliderList2
    }
  }
});
</script>