class Projeto {
    constructor(nome, href, id) {
      const liElemento = document.createElement("li");
      const linkElemento = document.createElement("a");
      liElemento.id = id;
      linkElemento.href = href;
      linkElemento.target = "_blank";
      linkElemento.innerText = nome;
      liElemento.appendChild(linkElemento);
      return liElemento;
    }
  }
  
  class Imagem {
    constructor(img, id) {
      const imgElemento = document.createElement("img");
      imgElemento.src = img;
      imgElemento.id = id;
      return imgElemento;
    }
  }
  
  /* Adicionar los proyectos en la lista */
  const elementoLista = document.querySelector("#lista");
  const projetos = [
    
    new Projeto(
      "Futbol",
      "link-de-pagina",
      "aluraflix"
    ),
    new Projeto(
      "Programacion",
      "link-de-pagina",
      "mentalista"
    ),
    new Projeto(
      "Ver peliculas",
      "link-de-pagina",
      "Ver peliculas"
    ),
    new Projeto(
      "Ir de paseo",
      "link-de-pagina",
      "Ir de paseo"
    ),
    // Agrega los demás proyectos aquí...
  ];
  elementoLista.append(...projetos);
  
  /* Adicionar las imágenes en la div */
  const divImgElemento = document.querySelector("#imagens");
  const imagens = [
    new Imagem(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCUPByGB0mDMotsNJGdDe4vklkL7Vn8iZHQ&usqp=CAU",
      "aluraflix"
    ),
    new Imagem(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI3fI_9KkZ97ev93-1bjoDunCrqYqB36rHT-s8LA5n3Ia5p9tBnxEyW8KPNvScwSu7b4&usqp=CAU",
      "mentalista"
    ),
    new Imagem(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wgfXG_HIGddy_ORcmZcv9k2aISN260Ntxw&usqp=CAU",
      "Ver peliculas"
    ),
    new Imagem(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPC56iXm4Kj5u_jS0I-AzRzhnH9LwFDVL-lep5Gz_xC442Ii0oMPYGAjbW0wTup4mD7U&usqp=CAU",
      "Ir de paseo"
    ),
    // Agrega las demás imágenes aquí...
  ];
  
  /* Mostrar u Ocultar las Imágenes */
  projetos.map((projeto) => {
    projeto.setAttribute("onmouseenter", "mostrarImagem(event)");
    projeto.setAttribute("onmouseleave", "ocultarImagem(event)");
  });
  
  function mostrarImagem(event) {
    var idProjeto = event.target.id;
    imagens.map((imagen) => {
      if (imagen.id === idProjeto) {
        setTimeout(() => {
          divImgElemento.appendChild(imagen);
          setTimeout(() => (imagen.style.opacity = 1), 10);
        }, 200);
      }
    });
  }
  
  function ocultarImagem(event) {
    var idProjeto = event.target.id;
    imagens.map((imagen) => {
      if (imagen.id === idProjeto) {
        imagen.style.opacity = 0;
        setTimeout(() => divImgElemento.removeChild(imagen), 200);
      }
    });
  }
  
  /* Alterar Tema */
  function alterarTema() {
    document.body.classList.toggle("dark");
  }
  
  