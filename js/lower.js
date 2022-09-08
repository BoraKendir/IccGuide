function picturecontainertoggle(difficulty){
    if(difficulty === "NM"){
        const picturecontainer = document.getElementById('LordResimlerNM');
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
    } else if(difficulty === 'HC'){
        const picturecontainer = document.getElementById('LordResimlerHC');
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
}