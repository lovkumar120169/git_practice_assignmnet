
function prime(num){

  let count=0;

  for(let i=1;i<=num;i++){

     if(num%i==0){
       count++;
     }

  }
return count;

}



let num=prime(13);

if(num==2){

 console.log("prime number");

}
else{

console.log("not prime number");

}

