let result=[];
    
function integer (num){
    
    for (let i=1; i<=num; i++) {
      
      if (num % 2 === 0 && num % 3 ===0 && num % 5===0)            {
        return result.push ("yu-gi-oh")
      }
      else if (num % 3 === 0 && num % 5 ===0) {
        return result.push ("gi-0h")
      }
      
      else if (num % 2 === 0 && num % 3 ===0) {
        return result.push ("yu-gi")
      }
      else if (num % 2 === 0 && num % 5 ===0) {
        return result.push ("yu-oh")
      }
       else if (num % 2 === 0) {
        return result.push ("yu")
      }
      else if (num % 3 === 0) {
        return result.push ("gi")
      }
      else if (num % 5 === 0) {
        return result.push ("oh")
      }
      else {
          return result.push(num)
      }
    };
    return result;
};   
   integer (100);
    console.log(result);