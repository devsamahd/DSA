//BigO notations and examples
// O(n) Proportional
((n)=> {
    for(let i=0; i<n; i++){
        console.log(i)
    }
    for(let j=0; j<n; j++){
        console.log(j)
    }
})(n)

// O(n^2) Loop within a Loop
((n)=>{
    for(let i=0; i<x; i++){
        for(let j=0; j<x; j++){
            console.log(i, j)
        }
    }
})(n)
   
//Different Terms of input
// O(a+b)
((a, b)=>{
    for(let i=0; i<a;i++){
        console.log(i)
    }
    for(let j=0; j<b; j++){
        console.log(j)
    }
})(a,b)  
// O(a*b)
((a, b=>{
    for(let i=0;i<a;i++){
        for(let j=0; j<b; j++){
            console.log(a,b)
        }
    }
}))(a,b)

  
// O(1) :Number of operations will always be one, most
// efficient BigO same as constant Time
((n)=>{
    return n+n
})(n)

//last BigO O(log n) Divide and conquer
//BigO of Arrays
//.pop(), .push(), .indexOf( ) are O(1)
//.shift(), .unshift(), .splice() are O(n) 

//resources: BigOcheatsheet.com 