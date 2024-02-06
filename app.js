const countValue=document.querySelector('#counter');



minusclick.addEventListener('click',function(){
        let value=parseInt(countValue.innerText);
        value=value-1;
        countValue.innerText=value;
});


plusclick.addEventListener('click',function(){
        let value=parseInt(countValue.innerText);
        value=value+1;
        countValue.innerText=value;
});

// const increment=()=>{
//         let value=parseInt(countValue.innerText);
//         value=value+1;
//         countValue.innerText=value;
// };


// const decrement= ()=>{
//         let val=parseInt(countValue.innerText);
//         val=val-1;
//         countValue.innerText=val;
// };


