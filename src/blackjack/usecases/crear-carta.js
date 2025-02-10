/**
 * Esta función crea la img de la carta que sera mostrada en pantalla.
 * @param {String} carta Texto que identifica la carta
 * @returns {HTMLImageElement} Elemento HTML de retorno
 */
export const crearCarta = (carta) => {
  if (!carta) throw new Error("La carta es un elemento obligatorio");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
