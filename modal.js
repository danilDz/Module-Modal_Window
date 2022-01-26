function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflowY = 'hidden';


    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflowY = '';
}

function modal(btnsSelector, modalSelector, modalTimerId){

    // Modal

    const btns = document.querySelectorAll(btnsSelector),
          modal = document.querySelector(modalSelector),
          body = document.querySelector('body');

    btns.forEach((item) => {
        item.addEventListener('click', () => {
            showModal(modalSelector, modalTimerId);
            // modal.classList.toggle('show');
        });
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape' && modal.style.display == 'block'){
            closeModal(modalSelector);
            console.log(12);
        }
        // console.log(e.key);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == ""){
            closeModal(modalSelector);
        }
    });


    //Modal (setTimeout && scrollTop)

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal, showModal};