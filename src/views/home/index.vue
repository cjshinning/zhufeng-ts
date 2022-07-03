<template>
  <div class="home">
    <!-- 首页头部 -->
    <home-header :category="category" @setCurrentCategory="setCurrentCategory"></home-header>
    <div class="home-container" style="margin-top: 65px;">
      <!-- 轮播图 -->
      <Suspense>
        <template #default>
          <home-swiper></home-swiper>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>

      <!-- 课程列表 -->
      <home-list></home-list>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";
import { CATEGORY_TYPES } from "../../typings";
import * as Types from "@/store/action-types";
// 专门为修改分类使用的 options api
// function useCategory(store: Store<IGlobalState>) {
function useCategory(store: any) {
  let category = computed(() => store.state.home.currentCategory); //vuex中的状态

  function setCurrentCategory(category: CATEGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }

  return {
    category,
    setCurrentCategory
  };
}
export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper
  },
  setup() {
    // 1、需要获取vuex中的分类状态，有个更改状态的功能
    let store = useStore<IGlobalState>();
    let { category, setCurrentCategory } = useCategory(store);

    return {
      category,
      setCurrentCategory
    };
  }
});
</script>