const openPopUp = document.getElementById('ModalWindow');
const closePopUp = document.getElementById('modal_close');
const popUpOp = document.getElementById('popUpOp');

const openSecondPopUp = document.getElementById('SecondModalWindow');

function openModalWindow() {
    openPopUp.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeModalWindow() {
    openPopUp.classList.remove('active');

    document.body.style.overflow = '';
}



function openSecondModalWindow() {
    openSecondPopUp.classList.add('second-active');
 
    document.body.style.overflow = 'hidden';
}

function closeSecondModalWindow() {
    openSecondPopUp.classList.remove('second-active');

    document.body.style.overflow = '';
}


const burger = document.getElementById('burger');
const burgerOpen = document.getElementById('burger_open');
const burgerItem = document.getElementById('#burger_item');

function burgerCross() {
    burger.addEventListener('click', function() {
        burger.classList.add('cross');

        burgerOpen.classList.add('active');

        document.body.style.overflow = 'hidden';
    })

    if (burger.classList.contains('cross')) {
        burger.addEventListener('click', function() {
            burger.classList.remove('cross')

            burgerOpen.classList.remove('active');

            document.body.style.overflow = '';
        })
    }
}

function burgerLinks() {
    burgerItem.addEventListener('click', function() {
        burger.classList.remove('cross')
    
        burgerOpen.classList.remove('active');
    
        document.body.style.overflow = '';
    })
}

