const getMenuButton = document.querySelector('.hamburger--js');

const toggle = getMenuButton.addEventListener('click', (e) => {
    const navigation = document.querySelector('.top-nav--js');

    navigation.classList.toggle('open');
});

export {toggle};