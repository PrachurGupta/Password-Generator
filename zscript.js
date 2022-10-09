const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwdOneEl = document.getElementById("pwd-one");
let pwdTwoEl = document.getElementById("pwd-two");

let generatedPwdEl = document.getElementById("generate-pwd");

generatedPwdEl.addEventListener("click", function () {
  reset();
  randomPwd();
});

function reset() {
  pwdOneEl.textContent = null;
  pwdTwoEl.textContent = null;
}

function randomPwd() {
  for (let i = 0; i < 15; i++) {
    let temp = Math.floor(Math.random() * 91);
    pwdOneEl.textContent += characters[temp];
    console.log(pwdOneEl.textContent);
  }
  for (let i = 0; i < 15; i++) {
    let temp = Math.floor(Math.random() * 91);
    pwdTwoEl.textContent += characters[temp];
    console.log(pwdTwoEl.textContent);
  }
}
