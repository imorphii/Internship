function otherService() {
    window.open("http://127.0.0.1:5500/alibab-login/login-page.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
// -------------------------------------------------------
let mainPicSrc = document.querySelector('.main-pic-src');

let mainPic = document.querySelector('.main-pic');
let transition = function(){
    mainPic.style.transition='all 2s';
};

let frist = document.getElementById('frist');
let fristbtn = document.getElementById('fristbtn');
frist.onclick = function () {
    mainPicSrc.src = "images/hero-e1fa22fb.webp";
    // mainPicSrc = transition()
    fristbtn.style='inline-block';
    
}

let second = document.getElementById('second');
let secondbtn = document.getElementById('secondbtn');
second.onclick = function () {
    mainPicSrc.src = "images/hero-b5a880ed.webp";
    fristbtn.style='inline-block';
    secondbtn.style = 'inline-block';
}


let third = document.getElementById('third');
third.onclick = function () {
    mainPicSrc.src = "images/hero-f5969150.webp";
}


let fourth = document.getElementById('fourth');
fourth.onclick = function () {
    mainPicSrc.src = "images/hero-824e4df4.webp";
}


let fifth = document.getElementById('fifth');
fifth.onclick = function () {
    mainPicSrc.src = "images/hero-f039b6c5.webp";
}


let sixth = document.getElementById('sixth');
sixth.onclick = function () {
    mainPicSrc.src = "images/hero-8e1d56d8.webp";
}


let seventh = document.getElementById('seventh');
seventh.onclick = function () {
    mainPicSrc.src = "images/hero-a654492c.webp";
}

