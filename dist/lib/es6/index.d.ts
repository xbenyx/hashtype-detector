/**
 * Finds hashtype matching regex
 *
 * @param hash - Hash
 * @returns Hash Type information and recommended attack
 * ```
 * @public
 */
export declare function findHashType(hash: any): false | any[] | "No hashes found.";
/**
 * Checks if Hash is encoded in base64, if yes decode
 *
 * @param hash - Hash
 * @returns decoded hash
 * ```
 * @public
 */
