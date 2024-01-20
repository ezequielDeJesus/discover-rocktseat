function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  /*if (html.classList.contains("light")){
    html.classList.remove("light")
  } else{
    html.classList.add('light')
  }*/

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //se tiver a light mode, adicionar a imagem light, senão deixar a imagem normal
  if (html.classList.contains("light")) {
    //substituir a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //substituir a imagem
    img.setAttribute("src", "./assets/avatar.png")
  }

  
}
