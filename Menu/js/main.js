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
        icoo.src = "assets/img/Riggin-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Automatización":
        icoo.src = "assets/img/automatizacion-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Industrial 4.0":
        icoo.src = "assets/img/industrial-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Maquinados":
        icoo.src = "assets/img/maquinados-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Seguridad Industrial":
        icoo.src = "assets/img/seguridad-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Manteniminto General":
        icoo.src = "assets/img/mantenimiento-tiny.png";
        imagen.src = "assets/img/brazos-roboticos-g1.jpg";
      break;
      case "Mantenimiento Industrial":
        icoo.src = "assets/img/mantenimientoInd-tiny.png";
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

