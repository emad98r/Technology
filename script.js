let listBut=document.querySelectorAll('#listBut'),
hidenList=document.querySelectorAll('#hidenList');



  listBut[0].addEventListener('click',()=>{
    hidenList[0].classList.toggle('active');
    hidenList[1].classList.remove('active');
    hidenList[2].classList.remove('active');
    hidenList[3].classList.remove('active');
  })


listBut[1].addEventListener('click',()=>{
  hidenList[0].classList.remove('active');
  hidenList[1].classList.toggle('active');
  hidenList[2].classList.remove('active');
  hidenList[3].classList.remove('active');
})

listBut[2].addEventListener('click',()=>{
  hidenList[0].classList.remove('active');
  hidenList[1].classList.remove('active');
  hidenList[2].classList.toggle('active');
  hidenList[3].classList.remove('active');
})

listBut[3].addEventListener('click',()=>{
  hidenList[0].classList.remove('active');
  hidenList[1].classList.remove('active');
  hidenList[2].classList.remove('active');
  hidenList[3].classList.toggle('active');
})

