"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHashType = void 0;
var algorithms_config_1 = require("./algorithms.config");
// import { Buffer } from 'buffer';
/**
 * Finds hashtype matching regex
 *
 * @param hash - Hash
 * @returns Hash Type information and recommended attack
 * ```
 * @public
 */
function findHashType(hash) {
    var arr = [];
    if (!hash || hash === '') {
        return false;
    }
    // hash = isBase64(hash); //Check if hash is encoded in base64
    for (var i = 0; i < algorithms_config_1.algoritms.length; i++) {
        var result = new RegExp(algorithms_config_1.algoritms[i]['regex']);
        console.log(result);
        var out = result.test(hash);
        if (out && typeof algorithms_config_1.algoritms[i]['options'] != 'undefined') {
            arr.push(algorithms_config_1.algoritms[i]);
            result.lastIndex = 0;
        }
    }
    console.log(arr);
    if (arr.length === 0) {
        return "No hashes found.";
    }
    return arr;
}
exports.findHashType = findHashType;
/**
 * Checks if Hash is encoded in base64, if yes decode
 *
 * @param hash - Hash
 * @returns decoded hash
 * ```
 * @public
 */
// export function isBase64(hash: any){
//   var res;
//   var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
//   if(base64regex.test(hash)){
//     var b64 = Buffer.from(hash, 'base64')
//     res = b64.toString();
//   }else {
//     res = hash;
//   }
//   return res;
// }
