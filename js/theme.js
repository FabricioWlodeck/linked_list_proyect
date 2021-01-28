let theme_button = document.getElementById('theme-switcher');
let fondo = document.getElementById('fondo');
let header = document.getElementById('superior');

let lightmode_body = localStorage.getItem('lightmode_body');



const enableLightMode = () => {
    document.body.classList.add('lightmode_body');
    header.style.color = 'black'; 
    localStorage.setItem('lightmode_body', 'enabled');
};

const disableLightMode = () => {
    document.body.classList.remove('lightmode_body');
    header.style.color = 'white'; 
    localStorage.setItem('lightmode_body', null);
};

if(lightmode_body === 'enabled'){
    enableLightMode();
}

theme_button.addEventListener('click', function(){
    lightmode_body = localStorage.getItem('lightmode_body');

    if(lightmode_body !== 'enabled'){
        enableLightMode();
        console.log(lightmode_body);
    } else{
        disableLightMode();
        console.log(lightmode_body);
    }
     
})


