let flag = true;
function changeColor(){
    // let element = document.getElementById("el1");
    // if (flag){
    //     element.classList.add("fire");
    //     flag = false;
    // }
    // else{
    //     element.classList.remove("fire");
    //     flag = true;
    // }
    // console.log(element);
    element.classList.toggle("fire");
    
    
    //меняем текст навсегда
    // element.textContent = "Мой первый проект!" 

    
    // if (element.textContent == "Мой первый проект!") element.textContent = "Мой проект!";
    // else element.textContent = "Мой первый проект!";
    element.textContent = element.textContent == "Мой первый проект!" ? "Мой проект!" : "Мой первый проект!";

}


// alert("Hi people!!");
let element = document.getElementById("el1");
console.log(element);
element.classList.add("fire");

let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click', changeColor);