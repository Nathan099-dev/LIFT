//Abrir menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelector('nav ul');
const icon = document.querySelector('i');
const close = document.querySelector('.close');


icon.addEventListener('click', () => {
   toggle.classList.add('show');
})


close.addEventListener('click', () => {
    toggle.classList.remove('show');
})


//Abrir e fechar o modal

let modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')

    },

    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}




// validação de formulário
const button = document.querySelector('button');

button.addEventListener('click', (e) =>{
    e.preventDefault();

   const nome = document.getElementById('nome');

   if (nome.value == "") {
       window.alert('Preencha este campo');
      nome.classList.add('erro')
   }

  const email = document.getElementById('mail');

  if (email.value == "") {
      window.alert("Este campo não pode estar vazio");
      email.classList.add('erro')
  }

  const tel = document.getElementById('telefone');
  if (tel.value == '') {
      window.alert("Este campo não pode estar vazio");
      tel.classList.add('erro')

  }

})

//botão vom função de voltar ao topo
const up = document.getElementById('arrow');
up.onclick = function sobe(){
    scrollTo(0, 0);
    behavior: 'smooth';
},

sobe();
    

