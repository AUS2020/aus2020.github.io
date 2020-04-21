function apretame(){
    let div = document.getElementById('div');
    let boton = document.querySelector('button');
    let titulo = document.createElement('h1');

    boton.addEventListener('click', function() {
        boton.className = 'disabled';
        let texto = document.createElement('p');
        titulo.textContent = "Quien fue el fanatico que creo este repo?";
        texto.textContent = "Si ven esto no juzguen mi espaniglish";
        
        div.appendChild(titulo);
        div.appendChild(texto);
    })
}