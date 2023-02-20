document.getElementById('btn-deposit').addEventListener('click', function () {
     const newDepositAmountString = document.getElementById('deposit-fileld').value;
     const newDepositAmount = parseFloat(newDepositAmountString);
     const depositTotalElement = document.getElementById('deposit-statas');
     document.getElementById('deposit-fileld').value = '';
     if(isNaN(newDepositAmount)){
          alert('Please Provite a valid number')
          return  0;
     }

     previousDepositTotalString = depositTotalElement.innerText;
     previousDepositTotal = parseFloat(previousDepositTotalString);
     const currentDepositTotal = previousDepositTotal + newDepositAmount;
     depositTotalElement.innerText = currentDepositTotal;
     document.getElementById('deposit-fileld').value = ' ';

     const previousBalance = document.getElementById('balance-statas');
     const previousBalanceString = previousBalance.innerText;
     const previousBalanceAmount = parseFloat(previousBalanceString);
     const currentBalanceTotal =previousBalanceAmount+newDepositAmount;
     previousBalance.innerText=currentBalanceTotal;

})