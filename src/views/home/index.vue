<template>
  <div class="home">
    {{category}}
    <!-- 首页头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <home-swiper></home-swiper>
    <!-- 课程列表 -->
    <home-list></home-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";

export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper
  },
  setup() {
    let store = useStore<IGlobalState>();
    // let store = useStore();
    let category = computed(() => {
      return store.state.home.currentCategory;
    });
    return {
      category
    };
  }
});
</script>