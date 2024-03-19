document.querySelector(".mail-adress-icon").addEventListener( 'click', ()=>{
  navigator.clipboard.writeText("saskia.zailskas@outlook.de")
  showCopyMessage()
})

function showCopyMessage() {
  var sb = document.getElementById("copy-message");
  sb.classList.add("show");
  setTimeout(()=>{ sb.classList.remove("show"); }, 1000);
}
