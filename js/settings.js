let abrir_settings  = document.getElementById('settings-menu');
let cerrar_settings  = document.getElementById('close-settings');
let sidebar = document.getElementById('settings');

abrir_settings.addEventListener('click',function(){
    sidebar.style.left ="0px";
})

cerrar_settings.addEventListener('click',function(){
    sidebar.style.left ="-250px";
})
