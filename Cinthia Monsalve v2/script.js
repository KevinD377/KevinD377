document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector(".text");
    const texto = "Te lleva al corazón de Uruguay\nExperiencias únicas y auténticas";
    const fraseDestacada = "Te lleva al corazón de Uruguay";

    function efectoTextTyping(elemento, texto, i = 0) {
        if (i < texto.length) {
            let spanClass = "";
            let nextChar = texto[i];
            
            // Check if the current index is within the highlighted phrase
            if (i < fraseDestacada.length) {
                spanClass = "text__color";
            }
            
            // Handle newline characters
            if (nextChar === '\n') {
                elemento.innerHTML += '<br>';
            } else if (spanClass) {
                elemento.innerHTML += `<span class="${spanClass}">${nextChar}</span>`;
            } else {
                elemento.innerHTML += nextChar;
            }
            
            setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 50);
        }
    }

    efectoTextTyping(div, texto);
});
