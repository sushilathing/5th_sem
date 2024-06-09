var xyz=["banana","orange","apple"];
console.log("The length of the string is:",xyz.length);
//convert an array to string
console.log("convert the string into number",xyz.toString());
//introduced the array method at ()
console.log(xyz.toLocaleString(2));
//join array elements
console.log("joinning the array elements:",xyz.join("*"));
//pop(),removes the last element from an array
console.log("the removed element is",xyz.pop());
//push(),add new element at the end
xyz.push("kivi");
console.log("the addaed element is",xyz);
//shift(),removes the first array element
console.log("The removed first array element is",xyz.shift());
//unshift ,add the new element at first
xyz.unshift("strawberry");
console.log("the added element is",xyz);
//concate the two string
var wxy=["Emil","Tobias","Linus"];
arr1=xyz.concat(wxy);
console.log("The added element is",arr1);