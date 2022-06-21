// 宣告 me 為 ruru1
var me = 'ruru1';

// 呼叫 a()
a();

function a() {
    // 宣告 me 為 ruru2
    var me = 'ruru2';

    // 呼叫 b()
    b();
}

function b() {
    // 印出 me
    console.log(me);
}

// A. undefined ： 因為變數 me 在 function b 裡面沒有被宣告過
// B. ruru2 ：因為 function a 裡面已經宣告新的 me 的值，然後再呼叫 function b
// C. ruru1 ：因為全域環境下 me 是 ruru1
// 印出來的結果是 A、B、C 哪一個呢？





// 答案：C
// 因為 function b 運行的時候，JS 引擎替 function b 建立了它的函式執行環境，而在建立執行環境的時候，也替它建立了 this 和外部環境參考（Reference to Outer Environment）
// 對 function b 來說，因為沒有 me 這個變數，所以得往外部參考環境找，而它的外部環境是全域，不是 function a，所以 function b 取得的是全域的 ruru1。