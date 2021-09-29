const a =document.getElementById("drum1");
const b =document.getElementById("drum2");
const c =document.getElementById("drum3");
const d =document.getElementById("drum4");
const e =document.getElementById("drum5");
const f =document.getElementById("drum6");
const g =document.getElementById("drum7");


const sound1=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-1_mouyue.mp3");
const sound2=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612108/crash_jmxpuv.mp3");
const sound3=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-3_ose4zi.mp3");
const sound4=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-4_pqk2oj.mp3");
const sound5=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/snare_kzkkyz.mp3");
const sound6=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/tom-2_ooryy1.mp3");
const sound7=new Audio ("https://res.cloudinary.com/dgg7zx0p8/video/upload/v1624612107/kick-bass_ovbjvj.mp3");
a.onclick=()=>{
    sound1.play();
}

b.onclick=()=>{
    sound2.play();
}

c.onclick=()=>{
    sound3.play();
}

d.onclick=()=>{
    sound4.play();
}

e.onclick=()=>{
    sound5.play();
}

f.onclick=()=>{
    sound6.play();
}

g.onclick=()=>{
    sound7.play();
}



