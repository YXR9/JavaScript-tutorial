//// 全域作用域 Global Scope ////

// var me = 'ruru';
// function iAm() {
//     console.log(me);
// }
// iAm();  // ruru


//// 區塊作用域 Block Scope ////

// 1. （示意用）這種直接寫大括弧的內容在程式中不代表任何意義，僅為有效的程式碼
// {
//     let me = 'ruru';
//     console.log(me);    // ruru
// }
// console.log(me);    // me is not defined

// {
//     const me = 'ruru';
//     console.log(me);    // ruru
// }
// console.log(me);    // me is not defined

// 2. 重複宣告 let, const, var
// let me = 'ruru1';
// let me = 'ruru2';  // Identifier 'me' has already been declared.

// const me = 'ruru1';
// const me = 'ruru2';  // Identifier 'me' has already been declared.

// var me = 'ruru1';
// var me = 'ruru2';

//// 函式作用域 Function Scope ////

// function iAm() {
//     var me = 'ruru';
//     console.log(me);
// }
// iAm();  // ruru
// console.log(me);    // me is not defined

{
    var me = 'ruru';
    console.log(me);    // ruru
}
console.log(me);    // ruru