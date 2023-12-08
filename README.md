# Hash Type Detector

**Hashtype Detector** is a simple utility designed to detect the hash type of a given hash. It leverages the hashtypes supported by hashcat, providing information such as the hashcat id and a description of the hash.

## Installation

Install the package using npm:

```bash
npm install hashtype-detector --save
```

## Usage

```javascript
const hashtypeDetector = require('hashtype-detector');

const hash = 'your_hash_value_here';
const result = hashtypeDetector.findHashType(hash);

console.log(result);
```

### Parameters

- **hash** (required): The hash you want to identify.

### Return Value

The function returns an array containing hash type information and recommended attack strategies.

### Example

```javascript
const hash = '$2a$10$abcdefghIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKL';
const result = hashtypeDetector.findHashType(hash);

console.log(result);
```

### Output

```javascript
[
  {
    id: 3200,
    hashcatType: 'bcrypt',
    description: 'bcrypt',
    options: {
      rounds: 10
    },
    regex: /^\$2[axy]?\$\d{1,2}\$[A-Za-z0-9./]{53}$/
  }
]
```

## Note

This package is used in conjunction with Hashtopolis for hash detection within distributed hash cracking tasks.

## Issues and Contributions

For issues, bugs, or feature requests, please [submit an issue on GitHub](https://github.com/xbenyx/hashtype-detector/issues) or reach out to us at benito@ebidem.com.

## License

This project is licensed under the Creative Commons Attribution (CC BY).

---

**Disclaimer:** This tool is intended for legal and ethical use, such as security testing and penetration testing on systems and applications you have the right to assess. Unauthorized use for malicious purposes is prohibited. The creators and contributors of this tool are not responsible for any illegal or unethical activities. Always respect the law and obtain proper authorization for your actio