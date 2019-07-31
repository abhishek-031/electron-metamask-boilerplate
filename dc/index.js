if (typeof window.web3 != 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider);
} else {
    // Other provider
    window.web3 = new Web3(new Web3.providers.HttpProvider('yourOtherProvider'));
}

function isElectron() {
    if(chrome.ipcRenderer) return true;
    return false;
}


function sendToElectron(message) {
    chrome.ipcRenderer.send(message);
}

function openMetamaskPopup() {
    sendToElectron('open-metamask-popup');
}

function closeMetamaskPopup() {
    sendToElectron('close-metamask-popup');
}

function openMetamaskNotification() {
    sendToElectron('open-metamask-notification');
}

function closeMetamaskNotification() {
    sendToElectron('close-metamask-notification');
}

