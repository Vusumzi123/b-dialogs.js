'use strict';

/**
 * @typedef {Object} LocalizationType
 * @property {string} tittleSufix
 * @property {string} genericBody
 * @property {string} acceptButtonText
 * @property {string} cancelButtonText
 */

/**Localization Class */
export const Localization = Object.freeze({
    /**
     * Enum for localized texts
     * @readonly
     * @enum {LocalizationType}
     */
    EN: {
        tittleSufix: 'SAYS',
        genericBody: '<i>!--- This is a generic modal body. </br> place your html here --</i>',
        acceptButtonText: 'Ok',
        cancelButtonText: 'Cancel',
    },
    /**
     * Enum for localized texts
     * @readonly
     * @enum {LocalizationType}
     */
    ES: {
        tittleSufix: 'DICE',
        genericBody: '<i>!-- Esto es un modal gen&eacute;rico. </br> inserta tu c&oacute;digo html aqu&iacute; --</i>',
        acceptButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }
});
