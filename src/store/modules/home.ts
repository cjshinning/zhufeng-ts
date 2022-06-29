import { Module } from 'vuex';
import { CATEGORY_TYPES, IHomeState } from '@/typings';
import { IGlobalState } from '..';
import * as Types from '../action-types';

// 首页理应该存哪些数据

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessions: {
    hasMore: true,  //有没有更多数据
    loading: false, //默认没有正在加载
    offset: 0,
    limit: 5,
    list: []  //当前已经显示到页面的课程有哪些
  }
}

// module里的参数  1)自己参数 2)全局状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload: CATEGORY_TYPES) {
      state.currentCategory = payload;
    }
  }
}

export default home;