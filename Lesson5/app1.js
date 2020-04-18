'use strict'
let modal = document.getElementById("modal"); 
let modalOpen = document.getElementById("modalOpen"); 
let modalClose = document.getElementById("modalClose"); 
modalClose.style.display = "none";
modalOpen.onclick = function () {
    modal.style.display = "none";
    modalOpen.style.display = "none";
    modalClose.style.display = "block";
}
modalClose.onclick = function () {
    modal.style.display = "block";
    modalOpen.style.display = "block";
    modalClose.style.display = "none";
}

let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    let cardNode = clickedButtonEvent.target.parentNode;

    let card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    let textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

function showMoreText(card) {
    card.img.style.display = 'none';
    let text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function drawChess(){
    let mainBlock = document.querySelector(".main_block");
    let block;
    let flag = true;

    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            block = document.createElement("div");
            if (j==0){
                flag = !flag
            }

            if (flag) {
            block.className = "block black";
            } else {
                block.className = "block white";
            }

            mainBlock.appendChild(block)
            flag = !flag;

        }
    }
}

drawChess();