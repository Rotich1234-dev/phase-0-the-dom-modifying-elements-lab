//  To remove the <main> with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

//  Create a new <h1> with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

//  the newHeader variable should point to node 'h1#victory'
const newHeaderElement = document.querySelector('h1#victory');

// YOUR-NAME is the champion
newHeader.innerHTML = "YOUR-NAME is the champion";


