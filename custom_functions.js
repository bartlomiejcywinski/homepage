const name_nick = prompt("Podaj swoje imię:");


if(name_nick){
    alert(`Cześć ${name_nick}, witaj na mojej stronie`);
    console.log(`W tym sekretnym miejscu również Cię witam ${name_nick} :).`)
} else {
    alert('Cześć, witaj na mojej stronie');
    console.log('Cześć, witaj na mojej stronie');
}