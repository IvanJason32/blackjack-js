/**
 * Esta función extrae una carta del deck y la devuelve.
 * @param {Array<String>} deck Deck de cartas
 * @returns {String} Retorna una carta sacada del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}