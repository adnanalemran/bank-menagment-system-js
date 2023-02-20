document.getElementById('btn-withdraw').addEventListener('click', function () {
     const newWithdrawAmountString = document.getElementById('withdraw-fileld').value;
     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
     const WithdrawTotalElement = document.getElementById('withdraw-statas');
     previousWithdrawTotalString = WithdrawTotalElement.innerText;
     previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     document.getElementById('withdraw-fileld').value = ' ';
     if(isNaN(newWithdrawAmount)){
          alert('Please Provide a valid number');
          return;
     }
     const previousBalance = document.getElementById('balance-statas');
     const previousBalanceString = previousBalance.innerText;
     const previousBalanceAmount = parseFloat(previousBalanceString);
     const currentBalanceTotal = previousBalanceAmount - newWithdrawAmount;

     if (newWithdrawAmount > previousBalanceAmount) {
          alert("balance not active for taka ", newWithdrawAmount, "taka ")
          return 0;
     }
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     WithdrawTotalElement.innerText = currentWithdrawTotal;

     previousBalance.innerText = currentBalanceTotal;

})