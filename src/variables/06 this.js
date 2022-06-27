// function a() {
//     console.log(this)
// }





//// 預設綁定（Default Binding）：一般呼叫函式
// a();    // 這時 this 是全域物件 → window





//// 隱含式綁定(Implicit Binding)
// function a() {
//     console.log( this.c );
//   }
  
//   var obj = {
//     c: 2,
//     foo: a
//   };
  
//   a();     // undefined
//   obj.foo();    // 2




//// 顯式綁定 (Explicit Binding)
// var obj = {};
// a.call(obj);    // 這時 this 也是 obj





//// 「new」關鍵字綁定
// function a(c) {
//     this.c = c;
// }
// var obj = new a(123);    // 因為加了個 new，所以建構了一個新的 object，並回傳到 obj
//                          // 而 123 這個參數，會做為新 object 的屬性 c 的值
// console.log(obj.c);