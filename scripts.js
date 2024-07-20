document.getElementById('blur-container').addEventListener('click', function() {
    var contractAddress = document.getElementById('contract-address');
    var overlay = document.getElementById('overlay');
    contractAddress.textContent = '0x0c907cec5d25ac515ffbbbe47894fe4dd2e928b2';
    contractAddress.style.filter = 'none';
    overlay.style.display = 'none';
});
