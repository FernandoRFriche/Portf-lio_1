const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

const lastOne = document.querySelector('.last-one')

console.log(lastOne)

function formatarnome() {
  const input = document.getElementById("nome")
  const texto = input.value
  
  if (texto.length > 0) {
      const palavras = texto.split(" ");
      for (let i = 0; i < palavras.length; i++) {
          palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
      }

      const textoFormatado = palavras.join(" ");
      input.value = textoFormatado;
  }
}
function formatarsobrenome() {
  const input = document.getElementById("sobrenome")
  const texto = input.value
  
  if (texto.length > 0) {
      const palavras = texto.split(" ");
      for (let i = 0; i < palavras.length; i++) {
          palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
      }

      const textoFormatado = palavras.join(" ");
      input.value = textoFormatado;
  }
}
function formatarassunto() {
  const input = document.getElementById("assunto")
  const texto = input.value
  
  if (texto.length > 0) {
      const palavras = texto.split(" ");
      for (let i = 0; i < palavras.length; i++) {
          palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
      }

      const textoFormatado = palavras.join(" ");
      input.value = textoFormatado;
  }
}
function formatarmensagem() {
  const input = document.getElementById("mensagem")
  const texto = input.value
  
  if (texto.length > 0) {
      const palavras = texto.split(" ");
      for (let i = 0; i < palavras.length; i++) {
          palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
      }

      const textoFormatado = palavras.join(" ");
      input.value = textoFormatado;
  }
}