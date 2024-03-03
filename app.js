// document.addEventListener('DOMContentLoaded', function() {

// document.querySelector('button.cta').addEventListener('click', function() {
//     // alert('Nishce I am crazy good brother!!! I took your 20K');
    
// });
// });
document.addEventListener('DOMContentLoaded', function() {
    // Define the connectToWeb3 function outside the event listener
    function connectToWeb3() {
        // Check if Web3 provider (MetaMask) is available
        if (typeof window.ethereum !== 'undefined') {
            // Request account access if needed
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(function(accounts) {
                // Web3 provider connected, you can now use 'accounts' variable to interact with the connected account
                console.log('Connected to MetaMask:', accounts);
                alert('Connected to MetaMask: ' + accounts);
            })
            .catch(function(error) {
                // User denied account access...
                console.error('User denied account access:', error);
                alert('User denied account access: ' + error.message);
            });
        } else {
            // Web3 provider (MetaMask) is not available
            console.error('Please install MetaMask or use a Web3-enabled browser');
            alert('Please install MetaMask or use a Web3-enabled browser');
        }
    }

    // Add event listener to the button with class 'cta'
    document.querySelector('button.cta').addEventListener('click', connectToWeb3);
});
