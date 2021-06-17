//1、字符串类型
let aName: string = "貂蝉";

//2、数值类型
let dAge: number = 18;
dAge = 18.13;
dAge = -17;

//3、布尔值类型
let isSingleDog: boolean = true;
isSingleDog = false;

//4、undefined和null
let undef: undefined = undefined;
let nul: null = null;

//5、数组
let arrJS = [1, "a", true, [], {}];
let arrHero: string[] = ["貂蝉", "安其拉", "大乔"];
let arrHeroAge: number[] = [18, 19, 20];
//泛型数组
let arrHeroAge2: Array<number> = [18, 19, 20];

//6、元组
let tup1: [string, number, boolean] = ["讨厌", 18, true];
//访问元素和长度
console.log(tup1[0], tup1.length);

//7、枚举
enum Gender {
  Boy = 1,
  Girl = 2,
  Unknow = 3
}
console.log(Gender.Boy); //1

enum Gender2 {
  Boy,
  Girl,
  Unknow
}
console.log(Gender2); //0

let usrSex: Gender = Gender.Boy; //1
if (usrSex == Gender.Boy) {
  console.log("相等");
} else {
  console.log(usrSex);
}

//8、any类型,在不确定返回类型的时候使用
let txtName: any = document.getElementById("txtN");

//9、void
function sayHi(): string {
  return "hello";
}
function sayHi2(): void {
  console.log(111);
}

//10、never，代表不存在的值的类型
function test(): never {
  while (true) {}
}
function test2(): never {
  throw new Error("讨厌");
}

// 11、联合类型
let dName1: string | null = prompt("请输入名字");
function test3(age: number, name: string): void {
  console.log(age, name);
}
test3(18, "姐姐");

//12、可选参数与默认值
function test4(age?: number, nam: string = "二"): number {
  return 11;
}
test4(18);

//13、剩余参数:数量不确定的参数
function add(a: number, b: number, ...restArr: number[]): void {
  console.log(a + b);
  let restNum: number = a + b;
  for (let ele of restArr) {
    restNum += ele;
  }
  console.log(restNum);
}
add(1, 2);
add(1, 2, 3, 4);

//14、类
class City {
  cname: string;
  clevel: number;
  constructor(cName: string, cLevel: number) {
    this.cname = cName;
    this.clevel = cLevel;
  }
  about() {
    console.log(this.cname, this.clevel);
  }
}
let c1 = new City("P城", 5);
c1.about();
