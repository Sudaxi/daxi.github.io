/*
let myHeading = document.querySelector('h1');
myHeading.textContent = "hello" + "world" + "6";//helloworld6
myHeading.textContent = "9" - "6" + "1";//31
myHeading.textContent = "8" * "2" + "1";//161
myHeading.textContent = "9/3"; //3
myHeading.textContent = 'Hello world!';
*/

// let myVariable = '李雷';
// myVariable = '韩梅梅';
/*
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('我最喜欢巧克力冰激淋了');
} else {
    alert('但是巧克力才是我的最爱呀……');
}

let myVariable = document.querySelector('h1');
alert('hello!');
*/

/*
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
*/

// var x = 5;
// console.log(x); // 5

/*
let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('点击我，有惊喜哦。');
};
//等于上面的写法
document.querySelector('html').onclick = function() {
    alert('点击我，有惊喜哦。');
}
*/

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let myscr = myImage.getAttribute('src');
    if (myscr === 'images/WechatIMG5.jpeg') {
        myImage.setAttribute('src', 'images/WechatIMG15.jpeg');
    } else {
        myImage.setAttribute('src', 'images/WechatIMG5.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'hello，' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'hello，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }