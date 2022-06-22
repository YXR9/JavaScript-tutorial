//// 1. 全域作用域 Global Scope ////

// var me = 'ruru';
// function iAm() {
//     console.log(me);
// }
// iAm();  // ruru





//// 2. ES6 let 和 const 的區塊作用域 Block Scope ////

// （示意用）這種直接寫大括弧的內容在程式中不代表任何意義，僅為有效的程式碼
// {
//     let me = 'ruru';
//     console.log(me);    // ruru
// }
// console.log(me);    // me is not defined

// 大括弧內用 let 宣告了一個變數 me，值等於 "ruru"，然後用 console.log() 印出 me，結果等於 "ruru"。在大括弧結束後，我們用 console.log() 把 me 的內容印出來，結果得到 me is not defined。
// 也就是說，me 這個變數只有在大括弧，也就是區塊內才看得到。離開了這個作用域，這個變數就消失了。

// {
//     const me = 'ruru';
//     console.log(me);    // ruru
// }
// console.log(me);    // me is not defined





//// 3. var 的函式作用域 Function Scope ////

// 說明：var 宣告的變數，只有在「函式」裡可以看得到
// 什麼意思呢？看看下面的例子：

// {
//     var me = 'ruru1';
// }
// console.log(me);    

// 為什麼會這樣呢？我們不是把 me 寫在大括號裡面了嗎？
// 原因是，因為用 var 宣告的變數，只有在定義它的函式裡面可以看得到它，但這裡沒有函式，所以這裡的 me 是一個 global 變數。
// 這段程式碼就等同於我們在最開始宣告了一個 global 的 me 的變數：

// var me;
// {
//      me = 'ruru2';
// }
// console.log(me);    

// 這表示用大括弧將一個用 var 宣告的變數包起來，沒辦法讓它變成一個區域變數，大括弧對於 var 沒有辦法形成一個作用域，只有函式才可以。
// 相反地，用大括弧把 ES6 let 或 const 宣告的變數包起來，它們就變成區域變數了。

// 那要如何讓 var 變成一個區域變數呢？
// 當我們在一個函式內用 var 宣告變數，那這個變數就變成了一個區域變數，只能在函式內才看得到。

// function iAm() {
//     var me = 'ruru';
//     console.log(me);
// }
// iAm();  
// console.log(me);    

// 我們在 iAm() 函式裡面用 var 宣告了變數 me，然後呼叫 console.log() 把它印出來。
// 當我們呼叫 iAm() 的時候，由於 me 宣告在 iAm() 之中，所以我們在 iAm() 裡面可以看得到它，會印出 "ruru"
// 但是當我們在 global scope 要印出 me 的時候，就找不到這個變數了。





//// 4. 重複宣告 let, const, var ////

// 說明： var 和 ES6 let const 很不一樣的地方 — 「var 可以重複宣告」。

// let me = 'ruru1';
// let me = 'ruru2';  // Identifier 'me' has already been declared.

// const me = 'ruru1';
// const me = 'ruru2';  // Identifier 'me' has already been declared.

// var me = 'ruru1';
// var me = 'ruru2';
// var me;
// console.log(me); // ruru2

// 可以看到第一行用 var 宣告了一個 me 變數，並給他初始值 "ruru1"；第二行重複宣告了 me，並且也給它一個值 "ruru2"，這邊會怎麼運作呢？







// 答案：第二行的 var me; 宣告會被忽略，但是 me = "ruru2"; 的動作還是會執行。
// 第三行又宣告了 var name;，但沒有給它任何值；這裡發生的事情是：宣告會被直接略過，同時因為沒有給它一個新值，所以並不會讓它的值變成 undefined
// 所以上面這段程式碼就等同於：
// var me = 'ruru1';
// me = 'ruru2';
// console.log(me); // ruru2






//// 5. var 可以先使用，後宣告

// 前言 - JavaScript 在 ES6 let 和 const 問世之前，都是用 var 來定義變數，但是 var 有許多迥異於其他程式語言的特性，
// 像是使用函式作用域，以及具有變數 hoisting 的規則，對於初學者而言非常容易搞錯。

function printName() {
    name = "Amy";
    console.log(name); // Amy
    var name;
}
printName();

// 案例：把宣告 name 放在不會被執行到的 if 裡面
// function printName() {
//     name = "John";
//     if (false) {
//         var name;
//     }
//     console.log(name);   // 會有咚咚嗎？
// }

// 結論 - 只要有宣告 var 變數，則不管先使用或是先宣告，都是合法的。反之，如果完全沒有宣告，就會有錯誤。
// 如果是 ES6 let 或 const，就一定要先宣告才能使用。





// 6. hoisting（提升）

// 前言 - 你可能會很好奇，為什麼 " var 先使用，後宣告" 會對？畢竟這違反我們對一般程式語言的認知，變數都要先宣告才能使用。
// 這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。
// 所以，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。

// 案例：
// function printName() {
//     console.log(name); // undefined → 因為我們沒有給他初始值。
//     var name = "John";
//     console.log(name); // John
// }
// printName();

// 只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。

// 上面的案例程式碼等同於：
// function printName() {
//     var name;
//     console.log(name); // undefined
//     name = "John";
//     console.log(name); // John
// }
// printName();

// 函式的 hoisting
// 為什麼函式要有 hoisting? 這樣做的好處是，你可以在呼叫函式前使用它。
// 優點：這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。

// 案例：
// function isEven(n) {
//     if (n === 0) return true;
//     // return isOdd(n - 1);
//   }
  
// function isOdd(n) {
//     if (n === 0) return false;
//     // return isEven(n - 1);
// }
// isEven(10); // true