document.addEventListener('DOMContentLoaded', function() {
    // Simulated crypto data
    const cryptoData = [
      { name: 'Bitcoin', price: '$40,000' },
      { name: 'Ethereum', price: '$2,500' },
      { name: 'Litecoin', price: '$180' },
      { name: 'Ripple', price: '$1.50' },
      { name: 'Cardano', price: '$1.20' }
    ];
  
    // Display crypto data
    const cryptoDataContainer = document.getElementById('crypto-data');
    cryptoData.forEach(crypto => {
      const cryptoDiv = document.createElement('div');
      cryptoDiv.innerHTML = `<strong>${crypto.name}</strong>: ${crypto.price}`;
      cryptoDataContainer.appendChild(cryptoDiv);
    });
  
    // Investment form submission
    const investForm = document.getElementById('invest-form');
    investForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const amount = parseFloat(document.getElementById('amount').value);
      if (!isNaN(amount) && amount > 0) {
        alert(`You have successfully invested $${amount.toFixed(2)} in crypto!`);
        // Additional logic for handling investment
      } else {
        alert('Please enter a valid amount to invest.');
      }
    });
  });
  