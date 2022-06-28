
// ts 中冒号后面的都是类型
const str: string = 'hello zf';
const num: number = 11;
const boolean: boolean = true;

// 联合类型
let age: string | number = 1;
age = 'hello';

// 对象 数组 函数
const arr: number[] = [1, 2, 3];

// 元祖
const tuple: [string, number] = ['zf', 1];
console.log(tuple);

let n: null = null;
let u: undefined = undefined;

// 枚举
enum USER_ROLE {
  USER = 'user',
  MANAGER = 'manager',
  ADMIN = 'admin'
}
console.log(USER_ROLE.USER);

// any
const array: any = [];

// object类型 非原始数据类型
// Object.create()
const create = (obj: Object) => {

}
create([]);
create({});
create(function () { });

export { }