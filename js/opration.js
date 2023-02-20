

document.getElementById('btn-deposit').addEventListener('click', function(){

     const boxDeposit =getInputValuByid('box-deposit');
     document.getElementById('box-deposit').value='';

     const stutasBlance = getInputInnerTextByid('status-blance');
     const statusDeposit = getInputInnerTextByid('status-deposit');

     const totalDeposit =  boxDeposit + statusDeposit;
     document.getElementById('status-deposit').innerText= totalDeposit;
     document.getElementById('status-blance').innerText = stutasBlance+boxDeposit;

})

document.getElementById('btn-withdraw').addEventListener('click', function(){

     const boxWrithdraw =getInputValuByid('box-writhdraw');
     document.getElementById('box-writhdraw').value='';

     const stutasBlance = getInputInnerTextByid('status-blance');
     const statuswithdraw = getInputInnerTextByid('status-withdraw');

     if(stutasBlance<boxWrithdraw){
          alert("আপনার একাউন্টে পর্যাপ্ত ব্যালেন্স নেই");
          return 0 ;
     }
     const totalWithdraw =  boxWrithdraw + statuswithdraw;
     document.getElementById('status-withdraw').innerText= totalWithdraw;

     document.getElementById('status-blance').innerText = stutasBlance-boxWrithdraw;

})