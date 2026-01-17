let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let contentBorder = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        logo.src = 'images/byui-logo-dark.png';
        contentBorder.style.border = '1px solid white';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'images/byui-logo.webp';
        contentBorder.style.border = '1px solid black';
    }
}           
