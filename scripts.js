document.getElementById('decrypt-button').addEventListener('click', function() {
    var contractAddress = document.getElementById('contract-address');
    if (contractAddress.style.display === 'none') {
        contractAddress.style.display = 'block';
    } else {
        contractAddress.style.display = 'none';
    }
});
