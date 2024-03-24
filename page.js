const button = document.querySelector('button')
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
const namerror = document.querySelector('#namerror')


function year() {
    if (yeari.value.length > 2 || yeari.value.length < 1) {
        yeari.classList.add('inputerr')
        yeari.classList.remove('one')
    } else {
        yearp.innerHTML = yeari.value;
        yeari.classList.remove('inputerr');
        ymerror.classList.add('one')   
    }
    if (yeari.value.length === 1) {
        yearp.innerHTML = "0" + yeari.value
    }
    else if (yeari.value < 1) {
        yeari.classList.add('inputerr')
    }
}

yeari.addEventListener('input', year)

function month() {
    
    if (monthi.value.length < 1 || monthi.value > 12 || monthi.value < 0) {
        ymerror.classList.remove('one')
        monthi.classList.add('inputerr')
    } else {
        monthp.innerHTML = monthi.value;
        monthi.classList.remove('inputerr')
        ymerror.classList.add('one')
    }
    if (monthi.value.length === 1) {
        monthp.innerHTML = "0" + monthi.value
    }
    
}
monthi.addEventListener('input', month)

function  CVC() {

    if (isNaN(cvci.value) || cvci.value.length !== 3) {
        cvci.classList.add('inputerr')
        cvcerror.classList.remove('one')
        cvcp.innerHTML = cvci.value
    } else {
        cvci.classList.remove('inputerr')
        cvcerror.classList.add('one')
        cvcp.innerHTML = cvci.value
    }
}
cvci.addEventListener('input', CVC)



function cardNum() {
   
     if (cnumberi.value.length < 1 || cnumberi.value.length > 19) {
        cnumberi.classList.add('inputerr');
        cnerror.classList.remove('one')
    } else {
        cnumberp.innerHTML = cnumberi.value;
        cnumberi.classList.remove('inputerr');
        cnerror.classList.add('one')
    }
    //To be corrected later
    /*
    if (cnumberi.value[16]) {
        cnumberp.innerHTML =  
        cnumberi.value[1] +  cnumberi.value[2] +
        cnumberi.value[3] + cnumberi.value[4] + ' ' +
        cnumberi.value[5] + cnumberi.value[6] +
        cnumberi.value[7] + cnumberi.value[8] + ' ' +
        cnumberi.value[9] + cnumberi.value[10] +
        cnumberi.value[11] + cnumberi.value[12] + ' ' +
        cnumberi.value[13] + cnumberi.value[14] +
        cnumberi.value[15] + cnumberi.value[16]
    }
    if (cnumberi.value > 4) {
        let par = document.createElement(p)
        cnumberp.appendChild(par)
    }*/
}
cnumberi.addEventListener('input', cardNum)



function named() {
    let space = ' '
    let nameinput2 = nameinput.value
    nameadd.innerHTML = nameinput.value;
    if (nameinput2.includes(space)) {
        
        nameinput.classList.remove('inputerr') 
        namerror.classList.add('one')
    } else {
        nameinput.classList.add('inputerr')  
        namerror.classList.remove('one') 
    }
}
nameinput.addEventListener('input', named)
function putspace() {
    let met = cnumberp.split
}
function submitted() {
    successful.classList.remove('hide');
    setwrap.replaceWith(successful)
}
button.onclick = submitted


 
