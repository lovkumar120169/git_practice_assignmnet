let num=10;

let count=0;

for(let i=2;i<=num;i++){

  if(num%i==0){

count++;
}

}


if(count==1){

console.log("prime");
}else{
  console.log(" not prime")
}

