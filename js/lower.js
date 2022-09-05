function picturecontainertoggle(){
    const picturecontainer = document.getElementById('LordResimler');
    if(picturecontainer.style.display == 'none'){
        picturecontainer.style.display = "flex";
        picturecontainer.style.flexDirection = "row";
        picturecontainer.style.flexWrap = "wrap";
        picturecontainer.style.alignContent = "center";
        picturecontainer.style.justifyContent = "center";
        picturecontainer.style.alignItems = "center"; 
    } 
    else if(picturecontainer.style.display === "flex"){
        picturecontainer.style.display = "none";
    }
}