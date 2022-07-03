import axios from './index';

// 声明获取轮播图的接口api
export function getSliders<T>() {
  return axios.get<T, T>('/slider/list');
}

// getSliders<ISlider>().then(data => {

// })