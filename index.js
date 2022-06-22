const confirmResult = document.querySelector('#confirmBtn');
const avatarBtn = document.getElementById('add_new_avatar');
avatarBtn.addEventListener('click', function onOpen() {
    dialog.showModal();
});

const avatarFormElement = document.querySelector("#get_avatar_image_form");


function formSubmitted(event){
    const fileInput = avatarFormElement.querySelector("input[name=userimage]");
    const files = fileInput.files;
    if(files.length == 0 ) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImageToTheDOM(imageUrl);

}
avatarFormElement.addEventListener('submit', formSubmitted);
function addImageToTheDOM(imageURL){
    const button = document.createElement("button");
    button.classList.add("avatar-img-btn");
    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");
    closeIcon.name = "close-outline";
    
    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(button, addAvatarButton);

}
const removeBtn = document.getElementById('add');
removeBtn.addEventListener('click', function onOpen() {
    MiniDialog.showModal();
});



