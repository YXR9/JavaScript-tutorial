// // 阿拉伯的遊牧民族在古代的時候有訓養駱駝
// var Arab = { camel: true };

// // 亞洲有絲綢跟香料
// var Asia  = { 
//     silk: true,
//     spices: true
// };

// // 埃及有蘆葦
// var Egypt = { reed: true };

// console.log( 'camel' in Arab );
// console.log( 'silk' in Arab );
// console.log( 'spices' in Arab );

// // 指定 Asia 為 Arab 的「原型」
// Object.setPrototypeOf(Arab, Asia);

// console.log( 'camel' in Arab );
// console.log( 'silk' in Arab );
// console.log( 'spices' in Arab );

// // 指定 Arab 為 Eygpt 的「原型」
// Object.setPrototypeOf(Egypt, Arab);
// console.log( 'spices' in Egypt );