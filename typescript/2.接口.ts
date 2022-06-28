// 用来描述对象形状的 interface

interface ISchool {
  readonly name: string,
  age: number,
  address?: string
}

let school: ISchool = {
  name: 'zf',
  age: 11,
  address: '大观中路'
}

// school.name = 'xxx';

// 接口可以扩展
interface IZhufeng extends ISchool {
  type: string,
  [key: string]: any  //任意类型
}
let zhufeng: IZhufeng = {
  ...school,
  type: 'web',
  a: 1,
  b: 2
}
// 类型断言 表示这个对象就是这样一个接口
let school2: ISchool = {
  name: 'zf',
  age: 11,
  address: '大观中路',
  lession: ['架构课', '基础课']
} as ISchool;