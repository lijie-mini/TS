"use strict";
//1、字符串类型
var aName = "貂蝉";
//2、数值类型
var dAge = 18;
dAge = 18.13;
dAge = -17;
//3、布尔值类型
var isSingleDog = true;
isSingleDog = false;
//4、undefined和null
var undef = undefined;
var nul = null;
//5、数组
var arrJS = [1, "a", true, [], {}];
var arrHero = ["貂蝉", "安其拉", "大乔"];
var arrHeroAge = [18, 19, 20];
//泛型数组
var arrHeroAge2 = [18, 19, 20];
//6、元组
var tup1 = ["讨厌", 18, true];
//访问元素和长度
console.log(tup1[0], tup1.length);
//7、枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknow"] = 3] = "Unknow";
})(Gender || (Gender = {}));
console.log(Gender.Boy); //1
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["Unknow"] = 2] = "Unknow";
})(Gender2 || (Gender2 = {}));
console.log(Gender2); //0
var usrSex = Gender.Boy; //1
if (usrSex == Gender.Boy) {
    console.log("相等");
}
else {
    console.log(usrSex);
}
//8、any类型,在不确定返回类型的时候使用
var txtName = document.getElementById("txtN");
//9、void
function sayHi() {
    return "hello";
}
function sayHi2() {
    console.log(111);
}
//10、never，代表不存在的值的类型
function test() {
    while (true) { }
}
function test2() {
    throw new Error("讨厌");
}
// 11、联合类型
var dName1 = prompt("请输入名字");
function test3(age, name) {
    console.log(age, name);
}
test3(18, "姐姐");
//12、可选参数与默认值
function test4(age, nam) {
    if (nam === void 0) { nam = "二"; }
    return 11;
}
test4(18);
//13、剩余参数:数量不确定的参数
function add(a, b) {
    var restArr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restArr[_i - 2] = arguments[_i];
    }
    console.log(a + b);
    var restNum = a + b;
    for (var _a = 0, restArr_1 = restArr; _a < restArr_1.length; _a++) {
        var ele = restArr_1[_a];
        restNum += ele;
    }
    console.log(restNum);
}
add(1, 2);
add(1, 2, 3, 4);
//14、类
var City = /** @class */ (function () {
    function City(cName, cLevel) {
        this.cname = cName;
        this.clevel = cLevel;
    }
    City.prototype.about = function () {
        console.log(this.cname, this.clevel);
    };
    return City;
}());
var c1 = new City("P城", 5);
c1.about();
