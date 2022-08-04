const OpenPop = document.querySelector('.Btn')
const Pop = document.querySelector('.Pop')
const closeS = document.querySelector('.close')
const UplImg = document.querySelector('#Image-input')
const Uploadmedia = document.querySelector('.uploadmedia')
const Uplvid = document.getElementById('Vid-input')
const Uploadvideo = document.querySelector('.uploadvid')

const PopOpen = () =>{
    Pop.classList.add('PopShow')
}
const closePop = () =>{
    Pop.classList.remove('PopShow')
}

OpenPop.addEventListener("click", PopOpen)
closeS.addEventListener("click", closePop)
// Pop.addEventListener("click", closePop)

UplImg.onchange = (event)=>{
    if(event.target.files.length > 0){
    let Upload = URL.createObjectURL(event.target.files[0])
    Uploadmedia.src += Upload
}
document.querySelector('.mediaUpload').style.display = 'flex'
}

Uplvid.onchange = (event)=>{
    if(event.target.files.length > 0){
    let Upload = URL.createObjectURL(event.target.files[0])
    Uploadvideo.src += Upload
}
document.querySelector('.mediaUpload2').style.display = 'flex'

}