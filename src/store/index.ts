import { createStore } from 'vuex'
import home from './modules/home';
import { IHomeState } from '@/typings';

export interface IGlobalState {
  home: IHomeState, //某个页面可以在这里增加
}

const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})

export default store;