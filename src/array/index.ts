import { algoritms } from './algorithms.config';
// import { Buffer } from 'buffer';

/**
 * Finds hashtype matching regex
 *
 * @param hash - Hash
 * @returns Hash Type information and recommended attack
 * ```
 * @public
 */

export function findHashType(hash: any) {

  var arr = [];
  if(!hash || hash ==='') { return false; }

  // hash = isBase64(hash); //Check if hash is encoded in base64

  for(let i=0; i < algoritms.length; i++){
    let result: any = new RegExp(algoritms[i]['regex']);
    var out = result.test(hash);
    if(out && typeof algoritms[i]['options'] != 'undefined'){
      arr.push(algoritms[i]);
      result.lastIndex = 0;
    }
  }

  if(arr.length === 0) {return "No hashes found." }

  return arr;

}

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


