function getInputValuByid(InputId){
     const inputFieldString = document.getElementById(InputId).value;
     const inputField = parseFloat(inputFieldString);
     if(isNaN(inputField)){
          alert("টাকার পরিমান সঠিক নয় অনুগ্রহপূর্বক সঠিক টাকার পরিমাণ দিন");
          return 0 ; 
     }
     return(inputField);
}

function getInputInnerTextByid (statusHtml){
     const stutasString = document.getElementById(statusHtml).innerText;
     const status = parseFloat(stutasString);
     return (status);
}
