document.getElementsByTagName("h1")[0].style.fontSize = "1vw";
var tv = document.getElementById("displayT");

var RX=document.getElementById('rotateX');
var RY=document.getElementById('rotateY');
var RZ=document.getElementById('rotateZ');
var PX=document.getElementById('positionX');
var PY=document.getElementById('positionY');
var PZ=document.getElementById('positionZ');
RX.addEventListener('input',()=>{getValues(tv)});
RY.addEventListener('input',()=>{getValues(tv)});
RZ.addEventListener('input',()=>{getValues(tv)});
PX.addEventListener('input',()=>{getValues(tv)});
PY.addEventListener('input',()=>{getValues(tv)});
PZ.addEventListener('input',()=>{getValues(tv)});
function getValues(element){
  elementTransform(element,RX.value,RY.value,RZ.value,PX.value,PY.value,PZ.value)
}
function elementTransform(element,rx,ry,rz,px,py,pz){
  element.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)
                          translateX(${px}px) translateY(${py}px) translateZ(${pz}px)`;
}
 
