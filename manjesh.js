var marksDistribution=[90,24,55,81,27,46]
let totalMarksobtained= marksDistribution.reduce(function(a, b){
  return a + b;
});

//Total marks obtained
console.log(totalMarksobtained)

function percentage(totalMarks) 
{
   return (100 * totalMarksobtained) / totalMarks;
} 
const percentResult=percentage(600)
console.log( percentResult)

if(percentResult<=30&& percentResult>=50)
{
 console.log("candidate is obtained d grade")   
}
else if(percentResult>=50 && percentResult<=60)
{
    console.log("candidate is obtained c grade ")  
}
else if((percentResult<=60 && percentResult>=80))
{
    console.log("candidate is obtained B grade ")   
}
else
{
  console.log("candidate is obtained A grade ")   
}
