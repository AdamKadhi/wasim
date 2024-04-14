document.getElementById("files").addEventListener("change", function(){
    if(this.files[0]){
      var picture= new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener("load",function(event){
        document.getElementById("uploadedImage").setAttribute("src",event.target.result);
        document.getElementById("uplod").style.display="block";
        document.getElementById("uploadedImage").style.display="block";
      })
    }
  })