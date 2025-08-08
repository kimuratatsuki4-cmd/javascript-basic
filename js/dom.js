// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

console.log(window)

console.log(document.getElementById("first-list"));
console.log(document.getElementsByClassName("heading"));
const heading = document.getElementsByClassName("heading");

for (let i = 0; i < heading.length; i++) {
    const element = heading[i];
    console.log(element);
}

console.log(document.querySelector("h1"));
console.log(document.querySelector("#second-heading"));
console.log(document.querySelector(".list"));

const li = document.createElement("li");
li.textContent = "Javascriptで新規に作成したリスト3";
document.querySelector("ul").appendChild(li);
