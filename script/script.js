console.log("hello world");
  
function createCheckboxWithLocalStorage(imgElementId, checkboxElementId, localStorageKey) {
    const checkbox = document.getElementById(checkboxElementId);
    const img = document.getElementById(imgElementId);
    // const list = document.getElementById('list');
    const list = document.querySelector('main.home > ul, main.collection > ul, main.carousel > ul');

  // Functie om de opgeslagen waarde op te halen en in een HTML lijstitem te genereren
  function generateImageFromLocalStorage() {
    const imgSrc = localStorage.getItem(localStorageKey);
    if (imgSrc) {
    console.log(imgSrc)
    list.insertAdjacentHTML("beforeend", `<li><label for="${checkboxElementId}"><a href="detail.html"><img src="${imgSrc}" id="${imgElementId}"></a></label></li>`)
    // <input type="checkbox" id="${checkboxElementId}">
    //     <label for="${checkboxElementId}"><a href="detail.html"><img src="${imgSrc}" id="${imgElementId}"></a></label>
    checkbox.checked = true;
    } else {
    list.insertAdjacentHTML("beforeend", ``)
    checkbox.checked = false;
    }
  };

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        localStorage.setItem(localStorageKey, img.src);
        // location.reload()
        generateImageFromLocalStorage();
      } else {
        localStorage.removeItem(localStorageKey);
        location.reload()
      }
    })

    generateImageFromLocalStorage();
  }
  
  createCheckboxWithLocalStorage('image1img', 'image1', 'imageSrc1');
  createCheckboxWithLocalStorage('image2img', 'image2', 'imageSrc2');
  createCheckboxWithLocalStorage('image3img', 'image3', 'imageSrc3');
  createCheckboxWithLocalStorage('image4img', 'image4', 'imageSrc4');
  createCheckboxWithLocalStorage('image5img', 'image5', 'imageSrc5');
  createCheckboxWithLocalStorage('image6img', 'image6', 'imageSrc6');
  createCheckboxWithLocalStorage('image7img', 'image7', 'imageSrc7');
  createCheckboxWithLocalStorage('image8img', 'image8', 'imageSrc8');
  createCheckboxWithLocalStorage('image9img', 'image9', 'imageSrc9');
  createCheckboxWithLocalStorage('image10img', 'image10', 'imageSrc10');
  
  
  