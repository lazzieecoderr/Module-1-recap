/*
!Method 1
let obj1 = {name:"person",age:5}
let obj2 = {age:5,name:"person"}
*convert stringify and sort
let str1 = JSON.stringify(obj1,Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort());
*compare
if(str1===str2){
    console.log("JSON IS EQUAL");
}
else{
    console.log("JSON IS NOT EQUAL");
}
*/
/*
!Method 2
let obj1 = {name:"person",age:5}
let obj2 = {age:5,name:"person"}
let same = true;
if(Object.keys(obj1).length === Object.keys(obj2).length){
  for(let key in obj1){
    if(obj1[key]===obj2[key]){
        console.log(key,"has the same value");
    }
    else{
        same = false
        console.log(key,"has different value");
    }
  }
}
else{
    same = false;
    console.log("Length are different");
}
if(same){
    console.log("JSON IS EQUAL");
}
else{
    console.log("JSON IS NOT EQUAL");
}
*/

//Convert all the strings to title caps in a string array
/*function titlecase(arr){
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for(var i=0;i<data.length;i++){
        data[i]= data[i].charAt(0).toUpperCase()+data[i].slice(1)    //data[0].charAt(0).toUpperCase // this => t =>T
    }
    return data.join(" ")
}
console.log(titlecase(["tHis iS jAVAscript"]))  // this is javascript // ["this","is","javascript"]
*/
//Return all the palindromes in an array
/*function palindrome(arr){
    var result = []
    for(var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("")
        if(data===arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palindrome(["dad","mom","data"]));
*/
//Return median of two sorted arrays of the same size.
/*let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8,9];
function median(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  console.log(arr);
  arr.sort((a, b) => a - b);
  console.log(arr);
  let n = arr.length;
  console.log(n);
  if (n % 2 === 0) {
    return ((arr[n / 2] + arr[n - 1 ]/ 2) / 2);
  } else {
    return arr[Math.floor(n / 2)];
  }
}
console.log(median(arr1, arr2));
*/

//Rotate an array by k times
/*const arr = [1,2,3,4,5]
const K =3;
function Rotate(arr,K){
   for(var i=0;i<K;i++){
    arr.push(arr[i])
   }
   for(var i=0;i<K;i++){
    arr.shift()
   }
   return arr
} 
console.log(Rotate(arr,K));
*/
/*var result = []
function prime(arr){
   for(var i=0;i<arr.length;i++){
    var count = 0
    for(var j =2;j<arr[i];j++){
        if(arr[i]%j===0)
        {
            count = 1;
        }
    }
    if(count ===0)
    {
        result.push(arr[i])
    }
   }
   return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));
'*/
/*
class Movie {
    constructor(title,studio,rating="PG"){
       this.title = title;   //key: value  // leo = title
       this.studio = studio;
       this.rating = rating;
    }
    static getPG(movies){
        return movies.filter(movie=>movie.rating==="PG");
    }
  }
   const obj = new Movie("leo","7-Screen Studio","7.2");
   const movies = [
     new Movie("Movie1", "studio7", "8.5"),
     new Movie("Movie2", "studio8"),
     new Movie("Movie3", "studio9" ),
     new Movie("Movie4", "studio6" ),
     new Movie("Movie5", "studio5", "8.5"),
   ]
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  */

  
  const request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function(){
      var data = request.response;
      var result = JSON.parse(data)
      //console.log(result);
      var curr  = result.filter((ele)=>ele.currencies && ele.currencies.USD)
      curr.forEach((value)=>console.log(value.name.common))
      }