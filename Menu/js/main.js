//Animaciones AOS
AOS.init({
    duration: 1000
});
//Fin animaciones

//Imagenes de los servicios

document.querySelectorAll(".mega_link").forEach(s => s.addEventListener("mouseover", (e) => {
    let icoo = document.querySelector("#icono");
    let imagen = document.querySelector("#imagen");

    switch (e.target.innerText){
      case "Riggin":
        icoo.src = "assets/img/Riggin.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Automatización":
        icoo.src = "assets/img/automatizacion.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Industrial 4.0":
        icoo.src = "assets/img/industrial.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Maquinados":
        icoo.src = "assets/img/maquinados.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Seguridad Industrial":
        icoo.src = "assets/img/seguridad.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Manteniminto General":
        icoo.src = "assets/img/mantenimiento.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Mantenimiento Industrial":
        icoo.src = "assets/img/mantenimientoInd.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
    }
    icoo.classList.remove("d-none");
    icoo.classList.add("animate__zoomIn");
    imagen.classList.remove("d-none");
    imagen.classList.add("animate__zoomIn");
}));

document.querySelectorAll(".mega_link").forEach(s => s.addEventListener("mouseout", (e) => {
  let icoo = document.querySelector("#icono");
  let imagen = document.querySelector("#imagen");

  icoo.src = "";
  imagen.src = "";
  icoo.classList.add("d-none");
  imagen.classList.add("d-none");
}));

//fin 

/*
  <script>
    function color(){
      let div = document.querySelector(".imagen1");
      let div2 = document.querySelector(".imagen2");
      div.classList.add("color");
      div.classList.add("animate__zoomIn");
      div2.classList.add("color2");
      div2.classList.add("animate__zoomIn");
    }
    document.querySelectorAll("#hover").forEach((a, index) => a.addEventListener('mouseover', (e) => {
      let icoo = document.querySelector("#icono");
      let imagen = document.querySelector("#imagen");


      switch (e.target.innerText){
        case "Mision":
          icoo.src = "/assets/img/mision.png";
          imagen.src = "https://www.emprendedorinteligente.com/wp-content/uploads/2021/06/Que-es-la-mision-de-una-empresa.jpg";
          break;
        case "Vision":
        icoo.src = "/assets/img/vision.png";
        imagen.src = "https://static.wixstatic.com/media/53d607_467afa7b3af046b8884f9e69a0ae9064~mv2.png/v1/fit/w_626%2Ch_547%2Cal_c/file.png";
          break; 
      }
      color();
    }));
    function limpiar(){
      let div = document.querySelector(".imagen1");
      let div2 = document.querySelector(".imagen2");
      div.classList.remove("color");
      div2.classList.remove("color2");
    }
    document.querySelectorAll("#hover").forEach(a => a.addEventListener('mouseout', (e) => {
      limpiar();
    }));
  </script>
*/