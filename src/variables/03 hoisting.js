//// 函式陳述式
// call();
// function call() {
//     console.log('呼叫九天玄女');
// }





//// 函式表達式
// 1.
// var call = function() {
//     console.log('呼叫九天玄女');
// }
// call();

// 2.
// call();
// var call = function() {
//     console.log('呼叫九天玄女');
// }





//// function 互相呼叫
// function isEven(n) {
//     if (n === 0){
//         console.log(true);
//         return true;
//     } else{
//         isOdd(n - 1);
//     }
// }
  
// function isOdd(n) {
//     if (n === 0){
//         console.log(false);
//         return false;
//     } else{
//         isEven(n - 1);
//     }
// }
  
// isEven(10); // true

// 說明：我們在 isEven 裡面呼叫 isOdd，在 isOdd 裡面也呼叫 isEven
// 如果我們沒有 hoisting，那以上的程式碼就不可能達成，因為不可能同時做到 A 在 B 上面而 B 又在 A 上面。
// 所以 hoisting 就可以解決上面的問題。