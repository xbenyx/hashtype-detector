/**
 * All the hashcat supported hashtypes with their regex format
 * Test in browser console.log(/^[a-f0-9]{32}(:.+)?$$/.test('nNxKL2rOEkbBc9BFLsVGG6OtOUO/8n:user'));
**/
export var algoritms = [
    {
        "id": 777,
        "description": "Test"
    },
    {
        "regex": "^[a-f0-9]{32}(:.+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 0,
                "description": "MD5",
                "example": "8743b52063cd84097a65d1633f5c74f5"
            },
            {
                "id": 10,
                "description": "md5($pass.$salt)",
                "example": "01dfae6e5d4d90d9892622325959afbe:7050461"
            },
            {
                "id": 20,
                "description": "md5($salt.$pass)",
                "example": "f0fda58630310a6dd91a7d8f0a4ceda2:4225637426"
            },
            {
                "id": 23,
                "description": "Skype",
                "example": "3af0389f093b181ae26452015f4ae728:user"
            },
            {
                "id": 24,
                "description": "SolarWinds Serv-U",
                "example": "e983672a03adcc9767b24584338eb378"
            },
            {
                "id": 30,
                "description": "md5(utf16le($pass).$salt)",
                "example": "b31d032cfdcf47a399990a71e43c5d2a:144816"
            },
            {
                "id": 40,
                "description": "md5($salt.utf16le($pass))",
                "example": "d63d0e21fdc05f618d55ef306c54af82:13288442151473"
            },
            {
                "id": 50,
                "description": "HMAC-MD5 (key = $pass)",
                "example": "fc741db0a2968c39d9c2a5cc75b05370:1234"
            },
            {
                "id": 60,
                "description": "HMAC-MD5 (key = $salt)",
                "example": "bfd280436f45fa38eaacac3b00518f29:1234"
            },
            {
                "id": 70,
                "description": "md5(utf16le($pass))",
                "example": "2303b15bfa48c74a74758135a0df1201"
            },
            {
                "id": 900,
                "description": "MD4",
                "example": "afe04867ec7a3845145579a95f72eca7"
            },
            {
                "id": 1000,
                "description": "NTLM",
                "example": "b4b9b02e6f09a9bd760f388b67351e2b"
            },
            {
                "id": 2600,
                "description": "md5(md5($pass))",
                "example": "a936af92b0ae20b1ff6c3347a72e5fbe"
            },
            {
                "id": 3500,
                "description": "md5(md5(md5($pass)))",
                "example": "9882d0778518b095917eb589f6998441"
            },
            {
                "id": 3710,
                "description": "md5($salt.md5($pass))",
                "example": "95248989ec91f6d0439dbde2bd0140be:1234"
            },
            {
                "id": 3800,
                "description": "md5($salt.$pass.$salt)",
                "example": "2e45c4b99396c6cb2db8bda0d3df669f:1234"
            },
            {
                "id": 3910,
                "description": "md5(md5($pass).md5($salt))",
                "example": "250920b3a5e31318806a032a4674df7e:1234"
            },
            {
                "id": 4010,
                "description": "md5($salt.md5($salt.$pass))",
                "example": "30d0cf4a5d7ed831084c5b8b0ba75b46:1234"
            },
            {
                "id": 4110,
                "description": "md5($salt.md5($pass.$salt))",
                "example": "b4cb5c551a30f6c25d648560408df68a:1234"
            },
            {
                "id": 4300,
                "description": "md5(strtoupper(md5($pass)))",
                "example": "b8c385461bb9f9d733d3af832cf60b27"
            },
            {
                "id": 4400,
                "description": "md5(sha1($pass))",
                "example": "288496df99b33f8f75a7ce4837d1b480"
            },
            {
                "id": 4410,
                "description": "md5(sha1($pass).$salt)",
                "example": "bc8319c0220bff8a0d7f5d703114a725:34659348756345251"
            },
            {
                "id": 11000,
                "description": "PrestaShop",
                "example": "810e3d12f0f10777a679d9ca1ad7a8d9:M2uZ122bSHJ4Mi54tXGY0lqcv1r28mUluSkyw37ou5oia4i239ujqw0l"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{32}:[a-z0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 11,
                "description": "Joomla < 2.5.18",
                "example": "19e0e8d91c722e7091ca7a6a6fb0f4fa:54718031842521651757785603028777"
            }
        ]
    },
    {
        "regex": "^[a-z0-9]{32}:\\postgres$",
        "rAttack": " ",
        "options": [
            {
                "id": 12,
                "description": "PostgreSQL",
                "example": "a6343a68d964ca596d9752250d54bb8a:postgres"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{32}:[a-z0-9]{2}$",
        "rAttack": " ",
        "options": [
            {
                "id": 21,
                "description": "osCommerce, xt:Commerce",
                "example": "374996a5e8a5e57fd97d893f7df79824:36"
            }
        ]
    },
    {
        "regex": "^(.+\\$)?[a-zA-Z0-9\\/.+]{30}(:.+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 22,
                "description": "Juniper Netscreen/SSG (ScreenOS)",
                "example": "nNxKL2rOEkbBc9BFLsVGG6OtOUO/8n:user"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{40}(:.+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 100,
                "description": "SHA1",
                "example": "b89eaac7e61417341b710b727768294d0e6a277b"
            },
            {
                "id": 110,
                "description": "sha1($pass.$salt)",
                "example": "2fc5a684737ce1bf7b3b239df432416e0dd07357:2014"
            },
            {
                "id": 120,
                "description": "sha1($salt.$pass)",
                "example": "cac35ec206d868b7d7cb0b55f31d9425b075082b:5363620024"
            },
            {
                "id": 130,
                "description": "sha1(utf16le($pass).$salt)",
                "example": "c57f6ac1b71f45a07dbd91a59fa47c23abcd87c2:631225"
            },
            {
                "id": 140,
                "description": "sha1($salt.utf16le($pass))",
                "example": "5db61e4cd8776c7969cfd62456da639a4c87683a:8763434884872"
            },
            {
                "id": 150,
                "description": "HMAC-SHA1 (key = $pass)",
                "example": "c898896f3f70f61bc3fb19bef222aa860e5ea717:1234"
            },
            {
                "id": 160,
                "description": "HMAC-SHA1 (key = $salt)",
                "example": "d89c92b4400b15c39e462a8caa939ab40c3aeeea:1234"
            },
            {
                "id": 170,
                "description": "sha1(utf16le($pass))",
                "example": "b9798556b741befdbddcbf640d1dd59d19b1e193"
            },
            {
                "id": 4500,
                "description": "sha1(sha1($pass))",
                "example": "3db9184f5da4e463832b086211af8d2314919951"
            },
            {
                "id": 4700,
                "description": "sha1(md5($pass))",
                "example": "92d85978d884eb1d99a51652b1139c8279fa8663"
            },
            {
                "id": 4710,
                "description": "sha1(md5($pass).$salt)",
                "example": "53c724b7f34f09787ed3f1b316215fc35c789504:hashcat1"
            },
            {
                "id": 4510,
                "description": "sha1(sha1($pass).$salt)",
                "example": "9138d472fce6fe50e2a32da4eec4ecdc8860f4d5:hashcat1"
            },
            {
                "id": 4520,
                "description": "sha1($salt.sha1($pass))",
                "example": "a0f835fdf57d36ebd8d0399cc44e6c2b86a1072b:511358214352751667201107073531735211566650747315"
            },
            {
                "id": 4522,
                "description": "PunBB",
                "example": "4a2b722cc65ecf0f7797cdaea4bce81f66716eef:653074362104"
            },
            {
                "id": 6000,
                "description": "RipeMD160",
                "example": "012cb9b334ec1aeb71a9c8ce85586082467f7eb6"
            }
        ]
    },
    {
        "regex": "^{SHA}[a-zA-Z0-9\\/+]{27}=$",
        "rAttack": " ",
        "options": [
            {
                "id": 101,
                "description": "nsldap, SHA-1(Base64), Netscape LDAP SHA",
                "example": "{SHA}uJ6qx+YUFzQbcQtyd2gpTQ5qJ3s="
            }
        ]
    },
    {
        "regex": "^{SSHA}[a-zA-Z0-9\\/+]{38}==$",
        "rAttack": " ",
        "options": [
            {
                "id": 111,
                "description": "nsldaps, SSHA-1(Base64), Netscape LDAP SSHA",
                "example": "{SSHA}AZKja92fbuuB9SpRlHqaoXxbTc43Mzc2MDM1Ng=="
            }
        ]
    },
    {
        "id": 111,
        "description": "nsldaps, SSHA-1(Base64), Netscape LDAP SSHA"
    },
    {
        "regex": "^(S:)?[a-f0-9]{40}(:)?[a-f0-9]{20}$",
        "rAttack": " ",
        "options": [
            {
                "id": 112,
                "description": "Oracle S: Type (Oracle 11+)",
                "example": "ac5f1e62d21fd0529428b84d42e8955b04966703:38445748184477378130"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{40}:[^*]{1,25}$",
        "rAttack": " ",
        "options": [
            {
                "id": 121,
                "description": "SMF >= v1.1",
                "example": "ecf076ce9d6ed3624a9332112b1cd67b236fdd11:17782686"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{48}$",
        "rAttack": " ",
        "options": [
            {
                "id": 122,
                "description": "OS X v10.4, v10.5, v10.6",
                "example": "1430823483d07626ef8be3fda2ff056d0dfd818dbfe47683"
            }
        ]
    },
    {
        "regex": "^sha1\\$[a-z0-9]+\\$[a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 124,
                "description": "Django (SHA-1)",
                "example": "sha1$fe76b$02d5916550edf7fc8c886f044887f4b1abf9b013"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{50}$",
        "rAttack": " ",
        "options": [
            {
                "id": 125,
                "description": "ArubaOS",
                "example": "5387280701327dc2162bdeb451d5a465af6d13eff9276efeba"
            }
        ]
    },
    {
        "regex": "^0x0100[a-f0-9]{88}$",
        "rAttack": " ",
        "options": [
            {
                "id": 131,
                "description": "MSSQL(2000)",
                "example": "0x01002702560500000000000000000000000000000000000000008db43dd9b1972a636ad0c7d4b8c515cb8ce46578"
            }
        ]
    },
    {
        "regex": "^0x0100[a-f0-9]{48}$",
        "rAttack": " ",
        "options": [
            {
                "id": 132,
                "description": "MSSQL(2005) & MSSQL(2008)",
                "example": "0x010018102152f8f28c8499d8ef263c53f8be369d799f931b2fbe"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9\\/+]{27}=$",
        "rAttack": " ",
        "options": [
            {
                "id": 133,
                "description": "PeopleSoft",
                "example": "uXmFVrdBvv293L9kDR3VnRmx4ZM="
            }
        ]
    },
    {
        "regex": "^\\$episerver\\$\\*0\\*[a-zA-Z0-9\\/=+]+\\*[a-zA-Z0-9\\/=+]{27,28}$",
        "rAttack": " ",
        "options": [
            {
                "id": 141,
                "description": "EPiServer 6.x < v4",
                "example": "$episerver$*0*bEtiVGhPNlZpcUN4a3ExTg==*utkfN0EOgljbv5FoZ6+AcZD5iLk"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 200,
                "description": "MySQL323",
                "example": "7196759210defdc0"
            },
            {
                "id": 3100,
                "description": "Oracle H: Type (Oracle 7+), DES(Oracle)",
                "example": "7A963A529D2E3229:3682427524"
            }
        ]
    },
    {
        "regex": "^\\*[a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 300,
                "description": "MySQL4.1/MySQL5+",
                "example": "fcf7c1b8749cf99d88e5f34271d636178fb5d130"
            }
        ]
    },
    {
        "regex": "^\\$H\\$[a-zA-Z0-9\\/.]{31}$",
        "rAttack": " ",
        "options": [
            {
                "id": 400,
                "description": "phpass, MD5(Wordpress), MD5(Joomla), MD5(phpBB3)",
                "example": "$P$984478476IagS59wHZvyQMArzfx58u."
            }
        ]
    },
    {
        "regex": "^\\$1\\$[a-z0-9\\/.]{0,8}\\$[a-zA-Z0-9\\/.]{22}(:.*)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 500,
                "description": "md5crypt, MD5(Unix), FreeBSD MD5, Cisco-IOS MD5 2",
                "example": "$1$28772684$iEwNOgGugqO9.bIz5sk8k/"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9\/+]+\/[a-zA-Z0-9\/+]{17,60}==$",
        "rAttack": " ",
        "options": [
            {
                "id": 501,
                "description": "Juniper IVE",
                "example": "3u+UR6n8AgABAAAAHxxdXKmiOmUoqKnZlf8lTOhlPYy93EAkbPfs5+49YLFd/B1+omSKbW7DoqNM40/EeVnwJ8kYoXv9zy9D5C5m5A=="
            },
        ]
    },
    {
        "regex": "^\\$BLAKE2\\$[a-f0-9]{128}$",
        "rAttack": " ",
        "options": [
            {
                "id": 600,
                "description": "BLAKE2b-512",
                "example": "$BLAKE2$296c269e70ac5f0095e6fb47693480f0f7b97ccd0307f5c3bfa4df8f5ca5c9308a0e7108e80a0a9c0ebb715e8b7109b072046c6cd5e155b4cfd2f27216283b1e"
            },
        ]
    },
    {
        "regex": "^\\$BLAKE2\\$[a-f0-9]{128}:.{4}$",
        "rAttack": " ",
        "options": [
            {
                "id": 610,
                "description": "BLAKE2b-512($pass.$salt)",
                "example": "$BLAKE2$41fcd44c789c735c08b43a871b81c8f617ca43918d38aee6cf8291c58a0b00a03115857425e5ff6f044be7a5bec8536b52d6c9992e21cd43cdca8a55bbf1f5c1:1033"
            },
            {
                "id": 620,
                "description": "BLAKE2b-512($salt.$pass)"
            }
        ]
    },
    {
        "regex": "^([^\\\\\\/:*?\"<>|]{1,20}:)?[a-f0-9]{32}(:[^\\\\\\/:*?\"<>|]{1,20})?$",
        "rAttack": " ",
        "options": [
            {
                "id": 1100,
                "description": "Domain Cached Credentials (DCC), MS Cache",
                "example": "4dd8965d1d476fa0d026722989a6b772:3060147285011"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{64}(:.+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 1400,
                "description": "SHA256",
                "example": "127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935"
            },
            {
                "id": 1410,
                "description": "sha256($pass.$salt)",
                "example": "c73d08de890479518ed60cf670d17faa26a4a71f995c1dcc978165399401a6c4:53743528"
            },
            {
                "id": 1420,
                "description": "sha256($salt.$pass)",
                "example": "eb368a2dfd38b405f014118c7d9747fcc97f4f0ee75c05963cd9da6ee65ef498:560407001617"
            },
            {
                "id": 1430,
                "description": "sha256(utf16le($pass).$salt)",
                "example": "4cc8eb60476c33edac52b5a7548c2c50ef0f9e31ce656c6f4b213f901bc87421:890128"
            },
            {
                "id": 1440,
                "description": "sha256($salt.utf16le($pass))",
                "example": "a4bd99e1e0aba51814e81388badb23ecc560312c4324b2018ea76393ea1caca9:12345678"
            },
            {
                "id": 1450,
                "description": "HMAC-SHA256 (key = $pass)",
                "example": "abaf88d66bf2334a4a8b207cc61a96fb46c3e38e882e6f6f886742f688b8588c:1234"
            },
            {
                "id": 1460,
                "description": "HMAC-SHA256 (key = $salt)",
                "example": "8efbef4cec28f228fa948daaf4893ac3638fbae81358ff9020be1d7a9a509fc6:1234"
            },
            {
                "id": 1470,
                "description": "sha256(utf16le($pass))",
                "example": "9e9283e633f4a7a42d3abc93701155be8afe5660da24c8758e7d3533e2f2dc82"
            },
            {
                "id": 5000,
                "description": "SHA-3(Keccak)",
                "example": "05ac0c544060af48f993f9c3cdf2fc03937ea35b:232725102020"
            },
            {
                "id": 6900,
                "description": "GOST R 34.11-94",
                "example": "df226c2c6dcb1d995c0299a33a084b201544293c31fc3d279530121d36bbcea9"
            },
            {
                "id": 17400,
                "description": "SHA3-256",
                "example": "d60fcf6585da4e17224f58858970f0ed5ab042c3916b76b0b828e62eaf636cbd"
            },
        ]
    },
    {
        "regex": "^{SSHA256}[a-zA-Z0-9+]{60}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1411,
                "description": "SSHA-256(Base64), LDAP {SSHA256}",
                "example": "{SSHA256}OZiz0cnQ5hgyel3Emh7NCbhBRCQ+HVBwYplQunHYnER7TLuV"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{70}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1421,
                "description": "hMailServer",
                "example": "8fe7ca27a17adc337cd892b1d959b4e487b8f0ef09e32214f44fb1b07e461c532e9ec3"
            }
        ]
    },
    {
        "regex": "^\\$episerver\\$\\*1\\*[a-zA-Z0-9\\/=+]+\\*[a-zA-Z0-9\\/=+]{42,43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1441,
                "description": "EPiServer 6.x >= v4",
                "example": "$episerver$*1*MDEyMzQ1Njc4OWFiY2RlZg==*lRjiU46qHA7S6ZE7RfKUcYhB85ofArj1j7TrCtu3u6Y"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9\\/.]{13}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1500,
                "description": "descrypt, DES(Unix), Traditional DES",
                "example": "48c/R8JAv757A"
            }
        ]
    },
    {
        "regex": "^\\$apr1\\$[a-z0-9\\/.]{0,8}\\$[a-zA-Z0-9\\/.]{22}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1600,
                "description": "md5apr1, MD5(APR), Apache MD5",
                "example": "$apr1$71850310$gh9m4xcAn3MGxogwX/ztb."
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{128}(:.+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 1700,
                "description": "SHA512",
                "example": "82a9dda829eb7f8ffe9fbe49e45d47d2dad9664fbb7adf72492e3c81ebd3e29134d9bc12212bf83c6840f10e8246b9db54a4859b7ccd0123d86e5872c1e5082f"
            },
            {
                "id": 1710,
                "description": "sha512($pass.$salt)",
                "example": "e5c3ede3e49fb86592fb03f471c35ba13e8d89b8ab65142c9a8fdafb635fa2223c24e5558fd9313e8995019dcbec1fb584146b7bb12685c7765fc8c0d51379fd:6352283260"
            },
            {
                "id": 1720,
                "description": "sha512($salt.$pass)",
                "example": "976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127"
            },
            {
                "id": 1730,
                "description": "sha512(utf16le($pass).$salt)",
                "example": "13070359002b6fbb3d28e50fba55efcf3d7cc115fe6e3f6c98bf0e3210f1c6923427a1e1a3b214c1de92c467683f6466727ba3a51684022be5cc2ffcb78457d2:341351589"
            },
            {
                "id": 1740,
                "description": "sha512($salt.utf16le($pass))",
                "example": "bae3a3358b3459c761a3ed40d34022f0609a02d90a0d7274610b16147e58ece00cd849a0bd5cf6a92ee5eb5687075b4e754324dfa70deca6993a85b2ca865bc8:1237015423"
            },
            {
                "id": 1750,
                "description": "HMAC-SHA512 (key = $pass)",
                "example": "94cb9e31137913665dbea7b058e10be5f050cc356062a2c9679ed0ad6119648e7be620e9d4e1199220cd02b9efb2b1c78234fa1000c728f82bf9f14ed82c1976:1234"
            },
            {
                "id": 1760,
                "description": "HMAC-SHA512 (key = $salt)",
                "example": "7cce966f5503e292a51381f238d071971ad5442488f340f98e379b3aeae2f33778e3e732fcc2f7bdc04f3d460eebf6f8cb77da32df25500c09160dd3bf7d2a6b:1234"
            },
            {
                "id": 1770,
                "description": "sha512(utf16le($pass))",
                "example": "79bba09eb9354412d0f2c037c22a777b8bf549ab12d49b77d5b25faa839e4378d8f6fa11aceb6d9413977ae5ad5d011568bad2de4f998d75fd4ce916eda83697"
            },
            {
                "id": 6100,
                "description": "Whirlpool",
                "example": "7ca8eaaaa15eaa4c038b4c47b9313e92da827c06940e69947f85bc0fbef3eb8fd254da220ad9e208b6b28f6bb9be31dd760f1fdb26112d83f87d96b416a4d258"
            },
            {
                "id": 17600,
                "description": "SHA3-512",
                "example": "7c2dc1d743735d4e069f3bda85b1b7e9172033dfdd8cd599ca094ef8570f3930c3f2c0b7afc8d6152ce4eaad6057a2ff22e71934b3a3dd0fb55a7fc84a53144e"
            },
        ]
    },
    {
        "regex": "^{SSHA512}[a-zA-Z0-9\z/+]{96}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1711,
                "description": "SSHA-512(Base64), LDAP {SSHA512}",
                "example": "{SSHA512}ALtwKGBdRgD+U0fPAy31C28RyKYx7+a8kmfksccsOeLknLHv2DBXYI7TDnTolQMBuPkWDISgZr2cHfnNPFjGZTEyNDU4OTkw"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{136}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1722,
                "description": "OS X v10.7",
                "example": "648742485c9b0acd786a233b2330197223118111b481abfa0ab8b3e8ede5f014fc7c523991c007db6882680b09962d16fd9c45568260531bdb34804a5e31c22b4cfeb32d"
            }
        ]
    },
    {
        "regex": "^0x0200[a-f0-9]{136}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1731,
                "description": "MSSQL(2012), MSSQL(2014)",
                "example": "0x02000102030434ea1b17802fd95ea6316bd61d2c94622ca3812793e8fb1672487b5c904a45a31b2ab4a78890d563d2fcf5663e46fe797d71550494be50cf4915d3f4d55ec375"
            }
        ]
    },
    {
        "regex": "^\\$6\\$(rounds=[0-9]+\\$)?[a-z0-9\\/.]{0,16}\\$[a-z0-9\\/.]{86}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1800,
                "description": "sha512crypt, SHA512(Unix)",
                "example": "79bba09eb9354412d0f2c037c22a777b8bf549ab12d49b77d5b25faa839e4378d8f6fa11aceb6d9413977ae5ad5d011568bad2de4f998d75fd4ce916eda83697"
            }
        ]
    },
    {
        "id": 2000,
        "description": "STDOUT"
    },
    {
        "regex": "^([^\\\\\\/:*?\"<>|]{1,20}:)?(\\$DCC2\\$10240#[^\\\\\\/:*?\"<>|]{1,20}#)?[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 2100,
                "description": "Domain Cached Credentials 2 (DCC2), MS Cache",
                "example": "$DCC2$10240#tom#e4e938d12fe5974dc42a90120bd9c90f"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9\\/.]{16}([:$].{1,})?$",
        "rAttack": " ",
        "options": [
            {
                "id": 2410,
                "description": "Cisco-ASA MD5",
                "example": "02dMBMYkTdC5Ziyp:36"
            },
            {
                "id": 2400,
                "description": "Cisco-PIX MD5",
                "example": "dRRVnUmUHXOTt9nk"
            }
        ]
    },
    {
        "id": 2500,
        "description": "WPA/WPA2",
    },
    {
        "id": 2501,
        "description": "WPA-EAPOL-PMK"
    },
    {
        "regex": "^[a-f0-9]{32}:.{3}$",
        "rAttack": " ",
        "options": [
            {
                "id": 2611,
                "description": "vBulletin < v3.8.5",
                "example": "16780ba78d2d5f02f3202901c1b6d975:568"
            }
        ]
    },
    {
        "regex": "^\\$PHPS\\$.+\\$[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 2612,
                "description": "PHPS",
                "example": "$PHPS$34323438373734$5b07e065b9d78d69603e71201c6cf29f"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{32}:.{30}$",
        "rAttack": " ",
        "options": [
            {
                "id": 2711,
                "description": "vBulletin >= v3.8.5",
                "example": "bf366348c53ddcfbd16e63edfdd1eee6:181264250056774603641874043270"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{32}:.{5}$",
        "rAttack": " ",
        "options": [
            {
                "id": 2811,
                "description": "IPB2+, MyBB1.2+",
                "example": "8d2129083ef35f4b365d5d87487e1207:47204"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 3000,
                "description": "LM",
                "example": "299bd128c1101fd6"
            }
        ]
    },
    {
        "regex": "^(\\$2[axy]|\\$2)\\$[0-9]{2}\\$[a-zA-Z0-9\\/.]{53}$",
        "rAttack": " ",
        "options": [
            {
                "id": 3200,
                "description": "bcrypt, Blowfish(OpenBSD)",
                "example": "$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6"
            },
            {
                "id": 25600,
                "description": "bcrypt(md5($pass)) / bcryptmd5",
                "example": "$2a$05$/VT2Xs2dMd8GJKfrXhjYP.DkTjOVrY12yDN7/6I8ZV0q/1lEohLru"
            },
            {
                "id": 25800,
                "description": "bcrypt(sha1($pass)) / bcryptsha1",
                "example": "$2a$05$Uo385Fa0g86uUXHwZxB90.qMMdRFExaXePGka4WGFv.86I45AEjmO"
            }
        ]
    },
    {
        "regex": "^[:\\$][AB][:\\$]([a-f0-9]{1,8}[:\\$])?[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 3711,
                "description": "Mediawiki B type",
                "example": "$B$56668501$0ce106caa70af57fd525aeaf80ef2898"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{40}:[a-f0-9]{0,32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 4521,
                "description": "Redmine Project Management Web App",
                "example": "1fb46a8f81d8838f46879aaa29168d08aa6bf22d:3290afd193d90e900e8021f81409d7a9"
            }
        ]
    },
    {
        "id": 4711,
        "description": "Huawei sha1(md5($pass).$salt)",
        "example": ""
    },
    {
        "regex": "^(\\$chap\\$0\\*)?[a-f0-9]{32}[\\*:][a-f0-9]{32}(:[0-9]{2})?$",
        "rAttack": " ",
        "options": [
            {
                "id": 4800,
                "description": "MD5(Chap), iSCSI CHAP authentication",
                "example": "afd09efdd6f8ca9f18ec77c5869788c3:01020304050607080910111213141516:01"
            }
        ]
    },
    {
        "id": 4800,
        "description": "MD5(Chap), iSCSI CHAP authentication"
    },
    {
        "id": 4900,
        "description": "sha1($salt.$pass.$salt)"
    },
    {
        "regex": "^[a-f0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5100,
                "description": "Half MD5",
                "example": "8743b52063cd8409"
            }
        ]
    },
    {
        "id": 5200,
        "description": "Password Safe v3"
    },
    {
        "regex": "^[a-f0-9]{256}:[a-f0-9]{256}:[a-f0-9]{16}:[a-f0-9]{16}:[a-f0-9]{320}:[a-f0-9]{16}:[a-f0-9]{40}:[a-f0-9]{40}:[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5300,
                "description": "IKE-PSK SHA1",
                "example": "https://hashcat.net/misc/example_hashes/hashcat.ikemd5"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{256}:[a-f0-9]{256}:[a-f0-9]{16}:[a-f0-9]{16}:[a-f0-9]{320}:[a-f0-9]{16}:[a-f0-9]{40}:[a-f0-9]{40}:[a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5400,
                "description": "IKE-PSK MD5",
                "example": "https://hashcat.net/misc/example_hashes/hashcat.ikesha1"
            }
        ]
    },
    {
        "regex": "^[^\\\\\\/:*?\"<>|]{1,20}[:]{2,3}([^\\\\\\/:*?\"<>|]{1,20})?:[a-f0-9]{48}:[a-f0-9]{48}:[a-f0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5500,
                "description": "NetNTLMv1-VANILLA / NetNTLMv1+ESS",
                "example": "u4-netntlm::kNS:338d08f8e26de93300000000000000000000000000000000:9526fb8c23a90751cdd619b6cea564742e1e4bf33006ba41:cb8086049ec4736c"
            }
        ]
    },
    {
        "regex": "^([^\\\\\\/:*?\"<>|]{1,20}\\\\)?[^\\\\\\/:*?\"<>|]{1,20}[:]{2,3}([^\\\\\\/:*?\"<>|]{1,20}:)?[^\\\\\\/:*?\"<>|]{1,20}:[a-f0-9]{32}:[a-f0-9]+$",
        "rAttack": " ",
        "options": [
            {
                "id": 5600,
                "description": "NetNTLMv2",
                "example": "admin::N46iSNekpT:08ca45b7d7ea58ee:88dcbe4446168966a153a0064958dac6:5c7830315c7830310000000000000b45c67103d07d7b95acd12ffa11230e0000000052920b85f78d013c31cdb3b92f5d765c783030"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9]{43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5700,
                "description": "Cisco-IOS SHA256",
                "example": "2btjjy78REtmYkkW0csHUbJZOstRXoWdX1mGrmmfeHI"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{40}:[a-f0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 5800,
                "description": "Samsung Android Password/PIN",
                "example": "0223b799d526b596fe4ba5628b9e65068227e68e:f6d45822728ddb2c"
            }
        ]
    },
    {
        "id": 6211,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES/Serpent/Twofish"
    },
    {
        "id": 6212,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES-Twofish/Serpent-AES/Twofish-Serpent"
    },
    {
        "id": 6213,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES-Twofish-Serpent/Serpent-Twofish-AES"
    },
    {
        "id": 6221,
        "description": "TrueCrypt 5.0+ SHA512 + AES/Serpent/Twofish"
    },
    {
        "id": 6222,
        "description": "TrueCrypt 5.0+ SHA512 + AES-Twofish/Serpent-AES/Twofish-Serpent"
    },
    {
        "id": 6223,
        "description": "TrueCrypt 5.0+ SHA512 + AES-Twofish-Serpent/Serpent-Twofish-AES"
    },
    {
        "id": 6231,
        "description": "TrueCrypt 5.0+ Whirlpool + AES/Serpent/Twofish"
    },
    {
        "id": 6232,
        "description": "TrueCrypt 5.0+ Whirlpool + AES-Twofish/Serpent-AES/Twofish-Serpent"
    },
    {
        "id": 6233,
        "description": "TrueCrypt 5.0+ Whirlpool + AES-Twofish-Serpent/Serpent-Twofish-AES"
    },
    {
        "id": 6241,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES/Serpent/Twofish + boot"
    },
    {
        "id": 6242,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES-Twofish/Serpent-AES/Twofish-Serpent + boot"
    },
    {
        "id": 6243,
        "description": "TrueCrypt 5.0+ PBKDF2-HMAC-RipeMD160 + AES-Twofish-Serpent/Serpent-Twofish-AES + boot"
    },
    {
        "regex": "^{smd5}[a-zA-Z0-9$\\/.]{31}$",
        "rAttack": " ",
        "options": [
            {
                "id": 6300,
                "description": "AIX {smd5}",
                "example": "{smd5}a5/yTL/u$VfvgyHx1xUlXZYBocQpQY0"
            }
        ]
    },
    {
        "regex": "^{ssha256}[0-9]{2}\\$[a-zA-Z0-9$\\/.]{60}$",
        "rAttack": " ",
        "options": [
            {
                "id": 6400,
                "description": "AIX {ssha256}",
                "example": "{ssha256}06$aJckFGJAB30LTe10$ohUsB7LBPlgclE3hJg9x042DLJvQyxVCX.nZZLEz.g2"
            }
        ]
    },
    {
        "regex": "^{ssha512}[0-9]{2}\\$[a-zA-Z0-9\\/.]{16,48}\\$[a-zA-Z0-9\\/.]{86}$",
        "rAttack": " ",
        "options": [
            {
                "id": 6500,
                "description": "AIX {ssha512}",
                "example": "{ssha512}06$bJbkFGJAB30L2e23$bXiXjyH5YGIyoWWmEVwq67nCU5t7GLy9HkCzrodRCQCx3r9VvG98o7O3V0r9cVrX3LPPGuHqT5LLn0oGCuI1.."
            }
        ]
    },
    {
        "regex": "^[0-9]{4}:[a-f0-9]{16}:[a-f0-9]{2080}$",
        "rAttack": " ",
        "options": [
            {
                "id": 6600,
                "description": "1Password, Agile Keychain",
                "example": "https://hashcat.net/misc/example_hashes/hashcat.agilekeychain"
            }
        ]
    },
    {
        "regex": "^{ssha1}[0-9]{2}\\$[a-zA-Z0-9$\\/.]{44}$",
        "rAttack": " ",
        "options": [
            {
                "id": 6700,
                "description": "AIX {ssha1}",
                "example": "{ssha1}06$bJbkFGJAB30L2e23$dCESGOsP7jaIIAJ1QAcmaGeG.kr"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{32}:[0-9]+:[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-.]+$",
        "rAttack": " ",
        "options": [
            {
                "id": 6800,
                "description": "Lastpass",
                "example": "a2d1f7b7a1862d0d4a52644e72d59df5:500:lp@trash-mail.com"
            }
        ]
    },
    {
        "regex": "^[a-zA-Z0-9=]{47}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7000,
                "description": "Fortigate (FortiOS)",
                "example": "AK1AAECAwQFBgcICRARNGqgeC3is8gv2xWWRony9NJnDgE="
            }
        ]
    },
    {
        "regex": "^\\$ml\\$[0-9]+\\$[a-f0-9]{64}\\$[a-f0-9]{128}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7100,
                "description": "OS X v10.8 / v10.9",
                "example": "$ml$35460$93a94bd24b5de64d79a5e49fa372827e739f4d7b6975c752c9a0ff1e5cf72e05$752351df64dd2ce9dc9c64a72ad91de6581a15c19176266b44d98919dfa81f0f96cbcb20a1ffb400718c20382030f637892f776627d34e021bad4f81b7de8222"
            }
        ]
    },
    {
        "regex": "^grub\\.pbkdf2\\.sha512\\.[0-9]+\\.([a-f0-9]{128,2048}\\.|[0-9]+\\.)?[a-f0-9]{128}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7200,
                "description": "GRUB 2",
                "example": "grub.pbkdf2.sha512.10000.7d391ef48645f626b427b1fae06a7219b5b54f4f02b2621f86b5e36e83ae492bd1db60871e45bc07925cecb46ff8ba3db31c723c0c6acbd4f06f60c5b246ecbf.26d59c52b50df90d043f070bd9cbcd92a74424da42b3666fdeb08f1a54b8f1d2f4f56cf436f9382419c26798dc2c209a86003982b1e5a9fcef905f4dfaa4c524"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{130}(:[a-f0-9]{40})?$",
        "rAttack": " ",
        "options": [
            {
                "id": 7300,
                "description": "IPMI2 RAKP HMAC-SHA1",
                "example": "b7c2d6f13a43dce2e44ad120a9cd8a13d0ca23f0414275c0bbe1070d2d1299b1c04da0f1a0f1e4e2537300263a2200000000000000000000140768617368636174:472bdabe2d5d4bffd6add7b3ba79a291d104a9ef"
            }
        ]
    },
    {
        "regex": "^\\$5\\$(rounds=[0-9]+\\$)?[a-zA-Z0-9\\/.]{0,16}\\$[a-zA-Z0-9\\/.]{43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7400,
                "description": "sha256crypt, SHA256(Unix)",
                "example": "$5$rounds=5000$GX7BopJZJxPc/KEK$le16UF8I2Anb.rOrn22AUPWvzUETDGefUmAV8AZkGcD"
            }
        ]
    },
    {
        "regex": "^\\$mysql\\$A\\$[0-9]{3}\\*[A-Z0-9]{40}\\*[A-Z0-9]{86}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7401,
                "description": "MySQL $A$ (sha256crypt)",
                "example": "$mysql$A$005*F9CC98CE08892924F50A213B6BC571A2C11778C5*625479393559393965414D45316477456B484F41316E64484742577A2E3162785353526B7554584647562F"
            }
        ]
    },
    {
        "regex": "^\\$(krb5pa|mskrb5)\\$([0-9]{2})?\\$.+\\$[a-f0-9]{1,}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7500,
                "description": "Kerberos 5 AS-REQ Pre-Auth",
                "example": "$krb5pa$23$user$realm$salt$4e751db65422b2117f7eac7b721932dc8aa0d9966785ecd958f971f622bf5c42dc0c70b532363138363631363132333238383835"
            }
        ]
    },
    {
        "regex": "^(.+)?\\$[A-F0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7700,
                "description": "SAP CODVN B (BCODE)",
                "example": "USER$C8B48F26B87B7EA7"
            },
            {
                "id": 7701,
                "description": "SAP CODVN B (BCODE) from RFC_READ_TABLE",
                "example": "027642760180$77EC386300000000"
            }
        ]
    },
    {
        "regex": "^(.+)?\\$[A-F0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7800,
                "description": "SAP CODVN F/G (PASSCODE)",
                "example": "USER$ABCAD719B17E7F794DF7E686E563E9E2D24DE1D0"
            },
            {
                "id": 7801,
                "description": "SAP CODVN F/G (PASSCODE) from RFC_READ_TABLE",
                "example": "604020408266$32837BA7B97672BA4E5A00000000000000000000"
            }
        ]
    },
    {
        "regex": "^\\$S\\$[a-zA-Z0-9\\/.]{52}$",
        "rAttack": " ",
        "options": [
            {
                "id": 7900,
                "description": "Drupal7",
                "example": "$S$C33783772bRXEx1aCsvY.dqgaaSu76XmVlKrW9Qu8IQlvxHlmzLf"
            }
        ]
    },
    {
        "regex": "^0x[a-f0-9]{4}[a-f0-9]{16}[a-f0-9]{64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8000,
                "description": "Sybase ASE",
                "example": "0xc00778168388631428230545ed2c976790af96768afa0806fe6c0da3b28f3e132137eac56f9bad027ea2"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{49}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8100,
                "description": "Citrix Netscaler",
                "example": "1765058016a22f1b4e076dccd1c3df4e8e5c0839ccded98ea"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{64}:[a-f0-9]{32}:[0-9]{5}:[a-f0-9]{608}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8200,
                "description": "1Password, Cloud Keychain",
                "example": "https://hashcat.net/misc/example_hashes/hashcat.cloudkeychain"
            }
        ]
    },
    {
        "regex": "^[a-z0-9]{32}(:([a-z0-9-]+\\.)?[a-z0-9-.]+\\.[a-z]{2,7}:.+:[0-9]+)?$",
        "rAttack": " ",
        "options": [
            {
                "id": 8300,
                "description": "DNSSEC (NSEC3)",
                "example": "7b5n74kq8r441blc2c5qbbat19baj79r:.lvdsiqfj.net:33164473:1"
            }
        ]
    },
    {
        "regex": "^(\\$wbb3\\$\\*1\\*)?[a-f0-9]{40}[:*][a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8400,
                "description": "WBB3, Woltlab Burning Board 3",
                "example": "8084df19a6dc81e2597d051c3d8b400787e2d5a9:6755045315424852185115352765375338838643"
            }
        ]
    },
    {
        "regex": "^(user-.+:)?\\$racf\\$\\*.+\\*[A-F0-9]{16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8500,
                "description": "RACF",
                "example": "$racf$*USER*FC2577C6EBE6265B"
            }
        ]
    },
    {
        "regex": "^\\([a-z0-9\\/+]{20}\\)$",
        "rAttack": " ",
        "options": [
            {
                "id": 8600,
                "description": "Lotus Notes/Domino 5",
                "example": "3dd2e1e5ac03e230243d58b8c5ada076"
            }
        ]
    },
    {
        "regex": "^\\([a-zA-Z0-9\\/+]{20}\\)$",
        "rAttack": " ",
        "options": [
            {
                "id": 8700,
                "description": "Lotus Notes/Domino 6",
                "example": "(GDpOtD35gGlyDksQRxEU)"
            }
        ]
    },
    {
        "regex": "^\\$fde\\$[0-9]{2}\\$[a-f0-9]{32}\\$[0-9]{2}\\$[a-f0-9]{32}\\$[a-f0-9]{3072}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8800,
                "description": "Android FDE <= 4.3",
                "example": "https://hashcat.net/misc/example_hashes/hashcat.android43fde"
            }
        ]
    },
    {
        "regex": "^SCRYPT:[0-9]{1,}:[0-9]{1}:[0-9]{1}:[a-zA-Z0-9:\\/+=]{1,}$",
        "rAttack": " ",
        "options": [
            {
                "id": 8900,
                "description": "scrypt",
                "example": "SCRYPT:1024:1:1:MDIwMzMwNTQwNDQyNQ==:5FW+zWivLxgCWj7qLiQbeC8zaNQ+qdO0NUinvqyFcfo="
            }
        ]
    },
    {
        "id": 9000,
        "description": "Password Safe v2"
    },
    {
        "regex": "^\\([a-zA-Z0-9\\/+]{49}\\)$",
        "rAttack": " ",
        "options": [
            {
                "id": 9100,
                "description": "Lotus Notes/Domino",
                "example": "(HsjFebq0Kh9kH7aAZYc7kY30mC30mC3KmC30mCluagXrvWKj1)"
            }
        ]
    },
    {
        "regex": "^\\$8\\$[a-zA-Z0-9\\/.]{14}\\$[a-zA-Z0-9\\/.]{43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9200,
                "description": "Cisco-IOS $8$ (PBKDF2-SHA256)",
                "example": "$8$TnGX/fE4KGHOVU$pEhnEvxrvaynpi8j4f.EMHr6M.FzU8xnZnBr/tJdFWk"
            }
        ]
    },
    {
        "regex": "^\\$9\\$[a-zA-Z0-9\\/.]{14}\\$[a-zA-Z0-9\\/.]{43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9300,
                "description": "Cisco-IOS $9$ (scrypt)",
                "example": "$9$2MJBozw/9R3UsU$2lFhcKvpghcyw8deP25GOfyZaagyUOGBymkryvOdfo6"
            }
        ]
    },
    {
        "regex": "^\\$office\\$\\*2007\\*[0-9]{2}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9400,
                "description": "Office 2007",
                "example": "$office$*2007*20*128*16*411a51284e0d0200b131a8949aaaa5cc*117d532441c63968bee7647d9b7df7d6*df1d601ccf905b375575108f42ef838fb88e1cde"
            }
        ]
    },
    {
        "regex": "^\\$office\\$\\*2010\\*[0-9]{6}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9500,
                "description": "Office 2010",
                "example": "$office$*2010*100000*128*16*77233201017277788267221014757262*b2d0ca4854ba19cf95a2647d5eee906c*e30cbbb189575cafb6f142a90c2622fa9e78d293c5b0c001517b3f5b82993557"
            }
        ]
    },
    {
        "regex": "^\\$office\\$\\*2013\\*[0-9]{6}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9600,
                "description": "Office 2013",
                "example": "$office$*2013*100000*256*16*7dd611d7eb4c899f74816d1dec817b3b*948dc0b2c2c6c32f14b5995a543ad037*0b7ee0e48e935f937192a59de48a7d561ef2691d5c8a3ba87ec2d04402a94895"
            }
        ]
    },
    {
        "regex": "^\\$oldoffice\\$[01]\\*[a-f0-9]{32}\\*[a-f0-9]{32}\\*[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9700,
                "description": "MS Office ? 2003 MD5 + RC4, oldoffice$0, oldoffice$1",
                "example": "$oldoffice$1*04477077758555626246182730342136*b1b72ff351e41a7c68f6b45c4e938bd6*0d95331895e99f73ef8b6fbc4a78ac1a"
            },
            {
                "id": 9710,
                "description": "MS Office <= 2003 $0/$1, MD5 + RC4, collider #1",
                "example": "$oldoffice$0*55045061647456688860411218030058*e7e24d163fbd743992d4b8892bf3f2f7*493410dbc832557d3fe1870ace8397e2"
            },
            {
                "id": 9720,
                "description": "MS Office <= 2003 $0/$1, MD5 + RC4, collider #2",
                "example": "$oldoffice$0*55045061647456688860411218030058*e7e24d163fbd743992d4b8892bf3f2f7*493410dbc832557d3fe1870ace8397e2:91b2e062b9"
            }
        ]
    },
    {
        "regex": "^\\$oldoffice\\$[34]\\*[a-f0-9]{32}\\*[a-f0-9]{32}\\*[a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9800,
                "description": "MS Office ? 2003 SHA1 + RC4, oldoffice$3, oldoffice$4",
                "example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd"
            },
            {
                "id": 9810,
                "description": "MS Office <= 2003 $3, SHA1 + RC4, collider #1",
                "example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd"
            }
        ]
    },
    {
        "regex": "^\\$oldoffice\\$[34]\\*[a-f0-9]{32}\\*[a-f0-9]{32}\\*[a-f0-9]{40}:[a-f0-9]{10}",
        "rAttack": " ",
        "options": [
            {
                "id": 9820,
                "description": "MS Office <= 2003 $3, SHA1 + RC4, collider #2",
                "example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd:b8f63619ca"
            }
        ]
    },
    {
        "regex": "^(\\$radmin2\\$)?[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 9900,
                "description": "Radmin2",
                "example": "22527bee5c29ce95373c4e0f359f079b"
            }
        ]
    },
    {
        "regex": "^(\\$django\\$\\*1\\*)?pbkdf2_sha256\\$[0-9]+\\$[a-zA-Z0-9]+\\$[a-zA-Z0-9\\/+=]{44}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10000,
                "description": "Django (PBKDF2-SHA256)",
                "example": "pbkdf2_sha256$20000$H0dPx8NeajVu$GiC4k5kqbbR9qWBlsRgDywNqC2vd9kqfk7zdorEnNas="
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{16}:2:4:[a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10100,
                "description": "SipHash",
                "example": "ad61d78c06037cd9:2:4:81533218127174468417660201434054"
            }
        ]
    },
    {
        "regex": "^\\$cram_md5\\$[a-zA-Z0-9\\/+=-]+\\$[a-zA-Z0-9\\/+=-]{52}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10200,
                "description": "Cram MD5",
                "example": "$cram_md5$PG5vLXJlcGx5QGhhc2hjYXQubmV0Pg==$dXNlciA0NGVhZmQyMmZlNzY2NzBmNmIyODc5MDgxYTdmNWY3MQ=="
            }
        ]
    },
    {
        "regex": "^{x-issha,\\s[0-9]{4}}[a-zA-Z0-9\\/+=]+$",
        "rAttack": " ",
        "options": [
            {
                "id": 10300,
                "description": "SAP CODVN H (PWDSALTEDHASH) iSSHA-1",
                "example": "{x-issha, 1024}C0624EvGSdAMCtuWnBBYBGA0chvqAflKY74oEpw/rpY="
            }
        ]
    },
    {
        "regex": "^\\$pdf\\$1\\*[2|3]\\*[0-9]{2}\\*[-0-9]{1,6}\\*[0-9]\\*[0-9]{2}\\*[a-f0-9]{32,32}\\*[0-9]{2}\\*[a-f0-9]{64}\\*[0-9]{2}\\*[a-f0-9]{64}",
        "rAttack": " ",
        "options": [
            {
                "id": 10400,
                "description": "PDF 1.1 - 1.3 (Acrobat 2 - 4)",
                "example": "$pdf$1*2*40*-1*0*16*51726437280452826511473255744374*32*9b09be05c226214fa1178342673d86f273602b95104f2384b6c9b709b2cbc058*32*0000000000000000000000000000000000000000000000000000000000000000"
            },
            {
                "id": 10410,
                "description": "PDF 1.1 - 1.3 (Acrobat 2 - 4), collider #1",
                "example": "$pdf$1*2*40*-1*0*16*01221086741440841668371056103222*32*27c3fecef6d46a78eb61b8b4dbc690f5f8a2912bbb9afc842c12d79481568b74*32*0000000000000000000000000000000000000000000000000000000000000000"
            },
        ]
    },
    {
        "regex": "^\\$pdf\\$1\\*[2|3]\\*[0-9]{2}\\*[-0-9]{1,6}\\*[0-9]\\*[0-9]{2}\\*[a-f0-9]{32}\\*[0-9]{2}\\*[a-f0-9]{64}\\*[0-9]{2}\\*[a-f0-9]{64}:[a-f0-9]{10}",
        "rAttack": " ",
        "options": [
            {
                "id": 10420,
                "description": "PDF 1.1 - 1.3 (Acrobat 2 - 4), collider #2",
                "example": "$pdf$1*2*40*-1*0*16*01221086741440841668371056103222*32*27c3fecef6d46a78eb61b8b4dbc690f5f8a2912bbb9afc842c12d79481568b74*32*0000000000000000000000000000000000000000000000000000000000000000:6a8aedccb7"
            }
        ]
    },
    {
        "regex": "^\\$pdf\\$[24]\\*[34]\\*128\\*[0-9-]{1,5}\\*1\\*(16|32)\\*[a-f0-9]{32,64}\\*32\\*[a-f0-9]{64}\\*(8|16|32)\\*[a-f0-9]{16,64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10500,
                "description": "PDF 1.4 - 1.6 (Acrobat 5 - 8)",
                "example": "$pdf$2*3*128*-1028*1*16*da42ee15d4b3e08fe5b9ecea0e02ad0f*32*c9b59d72c7c670c42eeb4fca1d2ca15000000000000000000000000000000000*32*c4ff3e868dc87604626c2b8c259297a14d58c6309c70b00afdfb1fbba10ee571"
            }
        ]
    },
    {
        "regex": "^\\$pdf\\$5\\*[5|6]\\*[0-9]{3}\\*[-0-9]{1,6}\\*[0-9]\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}",
        "rAttack": " ",
        "options": [
            {
                "id": 10600,
                "description": "PDF 1.7 Level 3 (Acrobat 9)",
                "example": "$pdf$5*5*256*-1028*1*16*20583814402184226866485332754315*127*f95d927a94829db8e2fbfbc9726ebe0a391b22a084ccc2882eb107a74f7884812058381440218422686648533275431500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*127*00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*32*0000000000000000000000000000000000000000000000000000000000000000*32*0000000000000000000000000000000000000000000000000000000000000000"
            }
        ]
    },
    {
        "regex": "^\\$pdf\\$5\\*[5|6]\\*[0-9]{3}\\*[-0-9]{1,6}\\*[0-9]\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}\\*[0-9]{1,4}\\*[a-f0-9]{0,1024}",
        "rAttack": " ",
        "options": [
            {
                "id": 10700,
                "description": "PDF 1.7 Level 8 (Acrobat 10 - 11)",
                "example": "$pdf$5*6*256*-1028*1*16*21240790753544575679622633641532*127*2d1ecff66ea354d3d34325a6503da57e03c199c21b13dd842f8d515826054d8d2124079075354457567962263364153200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*127*00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*32*0000000000000000000000000000000000000000000000000000000000000000*32*0000000000000000000000000000000000000000000000000000000000000000"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{96}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10800,
                "description": "SHA384",
                "example": "07371af1ca1fca7c6941d2399f3610f1e392c56c6d73fddffe38f18c430a2817028dae1ef09ac683b62148a2c8757f42"
            },
            {
                "id": 17900,
                "description": "Keccak-384",
                "example": "5804b7ada5806ba79540100e9a7ef493654ff2a21d94d4f2ce4bf69abda5d94bf03701fe9525a15dfdc625bfbd769701"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{50,100}\:[0-9]{25}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10810,
                "description": "sha384($pass.$salt)",
                "example": "ca1c843a7a336234baf9db2e10bc38824ce523402fbd7741286b1602bdf6cb869a45289bb9fb706bd404b9f3842ff729:2746460797049820734631508"
            },
        ]
    },
    {
        "id": 10820,
        "description": "sha384($salt.$pass)",
        "example": "63f63d7f82d4a4cb6b9ff37a6bc7c5ec39faaf9c9078551f5cbf7960e76ded87b643d37ac53c45bc544325e7ff83a1f2:93362"
    },
    {
        "id": 10830,
        "description": "sha384(utf16le($pass).$salt)"
    },
    {
        "id": 10840,
        "description": "sha384($salt.utf16le($pass))"
    },
    {
        "id": 10870,
        "description": "sha384(utf16le($pass))"
    },
    {
        "regex": "^sha256[:$][0-9]+[:$][a-zA-Z0-9\\/+=]+[:$][a-zA-Z0-9\\/+]{32,128}$",
        "rAttack": " ",
        "options": [
            {
                "id": 10900,
                "description": "PBKDF2-HMAC-SHA256",
                "example": "sha256:1000:MTc3MTA0MTQwMjQxNzY=:PYjCU215Mi57AYPKva9j7mvF4Rc5bCnt"
            }
        ]
    },
    {
        "id": 10901,
        "description": "RedHat 389-DS LDAP (PBKDF2-HMAC-SHA256)",
        "example": "{PBKDF2_SHA256}AAAgADkxMjM2NTIzMzgzMjQ3MjI4MDAwNTk5OTAyOTk4NDI2MjkyMzAzNjg0NjQwOTMxNjI3OTMzNjg0MDI0OTY5NTe5ULagRTYpLaUoeqJMg8x9W/DXu+9VTFaVhaYvebYrY+sOqn1ZMRnws22C1uAkiE2tFM8qN+xw5xe7OmCPZ203NuruK4oB33QlsKIEz4ppm0TR94JB9PJx7lIQwFHD3FUNUNryj4jk6UYyJ4+V1Z9Ug/Iy/ylQBJgfs5ihzgxHYZrfp1wUCXFzlZG9mxmziPm8VFnAhaX4+FBAZvLAx33jpbKOwEg7TmwP2VJ8BNFLQRqwYdlqIjQlAhncXH+dqIF9VdM4MonAA0hx76bMvFTP7LF5VO1IqVmcuYz7YG9v4KKRjnvoUUqOj6okUBQTay3EzsdFVnUW1FemYOccJd5q"
    },
    {
        "regex": "^\\$postgres\\$.[^\\*]+[*:][a-f0-9]{1,32}[*:][a-f0-9]{32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 11100,
                "description": "PostgreSQL Challenge-Response Authentication (MD5)",
                "example": "$postgres$postgres*f0784ea5*2091bb7d4725d1ca85e8de6ec349baf6"
            }
        ]
    },
    {
        "regex": "^\\$mysqlna\\$[a-f0-9]{40}[:*][a-f0-9]{40}$",
        "rAttack": " ",
        "options": [
            {
                "id": 11200,
                "description": "MySQL Challenge-Response Authentication (SHA1)",
                "example": "$mysqlna$1c24ab8d0ee94d70ab1f2e814d8f0948a14d10b9*437e93572f18ae44d9e779160c2505271f85821d"
            }
        ]
    },
    {
        "regex": "^\\$bitcoin\\$[0-9]{2,4}\\$[a-f0-9$]{250,350}",
        "rAttack": " ",
        "options": [
            {
                "id": 11300,
                "description": "Bitcoin/Litecoin wallet.dat",
                "example": "$bitcoin$96$d011a1b6a8d675b7a36d0cd2efaca32a9f8dc1d57d6d01a58399ea04e703e8bbb44899039326f7a00f171a7bbc854a54$16$1563277210780230$158555$96$628835426818227243334570448571536352510740823233055715845322741625407685873076027233865346542174$66$625882875480513751851333441623702852811440775888122046360561760525"
            }
        ]
    },
    {
        "id": 11400,
        "description": "SIP digest authentication (MD5)"
    },
    {
        "regex": "^(\\$crc32\\$[a-f0-9]{8}.)?[a-f0-9]{8}$",
        "rAttack": " ",
        "options": [
            {
                "id": 11500,
                "description": "CRC32",
                "example": "c762de4a:00000000"
            }
        ]
    },
    {
        "regex": "^\\$7z\\$[0-9]\\$[0-9]{1,2}\\$[0-9]{1}\\$[^$]{0,64}\\$[0-9]{1,2}\\$[a-f0-9]{32}\\$[0-9]{1,10}\\$[0-9]{1,6}\\$[0-9]{1,6}\\$[a-f0-9]{2,}",
        "rAttack": " ",
        "options": [
            {
                "id": 11600,
                "description": "7-Zip",
                "example": "$7z$0$19$0$salt$8$f6196259a7326e3f0000000000000000$185065650$112$98$f3bc2a88062c419a25acd40c0c2d75421cf23263f69c51b13f9b1aada41a8a09f9adeae45d67c60b56aad338f20c0dcc5eb811c7a61128ee0746f922cdb9c59096869f341c7a9cb1ac7bb7d771f546b82cf4e6f11a5ecd4b61751e4d8de66dd6e2dfb5b7d1022d2211e2d66ea1703f96"
            }
        ]
    },
    {
        "id": 11700,
        "description": "GOST R 34.11-2012 (Streebog) 256-bit"
    },
    {
        "id": 11750,
        "description": "HMAC-Streebog-256 (key = $pass), big-endian"
    },
    {
        "id": 11760,
        "description": "HMAC-Streebog-256 (key = $salt), big-endian"
    },
    {
        "id": 11800,
        "description": "GOST R 34.11-2012 (Streebog) 512-bit"
    },
    {
        "id": 11850,
        "description": "HMAC-Streebog-512 (key = $pass), big-endian"
    },
    {
        "id": 11860,
        "description": "HMAC-Streebog-512 (key = $salt), big-endian"
    },
    {
        "id": 11900,
        "description": "PBKDF2-HMAC-MD5"
    },
    {
        "id": 12000,
        "description": "PBKDF2-HMAC-SHA1"
    },
    {
        "id": 12001,
        "description": "Atlassian (PBKDF2-HMAC-SHA1)"
    },
    {
        "id": 12100,
        "description": "PBKDF2-HMAC-SHA512"
    },
    {
        "id": 12200,
        "description": "eCryptfs"
    },
    {
        "id": 12300,
        "description": "Oracle T: Type (Oracle 12+)"
    },
    {
        "regex": "^_[a-zA-Z0-9\\/.]{19}$",
        "rAttack": " ",
        "options": [
            {
                "id": 12400,
                "description": "BSDiCrypt, Extended DES",
                "example": "_9G..8147mpcfKT8g0U."
            }
        ]
    },
    {
        "regex": "^\\$RAR3\\$\\*0\\*[0-9a-f]{1,16}\\*[0-9a-f]+$",
        "rAttack": " ",
        "options": [
            {
                "id": 12500,
                "description": "RAR3-hp",
                "example": "$RAR3$*0*45109af8ab5f297a*adbf6c5385d7a40373e8f77d7b89d317"
            }
        ]
    },
    {
        "id": 12600,
        "description": "ColdFusion 10+"
    },
    {
        "id": 12700,
        "description": "Blockchain, My Wallet"
    },
    {
        "id": 12800,
        "description": "MS-AzureSync PBKDF2-HMAC-SHA256"
    },
    {
        "id": 12900,
        "description": "Android FDE (Samsung DEK)"
    },
    {
        "regex": "^\\$rar5\\$[0-9a-f]{1,2}\\$[0-9a-f]{1,32}\\$[0-9a-f]{1,2}\\$[0-9a-f]{1,32}\\$[0-9a-f]{1,2}\\$[0-9a-f]{1,16}$",
        "rAttack": " ",
        "options": [
            {
                "id": 13000,
                "description": "RAR5",
                "example": "$rar5$16$74575567518807622265582327032280$15$f8b4064de34ac02ecabfe9abdf93ed6a$8$9843834ed0f7c754"
            }
        ]
    },
    {
        "regex": "^\\$krb5tgs\\$23\\$\\*[^*]*\\*\\$[a-f0-9]{32}\\$[a-f0-9]{64,40960}",
        "rAttack": " ",
        "options": [
            {
                "id": 13100,
                "description": "Kerberos 5 TGS-REP etype 23",
                "example": "$krb5tgs$23$*user$realm$test/spn*$63386d22d359fe42230300d56852c9eb$891ad31d09ab89c6b3b8c5e5de6c06a7f49fd559d7a9a3c32576c8fedf705376cea582ab5938f7fc8bc741acf05c5990741b36ef4311fe3562a41b70a4ec6ecba849905f2385bb3799d92499909658c7287c49160276bca0006c350b0db4fd387adc27c01e9e9ad0c20ed53a7e6356dee2452e35eca2a6a1d1432796fc5c19d068978df74d3d0baf35c77de12456bf1144b6a750d11f55805f5a16ece2975246e2d026dce997fba34ac8757312e9e4e6272de35e20d52fb668c5ed"
            }
        ]
    },
    {
        "id": 13200,
        "description": "AxCrypt"
    },
    {
        "id": 13300,
        "description": "AxCrypt in memory SHA1"
    },
    {
        "regex": "^\\$keepass\\$\\*2\\*\\d+\\*\\d+\\*[0-9a-f]+\\*[0-9a-f]+\\*[0-9a-f]+\\*[0-9a-f]+\\*[0-9a-f]+\\*\\d+\\*\\d+\\*[0-9a-f]+$",
        "rAttack": " ",
        "options": [
            {
                "id": 13400,
                "description": "KeePass 2 AES / without keyfile",
                "example": "$keepass$*2*6000*222*a279e37c38b0124559a83fa452a0269d56dc4119a5866d18e76f1f3fd536d64d*7ec7a06bc975ea2ae7c8dcb99e826a308564849b6b25d858cbbc78475af3733f*d477c849bf2278b7a1f626c81e343553*38c8ec186141c2705f2bcb334a730933ed3b0ee11391e1100fbaf429f6c99078*1ada85fe78cf36ab0537562a787dd83e446f13cd3d9a60fd495003de3537b702"
            }
        ]
    },
    {
        "id": 13500,
        "description": "PeopleSoft PS_TOKEN"
    },
    {
        "regex": "^\\$zip2\\$\\*[0-9]{1}\\*[0-9]{1}\\*[0-9]{1}\\*[a-f0-9]{16,32}\\*[a-f0-9]{1,6}\\*[a-f0-9]{1,6}\\*[a-f0-9]+\\*[a-f0-9]{20}\\*\\$\\/zip2\\$",
        "rAttack": " ",
        "options": [
            {
                "id": 13600,
                "description": "WinZip",
                "example": "$zip2$*0*3*0*e3222d3b65b5a2785b192d31e39ff9de*1320*e*19648c3e063c82a9ad3ef08ed833*3135c79ecb86cd6f48fc*$/zip2$"
            }
        ]
    },
    {
        "id": 13711,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + AES, Serpent, Twofish"
    },
    {
        "id": 13712,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + AES-Twofish, Serpent-AES, Twofish-Serpent"
    },
    {
        "id": 13713,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + Serpent-Twofish-AES"
    },
    {
        "id": 13721,
        "description": "VeraCrypt PBKDF2-HMAC-SHA512 + AES, Serpent, Twofish"
    },
    {
        "id": 13722,
        "description": "VeraCrypt PBKDF2-HMAC-SHA512 + AES-Twofish, Serpent-AES, Twofish-Serpent"
    },
    {
        "id": 13723,
        "description": "VeraCrypt PBKDF2-HMAC-SHA512 + Serpent-Twofish-AES"
    },
    {
        "id": 13731,
        "description": "VeraCrypt PBKDF2-HMAC-Whirlpool + AES, Serpent, Twofish"
    },
    {
        "id": 13732,
        "description": "VeraCrypt PBKDF2-HMAC-Whirlpool + AES-Twofish, Serpent-AES, Twofish-Serpent"
    },
    {
        "id": 13733,
        "description": "VeraCrypt PBKDF2-HMAC-Whirlpool + Serpent-Twofish-AES"
    },
    {
        "id": 13741,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + boot-mode + AES"
    },
    {
        "id": 13742,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + boot-mode + AES-Twofish"
    },
    {
        "id": 13743,
        "description": "VeraCrypt PBKDF2-HMAC-RIPEMD160 + boot-mode + AES-Twofish-Serpent"
    },
    {
        "id": 13751,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + AES, Serpent, Twofish"
    },
    {
        "id": 13752,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + AES-Twofish, Serpent-AES, Twofish-Serpent"
    },
    {
        "id": 13753,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + Serpent-Twofish-AES"
    },
    {
        "id": 13761,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + boot-mode (PIM + AES | Twofish)"
    },
    {
        "id": 13762,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + boot-mode + Serpent-AES"
    },
    {
        "id": 13763,
        "description": "VeraCrypt PBKDF2-HMAC-SHA256 + boot-mode + Serpent-Twofish-AES"
    },
    {
        "id": 13771,
        "description": "VeraCrypt Streebog-512 + XTS 512 bit"
    },
    {
        "id": 13772,
        "description": "VeraCrypt Streebog-512 + XTS 1024 bit"
    },
    {
        "id": 13773,
        "description": "VeraCrypt Streebog-512 + XTS 1536 bit"
    },
    {
        "id": 13781,
        "description": "VeraCrypt Streebog-512 + XTS 512 bit + boot-mode (legacy)"
    },
    {
        "id": 13782,
        "description": "VeraCrypt Streebog-512 + XTS 1024 bit + boot-mode (legacy)"
    },
    {
        "id": 13783,
        "description": "VeraCrypt Streebog-512 + XTS 1536 bit + boot-mode (legacy)"
    },
    {
        "id": 13800,
        "description": "Windows 8+ phone PIN/Password"
    },
    {
        "id": 13900,
        "description": "OpenCart"
    },
    {
        "id": 14000,
        "description": "DES (PT = $salt, key = $pass)"
    },
    {
        "id": 14100,
        "description": "3DES (PT = $salt, key = $pass)"
    },
    {
        "id": 14400,
        "description": "sha1(CX)"
    },
    {
        "id": 14500,
        "description": "Linux Kernel Crypto API (2.4)"
    },
    {
        "id": 14600,
        "description": "LUKS 10"
    },
    {
        "regex": "^\\$itunes_backup\\$\\*[0-9]{1,2}\\*[a-f0-9]{80}\\*[0-9]{1,6}\\*[a-f0-9]{40}\\*[0-9]{0,10}\\*[a-f0-9]{0,40}",
        "rAttack": " ",
        "options": [
            {
                "id": 14700,
                "description": "iTunes Backup < 10.0 11",
                "example": "$itunes_backup$*9*b8e3f3a970239b22ac199b622293fe4237b9d16e74bad2c3c3568cd1bd3c471615a6c4f867265642*10000*4542263740587424862267232255853830404566**"
            },
            {
                "id": 14800,
                "description": "iTunes Backup >= 10.0 11",
                "example": "$itunes_backup$*10*8b715f516ff8e64442c478c2d9abb046fc6979ab079007d3dbcef3ddd84217f4c3db01362d88fa68*10000*2353363784073608264337337723324886300850*10000000*425b4bb4e200b5fd4c66979c9caca31716052063"
            },
        ]
    },
    {
        "id": 14900,
        "description": "Skip32 12"
    },
    {
        "id": 15000,
        "description": "FileZilla Server >= 0.9.55"
    },
    {
        "regex": "^\\$sha1\\$[0-9]+\\$[a-z0-9\\/.]{0,64}\\$[a-z0-9\\/.]{28}$",
        "rAttack": " ",
        "options": [
            {
                "id": 15100,
                "description": "Juniper/NetBSD sha1crypt",
                "example": "$sha1$15100$jiJDkz0E$E8C7RQAD3NetbSDz7puNAY.5Y2jr"
            }
        ]
    },
    {
        "id": 15200,
        "description": "Blockchain, My Wallet, V2"
    },
    {
        "id": 15300,
        "description": "DPAPI masterkey file v1 and v2"
    },
    {
        "id": 15310,
        "description": "DPAPI masterkey file v1 (context 3)"
    },
    {
        "id": 15400,
        "description": "ChaCha20"
    },
    {
        "id": 15500,
        "description": "JKS Java Key Store Private Keys (SHA1)"
    },
    {
        "regex": "^\\$ethereum\\$[a-z0-9*]{150,250}",
        "rAttack": " ",
        "options": [
            {
                "id": 15600,
                "description": "Ethereum Wallet, PBKDF2-HMAC-SHA256",
                "example": "$ethereum$p*262144*3238383137313130353438343737383736323437353437383831373034343735*06eae7ee0a4b9e8abc02c9990e3730827396e8531558ed15bb733faf12a44ce1*e6d5891d4f199d31ec434fe25d9ecc2530716bc3b36d5bdbc1fab7685dda3946"
            },
            {
                "id": 16300,
                "description": "Ethereum Pre-Sale Wallet, PBKDF2-HMAC-SHA256",
                "example": "$ethereum$w*e94a8e49deac2d62206bf9bfb7d2aaea7eb06c1a378cfc1ac056cc599a569793c0ecc40e6a0c242dee2812f06b644d70f43331b1fa2ce4bd6cbb9f62dd25b443235bdb4c1ffb222084c9ded8c719624b338f17e0fd827b34d79801298ac75f74ed97ae16f72fccecf862d09a03498b1b8bd1d984fc43dd507ede5d4b6223a582352386407266b66c671077eefc1e07b5f42508bf926ab5616658c984968d8eec25c9d5197a4a30eed54c161595c3b4d558b17ab8a75ccca72b3d949919d197158ea5cfbc43ac7dd73cf77807dc2c8fe4ef1e942ccd11ec24fe8a410d48ef4b8a35c93ecf1a21c51a51a08f3225fbdcc338b1e7fdafd7d94b82a81d88c2e9a429acc3f8a5974eafb7af8c912597eb6fdcd80578bd12efddd99de47b44e7c8f6c38f2af3116b08796172eda89422e9ea9b99c7f98a7e331aeb4bb1b06f611e95082b629332c31dbcfd878aed77d300c9ed5c74af9cd6f5a8c4a261dd124317fb790a04481d93aec160af4ad8ec84c04d943a869f65f07f5ccf8295dc1c876f30408eac77f62192cbb25842470b4a5bdb4c8096f56da7e9ed05c21f61b94c54ef1c2e9e417cce627521a40a99e357dd9b7a7149041d589cbacbe0302db57ddc983b9a6d79ce3f2e9ae8ad45fa40b934ed6b36379b780549ae7553dbb1cab238138c05743d0103335325bd90e27d8ae1ea219eb8905503c5ad54fa12d22e9a7d296eee07c8a7b5041b8d56b8af290274d01eb0e4ad174eb26b23b5e9fb46ff7f88398e6266052292acb36554ccb9c2c03139fe72d3f5d30bd5d10bd79d7cb48d2ab24187d8efc3750d5a24980fb12122591455d14e75421a2074599f1cc9fdfc8f498c92ad8b904d3c4307f80c46921d8128*f3abede76ac15228f1b161dd9660bb9094e81b1b*d201ccd492c284484c7824c4d37b1593"
            },
        ]
    },
    {
        "id": 15700,
        "description": "Ethereum Wallet, SCRYPT"
    },
    {
        "id": 15900,
        "description": "DPAPI master key file version 2 + Active Directory domain context"
    },
    {
        "id": 15910,
        "description": "DPAPI masterkey file v2 (context 3)"
    },
    {
        "id": 16000,
        "description": "Tripcode"
    },
    {
        "id": 16100,
        "description": "TACACS+"
    },
    {
        "id": 16200,
        "description": "Apple Secure Notes"
    },
    {
        "id": 16400,
        "description": "CRAM-MD5 Dovecot"
    },
    {
        "id": 16500,
        "description": "JWT (JSON Web Token)"
    },
    {
        "regex": "^\\$electrum\\$[1-3]\\*[a-f0-9]{32,32}\\*[a-f0-9]{32,32}$",
        "rAttack": " ",
        "options": [
            {
                "id": 16600,
                "description": "Electrum Wallet (Salt-Type 1-3)",
                "example": "$electrum$1*44358283104603165383613672586868*c43a6632d9f59364f74c395a03d8c2ea"
            }
        ]
    },
    {
        "id": 16700,
        "description": "FileVault 2"
    },
    {
        "id": 16800,
        "description": "WPA-PMKID-PBKDF2"
    },
    {
        "id": 16801,
        "description": "WPA-PMKID-PMK"
    },
    {
        "id": 16900,
        "description": "Ansible Vault"
    },
    {
        "id": 17010,
        "description": "GPG (AES-128/AES-256 (SHA-1($pass)))"
    },
    {
        "regex": "^\\$pkzip2?\\$(1)\\*[0-9]{1}\\*[0-9]{1}\\*[0-9a-f]{1,3}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,4}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*(8)\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[a-f0-9]+\\*\\$\\/pkzip2?\\$$",
        "rAttack": " ",
        "options": [
            {
                "id": 17200,
                "description": "PKZIP (Compressed)",
                "example": "$pkzip2$1*1*2*0*e3*1c5*eda7a8de*0*28*8*e3*eda7*5096*a9fc1f4e951c8fb3031a6f903e5f4e3211c8fdc4671547bf77f6f682afbfcc7475d83898985621a7af9bccd1349d1976500a68c48f630b7f22d7a0955524d768e34868880461335417ddd149c65a917c0eb0a4bf7224e24a1e04cf4ace5eef52205f4452e66ded937db9545f843a68b1e84a2e933cc05fb36d3db90e6c5faf1bee2249fdd06a7307849902a8bb24ec7e8a0886a4544ca47979a9dfeefe034bdfc5bd593904cfe9a5309dd199d337d3183f307c2cb39622549a5b9b8b485b7949a4803f63f67ca427a0640ad3793a519b2476c52198488e3e2e04cac202d624fb7d13c2*$/pkzip2$"
            }
        ]
    },
    {
        "regex": "^\\$pkzip2?\\$(1)\\*[0-9]{1}\\*[0-9]{1}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}\\*(0)\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[a-f0-9]+\\*\\$\\/pkzip2?\\$$",
        "rAttack": " ",
        "options": [
            {
                "id": 17210,
                "description": "PKZIP (Uncompressed)",
                "example": "$pkzip2$1*1*2*0*1d1*1c5*eda7a8de*0*28*0*1d1*eda7*5096*1dea673da43d9fc7e2be1a1f4f664269fceb6cb88723a97408ae1fe07f774d31d1442ea8485081e63f919851ca0b7588d5e3442317fff19fe547a4ef97492ed75417c427eea3c4e146e16c100a2f8b6abd7e5988dc967e5a0e51f641401605d673630ea52ebb04da4b388489901656532c9aa474ca090dbac7cf8a21428d57b42a71da5f3d83fed927361e5d385ca8e480a6d42dea5b4bf497d3a24e79fc7be37c8d1721238cbe9e1ea3ae1eb91fc02aabdf33070d718d5105b70b3d7f3d2c28b3edd822e89a5abc0c8fee117c7fbfbfd4b4c8e130977b75cb0b1da080bfe1c0859e6483c42f459c8069d45a76220e046e6c2a2417392fd87e4aa4a2559eaab3baf78a77a1b94d8c8af16a977b4bb45e3da211838ad044f209428dba82666bf3d54d4eed82c64a9b3444a44746b9e398d0516a2596d84243b4a1d7e87d9843f38e45b6be67fd980107f3ad7b8453d87300e6c51ac9f5e3f6c3b702654440c543b1d808b62f7a313a83b31a6faaeedc2620de7057cd0df80f70346fe2d4dccc318f0b5ed128bcf0643e63d754bb05f53afb2b0fa90b34b538b2ad3648209dff587df4fa18698e4fa6d858ad44aa55d2bba3b08dfdedd3e28b8b7caf394d5d9d95e452c2ab1c836b9d74538c2f0d24b9b577*$/pkzip2$"
            }
        ]
    },
    {
        "regex": "^\\$pkzip2?\\$([2-8])\\*[0-9]{1}(\\*[0-9]{1}\\*[0-9a-f]{1,3}\\*([^0*][0-9a-f]{0,2})\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[0-9a-f]+)+\\*(8)\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[a-f0-9]+\\*\\$\\/pkzip2?\\$$",
        "rAttack": " ",
        "options": [
            {
                "id": 17220,
                "description": "PKZIP (Compressed Multi-File)",
                "example": "$pkzip2$3*1*1*0*8*24*a425*8827*d1730095cd829e245df04ebba6c52c0573d49d3bbeab6cb385b7fa8a28dcccd3098bfdd7*1*0*8*24*2a74*882a*51281ac874a60baedc375ca645888d29780e20d4076edd1e7154a99bde982152a736311f*2*0*e3*1c5*eda7a8de*0*29*8*e3*eda7*5096*1455781b59707f5151139e018bdcfeebfc89bc37e372883a7ec0670a5eafc622feb338f9b021b6601a674094898a91beac70e41e675f77702834ca6156111a1bf7361bc9f3715d77dfcdd626634c68354c6f2e5e0a7b1e1ce84a44e632d0f6e36019feeab92fb7eac9dda8df436e287aafece95d042059a1b27d533c5eab62c1c559af220dc432f2eb1a38a70f29e8f3cb5a207704274d1e305d7402180fd47e026522792f5113c52a116d5bb25b67074ffd6f4926b221555234aabddc69775335d592d5c7d22462b75de1259e8342a9ba71cb06223d13c7f51f13be2ad76352c3b8ed*$/pkzip2$"
            }
        ]
    },
    {
        "regex": "^\\$pkzip2?\\$([2-8])\\*[0-9]{1}(\\*[0-9]{1}\\*[0-9a-f]{1,8}\\*([0-9a-f]{1,8})\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[0-9a-f]+)+\\*([08])\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[a-f0-9]+\\*\\$\\/pkzip2?\\$$",
        "rAttack": " ",
        "options": [
            {
                "id": 17225,
                "description": "PKZIP (Mixed Multi-File)",
                "example": "$pkzip2$3*1*1*0*0*24*3e2c*3ef8*0619e9d17ff3f994065b99b1fa8aef41c056edf9fa4540919c109742dcb32f797fc90ce0*1*0*8*24*431a*3f26*18e2461c0dbad89bd9cc763067a020c89b5e16195b1ac5fa7fb13bd246d000b6833a2988*2*0*23*17*1e3c1a16*2e4*2f*0*23*1e3c*3f2d*54ea4dbc711026561485bbd191bf300ae24fa0997f3779b688cdad323985f8d3bb8b0c*$/pkzip2$"
            }
        ]
    },
    {
        "regex": "^\\$pkzip2?\\$([2-8])\\*[0-9]{1}(\\*[0-9]{1}\\*[0-9a-f]{1,3}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,8}(\\*[0-9a-f]{1,8})?\\*[0-9a-f]{1,8}\\*[0-9a-f]+)+\\*\\$\\/pkzip2?\\$$",
        "rAttack": " ",
        "options": [
            {
                "id": 17230,
                "description": "PKZIP (Compressed Multi-File Checksum-Only)",
                "example": "$pkzip2$8*1*1*0*8*24*a425*8827*3bd479d541019c2f32395046b8fbca7e1dca218b9b5414975be49942c3536298e9cc939e*1*0*8*24*2a74*882a*537af57c30fd9fd4b3eefa9ce55b6bff3bbfada237a7c1dace8ebf3bb0de107426211da3*1*0*8*24*2a74*882a*5f406b4858d3489fd4a6a6788798ac9b924b5d0ca8b8e5a6371739c9edcfd28c82f75316*1*0*8*24*2a74*882a*1843aca546b2ea68bd844d1e99d4f74d86417248eb48dd5e956270e42a331c18ea13f5ed*1*0*8*24*2a74*882a*aca3d16543bbfb2e5d2659f63802e0fa5b33e0a1f8ae47334019b4f0b6045d3d8eda3af1*1*0*8*24*2a74*882a*fbe0efc9e10ae1fc9b169bd060470bf3e39f09f8d83bebecd5216de02b81e35fe7e7b2f2*1*0*8*24*2a74*882a*537886dbabffbb7cac77deb01dc84760894524e6966183b4478a4ef56f0c657375a235a1*1*0*8*24*eda7*5096*40eb30ef1ddd9b77b894ed46abf199b480f1e5614fde510855f92ae7b8026a11f80e4d5f*$/pkzip2$"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{56}$",
        "rAttack": " ",
        "options": [
            {
                "id": 1300,
                "description": "SHA-224",
                "example": "e4fa1555ad877bf0ec455483371867200eee89550a93eff2f95a6198"
            },
            {
                "id": 17300,
                "description": "SHA3-224",
                "example": "412ef78534ba6ab0e9b1607d3e9767a25c1ea9d5e83176b4c2817a6c"
            },
            {
                "id": 17700,
                "description": "Keccak-224",
                "example": "e1dfad9bafeae6ef15f5bbb16cf4c26f09f5f1e7870581962fc84636"
            },
        ]
    },
    {
        "id": 17500,
        "description": "SHA3-384"
    },
    {
        "regex": "^[a-f0-9]{64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 17800,
                "description": "Keccak-256",
                "example": "203f88777f18bb4ee1226627b547808f38d90d3e106262b5de9ca943b57137b6"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{128}$",
        "rAttack": " ",
        "options": [
            {
                "id": 18000,
                "description": "Keccak-512",
                "example": "2fbf5c9080f0a704de2e915ba8fdae6ab00bbc026b2c1c8fa07da1239381c6b7f4dfd399bf9652500da723694a4c719587dd0219cb30eabe61210a8ae4dc0b03"
            },
        ]
    },
    {
        "id": 18100,
        "description": "TOTP (HMAC-SHA1)"
    },
    {
        "regex": "^\\$krb5asrep\\$23\\$[^:]+:[a-f0-9]{32,32}\\$[a-f0-9]{64,40960}$",
        "rAttack": " ",
        "options": [
            {
                "id": 18200,
                "description": "Kerberos 5 AS-REP etype 23",
                "example": "$krb5asrep$23$user@domain.com:3e156ada591263b8aab0965f5aebd837$007497cb51b6c8116d6407a782ea0e1c5402b17db7afa6b05a6d30ed164a9933c754d720e279c6c573679bd27128fe77e5fea1f72334c1193c8ff0b370fadc6368bf2d49bbfdba4c5dccab95e8c8ebfdc75f438a0797dbfb2f8a1a5f4c423f9bfc1fea483342a11bd56a216f4d5158ccc4b224b52894fadfba3957dfe4b6b8f5f9f9fe422811a314768673e0c924340b8ccb84775ce9defaa3baa0910b676ad0036d13032b0dd94e3b13903cc738a7b6d00b0b3c210d1f972a6c7cae9bd3c959acf7565be528fc179118f28c679f6deeee1456f0781eb8154e18e49cb27b64bf74cd7112a0ebae2102ac"
            }
        ]
    },
    {
        "id": 18300,
        "description": "Apple File System (APFS)"
    },
    {
        "regex": "^\\$odf\\$\\*1\\*1\\*100000\\*32\\*[a-f0-9]{64}\\*16\\*[a-f0-9]{32}\\*16\\*[a-f0-9]{32}\\*0\\*[a-f0-9]{2048}$",
        "rAttack": " ",
        "options": [
            {
                "id": 18400,
                "description": "Open Document Format (ODF) 1.2 (SHA-256, AES)",
                "example": "$odf$*1*1*100000*32*751854d8b90731ce0579f96bea6f0d4ac2fb2f546b31f1b6af9a5f66952a0bf4*16*2185a966155baa9e2fb597298febecbc*16*c18eaae34bcbbe9119be017fe5f8b52d*0*051e0f1ce0e866f2b771029e03a6c7119aad132af54c4e45824f16f61f357a40407ab82744fe6370c7b2346075fcd4c2e58ab244411b3ab1d532a46e2321599ef13c3d3472fc2f14d480d8c33215e473da67f90540279d3ef1f62dde314fa222796046e496c951235ddf88aa754620b7810d22ebc8835c90dce9276946f52b8ea7d95d2f86e4cc725366a8b3edacc2ce88518e535991a5f84d5ea8795dc02bfb731b5f202ecaf7d4b245d928c4248709fcdf3fba2acf1a08be0c1eee7dbeda07e8c3a6983565635e99952b8ad79d31c965f245ae90b5cc3dba6387898c66fa35cad9ac9595c41b62e68efcdd73185b38e220cf004269b77ec6974474b03b7569afc3b503a2bf8b2d035756f3f4cb880d9ba815e5c944508a0bde214076c35bf0e0814a96d21ccaa744c9056948ed935209f5c7933841d2ede3d28dd84da89d477d4a0041ce6d8ddab891d929340db6daa921d69b46fd5aee306d0bcef88c38acbb495d0466df7e2f744e3d10201081215c02db5dd479a4cda15a3338969c7baec9d3d2c378a8dd30449319b149dc3b4e7f00996a59fcb5f243d0df2cbaf749241033f7865aefa960adfeb8ebf205b270f90b1f82c34f80d5a8a0db7aec89972a32f5daa2a73c5895d1fced01b3ab8e576bd2630eff01cad97781f4966d4b528e1b15f011f28ae907a352073c96b203adc7742d2b79b2e2f440b17e7856ae119e08d15d8bdf951f6d4a3f9b516da2d9a8f9dd93488f8e0119f3da19138ab787f0d7098a652cccd914aa0ff81d375bd6a5a165acc936f591639059287975cfc3ca4342e5f9501b3249a76d14e56d6d56b319e036bc0449ac7b5afa24ffbea11babed8183edf8d4fdca1c3f0d23bfd4a02797627d556634f1a9304e03737604bd86f6b5a26aa687d6df73383e0f7dfe62a131e8dbb8c3f4f13d24857dd29d76984eac6c45df7428fc79323ffa1f4e7962d705df74320141ed1f16d1ad483b872168df60315ffadbfa1b7f4afaed8a0017421bf5e05348cb5c707a5e852d6fee6077ec1c33bc707bcd97b7701ee05a03d6fa78b0d31c8c97ea16e0edf434961bd5cc7cbb7eb2553730f0405c9bd21cee09b3f7c1bc57779fdfc15f3935985737a1b522004c4436b631a39a66e8577a03f5020e6aa41952c0662c8c57f66caa483b47af38b8cb5d457245fd3241749e17433e6f929233e8862d7c584111b1991b2d6e94278e7e6e1908cee5a83d94c78b75a84a695d25aeb9fdde72174fe6dd75e8d406671f44892a385a4a1e249f61ebc993e985607423a0a5742e668d52c1ebf5cecae7c2b7908f4627b92ec49354a9ccff8cb5763ad074a00e65a485a41bf4c25ce7e6fae49358a58547b1c0ca79713e297310c0a367c3de196f1dd685ca4be643bdf1e4f6b034211d020557e37a3b6614d061010b4a3416b6b279728c245d3322"
            }
        ]
    },
    {
        "id": 18500,
        "description": "sha1(md5(md5($pass)))"
    },
    {
        "id": 18600,
        "description": "Open Document Format (ODF) 1.1 (SHA-1, Blowfish)"
    },
    {
        "id": 18700,
        "description": "Java Object hashCode()"
    },
    {
        "id": 18800,
        "description": "Blockchain, My Wallet, Second Password (SHA256)"
    },
    {
        "regex": "^\\$ab\\$[0-9]{1}\\*[0-9]{1}\\*[0-9]{1,6}\\*[a-f0-9]{128}\\*[a-f0-9]{128}\\*[a-f0-9]{32}\\*[a-f0-9]{192}",
        "rAttack": " ",
        "options": [
            {
                "id": 18900,
                "description": "Android Backup",
                "example": "$ab$5*0*10000*b8900e4885ff9cad8f01ee1957a43bd633fea12491440514ae27aa83f2f5c006ec7e7fa0bce040add619919b4eb60608304b7d571a2ed87fd58c9ad6bc5fcf4c*7d254d93e16be9312fb1ccbfc6265c40cb0c5eab7b605a95a116e2383fb1cf12b688223f96221dcd2bf5410d4ca6f90e0789ee00157fa91658b42665d6b6844c*fc9f6be604d1c59ac32664ec2c5b9b30*00c4972149af3adcc235899e9d20611ea6e8de2212afcb9fcfefde7e35b691c2d0994eb47e4f9a260526ba47f4caea71af9c7fadcd5685d50126276f6acdd59966528b13ccc26036a0eaba2f2451aa64b05766d0edd03c988dcf87e2a9eec52d"
            }
        ]
    },
    {
        "id": 19000,
        "description": "QNX /etc/shadow (MD5)"
    },
    {
        "id": 19100,
        "description": "QNX /etc/shadow (SHA256)"
    },
    {
        "id": 19200,
        "description": "QNX /etc/shadow (SHA512)"
    },
    {
        "id": 19300,
        "description": "sha1($salt1.$pass.$salt2)"
    },
    {
        "id": 19500,
        "description": "Ruby on Rails Restful-Authentication"
    },
    {
        "regex": "^\\$krb5tgs\\$17\\$[^$]{1,512}\\$[^$]{1,512}\\$[^$]{1,4}?\\$?[a-f0-9]{1,32}\\$[a-f0-9]{64,40960}$",
        "rAttack": " ",
        "options": [
            {
                "id": 19600,
                "description": "Kerberos 5 TGS-REP etype 17 (AES128-CTS-HMAC-SHA1-96)",
                "example": "$krb5tgs$17$user$realm$ae8434177efd09be5bc2eff8$90b4ce5b266821adc26c64f71958a475cf9348fce65096190be04f8430c4e0d554c86dd7ad29c275f9e8f15d2dab4565a3d6e21e449dc2f88e52ea0402c7170ba74f4af037c5d7f8db6d53018a564ab590fc23aa1134788bcc4a55f69ec13c0a083291a96b41bffb978f5a160b7edc828382d11aacd89b5a1bfa710b0e591b190bff9062eace4d26187777db358e70efd26df9c9312dbeef20b1ee0d823d4e71b8f1d00d91ea017459c27c32dc20e451ea6278be63cdd512ce656357c942b95438228e"
            }
        ]
    },
    {
        "regex": "^\\$krb5tgs\\$18\\$[^$]{1,512}\\$[^$]{1,512}\\$[^$]{1,4}?\\$?[a-f0-9]{1,32}\\$[a-f0-9]{64,40960}",
        "rAttack": " ",
        "options": [
            {
                "id": 19700,
                "description": "Kerberos 5 TGS-REP etype 18 (AES256-CTS-HMAC-SHA1-96)",
                "example": "$krb5tgs$18$user$realm$8efd91bb01cc69dd07e46009$7352410d6aafd72c64972a66058b02aa1c28ac580ba41137d5a170467f06f17faf5dfb3f95ecf4fad74821fdc7e63a3195573f45f962f86942cb24255e544ad8d05178d560f683a3f59ce94e82c8e724a3af0160be549b472dd83e6b80733ad349973885e9082617294c6cbbea92349671883eaf068d7f5dcfc0405d97fda27435082b82b24f3be27f06c19354bf32066933312c770424eb6143674756243c1bde78ee3294792dcc49008a1b54f32ec5d5695f899946d42a67ce2fb1c227cb1d2004c0"
            }
        ]
    },
    {
        "regex": "^\\$krb5pa\\$17\\$[^$]{1,512}\\$[^$]{1,512}\\$[a-f0-9]{104,112}$",
        "rAttack": " ",
        "options": [
            {
                "id": 19800,
                "description": "Kerberos 5, etype 17, Pre-Auth",
                "example": "$krb5pa$17$hashcat$HASHCATDOMAIN.COM$a17776abe5383236c58582f515843e029ecbff43706d177651b7b6cdb2713b17597ddb35b1c9c470c281589fd1d51cca125414d19e40e333"
            }
        ]
    },
    {
        "regex": "^\$krb5pa\$18\$[^$]{1,512}\$[^$]{1,512}\$[a-f0-9]{104,112}$",
        "rAttack": " ",
        "options": [
            {
                "id": 19900,
                "description": "Kerberos 5, etype 18, Pre-Auth",
                "example": "$krb5pa$18$hashcat$HASHCATDOMAIN.COM$96c289009b05181bfd32062962740b1b1ce5f74eb12e0266cde74e81094661addab08c0c1a178882c91a0ed89ae4e0e68d2820b9cce69770"
            }
        ]
    },
    {
        "id": 20011,
        "description": "DiskCryptor SHA512 + XTS 512 bit (AES) / DiskCryptor SHA512 + XTS 512 bit (Twofish) / DiskCryptor SHA512 + XTS 512 bit (Serpent)"
    },
    {
        "id": 20012,
        "description": "DiskCryptor SHA512 + XTS 1024 bit (AES-Twofish) / DiskCryptor SHA512 + XTS 1024 bit (Twofish-Serpent) / DiskCryptor SHA512 + XTS 1024 bit (Serpent-AES)"
    },
    {
        "id": 20013,
        "description": "DiskCryptor SHA512 + XTS 1536 bit (AES-Twofish-Serpent)"
    },
    {
        "regex": "^\$pbkdf2-sha512\$[0-9]+\$[a-z0-9\/.]+\$[a-z0-9\/.]{86}$",
        "rAttack": " ",
        "options": [
            {
                "id": 20200,
                "description": "Python passlib pbkdf2-sha512",
                "example": "$pbkdf2-sha512$25000$LyWE0HrP2RsjZCxlDGFMKQ$1vC5Ohk2mCS9b6akqsEfgeb4l74SF8XjH.SljXf3dMLHdlY1GK9ojcCKts6/asR4aPqBmk74nCDddU3tvSCJvw"
            }
        ]
    },
    {
        "regex": "^\\$pbkdf2-sha256\\$[0-9]+\\$[a-z0-9\\/.]+\\$[a-z0-9\\/.]{43}$",
        "rAttack": " ",
        "options": [
            {
                "id": 20300,
                "description": "Python passlib pbkdf2-sha256",
                "example": "$pbkdf2-sha256$29000$x9h7j/Ge8x6DMEao1VqrdQ$kra3R1wEnY8mPdDWOpTqOTINaAmZvRMcYd8u5OBQP9A"
            }
        ]
    },
    {
        "regex": "^\\$pbkdf2(-sha1)?\\$[0-9]+\\$[a-z0-9\\/.]+\\$[a-z0-9\\/.]{27}$",
        "rAttack": " ",
        "options": [
            {
                "id": 20400,
                "description": "Python passlib pbkdf2-sha1",
                "example": "$pbkdf2$131000$r5WythYixPgfQ2jt3buXcg$8Kdr.QQEOaZIXNOrrru36I/.6Po"
            }
        ]
    },
    {
        "regex": "^[a-f0-9]{24}$",
        "rAttack": " ",
        "options": [
            {
                "id": 20500,
                "description": "PKZIP Master Key",
                "example": "f1eff5c0368d10311dcfc419"
            },
            {
                "id": 20510,
                "description": "PKZIP Master Key (6 byte optimization)",
                "example": "f1eff5c0368d10311dcfc419"
            },
        ]
    },
    {
        "id": 20600,
        "description": "Oracle Transportation Management (SHA256)"
    },
    {
        "id": 20710,
        "description": "sha256(sha256($pass).$salt)"
    },
    {
        "regex": "^\\$SHA\\$[a-z0-9]{1,16}\\$([a-f0-9]{32}|[a-f0-9]{40}|[a-f0-9]{64}|[a-f0-9]{128}|[a-f0-9]{140})$",
        "rAttack": " ",
        "options": [
            {
                "id": 20711,
                "description": "AuthMe sha256 (Minecraft)",
                "example": "$SHA$7218532375810603$bfede293ecf6539211a7305ea218b9f3f608953130405cda9eaba6fb6250f824"
            }
        ]
    },
    {
        "id": 20720,
        "description": "sha256($salt.sha256($pass))"
    },
    {
        "id": 20800,
        "description": "sha256(md5($pass))"
    },
    {
        "id": 20900,
        "description": "md5(sha1($pass).md5($pass).sha1($pass))"
    },
    {
        "id": 21000,
        "description": "BitShares v0.x - sha512(sha512_bin(pass))"
    },
    {
        "id": 21100,
        "description": "sha1(md5($pass.$salt))"
    },
    {
        "id": 21200,
        "description": "md5(sha1($salt).md5($pass))"
    },
    {
        "id": 21300,
        "description": "md5($salt.sha1($salt.$pass))"
    },
    {
        "id": 21400,
        "description": "sha256(sha256_bin(pass))"
    },
    {
        "id": 21420,
        "description": "sha256($salt.sha256_bin($pass))"
    },
    {
        "id": 21500,
        "description": "SolarWinds Orion"
    },
    {
        "id": 21501,
        "description": "SolarWinds Orion v2"
    },
    {
        "id": 21600,
        "description": "Web2py pbkdf2-sha512"
    },
    {
        "regex": "^\\$electrum\\$4\\*[a-f0-9]{1,66}\\*[a-f0-9]{128,32768}\\*[a-f0-9]{64,64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 21700,
                "description": "Electrum Wallet (Salt-Type 4)",
                "example": "$electrum$4*03eae309d8bda5dcbddaae8145469193152763894b7260a6c4ba181b3ac2ed5653*8c594086a64dc87a9c1f8a69f646e31e8d3182c3c722def4427aa20684776ac26092c6f60bf2762e27adfa93fe1e952dcb8d6362224b9a371953aa3a2edb596ce5eb4c0879c4353f2cc515ec6c9e7a6defa26c5df346d18a62e9d40fcc606bc8c34322bf2212f77770a683788db0baf4cb43595c2a27fe5ff8bdcb1fd915bcd725149d8ee8f14c71635fecb04da5dde97584f4581ceb7d907dceed80ae5daa8352dda20b25fd6001e99a96b7cf839a36cd3f5656304e6998c18e03dd2fb720cb41386c52910c9cb83272c3d50f3a6ff362ab8389b0c21c75133c971df0a75b331796371b060b32fe1673f4a041d7ae08bbdeffb45d706eaf65f99573c07972701c97766b4d7a8a03bba0f885eb3845dfd9152286e1de1f93e25ce04c54712509166dda80a84c2d34652f68e6c01e662f8b1cc7c15103a4502c29332a4fdbdda470c875809e15aab3f2fcb061ee96992ad7e8ab9da88203e35f47d6e88b07a13b0e70ef76de3be20dc06facbddc1e47206b16b44573f57396265116b4d243e77d1c98bc2b28aa3ec0f8d959764a54ecdd03d8360ff2823577fe2183e618aac15b30c1d20986841e3d83c0bfabcedb7c27ddc436eb7113db927e0beae7522b04566631a090b214660152a4f4a90e19356e66ee7309a0671b2e7bfde82667538d193fc7e397442052c6c611b6bf0a04f629a1dc7fa9eb44bfad1bfc6a0bce9f0564c3b483737e447720b7fd038c9a961a25e9594b76bf8c8071c83fcacd689c7469f698ee4aee4d4f626a73e21ce4967e705e4d83e1145b4260330367d8341c84723a1b02567ffbab26aac3afd1079887b4391f05d09780fc65f8b4f68cd51391c06593919d7eafd0775f83045b8f5c2e59cef902ff500654ea29b7623c7594ab2cc0e05ffe3f10abc46c9c5dac824673c307dcbff5bc5f3774141ff99f6a34ec4dd8a58d154a1c72636a2422b8fafdef399dec350d2b91947448582d52291f2261d264d29399ae3c92dc61769a49224af9e7c98d74190f93eb49a44db7587c1a2afb5e1a4bec5cdeb8ad2aac9728d5ae95600c52e9f063c11cdb32b7c1d8435ce76fcf1fa562bd38f14bf6c303c70fb373d951b8a691ab793f12c0f3336d6191378bccaed32923bba81868148f029e3d5712a2fb9f610997549710716db37f7400690c8dfbed12ff0a683d8e4d0079b380e2fd856eeafb8c6eedfac8fb54dacd6bd8a96e9f8d23ea87252c1a7c2b53efc6e6aa1f0cc30fbaaf68ee7d46666afc15856669cd9baebf9397ff9f322cce5285e68a985f3b6aadce5e8f14e9f9dd16764bc4e9f62168aa265d8634ab706ed40b0809023f141c36717bd6ccef9ec6aa6bfd2d00bda9375c2fee9ebba49590a166*1b0997cf64bb2c2ff88cb87bcacd9729d404bd46db18117c20d94e67c946fedc"
            }
        ]
    },
    {
        "regex": "^\\$electrum\\$5\\*[a-f0-9]{66,66}\\*[a-f0-9]{2048,2048}\\*[a-f0-9]{64,64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 21800,
                "description": "Electrum Wallet (Salt-Type 5)",
                "example": "$electrum$5*02170fee7c35f1ef3b229edc90fbd0793b688a0d6f41137a97aab2343d315cce16*94cf72d8f5d774932b414a3344984859e43721268d2eb35fa531de5a2fc7024b463c730a54f4f46229dd9fede5034b19ac415c2916e9c16b02094f845795df0c397ff76d597886b1f9e014ad1a8f64a3f617d9900aa645b3ba86f16ce542251fc22c41d93fa6bc118be96d9582917e19d2a299743331804cfc7ce2c035367b4cbcfb70adfb1e10a0f2795769f2165d8fd13daa8b45eeac495b5b63e91a87f63b42e483f84a881e49adecacf6519cb564694b42dd9fe80fcbc6cdb63cf5ae33f35255266f5c2524dd93d3cc15eba0f2ccdc3c109cc2d7e8f711b8b440f168caf8b005e8bcdfe694148e94a04d2a738f09349a96600bd8e8edae793b26ebae231022f24e96cb158db141ac40400a9e9ef099e673cfe017281537c57f82fb45c62bdb64462235a6eefb594961d5eb2c46537958e4d04250804c6e9f343ab7a0db07af6b8a9d1a6c5cfcd311b8fb8383ac9ed9d98d427d526c2f517fc97473bd87cb59899bd0e8fb8c57fa0f7e0d53daa57c972cf92764af4b1725a5fb8f504b663ec519731929b3caaa793d8ee74293eee27d0e208a60e26290bc546e6fa9ed865076e13febfea249729218c1b5752e912055fbf993fbac5df2cca2b37c5e0f9c30789858ceeb3c482a8db123966775aeed2eee2fc34efb160d164929f51589bff748ca773f38978bff3508d5a7591fb2d2795df983504a788071f469d78c88fd7899cabbc5804f458653d0206b82771a59522e1fa794d7de1536c51a437f5d6df5efd6654678e5794ca429b5752e1103340ed80786f1e9da7f5b39af628b2212e4d88cd36b8a7136d50a6b6e275ab406ba7c57cc70d77d01c4c16e9363901164fa92dc9e9b99219d5376f24862e775968605001e71b000e2c7123b4b43f3ca40db17efd729388782e46e64d43ccb947db4eb1473ff1a3836b74fe312cd1a33b73b8b8d80c087088932277773c329f2f66a01d6b3fc1e651c56959ebbed7b14a21b977f3acdedf1a0d98d519a74b50c39b3052d840106da4145345d86ec0461cddafacc2a4f0dd646457ad05bf04dcbcc80516a5c5ed14d2d639a70e77b686f19cbfb63f546d81ae19cc8ba35cce3f3b5b9602df25b678e14411fecec87b8347f5047513df415c6b1a3d39871a6bcb0f67d9cf8311596deae45fd1d84a04fd58f1fd55c5156b7309af09094c99a53674809cb87a45f95a2d69f9997a38085519cb4e056f9efd56672a2c1fe927d5ea8eec25b8aff6e56f9a2310f1a481daf407b8adf16201da267c59973920fd21bb087b88123ef98709839d6a3ee34efb8ccd5c15ed0e46cff3172682769531164b66c8689c35a26299dd26d09233d1f64f9667474141cf9c6a6de7f2bc52c3bb44cfe679ff4b912c06df406283836b3581773cb76d375304f46239da5996594a8d03b14c02f1b35a432dc44a96331242ae31174*33a7ee59d6d17ed1ee99dc0a71771227e6f3734b17ba36eb589bdced56244135"
            }
        ]
    },
    {
        "id": 22000,
        "description": "WPA-PBKDF2-PMKID+EAPOL"
    },
    {
        "id": 22001,
        "description": "WPA-PMK-PMKID+EAPOL"
    },
    {
        "regex": "^\\$bitlocker\\$[0-9]\\$[0-9]{2}\\$[a-f0-9]{32}\\$[a-f0-9]{7}\\$[a-f0-9]{2}\\$[a-f0-9]{24}\\$[a-f0-9]{2}\\$[a-f0-9]{120}",
        "rAttack": " ",
        "options": [
            {
                "id": 22100,
                "description": "BitLocker",
                "example": "$bitlocker$1$16$6f972989ddc209f1eccf07313a7266a2$1048576$12$3a33a8eaff5e6f81d907b591$60$316b0f6d4cb445fb056f0e3e0633c413526ff4481bbf588917b70a4e8f8075f5ceb45958a800b42cb7ff9b7f5e17c6145bf8561ea86f52d3592059fb"
            }
        ]
    },
    {
        "id": 22200,
        "description": "Citrix NetScaler (SHA512)"
    },
    {
        "id": 22300,
        "description": "sha256($salt.$pass.$salt)"
    },
    {
        "regex": "^\\$telegram\\$[a-f0-9*]{99}",
        "rAttack": " ",
        "options": [
            {
                "id": 22301,
                "description": "Telegram client app passcode (SHA256)",
                "example": "$telegram$0*518c001aeb3b4ae96c6173be4cebe60a85f67b1e087b045935849e2f815b5e41*25184098058621950709328221838128"
            }
        ]
    },
    {
        "id": 22400,
        "description": "AES Crypt (SHA256)"
    },
    {
        "id": 22500,
        "description": "MultiBit Classic .key (MD5)"
    },
    {
        "id": 22600,
        "description": "Telegram Desktop App Passcode (PBKDF2-HMAC-SHA1)",
        "example": "$telegram$1*4000*913a7e42143b4eed0fb532dacfa04e3a0eae036ae66dd02de76323046c575531*cde5f7a3bda3812b4a3cd4df1269c6be18ca7536981522c251cab531c274776804634cdca5313dc8beb9895f903a40d874cd50dbb82e5e4d8f264820f3f2e2111a5831e1a2f16b1a75b2264c4b4485dfe0f789071130160af205f9f96aef378ee05602de2562f8c3b136a75ea01f54f4598af93f9e7f98eb66a5fd3dabaa864708fe0e84b59b77686974060f1533e3acc5367bc493915b5614603cf5601cfa0a6b8eae4c4bd24948176dd7ff470bc0863f35fdfce31a667c70e37743f662bc9c5ec86baff3ebb6bf7de96bcdfaca18baf9617a979424f792ef6e65e346ea2cbc1d53377f47c3fc681d7eda8169e6e20cd6a22dd94bf24933b8ffc4878216fa9edc7c72a073446a14b63e12b223f840217a7eac51b6afcc15bfa12afd3e85d3bd"
    },
    {
        "id": 22700,
        "description": "MultiBit HD (scrypt)"
    },
    {
        "id": 22911,
        "description": "RSA/DSA/EC/OPENSSH Private Keys ($0$)"
    },
    {
        "id": 22921,
        "description": "RSA/DSA/EC/OPENSSH Private Keys ($6$)"
    },
    {
        "id": 22931,
        "description": "RSA/DSA/EC/OPENSSH Private Keys ($1, $3$)"
    },
    {
        "regex": "^\\$sshng\\$4\\$16\\$[0-9]{32}\\$1232\\$[a-f0-9]{2464}$",
        "rAttack": " ",
        "options": [
            {
                "id": 22941,
                "description": "RSA/DSA/EC/OPENSSH Private Keys ($4$)",
                "example": "$sshng$4$16$01684556100059289727957814500256$1232$b04d45fdfdf02a9ca91cbc9c53f9e59956822c72c718929aca9251cffd9ac48e48c490b7b6b6043df3a70cf5fbcc2f358b0e8b70d39155c93032b0fd79ec68f6cb8b7de8422ec95cb027a9eaacc453b0b99b5d3f8d6771d6b95b0242a1d8664de8598e8d6b6d6ee360fda5ae0106061a79e88ef2eef98a000b638f8fdc367155ec2d1120b366f74f0933efe5d174e7107db29dc8fb592b22b9837114415d78036c116b2d31b2080c7159442f2d1a61900f5ae4913548c8e7fc716dd4f812bc7e57b2dd5d3f56c6ae0e91c3bc2897d9341cb282d86b915d43cf20ad16fbd2056104529576142354a430281f5e458923ef8014ff9950351798bfcbbcb66cb98bb2cccea48c134b0e05e978d4308c82617869b207f0ed7b227893f2cdde2d6b6a98246de8a2494d5e018a84724780fbe8d1fa91c922908d18ccffbbbbc81e6578fe8bb5c8596a8cf689f3f12b810dee95887e12439e487313229a37913e3cd12bddba3bac94fab03aad8607f6034fa87f7a7a2ac74d0c0a6e6bc905f569221861e1e388cf379cda799d7b56eac58440d17fe97fa68a537d34317376c00dfa9a99e04725a0d2fcf27ee50463e725813c96fe2eed16de59e8a6944d903e11f7923d57ae6d4a1f8085ce19f4d180f13027806f3965fdf875ea092f103f28a5f42f356254958fa7eb0bca2389a6ad4e305640cc64501e6b16330b063037b1cf6fe64131f308e50d9d1dc687ffa487681941084ff21cb54c1b5903b7a78d9913595fa0124f1dde49b1bee2ea83837efe34e2cd6051a4a7a1437eaa84ad332ffd9946b952ed634948789d9541820a0f9c6f44ab6d3cad645743c76c54e79bfdc4fb8e43a0fd7d871baea98e78131bc530b6d736fa1ec5ac70438609497ab2ff8d516146b4b1b3488791cb84dccc0096b570e2ffb3a93cccefec0af7ce616a64466d2d4196941ba9e051dc00ed05e963a7b4a286973ee0b5df4fd92dfb0b229b10730d454832d945c6a596862212d109ce78ac14ffb5d775548b2f3e2ae4be059a24465cc10b7c810f8cc3db7cb327619cc104ebea575ac097d20701dc623f7aa893b785cc20851f3972390e00ab3355655f7d5bea323832c17d8e078e917843ef7fcaca349366092b6743bf7511d5fceb2d992fbd18574be532365be41ad80a114704a64a7aefdf98c907aa10e4d5c547dd8d21647ea9d5c975fe1b24525d94c3eb03e071742fd5f09f22da669b649fac9f87d8cf16c475d006421f69a9b2d5c4037ccc9bf9f0aa0e7df8ac5fcb0d88a528833f9640799026d2fe8694fa1a0307c5f24002172464b290bedd85667800edbff2f1de7119e5b65730a24922e42d53ef28b0a59817a298426dc72e29a85e59e3d777b19eb934bcd620a903aff72927cdbe7253f77694ab0ef970378b4347f6166ca2a40b23cc31970f0cbefd08d2d72bf2c3961d67c73a5a24f75a65e540dc5735520b0d81250af8980ddca3e22a9b25773afd27c76e564ff437d4208df14d802f1d0848390f45924cdd6ced3c9ffb726bb358b334ea0e0481acdd103f2db05f508f62588621d0b8fa274a69eba0d418d85086d9139391f7e28dc54fe9bab801f1fea854f27ad2e5907ae6f9a4b4527d16a8af3c8cbe2c6d82209dc6c7da060da58294eb00380598330c4c19d45581d09e04c0153a8559700b3a8ceab9b8124f84d397356cd9e38e3916afc1f63a3e1dfbc7df8dd0a7d0704e38a0ea523dfc2b9defd5"
            }
        ]
    },
    {
        "id": 22951,
        "description": "RSA/DSA/EC/OPENSSH Private Keys ($5$)"
    },
    {
        "regex": "^\\$zip3\\$\\*[0-9]\\*[0-9]\\*128\\*[0-9]\\*[a-f0-9]{0,32}\\*[a-f0-9]{288}\\*[0-9]\\*[0-9]\\*[0-9]\\*[^\\s]{0,64}",
        "rAttack": " ",
        "options": [
            {
                "id": 23001,
                "description": "SecureZIP AES-128",
                "example": "$zip3$*0*1*128*0*b4630625c92b6e7848f6fd86*df2f62611b3d02d2c7e05a48dad57c7d93b0bac1362261ab533807afb69db856676aa6e350320130b5cbf27c55a48c0f75739654ac312f1cf5c37149557fc88a92c7e3dde8d23edd2b839036e88092a708b7e818bf1b6de92f0efb5cce184cceb11db6b3ca0527d0bdf1f1137ee6660d9890928cd80542ac1f439515519147c14d965b5ba107c6227f971e3e115170bf*0*0*0*file.txt"
            }
        ]
    },
    {
        "regex": "^\\$zip3\\$\\*[0-9]\\*[0-9]\\*192\\*[0-9]\\*[a-f0-9]{0,32}\\*[a-f0-9]{288}\\*[0-9]\\*[0-9]\\*[0-9]\\*[^\\s]{0,64}",
        "rAttack": " ",
        "options": [
            {
                "id": 23002,
                "description": "SecureZIP AES-192",
                "example": "$zip3$*0*1*192*0*53ff2de8c280778e1e0ab997*603eb37dbab9ea109e2c405e37d8cae1ec89e1e0d0b9ce5bf55d1b571c343b6a3df35fe381c30249cb0738a9b956ba8e52dfc5552894296300446a771032776c811ff8a71d9bb3c4d6c37016c027e41fea2d157d5b0ce17804b1d7c1606b7c1121d37851bd705e001f2cd755bbf305966d129a17c1d48ff8e87cfa41f479090cd456527db7d1d43f9020ad8e73f851a5*0*0*0*file.txt"
            }
        ]
    },
    {
        "regex": "^\\$zip3\\$\\*[0-9]\\*[0-9]\\*256\\*[0-9]\\*[a-f0-9]{0,32}\\*[a-f0-9]{288}\\*[0-9]\\*[0-9]\\*[0-9]\\*[^\\s]{0,64}",
        "rAttack": " ",
        "options": [
            {
                "id": 23003,
                "description": "SecureZIP AES-256",
                "example": "$zip3$*0*1*256*0*39bff47df6152a0214d7a967*65ff418ffb3b1198cccdef0327c03750f328d6dd5287e00e4c467f33b92a6ef40a74bb11b5afad61a6c3c9b279d8bd7961e96af7b470c36fc186fd3cfe059107021c9dea0cf206692f727eeca71f18f5b0b6ee1f702b648bba01aa21c7b7f3f0f7d547838aad46868155a04214f22feef7b31d7a15e1abe6dba5e569c62ee640783bb4a54054c2c69e93ece9f1a2af9d*0*0*0*file.txt"
            }
        ]
    },
    {
        "id": 23100,
        "description": "Apple Keychain"
    },
    {
        "id": 23200,
        "description": "XMPP SCRAM PBKDF2-SHA1"
    },
    {
        "id": 23300,
        "description": "Apple iWork"
    },
    {
        "id": 23400,
        "description": "Bitwarden"
    },
    {
        "id": 23500,
        "description": "AxCrypt 2 AES-128"
    },
    {
        "id": 23600,
        "description": "AxCrypt 2 AES-256"
    },
    {
        "regex": "^\\$RAR3\\$\\*(1)\\*[0-9a-f]{1,16}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,16}\\*[0-9a-f]{1,16}\\*[01]\\*([0-9a-f]+|[^*]{1,64}\\*[0-9a-f]{1,16})\\*30$",
        "rAttack": " ",
        "options": [
            {
                "id": 23700,
                "description": "RAR3-p (Uncompressed)",
                "example": "$RAR3$*1*e54a73729887cb53*49b0a846*16*14*1*34620bcca8176642a210b1051901921e*30"
            }
        ]
    },
    {
        "regex": "^\\$RAR3\\$\\*(1)\\*[0-9a-f]{1,16}\\*[0-9a-f]{1,8}\\*[0-9a-f]{1,16}\\*[0-9a-f]{1,16}\\*[01]\\*([0-9a-f]+|[^*]{1,64}\\*[0-9a-f]{1,16})\\*(31|32|33|34|35)$",
        "rAttack": " ",
        "options": [
            {
                "id": 23800,
                "description": "RAR3-p (Compressed)",
                "example": "$RAR3$*1*ad56eb40219c9da2*834064ce*32*13*1*eb47b1abe17a1a75bce6c92ab1cef3f4126035ea95deaf08b3f32a0c7b8078e1*33"
            }
        ]
    },
    {
        "id": 23900,
        "description": "BestCrypt v3 Volume Encryption"
    },
    {
        "id": 24100,
        "description": "MongoDB ServerKey SCRAM-SHA-1"
    },
    {
        "id": 24200,
        "description": "MongoDB ServerKey SCRAM-SHA-256"
    },
    {
        "id": 24300,
        "description": "sha1($salt.sha1($pass.$salt))"
    },
    {
        "id": 24410,
        "description": "PKCS#8 Private Keys (PBKDF2-HMAC-SHA1 + 3DES/AES)"
    },
    {
        "id": 24420,
        "description": "PKCS#8 Private Keys (PBKDF2-HMAC-SHA256 + 3DES/AES)"
    },
    {
        "id": 24500,
        "description": "Telegram Desktop >= v2.1.14 (PBKDF2-HMAC-SHA512)"
    },
    {
        "id": 24600,
        "description": "SQLCipher"
    },
    {
        "id": 24700,
        "description": "Stuffit5"
    },
    {
        "id": 24800,
        "description": "Umbraco HMAC-SHA1"
    },
    {
        "id": 24900,
        "description": "Dahua Authentication MD5"
    },
    {
        "id": 25000,
        "description": "SNMPv3 HMAC-MD5-96/HMAC-SHA1-96"
    },
    {
        "id": 25100,
        "description": "SNMPv3 HMAC-MD5-96"
    },
    {
        "id": 25200,
        "description": "SNMPv3 HMAC-SHA1-96"
    },
    {
        "regex": "^\\$office\\$2016\\$[0-9]\\$[0-9]{6}\\$[^$]{24}\\$[^$]{88}$",
        "rAttack": " ",
        "options": [
            {
                "id": 25300,
                "description": "MS Office 2016 - SheetProtection",
                "example": "$office$2016$0$100000$876MLoKTq42+/DLp415iZQ==$TNDvpvYyvlSUy97UOLKNhXynhUDDA7H8kLql0ISH5SxcP6hbthdjaTo4Z3/MU0dcR2SAd+AduYb3TB5CLZ8+ow=="
            }
        ]
    },
    {
        "id": 25400,
        "description": "PDF 1.4 - 1.6 (Acrobat 5 - 8) - edit password"
    },
    {
        "id": 25500,
        "description": "Stargazer Stellar Wallet XLM"
    },
    {
        "id": 25700,
        "description": "MurmurHash"
    },
    {
        "id": 25900,
        "description": "KNX IP Secure - Device Authentication Code"
    },
    {
        "id": 26000,
        "description": "Mozilla key3.db"
    },
    {
        "id": 26100,
        "description": "Mozilla key4.db"
    },
    {
        "id": 26200,
        "description": "OpenEdge Progress Encode"
    },
    {
        "id": 26300,
        "description": "FortiGate256 (FortiOS256)"
    },
    {
        "id": 26401,
        "description": "AES-128-ECB NOKDF (PT = $salt, key = $pass)"
    },
    {
        "id": 26402,
        "description": "AES-192-ECB NOKDF (PT = $salt, key = $pass)"
    },
    {
        "id": 26403,
        "description": "AES-256-ECB NOKDF (PT = $salt, key = $pass)"
    },
    {
        "id": 26500,
        "description": "iPhone passcode (UID key + System Keybag)"
    },
    {
        "id": 26600,
        "description": "MetaMask Wallet"
    },
    {
        "id": 26700,
        "description": "SNMPv3 HMAC-SHA224-128"
    },
    {
        "id": 26800,
        "description": "SNMPv3 HMAC-SHA256-192"
    },
    {
        "id": 26900,
        "description": "SNMPv3 HMAC-SHA384-256"
    },
    {
        "id": 27000,
        "description": "NetNTLMv1 / NetNTLMv1+ESS (NT)"
    },
    {
        "id": 27100,
        "description": "NetNTLMv2 (NT)"
    },
    {
        "id": 27200,
        "description": "Ruby on Rails Restful Auth (one round, no sitekey)"
    },
    {
        "id": 27300,
        "description": "SNMPv3 HMAC-SHA512-384"
    },
    {
        "id": 27400,
        "description": "VMware VMX (PBKDF2-HMAC-SHA1 + AES-256-CBC)"
    },
    {
        "id": 27500,
        "description": "VirtualBox (PBKDF2-HMAC-SHA256 & AES-128-XTS)"
    },
    {
        "id": 27600,
        "description": "VirtualBox (PBKDF2-HMAC-SHA256 & AES-256-XTS)"
    },
    {
        "id": 27700,
        "description": "MultiBit Classic .wallet (scrypt)"
    },
    {
        "id": 27800,
        "description": "MurmurHash3"
    },
    {
        "id": 27900,
        "description": "CRC32C"
    },
    {
        "id": 28000,
        "description": "CRC64Jones"
    },
    {
        "id": 28100,
        "description": "Windows Hello PIN/Password"
    },
    {
        "id": 28200,
        "description": "Exodus Desktop Wallet (scrypt)"
    },
    {
        "id": 28300,
        "description": "Teamspeak 3 (channel hash)"
    },
    {
        "id": 28400,
        "description": "bcrypt(sha512($pass)) / bcryptsha512"
    },
    {
        "id": 28501,
        "description": "Bitcoin WIF private key (P2PKH), compressed"
    },
    {
        "id": 28502,
        "description": "Bitcoin WIF private key (P2PKH), uncompressed"
    },
    {
        "id": 28503,
        "description": "Bitcoin WIF private key (P2WPKH, Bech32), compressed"
    },
    {
        "id": 28504,
        "description": "Bitcoin WIF private key (P2WPKH, Bech32), uncompressed"
    },
    {
        "id": 28505,
        "description": "Bitcoin WIF private key (P2SH(P2WPKH)), compressed"
    },
    {
        "id": 28506,
        "description": "Bitcoin WIF private key (P2SH(P2WPKH)), uncompressed"
    },
    {
        "id": 28600,
        "description": "PostgreSQL SCRAM-SHA-256"
    },
    {
        "id": 28700,
        "description": "Amazon AWS4-HMAC-SHA256"
    },
    {
        "id": 28800,
        "description": "Kerberos 5, etype 17, DB"
    },
    {
        "id": 28900,
        "description": "Kerberos 5, etype 18, DB"
    },
    {
        "id": 29000,
        "description": "sha1($salt.sha1(utf16le($username).':'.utf16le($pass)))"
    },
    {
        "id": 29100,
        "description": "Flask Session Cookie ($salt.$salt.$pass)"
    },
    {
        "id": 29200,
        "description": "Radmin3"
    },
    {
        "id": 29311,
        "description": "TrueCrypt RIPEMD160 + XTS 512 bit"
    },
    {
        "id": 29312,
        "description": "TrueCrypt RIPEMD160 + XTS 1024 bit"
    },
    {
        "id": 29313,
        "description": "TrueCrypt RIPEMD160 + XTS 1536 bit"
    },
    {
        "id": 29321,
        "description": "TrueCrypt SHA512 + XTS 512 bit"
    },
    {
        "id": 29322,
        "description": "TrueCrypt SHA512 + XTS 1024 bit"
    },
    {
        "id": 29323,
        "description": "TrueCrypt SHA512 + XTS 1536 bit"
    },
    {
        "id": 29331,
        "description": "TrueCrypt Whirlpool + XTS 512 bit"
    },
    {
        "id": 29332,
        "description": "TrueCrypt Whirlpool + XTS 1024 bit"
    },
    {
        "id": 29333,
        "description": "TrueCrypt Whirlpool + XTS 1536 bit"
    },
    {
        "id": 29341,
        "description": "TrueCrypt RIPEMD160 + XTS 512 bit + boot-mode"
    },
    {
        "id": 29342,
        "description": "TrueCrypt RIPEMD160 + XTS 1024 bit + boot-mode"
    },
    {
        "id": 29343,
        "description": "TrueCrypt RIPEMD160 + XTS 1536 bit + boot-mode"
    },
    {
        "id": 29411,
        "description": "VeraCrypt RIPEMD160 + XTS 512 bit"
    },
    {
        "id": 29412,
        "description": "VeraCrypt RIPEMD160 + XTS 1024 bit"
    },
    {
        "id": 29413,
        "description": "VeraCrypt RIPEMD160 + XTS 1536 bit"
    },
    {
        "id": 29421,
        "description": "VeraCrypt SHA512 + XTS 512 bit"
    },
    {
        "id": 29422,
        "description": "VeraCrypt SHA512 + XTS 1024 bit"
    },
    {
        "id": 29423,
        "description": "VeraCrypt SHA512 + XTS 1536 bit"
    },
    {
        "id": 29431,
        "description": "VeraCrypt Whirlpool + XTS 512 bit"
    },
    {
        "id": 29432,
        "description": "VeraCrypt Whirlpool + XTS 1024 bit"
    },
    {
        "id": 29433,
        "description": "VeraCrypt Whirlpool + XTS 1536 bit"
    },
    {
        "id": 29441,
        "description": "VeraCrypt RIPEMD160 + XTS 512 bit + boot-mode"
    },
    {
        "id": 29442,
        "description": "VeraCrypt RIPEMD160 + XTS 1024 bit + boot-mode"
    },
    {
        "id": 29443,
        "description": "VeraCrypt RIPEMD160 + XTS 1536 bit + boot-mode"
    },
    {
        "id": 29451,
        "description": "VeraCrypt SHA256 + XTS 512 bit"
    },
    {
        "id": 29452,
        "description": "VeraCrypt SHA256 + XTS 1024 bit"
    },
    {
        "id": 29453,
        "description": "VeraCrypt SHA256 + XTS 1536 bit"
    },
    {
        "id": 29461,
        "description": "VeraCrypt SHA256 + XTS 512 bit + boot-mode"
    },
    {
        "id": 29462,
        "description": "VeraCrypt SHA256 + XTS 1024 bit + boot-mode"
    },
    {
        "id": 29463,
        "description": "VeraCrypt SHA256 + XTS 1536 bit + boot-mode"
    },
    {
        "id": 29471,
        "description": "VeraCrypt Streebog-512 + XTS 512 bit"
    },
    {
        "id": 29472,
        "description": "VeraCrypt Streebog-512 + XTS 1024 bit"
    },
    {
        "id": 29473,
        "description": "VeraCrypt Streebog-512 + XTS 1536 bit"
    },
    {
        "id": 29481,
        "description": "VeraCrypt Streebog-512 + XTS 512 bit + boot-mode"
    },
    {
        "id": 29482,
        "description": "VeraCrypt Streebog-512 + XTS 1024 bit + boot-mode"
    },
    {
        "id": 29483,
        "description": "VeraCrypt Streebog-512 + XTS 1536 bit + boot-mode"
    },
    {
        "id": 29511,
        "description": "LUKS v1 SHA-1 + AES"
    },
    {
        "id": 29512,
        "description": "LUKS v1 SHA-1 + Serpent"
    },
    {
        "id": 29513,
        "description": "LUKS v1 SHA-1 + Twofish"
    },
    {
        "id": 29521,
        "description": "LUKS v1 SHA-256 + AES"
    },
    {
        "id": 29522,
        "description": "LUKS v1 SHA-256 + Serpent"
    },
    {
        "id": 29523,
        "description": "LUKS v1 SHA-256 + Twofish"
    },
    {
        "id": 29531,
        "description": "LUKS v1 SHA-512 + AES"
    },
    {
        "id": 29532,
        "description": "LUKS v1 SHA-512 + Serpent"
    },
    {
        "id": 29533,
        "description": "LUKS v1 SHA-512 + Twofish"
    },
    {
        "id": 29541,
        "description": "LUKS v1 RIPEMD-160 + AES"
    },
    {
        "id": 29542,
        "description": "LUKS v1 RIPEMD-160 + Serpent"
    },
    {
        "id": 29543,
        "description": "LUKS v1 RIPEMD-160 + Twofish"
    },
    {
        "id": 29600,
        "description": "Terra Station Wallet (AES256-CBC(PBKDF2($pass)))"
    },
    {
        "id": 29700,
        "description": "KeePass 1 (AES/Twofish) and KeePass 2 (AES) - keyfile only mode"
    },
    {
        "id": 30000,
        "description": "Python Werkzeug MD5 (HMAC-MD5 (key = $salt))"
    },
    {
        "id": 30120,
        "description": "Python Werkzeug SHA256 (HMAC-SHA256 (key = $salt))"
    },
    {
        "id": 30420,
        "description": "DANE RFC7929/RFC8162 SHA2-256"
    },
    {
        "id": 30500,
        "description": "md5(md5($salt).md5(md5($pass)))"
    },
    {
        "id": 30600,
        "description": "bcrypt(sha256($pass)) / bcryptsha256"
    },
    {
        "id": 30700,
        "description": "Anope IRC Services (enc_sha256)"
    },
    {
        "id": 30901,
        "description": "Bitcoin raw private key (P2PKH), compressed"
    },
    {
        "id": 30902,
        "description": "Bitcoin raw private key (P2PKH), uncompressed"
    },
    {
        "id": 30903,
        "description": "Bitcoin raw private key (P2WPKH, Bech32), compressed"
    },
    {
        "id": 30904,
        "description": "Bitcoin raw private key (P2WPKH, Bech32), uncompressed"
    },
    {
        "id": 30905,
        "description": "Bitcoin raw private key (P2SH(P2WPKH)), compressed"
    },
    {
        "id": 30906,
        "description": "Bitcoin raw private key (P2SH(P2WPKH)), uncompressed"
    },
    {
        "regex": "^\\$BLAKE2\\$[a-f0-9]{64}$",
        "rAttack": " ",
        "options": [
            {
                "id": 31000,
                "description": "BLAKE2s-256",
                "example": "$BLAKE2$2c719b484789ad5f6fc1739012182169b25484af156adc91d4f64f72400e574a"
            }
        ]
    },
    {
        "id": 31100,
        "description": "SM3"
    },
    {
        "id": 31200,
        "description": "Veeam VBK"
    },
    {
        "id": 31300,
        "description": "MS SNTP"
    },
    {
        "id": 99999,
        "description": "Plaintext"
    }
];
