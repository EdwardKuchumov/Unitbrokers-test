var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
// accordion
const questBlock = document.querySelectorAll('.questions__titleBlock');
questBlock.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.nextElementSibling.classList.toggle('hide-text')
        if(!item.nextElementSibling.classList.contains('hide-text')){
            item.querySelector('.plus').style.backgroundColor = '#A0A0A0'
        } else{
            item.querySelector('.plus').style.backgroundColor = '#f4f4f4'
        }
    })
})
const allLang = ['ru', 'en']
const select = document.querySelector('select')
select.addEventListener('change', changeURLLanguage)

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
    location.reload()
    
}

function changeLanguage(){
    let hash = window.location.hash
    hash = hash.substr(1)
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload()
    }
    select.value = hash
    // document.querySelector('.tit').innerHTML = langArr['tit'][hash];
    for (let key in langArr){
        let elem = document.querySelector('.tit-' + key)
        
        if(elem){
            elem.innerHTML = langArr[key][hash]
        }
        
    }
}
changeLanguage()