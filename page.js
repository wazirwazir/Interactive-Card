let button = document.querySelector('button')
const nameadd = document.querySelector('#nameadd')
const nameinput = document.querySelector('#nameinput')
const yearp = document.querySelector('#yearp')
const monthp = document.querySelector('#monthp')
const yeari = document.querySelector('#yeari')
const monthi = document.querySelector('#monthi')
const cnumberi = document.querySelector('#cnumberi')
const cnumberp = document.querySelector('#cnumberp')
const cnerror = document.querySelector('#cnerror')
const ymerror = document.querySelector('#ymerror')
const cvcerror = document.querySelector('#cvcerror')
const allinput = document.querySelectorAll('input')
const cvcp = document.querySelector('#cvcp')
const cvci = document.querySelector('#cvci')
const setwrap = document.querySelector('#setwrap')
const successful = document.querySelector('#successful')

function call() {
    nameadd.innerHTML = nameinput.value;
    
    if (cnumberi.value.length < 1) {
        cnumberi.classList.add('inputerr');
        cnerror.classList.remove('one')
    } else {
        cnumberp.innerHTML = cnumberi.value;
        cnumberi.classList.remove('inputerr');
        cnerror.classList.add('one')
    }
    if (yeari.value.length > 2 || yeari.value.length < 1) {
        yeari.classList.add('inputerr')
        yeari.classList.remove('one')
    } else {
        yearp.innerHTML = yeari.value;
        yeari.classList.remove('inputerr');
        ymerror.classList.add('one')
        
    }
    if (monthi.value.length < 1 || monthi.value > 12 || monthi.value < 0) {
        ymerror.classList.remove('one')
       
        monthi.classList.add('inputerr')
        
    } else {
        monthp.innerHTML = monthi.value;
        monthi.classList.remove('inputerr')
    }
    if (monthi.value.length === 1) {
        monthp.innerHTML = "0" + monthi.value
    }
    if (yeari.value.length === 1) {
        yearp.innerHTML = "0" + yeari.value
    }
    if (yeari.value < 1) {
        yeari.classList.add('inputerr')
    }
    if (isNaN(cvci.value) || cvci.value.length !== 3) {
        cvci.classList.add('inputerr')
        cvcerror.classList.remove('one')
    } else {
        cvci.classList.remove('inputerr')
        cvcerror.classList.add('one')
        cvcp.innerHTML = cvci.value
    }
   
}

function correct() {
    
    if (cnumberi.value.length < 1 && yeari.value.length > 2 || yeari.value.length < 1 && 
        monthi.value.length < 1 || monthi.value > 12 || monthi.value < 0 && monthi.value.length === 1
        && yeari.value.length === 1 && yeari.value < 1 && isNaN(cvci.value) || cvci.value.length !== 3 ) {
        
            call()
    }
    else {
        successful.classList.remove('hide');
        setwrap.replaceWith(successful)
        call()
    }
}
button.addEventListener('click', correct)


