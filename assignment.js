//1st assignment Solution
//  add all the count values in
//  response using for loop and console the sum as output

const res=[
    {
        count:1,
    },
    {
        count:2,
    },
    {
        count:3,
    }
]
var sum=0;
for (let i = 0; i < res.length; i++) {
    sum=res[i].count+sum
    
}
console.log(sum);

//2nd assignment  Solution
//  add all the count values in
//  response using for loop and console the sum as output
const response={
    maran:{
        count:1
    },
    gas:{
        count:2
    },
    prelude:{
        count:5
    },
    keys:["maran","gas","prelude"]
}
const test=Object.values(response)
var sum1=0
for(let i=0;i<test.length;i++)
{
    if(Array.isArray(test[i]))
    {
       break;
    }
   else{
    sum1=sum1+test[i].count
   }
}
console.log(sum1)


//3rd assignment solution
// Change the 'HI' Text color on Clicking of button

function blue(){
    document.getElementById('h1Tag').style.color="blue"
}