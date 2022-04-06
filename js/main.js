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
        imagen.src = "assets/img/img-riggin.png";
      break;
      case "Automatización":
        icoo.src = "assets/img/automatizacion-tiny.png";
        imagen.src = "assets/img/img-automatizacion.png";
      break;
      case "Industrial 4.0":
        icoo.src = "assets/img/industrial-tiny.png";
        imagen.src = "assets/img/img-industria.png";
      break;
      case "Maquinados":
        icoo.src = "assets/img/maquinados-tiny.png";
        imagen.src = "assets/img/img-maquinados.png";
        imagen.classList.add("r");
      break;
      case "Seguridad Industrial":
        icoo.src = "assets/img/seguridad-tiny.png";
        imagen.src = "assets/img/img-seguridad.png";
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
  imagen.classList.remove("r");
}));

//fin 
// let sidebar = document.querySelector(".sidebar");
// let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");

// closeBtn.addEventListener("click", ()=>{
//   sidebar.classList.toggle("open");
//   menuBtnChange();//calling the function(optional)
// });

// searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("open");
//   menuBtnChange(); //calling the function(optional)
// });

// // following are the code to change sidebar button(optional)
// function menuBtnChange() {
//  if(sidebar.classList.contains("open")){
//    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//  }else {
//    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//  }
// }

//POLITICA DE PRIVACIDAD
