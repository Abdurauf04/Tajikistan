

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");
let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "blueviolet";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 605}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "blueviolet";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 606}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`;
  slideNumber--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  slideNumber = length;
};

const changeColor = ()=>{
  resetBg()
  buttons[slideNumber-1].style.backgroundColor = "blueviolet";
}

// Khujand saction js


var text ;
var showHide = true;
function hidemore() {
  
   text = document.getElementById("text").innerText;
    document.getElementById("text").innerHTML=text.substring(0,30)+  ".....";
    text = document.getElementById("text2").innerText;
    document.getElementById("text2").innerHTML=text.substring(0,30)+  ".....";
    text = document.getElementById("text3").innerText;
    document.getElementById("text3").innerHTML=text.substring(0,30)+  ".....";
}
var toggaleshow = function(param,id){
    
  if(showHide){  
      document.getElementById(id).innerText=text+"";
      param.innerText="Collapse";   
        showHide = false;
      }else{
        text = document.getElementById(id).innerText;
        document.getElementById(id).innerHTML=text.substring(0,30)+ ".....";
        param.innerText="Reed_more";
        showHide = true;
    }
}
