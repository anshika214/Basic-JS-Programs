let num=6437824
let sum=0
while(num>0){
   let d=num%10;
   sum+=d;
   num=Math.floor(num/10)
}
console.log(sum)