document.getElementById('blur-container').addEventListener('click', function() {
    var contractAddress = document.getElementById('contract-address');
    var overlay = document.getElementById('overlay');
    contractAddress.textContent = 'VgoEQVWGNEDfZ2EV4AhkPtiTYpgxERHWKHTXNZkpump';
    contractAddress.style.filter = 'none';
    overlay.style.display = 'none';
});
