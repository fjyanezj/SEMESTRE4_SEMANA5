// Selección de elementos del DOM
const imageUrlInput = document.getElementById('imageUrl');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Función para agregar imagen
function addImage() {
    const url = imageUrlInput.value;

    if (url === "") {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    // Crear el elemento img
    const newImg = document.createElement('img');
    newImg.src = url;
    newImg.classList.add('gallery-item');

    // Evento para seleccionar imagen
    newImg.addEventListener('click', () => {
        // Quitar selección previa
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
        
        // Asignar nueva selección
        selectedImage = newImg;
        newImg.classList.add('selected');
    });

    // Agregar al DOM
    gallery.appendChild(newImg);

    // Limpiar input
    imageUrlInput.value = "";
}

// Función para eliminar imagen seleccionada
function deleteSelectedImage() {
    if (selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    } else {
        alert("Selecciona una imagen primero haciendo clic en ella.");
    }
}

// --- Event Listeners ---

// Click en botones
addBtn.addEventListener('click', addImage);
deleteBtn.addEventListener('click', deleteSelectedImage);

// Atajos de teclado (Keydown)
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addImage();
    }
    if (event.key === "Delete" || event.key === "Backspace") {
        deleteSelectedImage();
    }
});  