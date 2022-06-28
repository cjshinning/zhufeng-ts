// 函数主要关心返回值和参数
function sum1(a: string, b: string): string {
  return a + b;
}
sum1('a', 'b');

// 可以通过表达式来定义

// 声明一个类型
type Sum = ((a: number, b: number) => number) | string;
// interface Sum {
//   (a: number, b: number): number
// }
// 区别 interface 可以继承 可以被类类实现
// type仅仅是一个别名
const sum2: Sum = (a: number, b: number): number => a + b;

