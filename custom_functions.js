let getContainerJs = document.querySelector('.article__container--js');

if (getContainerJs) {
    getContainerJs.innerHTML = 'Dodanie treści za pomocą skryptu';
    getContainerJs.style.color = 'violet';
    getContainerJs.style.textAlign = 'center';
}

function greeting(name, age) {
    const message = `Witaj ${name}. Masz ${age} lat.`;
    console.log(message);
}

greeting('Bartek', 9999);

const getMenuButton = document.querySelector('.hamburger--js');

getMenuButton.addEventListener('click', (e) => {
    const navigation = document.querySelector('.top-nav--js');

    navigation.classList.toggle('open');
})