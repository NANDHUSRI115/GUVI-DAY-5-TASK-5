// Question No.2
//Do the below programs in arrow functions
//A.Print odd numbers in an array
const odd=()=>{
    let a=[1,2,3,5,8,7,9,10,11,12,15,19,18];
    for (let i=0;i<a.length;i++){
        if (a[i]%2!=0){
            console.log(a[i]);
                }
    }
};
odd();
// OUTPUT
// 1
// 3
// 5
// 7
// 9
// 11
// 15
// 19


//B.Convert all the strings to title caps in a string array
const titleCase = () => {
    let a="have a nice day"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(a);
}
titleCase();
// OUTPUT
// Have A Nice Day

//C.Sum of all numbers in an array
const sumofall=()=>{
    let a=[1,2,3,4,5];
    let Sum=0;
        for (let i=0;i<a.length;i++){
        Sum+=a[i];}
        console.log(Sum);
}
sumofall();
// OUTPUT
// 15

//D.Return all the prime numbers in an array
const primeno=() => {
    var arr=[1,2,3,4,5,6,7];
    var a=[];
    const prime= function() {
    for(var x of arr){
    var b=0;
    for(var i=2;i<=x/2;i++){ 
    if(x%i==0){ 
    b=1;
    break;
    }
    }
    if(b==0){
    a.push(x)
    }
    }
    return a
    
    }(arr)
    console.log(prime);
    }
    primeno();
//OUTPUT
// [1, 2, 3, 5, 7] 

//E.Return all the palindromes in an array
const palin=()=>{
    var a=["eye","madam","java"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }}
    palin()
//OUTPUT
// eye
// madam 
