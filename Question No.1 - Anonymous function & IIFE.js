// Question No.1
// Do the below programs in anonymous function & IIFE

//A.Print odd numbers in an array 
(()=>{
    let a = [1,2,3,5,8,7,9];
    for (let i=0;i<a.length;i++){
        if (a[i] % 2 !=0){
            console.log(a[i]);
                }
    }
})()


//B.Convert all the strings to title caps in a string array
(() => {
    function toTitleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
      }
      console.log(toTitleCase("WELCOME TO JAVASCRIPT"));
})()


//C.Sum of all numbers in an array
(()=>{
    let a=[1,2,3,4,5];
    let Sum=0;
        for (let i=0;i<a.length;i++){
        Sum+=a[i];}
        console.log(Sum);
})()



//D.Return all the prime numbers in an array
//IIFE function to Return all the prime numbers in an array
(() => {
    var arr=[1,2,3,4,5,6,7];
    numArray = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    })
    console.log(numArray)
    })()


//E.Return all the palindromes in an array
(()=>{
    var a=["eye","madam","java"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }})()

//F.Return median of two sorted arrays of same size
const median = (a, b) => {
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
let a=[1,8,6];
let b=[9,8,7];
console.log(median(a,b));


//G.Remove duplicates from an array
(() => {
    let a=[1,4,5,2,4,5,4,5,8];
    let Duplicate = [...new Set(a)];
    console.log(Duplicate);
})();


//H.Rotate an array by k times
(() =>{
    const rotateArray = function(num, k) {
        num=[1,2,3,4,5]
         k=3
        for (let i = 0; i < k; i++) {
            num.unshift(num.pop());
        }
      
        return num;
      }
      console.log(rotateArray())
    })()