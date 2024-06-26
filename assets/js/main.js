/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

function konfirmasi() {
   
    var hasil = confirm("Apakah Anda yakin untuk melanjutkan?");
    if (hasil) {
        alert("Anda memilih OK!");
        return true;
    } else {
        alert("Anda memilih Cancel!");
        return false;
    }
}