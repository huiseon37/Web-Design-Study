//1: linear-gradient(120deg, #1c94c7, #e0bd6e);
//2: linear-gradient(120deg, rgb(182, 191, 200), rgb(54, 89, 91));
//3: linear-gradient(120deg, #c38cca, #f6a368);

var prev_button, next_button;
var wrap;
var disk_inner;
var pageNum = 0;
var totalNum = 0;
var album;
var pointBtnAll;
var bgArray = new Array();
bgArray[0] = ["#1c94c7", "#e0bd6e"];
bgArray[1] = ["rgb(182, 191, 200)", "rgb(54, 89, 91)"];
bgArray[2] = ["#c38cca", "#f6a368"];

window.onload = function(){
    prev_button = document.querySelectorAll("button")[0];
    next_button = document.querySelectorAll("button")[1];
    wrap = document.querySelector(".wrap");
    album = document.querySelectorAll(".album");
    disk_inner = document.querySelectorAll(".diskInner");
    pointBtnAll = document.querySelectorAll(".pointWrap li");
    totalNum = album.length;

    prev_button.addEventListener("click", function(){
        if(pageNum > 0){
            pageNum --;
        }else{
            pageNum = totalNum -1;
        }
        pageChangeFunc();
    },false);

    next_button.addEventListener("click", function(){
        if(pageNum < totalNum-1){
            pageNum ++;
        }else{
            pageNum = 0;
        }
        pageChangeFunc();
    },false)

    for( var i = 0; i < pointBtnAll.length; i++ ){
        //반복문을 하면서 함수를 쓸때 idx에 i를 넣음
        (function(idx) {
            pointBtnAll[idx].onclick = function() {
                // alert(idx);
                pageNum = idx;
                pageChangeFunc();
            }
        })(i);
    }

    //최초실행
    // pageNum = 2;
    pageChangeFunc();
}

function pageChangeFunc(){

    wrap.style.background = "linear-gradient(120deg,"+ bgArray[pageNum][0] +", "+ bgArray[pageNum][1] + ")";

    for(var i=0; i<totalNum; i++){
        if(pageNum == i){
            //현재 컨텐츠(페이지)
            album[i].classList.add("active");
            pointBtnAll[i].classList.add("active");
        }else{
            album[i].classList.remove("active");
            pointBtnAll[i].classList.remove("active");
        }
    }

    disk_inner[pageNum].style.background = bgArray[pageNum][0];
}