//------------Первое задание------------//

function printWindowValues() {
console.log(window);
}
printWindowValues();

//-----------Второе задание-----------//

function expTen(num) {
var res = 1;
for (var i=0; i<10; i++) {
res=res*num;
}
return console.log(res);
}
expTen(2);

//-----------Третье задание-----------//

function getFuncRes(x, y) {
return x(y);
}
getFuncRes(console.log, "Hello World!");
