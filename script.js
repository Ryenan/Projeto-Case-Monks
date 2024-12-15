function animar(){
    const buttaoanimar = document.getElementById('btnMenu');
    buttaoanimar.classList.toggle('ativaranimacao');
    console.log('funcionando')
}

function menuShow(){
    let menumobile = document.querySelector('.menuMobile')
    let navMobile = document.querySelector('.menu')

    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
    } else {
        menumobile.classList.add('open');
    }

    if (navMobile.classList.contains('radiusBottom')){
        navMobile.classList.remove('radiusBottom');
    } else {
        navMobile.classList.add('radiusBottom');
    }
}

