//
// // // // // var x;
// // // // // var y = 1;
// // // // // var z = 'string';
// // // // // var user_info = 'shd';
// // // // //
// // // //
// // // // var x, y, z;
// // // // console.log(x);
// // // // var x=1,
// // // //     y=2,
// // // //     z=3;
// // // // var x=5;
// // // // console.log(x);
// // // // console.log(a);
// // // //
// // // // let a = 2;
// // // // a = 4;
// // // // console.log(a);
// // // //
// // // // const X= 2;
// // // // var str = 'some str';
// // // // var strTwo = 'new str';
// // // // var strLength =str.length;
// // // // console.log('Длина строки ', strLength);
// // // //
// // // // console.log(str+strTwo);
// // // /
// // // // console.log(str.toUpperCase());
// // //     var str = 'some js js';
// // //     var firsSpace =str.indexOf(' ');
// // //     // console.log(firsSpace);
// // //     var secondSpace=str.indexOf(' ',firsSpace+1);
// // //     console.log(secondSpace);
// // //  var prop ='info';
// // //  var name ='Sergey';
// // //  var obj = {
// // //     name,
// // //     age : 21,
// // //     info: {
// // //         gender: 'man',
// // //         street: 'Gagarina'
// // //     }
// // // };
// // //  var arr =['Sergey' 1,2,3,12];
// // //  arr[0] =10;
// // //     console.log(arr);
// // //
// // // // console.log(obj ['name']);
// // // // console.log(obj ['age']);
// // // console.log(obj[prop].gender);
// // // var    var prop ='info';
// //  var price =1000;
// //  var obj = {
// //      price,
// //     mob:{
// //      carrency: 'dollar',
// // //     },
// // //     detelis: {
// // //         model: '7S',
// // //         color: 'green',
// // //     }
// // // };
// // // console.log(obj, ['price'])
// // ////////////////////////////////////////////////////////////////////////////////
// // // var  y= 'hidden';
// // //  y? y='hidden': y='visible';
// // //
// // //  if{
// // //     y=('hidden')
// // //  } else {
// // //     y='visible'
// // //  }\
// //     var y = 'hidden';
// //     if (y== 'hidden'){
// //         y='visible';
// //    }
// //     else{
// //        y=' hidden';
// //    }
// // ////////////one variant/////////////////////////////
// //     y = y =='visible'? 'visible' : 'hidden';
// // ////////////two variant////////////////////////////
// //     y=='hidden' ? y = 'visible' : y = 'hidden';
// // ///////////////////////////////////////////////////
// //  var a = 1;
// //  if (a==0){
// //      a = 1 ;
// //  }else  if ( a<0){
// //      a =' less then zero';
// //  }else if (a >0){
// //      a*=10;
// //  }
// //  a ==0 ? a=1 :
// //     a<0 ? a= 'less then zero' :
// //         a>0 ? a*=10: 'a ne chislo';
// // /////////////////Преобразование циклов
// //    var a,b,c,d,e,f;
// //     a = 0 || 'string';
// //     b = 1 && 'string';
// //     c = null || 25;
// //     d = null && 25;
// //     e= null || 0 || 35;
// //     f = null && 0 && 35;
// // //     console.log(a,b,c,d,e,f);
// // //////////////////////////////////////////Задача от Дениса //////////////////
// //  var user = {
// //    name: 'Sergey',
// //    info: {
// //    work: 'Easycode',
// //    profession: 'frontend developer',
// //    age: 21
// //
// //  if (user.name !=undefined){
// //    var a =' Имя пользователя: ';
// //    var b =' он работает в: ';
// //    var d =' ему лет: ';
// //   console.log(a+user.name+b+user.info.work+d+user.info.age)
// //  }
// // else {
// //    console.log(b,c)
// // }
//
// // /////////////////Дениса Вариант /////////////////////////////////////////
// //  if(user.info.work){
// //  console.log(`Пользователя зовут ${user.name} он работает в ${user.info.work} ему ${user.info.age}`);
// //  } else{
// //  console.log(`Пользователь  ${user.name} нигде не работает`);
// //}/
//
// //////////////////////////////////////////Циклы/////////////
// // var i =0;
// // while (i++<10){
// //  console.log(i);
// // }
// var i =3,
//      isFinish;
// while (!isFinish){
//  console.log(i);
//  isFinish = !i--
// }
//    while -сначало проверяет условие а потом выполняет
//    while do - проверяет do  а потом идет выполнение
//    for - цикл со Счётчиком
// // //  var index;
// // //  while (index) {
// ///console.log(index);
// ////}
// // do{
// /console.log(index);
// // }
// //while(index);
//
//  for (var i=0; i<10; i++){
//  console.log(i);
// }
//  var j=10;
//  for (;j--;){
//  console.log(j);
// //  }
//   var arr=[1,2,3,4,5,654]
//   for(var i=0; i< arr.length; i++){
//   console.log(i, arr[i] *= 2)
//  }
// var arr = [
//  {
//  name: 'Sergey',
//  gender: 'man'
// },
//  {
//   name: 'Coach',
//   gender: 'man'
//  },
//  {
//   name: 'Ann',
//   gender: 'woman'
//  },
//  {
//   name: 'Tolik',
//   gender: 'man'
//  },
//  {
//   name: 'Ilona',
//   gender: 'wonam'
//  }
// ];
// // var manCout = 0, womanCout =0;
// // for(var i=0, max = arr.length; i < max; i++){
// //  if(arr[i].gender === 'man'){
// //    manCout += 1;
//  }else{
//   womanCout += 1;
//  }
// }
// console.log(`Мужчин всего ${manCout}`);
// console.log(`Женщин всего ${womanCout}`);
//////////////////break -остановка(прерывание ) итерации
//  var arr=[2,5,7,50,10,3,4];
//  for(var i=0; i<arr.length; i++){
//    if (arr[i] >=5 ){
//    //'break'(остановка итерации в нужном моменте)
//    // 'continue' (продолжает искать итерацию)
//   }
//  console.log(arr[i]);
//  }
// //////////(for in) -- поиск по полям и ключам  ( сколько полей, столько раз и проидет)
//  var obj = {
//   name: 'Sergey',
//   age: 21
//  };
//  for (var key in obj ) {
//   console.log(key, obj[key]);
//
//  }
// //////////////////////for of -(для массивов)
//  var arr= ['one', 'two'];
//  for(var value of arr){
//   console.log(value)
//  }
// //////////////////////////////////DZ 1
 var text = "I am in the easycode";
 var prob = '';
 for (var i = 0; i < text.length; i++){
    prob += (text[i - 1] == ' ') ? text[i].toUpperCase() : text[i];
}
// console.log(prob);
// /////////////////////////////DZ 2
 var text2 = "tseb eht ma i",
     prob2 = '';
for (var i = text2.length - 1; i >=0; i--) {
    prob2 += text2[i];
 }
 console.log(prob2);
//////////////////////////Dz 3
 function fact(n)
 {var res = 1;
     while (n--) {
     }
     res *= n + 1
     return res;
 }
 console.log( fact(5) );
////////////////////DZ 4
 var e = "Считаем до 10-ти: ";
for (var i = 0; i <= 10; i++) {
    e += (i == 10) ? i : i +', ';
}
 console.log(e);
// /////////////////////DZ 5
    var str ='JavaScript is a pretty good language';
    var ns= '';
    for (var i = 0; i < str.length; i++)
    {
        ns += (str[i - 1] == ' ') ? str[i].toUpperCase() : str[i];
        ns=ns.replace(' ','');
    }
    console.log(ns);
/////////////////////////DZ 6
   var sum =0;
    for(var i = 1; i<=15; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
//////////////////////////////////////////////////////////////////
