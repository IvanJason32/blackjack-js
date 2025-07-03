/**
 * Esta funcón recibe una carta y retorna su valor númerico
 * @param {String} carta Carta sacada del deck
 * @returns {Number} retorna el valor númerico equivalente a la carta pasada como argumento
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}