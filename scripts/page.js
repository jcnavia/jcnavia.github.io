window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelectror('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})