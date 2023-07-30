let getContainerJs = document.querySelector('.article__container--js');

getContainerJs.innerHTML = 'Dodanie treści za pomocą skryptu';
getContainerJs.style.color = 'violet';
getContainerJs.style.textAlign = 'center';

function greeting(name, age){
    const message = `Witaj ${name}. Masz ${age} lat.`;
    console.log(message);
}

greeting('Bartek', 9999);