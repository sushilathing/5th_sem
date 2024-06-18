num=30;

if(num>30){
    console.log("The number is greater than 30");
}
else if(num<30){
    console.log("The number is smaller than 30");
}
else{
    console.log("equal number");
}
if(num%2!==0){
    console.log("The number is odd");
    
}
else if(num%2===0){
    console.log("The number is even");
}
math=39;
science=68;
biology=56;
nepali=78;
english=78;
marks=((math+science+biology+nepali+english)/500)*100;
if(marks<50 && marks>60){
    console.log("second division");
}
else if(marks<60 && marks>80){
    console.log("first division");

}
else if(marks>80){
    console.log("distinction");
}
else{
    console.log("fail");
}