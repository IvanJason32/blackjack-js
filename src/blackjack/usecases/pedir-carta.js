/**
 * Esta función me perimete sacar una carta del deck
 * @param {Array<String>} deck es un arreglo de strings
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};