import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * Funcion que define el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar el score de la computadora
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck deck de cartas
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  
  if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
  if(!puntosHTML) throw new Error('Argumento puntosHTML es necesarios');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana, el jugador esta bien imbecil.");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana, la computadora esta bien pendejota sjsjxdxd");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
