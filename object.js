//using js selecters to take the value of two inputs and show the sun of that value using a function call on buttom click
//change the background color after div on  bottom click using js

function add(){
    const num1=document.getElementById('num1')
    const num2=document.getElementById('num2')
    const sum =Number(num1)+Number(num2)
    const output =document.getElementById('sum')
}
function change(){
    const target =document.getElementById('random')
    if (target .style .backgroundcolor='red')
        target.style.backgroundcolor='blue';
    else
    target.style.backgroundcolor="red";
}