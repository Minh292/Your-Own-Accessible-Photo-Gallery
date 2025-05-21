function initGallery() {
    console.log("Page loaded: initializing gallery...");
  
    const figures = document.querySelectorAll("#gallery figure");
  
    for (let i = 0; i < figures.length; i++) {
      figures[i].setAttribute("tabindex", "0");
  
      figures[i].addEventListener("mouseover", () => {
        console.log(`Mouse over on image ${i + 1}`);
        figures[i].style.borderColor = "blue";
      });
  
      figures[i].addEventListener("mouseleave", () => {
        console.log(`Mouse left from image ${i + 1}`);
        figures[i].style.borderColor = "#ccc";
      });
  
      figures[i].addEventListener("focus", () => {
        console.log(`Focus on image ${i + 1}`);
        figures[i].style.borderColor = "green";
      });
  
      figures[i].addEventListener("blur", () => {
        console.log(`Blur from image ${i + 1}`);
        figures[i].style.borderColor = "#ccc";
      });
    }
  }
  