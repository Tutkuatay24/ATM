let accountBalance = 500.00; 
let atmCash = 2000.00; 

function withdrawCash() {
  const withdrawInput = document.getElementById('withdrawAmount');
  const message = document.getElementById('message');
  const balanceDisplay = document.getElementById('balance');
  let withdrawAmount = parseFloat(withdrawInput.value);


  message.innerText = '';
  message.style.color = 'red';


  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    message.innerText = 'Invalid input. Please enter a positive amount.';
    return;
  }
  if (withdrawAmount % 10 !== 0) {
    message.innerText = 'Invalid input. Amount must be a multiple of 10.';
    return;
  }
  if (withdrawAmount > accountBalance) {
    message.innerText = 'Insufficient funds in your account.';
    return;
  }
  if (withdrawAmount > atmCash) {
    message.innerText = 'ATM does not have enough cash to dispense.';
    return;
  }

 
  accountBalance -= withdrawAmount;
  atmCash -= withdrawAmount;

  
  balanceDisplay.innerText = $${accountBalance.toFixed(2)};
  message.style.color = 'green';
  message.innerText = Transaction successful! Please take your cash: $${withdrawAmount.toFixed(2)};
  withdrawInput.value = '';
}

function resetATM() {
  const withdrawInput = document.getElementById('withdrawAmount');
  const message = document.getElementById('message');

  withdrawInput.value = '';
  message.innerText = '';
}