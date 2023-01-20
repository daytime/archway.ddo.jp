alert("JavaScriptを試してみましょう！");

/* アコーディオン ここから */

let keyword = "Hello World!";
// keyword='Hello World2!!';

let inoki = ["いーち", "にーい", "さーん", "ダーー！！"];

console.log(inoki[3]);

let index = 0;
while (index < inoki.length) {
    console.log(inoki[index]);
    index++;
}

//定数
// const bigKeyword = "He..Hell...Hello World!!";
// console.log(bigKeyword);
// console.log(keyword);

// if (inoki.length > 5) {
//     console.log("ボンバイエ");
// } else {
//     console.log("ボンバ...！");
// }

//関数
const test = (arg) => {
    if (inoki.length > arg) {
        console.log("ボンバイエ");
    } else {
        console.log("ボンバ...！");
    }
};

test(5);

//オブジェクト
const keyword2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World!');
  }
};

console.log(keyword2.color);
console.log(keyword2.goToilet());
console.log(keyword2);

console.log(window);
console.log(document);
console.log(document.getElementsByTagName('button')[0]);
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  window.alert('on Click!!');
});