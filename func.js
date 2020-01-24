const dispMessage = (count) => {
    if (count<4){
        return "Sorry, you lose"
    }
    else if(count<5 && count>=4){
        return "Congratulations, you win a free ticket"
    }

    else if(count==5){
        return "Congratulations! You win $100!"
    }

    else{
        return "Wow! Unbelievable! You could have won the mega millions!"
    }
    
}


// console.log(myArr)

const checkFunc =(arr)=>{
    
    let count = 0;
    let  myArr =[];
  
    for(var i=0;i<6;i++){
        myArr.push(Math.floor(Math.random() * 20) + 1)
    }

    // console.log(myArr)

    arr.forEach(element => {
        if(myArr.indexOf(element)>-1){
            count++;
        } 

      }
      
    );

    return count;

}

const messCheck = (arr)=>{
  const count=checkFunc(arr)
  const myMessage=dispMessage(count)
  return myMessage
}

module.exports=messCheck;

// console.log(checkFunc([1,2,5,7]))


