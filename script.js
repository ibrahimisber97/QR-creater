let imgBox =document.getElementById("imgBox");
let qrImage =document.getElementById("qrImage");
let qrText =document.getElementById("qrText");

qrText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      generateQR();
    }
  });

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }

}
