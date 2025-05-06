if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    const btn = document.querySelector(".mdescuro");
    trocarCor(btn);
  }

  function teste(pj) {
    if (window.innerWidth > 448) {
      const projeto1 = document.getElementById(pj.id);
      projeto1.style.width = "54.65vw";
      projeto1.style.left = "0";
    }
  }

  function trocarCor(img) {
    let original = "";
    let nova = "";

    if (img.src.split("/").pop() == "escuro.png") {
      original = "rgb(245, 245, 245)";
      nova = "#3A3A3A ";
    } else {
      original = "rgb(58, 58, 58)";
      nova = "rgb(245, 245, 245) ";
    }

    // Seleciona todos os elementos do documento
    const elementos = document.querySelectorAll("*");

    elementos.forEach((el) => {
      const estilo = window.getComputedStyle(el);
      // Verifica se a cor de fundo bate com a original
      if (estilo.backgroundColor === original) {
        el.style.backgroundColor = nova;
      }
      // Verifica se a cor do texto bate com a original
      if (estilo.color === original) {
        el.style.color = nova;
      }

      const molduras = document.querySelectorAll(".moldura");
      molduras.forEach((el) => {
        el.style.border = `solid  1vh ${nova}`;
      });
    });

    img.style.transform = "translateX(-5vw)";
    setTimeout(() => {
      if (img.src.split("/").pop() == "escuro.png") {
        img.src = "./Assets/sun.png";
        img.style.transform = "";
      } else {
        img.src = "./Assets/escuro.png";
        img.style.transform = "";
      }
    }, 500);
  }