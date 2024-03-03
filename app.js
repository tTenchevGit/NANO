
document.addEventListener('DOMContentLoaded', function() {
    
    function connectToWeb3() {
       
        if (typeof window.ethereum !== 'undefined') {
            
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(function(accounts) {
                
                console.log('Connected to MetaMask:', accounts);
                alert('Connected to MetaMask: ' + accounts);
            })
            .catch(function(error) {
               
                console.error('User denied account access:', error);
                alert('User denied account access: ' + error.message);
            });
        } else {
            
            console.error('Please install MetaMask or use a Web3-enabled browser');
            alert('Please install MetaMask or use a Web3-enabled browser');
        }
    }

    
    document.querySelector('button.cta').addEventListener('click', connectToWeb3);
});
