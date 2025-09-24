var arr1=[34,5,23,767,88]
var max=0
for (var i=0;i<arr1.length;i++){
    if(arr1[i]>max){
        max=arr1[i]
    }
}
console.log("The largest number is: ",max)


var arr2=[65,4,55,42,1,534,54]
var min=10000000
for (var i=0;i<arr2.length;i++){
    if(arr2[i]<min){
        min=arr2[i]
    }
}
console.log("The smallest number is: ",min)


arr3=[54,6,43,5,232,54,34,7,90]
var max=0,min=1000000;
for (var i=0;i<arr3.length;i++){
    if(arr3[i]>max){
        max=arr3[i]
    }
    if(arr3[i]<min){
        min=arr3[i]
    }

    
}

console.log("The largest number is: ",max)
console.log("The smallest number is: ",min)


var arr4=[1,2,7,4,7,2,7,9,7,5,2,0,7]
var evenCount=0,oddCount=0
for(var i=0;i<arr4.length;i++){
    if(arr4[i]%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log("Number of even numbers: ",evenCount)
console.log("Number of odd numbers: ",oddCount)

var n,count=0;
n = +prompt("Enter the number: ")
for(var i=0;i<arr4.length;i++){
    if(arr4[i]==n){
        count++
    }
}
console.log(n," is repeated ",count," times")


var arr5=[3,2,4,6,5,4]
for (var i=0;i<arr5.length;i++){
    if(arr5[i]%2==0){
        console.log("First even number is: ",arr5[i]);
        break
    }
}

for (var i=arr5.length-1;i>=0;i--){
    if(arr5[i]%2!=0){
        console.log("First odd number is: ",arr5[i]);
        break
    }
}
var n,count=0;
n= +prompt("Enter any number: ")
for(var i=0;i<arr5.length;i++){
    if(arr5[i]==n){
        count++
    }
    
}
if(count==0){
    console.log("This number do not exist in array")
}
else{
    console.log("This number do exist in array")
}