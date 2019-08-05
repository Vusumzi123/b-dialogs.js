import { Localization } from './localization';
import { BNotificationsConfig } from './config';

let modalCount = 0;
let _locale = {};
let _config = {};

/**
 * @typedef {Object} ModalData
 * @property {string} title
 * @property {string} size
 * @property {string} body
 * @property {string} cancelBtnText
 * @property {string} acceptBtn.Text
 * @property {boolean} autoClose
 * @property {boolean} isInfo
 * @property {boolean} closeOutside
 * @property {boolean} centered
 */

/** Class for Bottrstrap notifications plugin */
export class BNotification {
    /**
     * 
     * @param {BNotificationsConfig} config 
     * @param {Localization} locale 
     * @param {window} w
     */
    constructor(config, locale, w) {
        if(!window.jQuery || !hasBootstrap()){
            console.error(":(")
            throw "You need to have bootstrap3+ and jquery 3+"
        }
        _config = config;
        _locale = locale;
        w.$notifications = this;
    }

    /**  
     * @function dialog 
     * @description Function that generates a modal whit options to accept or cancel
     * it has two methods then and catch to define the actions of both buttons
     * @param {ModalData} [customData] Object containing the informatión of the modal
     * @see $[util/genDialogModal,flow] 
     * @memberof BNotification 
     * */
    dialog(customData) {
        const defaultObject = {
            title: $("title").text().toUpperCase() + " " +_locale[_config.lang].tittleSufix + ":",
            size: "modal-sm",
            body: _locale[_config.lang].genericBody,
            cancelBtn: _locale[_config.lang].cancelButtonText,
            acceptBtn: _locale[_config.lang].acceptButtonText,
            autoClose: true,
            isInfo: false,
            closeOutside: false,
            centered: true
        };

        let dataObj = { ...defaultObject, ...customData }

        const currentIndex = modalCount;

        $("body").append(genHtml(dataObj, dataObj.isInfo, currentIndex));
        $('#general-modal-' + currentIndex).modal('show');
        $('#general-modal-' + currentIndex).on('hidden.bs.modal', function (e) {
            $('#general-modal-' + currentIndex).remove();
        });
        $('#accept-modal-buton-' + currentIndex).on('click', function () {
            if (dataObj.autoClose)
                closeModal(currentIndex);
        });
        $('#cancel-modal-buton-' + currentIndex).on('click', function () {
            if (dataObj.autoClose)
                closeModal(currentIndex);
        });
        if (dataObj.closeOutside) {
            $('#general-modal-' + currentIndex).modal({
                backdrop: 'static',
                keyboard: false
            })
        }

        window.setTimeout(function(){
            $('#accept-modal-buton-' + currentIndex).focus();
        },600);

        modalCount++;

        return {
            then: function (callback = function () { }) {
                $('#accept-modal-buton-' + currentIndex).on('click', function () {
                    callback();
                    if (dataObj.autoClose)
                        closeModal(currentIndex);
                });
                return this;
            },
            catch: function (callback = function () { }) {
                $('#cancel-modal-buton-' + currentIndex).on('click', function () {
                    callback();
                    if (dataObj.autoClose)
                        closeModal(currentIndex);
                });
                return this;
            }
        }
    }
    /**
     * @function config
     * @param {BNotificationsConfig} newConfig
     * @memberof BNotification
     * @description Function that changes the confugaration if the plugin
     */
    config(newConfig){
        return _config = { ..._config, ...newConfig };
    }
}

/** 
 * @function genHTML 
 * @description Función que genera el html con el contenido del modal 
 * @param {Modal} modalParams Objeto con la información del modal 
 * @param {boolean} isInfo Booleano determina si se trata de un cuadro de dialogo o un modal 
 * @memberof BNotification 
 * @returns {jQuery(element)} 
 * */
function genHtml(modalParams, isInfo, modalCount) {
    var modalHtml;

    var modalFooter = $("<div>").addClass("modal-footer");
    if (!isInfo) {
        modalFooter.append($("<button>").addClass("btn btn-secondary").html(modalParams.cancelBtn).attr({
            type: "button",
            id: "cancel-modal-buton-" + modalCount,
        }))
    }
    modalFooter.append($("<button>").addClass("btn btn-primary").html(modalParams.acceptBtn).attr({
        id: "accept-modal-buton-" + modalCount,
        type: "button",
    }));
    modalHtml = $("<div>").addClass("modal fade").attr({
        "tabindex": "-1",
        "role": "dialog",
        "id": "general-modal-" + modalCount,
        "data-backdrop": "static",
        "data-keyboard": "false"
    })
        .append($("<div>").addClass("modal-dialog " + (modalParams.centered ? 'modalParams' : '') + " " +modalParams.size).attr("role", "document")
            .append($("<div>").addClass("modal-content")
                .append($("<div>").addClass("modal-header")
                    .append($("<h4>").addClass("modal-title tittle2-text").html(modalParams.title))
                )
                .append($("<div>").addClass("modal-body").html(modalParams.body))
                .append(modalFooter)
            )
        );
    return modalHtml;
}

/** 
 * @function closeModal 
 * @description esconde todos los modales generados 
 * @memberof BNotification
 */
function closeModal(id) {
    $('#general-modal-' + id).modal('hide');
    $('#accept-modal-buton-' + id).off('click');
    $('#cancel-modal-buton-' + id).off('click');
    setTimeout(function () {
        $('#general-modal-' + id).remove();
    }, 200);
}


/** 
 * @function hasBootstrap 
 * @description Function that checks if bootstrap is available
 * @memberof BNotification
 */
function hasBootstrap(){
    var entry = $('script[src*="bootstrap"]');
    return entry.length
}