//// 範圍鏈 Scope Chain ////
// 範例一
// 宣告 place 為 ruru1
var place = '網學所';

// 呼叫 a()
a()

// 呼叫 b()
b()

function a() {
    // 宣告 place 為 路上
    var place = '路上';

    // 呼叫 b()
    b();
}

function b() {
    // 印出 place
    console.log('我在', place);
}

// A. undefined ： 因為變數 place 在 function b 裡面沒有被宣告過
// B. 我在路上 ：因為 function a 裡面已經宣告新的 place 的值，然後再呼叫 function b
// C. 我在網學所 ：因為全域環境下 place 是 網學所
// 【問題1】呼叫 a() 印出來的結果是 A、B、C 哪一個呢？
// 【問題2】呼叫 b() 印出來的結果是 A、B、C 哪一個呢？





// 答案：C
// 因為 function b 運行的時候，JS 引擎替 function b 建立了它的函式執行環境，而在建立執行環境的時候，也替它建立了 this 和外部環境參考（Reference to Outer Environment）
// 對 function b 來說，因為沒有 place 這個變數，所以得往外部參考環境找，而它的外部環境是全域，不是 function a，所以 function b 取得的是全域的網學所。

// 思考 - function b 的外部環境是全域環境而不是 function a 呢？





// 答案：因為 JavaScript 在決定外部參考環境的時候是以「詞彙環境（Lexical Environment）」為準則。


// 範例二
let myPokémon = '皮卡丘';

function battle() {
    let myPokémon = '閃電鳥';
    function sayHi() {
        let myPokémon = '快龍';
        console.log('你好挖~ ' + myPokémon);
    }
    sayHi();
}

battle();





// 答案：你好挖~ 快龍
// 因為 sayHi() 裡面有 myPokémon 的變數。