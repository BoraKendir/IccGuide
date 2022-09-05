function picturecontainertoggle(){
    const picturecontainer = document.getElementById('LordResimler');
    if(picturecontainer.style.display == 'none'){
        picturecontainer.style.display = "flex"; 
    } 
    else if(picturecontainer.style.display === "flex"){
        picturecontainer.style.display = "none";
    }
}