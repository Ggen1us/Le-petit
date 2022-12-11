const prev = document.querySelector ('.btn-prev');
const next = document.querySelector ('.btn-next');
const move = document.querySelector ('.slider-track');
//const body = document.querySelector ('.wrapper').clientWidth;
const moveX = document.querySelector ('.slider-item').clientWidth;

var listeAitem = document.querySelectorAll ('.slider-item');
var body = (listeAitem.length -1)* (moveX);

console.log(body);
var nowX =0;
var xTrans;
prev.addEventListener("click",p=>{
    if ((nowX-moveX)<0) {
        xTrans = +0
    }else{
        xTrans = nowX - +moveX;
    }
    move.style.transform = 'translateX(-'+ xTrans+'px)';
    nowX = xTrans;
    console.log(nowX);
})
next.addEventListener("click",p=>{
    if ((nowX+moveX)>body) {
        xTrans = +body
    }else{
        xTrans = nowX + +moveX;
    }
    move.style.transform = 'translateX(-'+ xTrans+'px)';
    nowX = xTrans;
    console.log(nowX);
})

