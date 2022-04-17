let wallet = document.querySelector('#wallet').textContent.trim();
let QrBanner = document.getElementById('second-modal');

function Copy() {
    navigator.clipboard.writeText(wallet);
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `copied`;
    modal.style.animation = 'fadein 1s ease-in-out';
    QrBanner.append(modal);

    setTimeout(() => {
        modal.style.display = 'none';
    }, 1100);
}