var HashType:
	[
		{
			"regex": "^[a-f0-9]{32}(:.+)?$",
			"rAttack": " ",
			"options":[
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
				"id": 900,
				"description": "MD4",
				"example": "afe04867ec7a3845145579a95f72eca7"
			},
			{
				"id": 2600,
				"description": "md5(md5($pass))",
				"example": "a936af92b0ae20b1ff6c3347a72e5fbe"
			},
			{
				"id": 3000,
				"description": "LM",
				"example": "299bd128c1101fd6"
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
				"id": 11000,
				"description": "PrestaShop",
				"example": "810e3d12f0f10777a679d9ca1ad7a8d9:M2uZ122bSHJ4Mi54tXGY0lqcv1r28mUluSkyw37ou5oia4i239ujqw0l"
			}
		]
		},
		{
			"regex": "^[a-f0-9]{32}:[a-z0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 11,
				"description": "Joomla < 2.5.18"
				"example": "19e0e8d91c722e7091ca7a6a6fb0f4fa:54718031842521651757785603028777"
				}
			]
		},
		{
			"id": 12,
			"description": "PostgreSQL"
		},
		{
			"regex": "^[a-f0-9]{32}:[a-z0-9]{2}$",
			"rAttack": " ",
			"options":[
				{
				"id": 21,
				"description": "osCommerce, xt:Commerce",
				"example": "374996a5e8a5e57fd97d893f7df79824:36"
				}
			]
		},
		{
			"regex": "^(.+\\$)?[a-z0-9\\/.+]{30}(:.+)?$",
			"rAttack": " ",
			"options":[
				{
				"id": 22,
				"description": "Juniper Netscreen/SSG (ScreenOS)"
				"example": "nNxKL2rOEkbBc9BFLsVGG6OtOUO/8n:user"
				}
			]
		},
		{
			"id": 22,
			"description": "Juniper Netscreen/SSG (ScreenOS)"
		},
		{
			"id": 24,
			"description": "SolarWinds Serv-U"
		},

		{
			"id": 70,
			"description": "md5(utf16le($pass))"
		},
		{
			"regex": "^[a-f0-9]{40}(:.+)?$",
			"rAttack": " ",
			"options":[
				{
				"id": 100,
				"description": "SHA1",
				"example": "b89eaac7e61417341b710b727768294d0e6a277b"
				},
				{
				"id": 4500,
				"description": "sha1(sha1($pass))",
				"example": "3db9184f5da4e463832b086211af8d2314919951"
				}
			]
		},
		{
			"regex": "^{SHA}[a-z0-9\\/+]{27}=$",
			"rAttack": " ",
			"options":[
				{
				"id": 101,
				"description": "nsldap, SHA-1(Base64), Netscape LDAP SHA",
				"example": "{SHA}uJ6qx+YUFzQbcQtyd2gpTQ5qJ3s="
				},
				{
				"id": 4500,
				"description": "sha1(sha1($pass))",
				"example": "3db9184f5da4e463832b086211af8d2314919951"
				}
			]
		},
		{
			"id": 110,
			"description": "sha1($pass.$salt)"
		},
		{
			"regex": "^[a-z0-9]{43}$",
			"rAttack": " ",
			"options":[
				{
				"id": 111,
				"description": "nsldaps, SSHA-1(Base64), Netscape LDAP SSHA"
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
			"options":[
				{
				"id": 112,
				"description": "Oracle S: Type (Oracle 11+)"
				"example": "ac5f1e62d21fd0529428b84d42e8955b04966703:38445748184477378130"
				}
			]
		},
		{
			"id": 120,
			"description": "sha1($salt.$pass)"
		},
		{
			"regex": "^[a-f0-9]{40}:[^*]{1,25}$",
			"rAttack": " ",
			"options":[
				{
				"id": 121,
				"description": "SMF >= v1.1"
				"example": "ecf076ce9d6ed3624a9332112b1cd67b236fdd11:17782686"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{48}$",
			"rAttack": " ",
			"options":[
				{
				"id": 122,
				"description": "OS X v10.4, v10.5, v10.6"
				"example": "1430823483d07626ef8be3fda2ff056d0dfd818dbfe47683"
				}
			]
		},
		{
			"regex": "^sha1\\$[a-z0-9]+\\$[a-f0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 124,
				"description": "Django (SHA-1)"
				"example": "sha1$fe76b$02d5916550edf7fc8c886f044887f4b1abf9b013"
				}
			]
		},
		{
			"id": 125,
			"description": "ArubaOS"
		},
		{
			"id": 130,
			"description": "sha1(utf16le($pass).$salt)"
		},
		{
			"regex": "^0x0100[a-f0-9]{88}$",
			"rAttack": " ",
			"options":[
				{
				"id": 131,
				"description": "MSSQL(2000)"
				"example": "0x01002702560500000000000000000000000000000000000000008db43dd9b1972a636ad0c7d4b8c515cb8ce46578"
				}
			]
		},
		{
			"regex": "^0x0100[a-f0-9]{48}$",
			"rAttack": " ",
			"options":[
				{
				"id": 132,
				"description": "MSSQL(2005) & MSSQL(2008)"
				"example": "0x010018102152f8f28c8499d8ef263c53f8be369d799f931b2fbe"
				}
			]
		},
		{
			"regex": "uXmFVrdBvv293L9kDR3VnRmx4ZM=",
			"rAttack": " ",
			"options":[
				{
				"id": 133,
				"description": "PeopleSoft"
				"example": "0x010018102152f8f28c8499d8ef263c53f8be369d799f931b2fbe"
				}
			]
		},
		{
			"id": 140,
			"description": "sha1($salt.utf16le($pass))"
		},
		{
			"regex": "^\\$episerver\\$\\*0\\*[a-z0-9\\/=+]+\\*[a-z0-9\\/=+]{27,28}$",
			"rAttack": " ",
			"options":[
				{
				"id": 141,
				"description": "EPiServer 6.x < v4"
				"example": "$episerver$*0*bEtiVGhPNlZpcUN4a3ExTg==*utkfN0EOgljbv5FoZ6+AcZD5iLk"
				}
			]
		},
		{
			"id": 150,
			"description": "HMAC-SHA1 (key = $pass)"
		},
		{
			"id": 160,
			"description": "HMAC-SHA1 (key = $salt)"
		},
		{
			"id": 170,
			"description": "sha1(utf16le($pass))"
		},
		{
			"regex": "^[a-f0-9]{16}$",
			"rAttack": " ",
			"options":[
				{
				"id": 101,
				"description": "nsldap, SHA-1(Base64), Netscape LDAP SHA",
				"example": "{SHA}uJ6qx+YUFzQbcQtyd2gpTQ5qJ3s="
				},
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
			"options":[
				{
				"id": 300,
				"description": "MySQL4.1/MySQL5+",
				"example": "fcf7c1b8749cf99d88e5f34271d636178fb5d130"
				}
			]
		},
		{
			"regex": "^\\$H\\$[a-z0-9\\/.]{31}$"
			"rAttack": " ",
			"options":[
				{
				"id": 400,
				"description": "phpass, MD5(Wordpress), MD5(Joomla), MD5(phpBB3)",
				"example": "$P$984478476IagS59wHZvyQMArzfx58u."
				}
			]
		},
		{
			"regex": "^\\$1\\$[a-z0-9\\/.]{0,8}\\$[a-z0-9\\/.]{22}(:.*)?$"
			"rAttack": " ",
			"options":[
				{
				"id": 500,
				"description": "md5crypt, MD5(Unix), FreeBSD MD5, Cisco-IOS MD5 2",
				"example": "$1$28772684$iEwNOgGugqO9.bIz5sk8k/"
				}
			]
		},
		{
			"id": 501,
			"description": "Juniper IVE"
		},
		{
			"id": 600,
			"description": "BLAKE2b-512"
		},
		{
			"id": 610,
			"description": "BLAKE2b-512($pass.$salt)"
		},
		{
			"id": 620,
			"description": "BLAKE2b-512($salt.$pass)"
		},

		{
			"id": 1000,
			"description": "NTLM"
		},
		{
			"regex": "^([^\\\\\\/:*?\"<>|]{1,20}:)?[a-f0-9]{32}(:[^\\\\\\/:*?\"<>|]{1,20})?$",
			"rAttack": " ",
			"options":[
				{
				"id": 1100,
				"description": "Domain Cached Credentials (DCC), MS Cache",
				"example": "4dd8965d1d476fa0d026722989a6b772:3060147285011"
				}
			]
		},
		{
			"id": 1300,
			"description": "SHA-224"
		},
		{
			"regex": "^[a-f0-9]{64}(:.+)?$",
			"rAttack": " ",
			"options":[
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
				"id": 5000,
				"description": "SHA-3(Keccak)",
				"example": "05ac0c544060af48f993f9c3cdf2fc03937ea35b:232725102020"
				},
				{
				"id": 6900,
				"description": "GOST R 34.11-94",
				"example": "df226c2c6dcb1d995c0299a33a084b201544293c31fc3d279530121d36bbcea9"
				},
			]
		},
		{
			"id": 1411,
			"description": "SSHA-256(Base64), LDAP {SSHA256}"
		},
		{
			"regex": "^[a-f0-9]{70}$",
			"rAttack": " ",
			"options":[
				{
				"id": 1421,
				"description": "hMailServer"
				"example": "8fe7ca27a17adc337cd892b1d959b4e487b8f0ef09e32214f44fb1b07e461c532e9ec3"
				}
			]
		},
		{
			"regex": "^\\$episerver\\$\\*1\\*[a-z0-9\\/=+]+\\*[a-z0-9\\/=+]{42,43}$",
			"rAttack": " ",
			"options":[
				{
				"id": 1441,
				"description": "EPiServer 6.x >= v4"
				"example": "$episerver$*1*MDEyMzQ1Njc4OWFiY2RlZg==*lRjiU46qHA7S6ZE7RfKUcYhB85ofArj1j7TrCtu3u6Y"
				}
			]
		},
		{
			"id": 1470,
			"description": "sha256(utf16le($pass))"
		},
		{
			"regex": "^[a-z0-9\\/.]{13}$",
			"rAttack": " ",
			"options":[
				{
				"id": 1500,
				"description": "descrypt, DES(Unix), Traditional DES",
				"example": "48c/R8JAv757A"
				}
			]
		},
		{
			"regex": "^\\$apr1\\$[a-z0-9\\/.]{0,8}\\$[a-z0-9\\/.]{22}$",
			"rAttack": " ",
			"options":[
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
			"options":[
				{
				"id": 1700,
				"description": "SHA512"
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
				"id": 6100,
				"description": "Whirlpool",
				"example": "7ca8eaaaa15eaa4c038b4c47b9313e92da827c06940e69947f85bc0fbef3eb8fd254da220ad9e208b6b28f6bb9be31dd760f1fdb26112d83f87d96b416a4d258"
				},
			]
		},
		{
			"regex": "^\\$apr1\\$[a-z0-9\\/.]{0,8}\\$[a-z0-9\\/.]{22}$",
			"rAttack": " ",
			"options":[
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
			"options":[
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
			"options":[
				{
				"id": 1731,
				"description": "MSSQL(2012), MSSQL(2014)"
				"example": "0x02000102030434ea1b17802fd95ea6316bd61d2c94622ca3812793e8fb1672487b5c904a45a31b2ab4a78890d563d2fcf5663e46fe797d71550494be50cf4915d3f4d55ec375"
				}
			]
		},
		{
			"id": 1770,
			"description": "sha512(utf16le($pass))"
		},
		{
			"regex": "^\\$6\\$(rounds=[0-9]+\\$)?[a-z0-9\\/.]{0,16}\\$[a-z0-9\\/.]{86}$",
			"rAttack": " ",
			"options":[
				{
				"id": 1800,
				"description": "sha512crypt, SHA512(Unix)"
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
			"options":[
				{
				"id": 2100,
				"description": "Domain Cached Credentials 2 (DCC2), MS Cache",
				"example": "$DCC2$10240#tom#e4e938d12fe5974dc42a90120bd9c90f"
				}
			]
		},
		{
			"id": 2400,
			"description": "Cisco-PIX MD5",
			"regex": "^[a-z0-9\\/.]{16}$",
		},
		{
			"regex": "^[a-z0-9\\/.]{16}([:$].{1,})?$",
			"rAttack": " ",
			"options":[
				{
				"id": 2410,
				"description": "Cisco-ASA MD5"
				"example": "	02dMBMYkTdC5Ziyp:36"
				}
			]
		},
		{
			"id": 2500,
			"description": "WPA/WPA2"
		},
		{
			"id": 2501,
			"description": "WPA-EAPOL-PMK"
		},
		{
			"regex": "^[a-f0-9]{32}:.{3}$",
			"rAttack": " ",
			"options":[
				{
				"id": 2611,
				"description": "vBulletin < v3.8.5"
				"example": "16780ba78d2d5f02f3202901c1b6d975:568"
				}
			]
		},
		{
			"regex": "^\\$PHPS\\$.+\\$[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 2612,
				"description": "PHPS"
				"example": "$PHPS$34323438373734$5b07e065b9d78d69603e71201c6cf29f"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{32}:.{30}$",
			"rAttack": " ",
			"options":[
				{
				"id": 2711,
				"description": "vBulletin >= v3.8.5"
				"example": "bf366348c53ddcfbd16e63edfdd1eee6:181264250056774603641874043270"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{32}:.{5}$",
			"rAttack": " ",
			"options":[
				{
				"id": 2811,
				"description": "IPB2+, MyBB1.2+",
				"example": "8d2129083ef35f4b365d5d87487e1207:47204"
				}
			]
		},
		{
			"regex": "^(\\$2[axy]|\\$2)\\$[0-9]{2}\\$[a-z0-9\\/.]{53}$",
			"rAttack": " ",
			"options":[
				{
				"id": 3200,
				"description": "bcrypt, Blowfish(OpenBSD)"
				"example": "$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6"
				}
			]
		},
		{
			"regex": "^[:\\$][AB][:\\$]([a-f0-9]{1,8}[:\\$])?[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 3711,
				"description": "Mediawiki B type"
				"example": "$B$56668501$0ce106caa70af57fd525aeaf80ef2898"
				}
			]
		},
		{
			"id": 3800,
			"description": "md5($salt.$pass.$salt)"
		},

		{
			"id": 4110,
			"description": "md5($salt.md5($pass.$salt))"
		},

		{
			"id": 4410,
			"description": "md5(sha1($pass).$salt)"
		},
		{
			"id": 4510,
			"description": "sha1(sha1($pass).$salt)"
		},
		{
			"id": 4520,
			"description": "sha1($salt.sha1($pass))"
		},
		{
			"id": 4521,
			"description": "Redmine Project Management Web App"
		},
		{
			"id": 4522,
			"description": "PunBB"
		},
		{
			"id": 4700,
			"description": "sha1(md5($pass))"
		},
		{
			"id": 4710,
			"description": "sha1(md5($pass).$salt)"
		},
		{
			"id": 4711,
			"description": "Huawei sha1(md5($pass).$salt)"
		},
		{
			"regex": "^(\\$chap\\$0\\*)?[a-f0-9]{32}[\\*:][a-f0-9]{32}(:[0-9]{2})?$",
			"rAttack": " ",
			"options":[
				{
				"id": 4800,
				"description": "MD5(Chap), iSCSI CHAP authentication"
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
			"id": 5100,
			"description": "Half MD5"
		},
		{
			"id": 5200,
			"description": "Password Safe v3"
		},
		{
			"regex": "^[a-f0-9]{256}:[a-f0-9]{256}:[a-f0-9]{16}:[a-f0-9]{16}:[a-f0-9]{320}:[a-f0-9]{16}:[a-f0-9]{40}:[a-f0-9]{40}:[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 5300,
				"description": "IKE-PSK SHA1"
				"example": "https://hashcat.net/misc/example_hashes/hashcat.ikemd5"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{256}:[a-f0-9]{256}:[a-f0-9]{16}:[a-f0-9]{16}:[a-f0-9]{320}:[a-f0-9]{16}:[a-f0-9]{40}:[a-f0-9]{40}:[a-f0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 5400,
				"description": "IKE-PSK MD5"
				"example": ""
				}
			]
		},
		{
			"regex": "^[^\\\\\\/:*?\"<>|]{1,20}[:]{2,3}([^\\\\\\/:*?\"<>|]{1,20})?:[a-f0-9]{48}:[a-f0-9]{48}:[a-f0-9]{16}$",
			"rAttack": " ",
			"options":[
				{
				"id": 5500,
				"description": "NetNTLMv1-VANILLA / NetNTLMv1+ESS"
				"example": "u4-netntlm::kNS:338d08f8e26de93300000000000000000000000000000000:9526fb8c23a90751cdd619b6cea564742e1e4bf33006ba41:cb8086049ec4736c"
				}
			]
		},
		{
			"regex": "^([^\\\\\\/:*?\"<>|]{1,20}\\\\)?[^\\\\\\/:*?\"<>|]{1,20}[:]{2,3}([^\\\\\\/:*?\"<>|]{1,20}:)?[^\\\\\\/:*?\"<>|]{1,20}:[a-f0-9]{32}:[a-f0-9]+$",
			"rAttack": " ",
			"options":[
				{
				"id": 5600,
				"description": "NetNTLMv2"
				"example": "admin::N46iSNekpT:08ca45b7d7ea58ee:88dcbe4446168966a153a0064958dac6:5c7830315c7830310000000000000b45c67103d07d7b95acd12ffa11230e0000000052920b85f78d013c31cdb3b92f5d765c783030"
				}
			]
		},
		{
			"regex": "^[a-z0-9]{43}$",
			"rAttack": " ",
			"options":[
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
			"options":[
				{
				"id": 5800,
				"description": "Samsung Android Password/PIN"
				"example": "0223b799d526b596fe4ba5628b9e65068227e68e:f6d45822728ddb2c"
				}
			]
		},
		{
			"id": 6000,
			"description": "RipeMD160"
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
			"regex": "^{smd5}[a-z0-9$\\/.]{31}$",
			"rAttack": " ",
			"options":[
				{
				"id": 6300,
				"description": "AIX {smd5}",
				"example": "{smd5}a5/yTL/u$VfvgyHx1xUlXZYBocQpQY0"
				}
			]
		},
		{
			"regex": "^{ssha256}[0-9]{2}\\$[a-z0-9$\\/.]{60}$",
			"rAttack": " ",
			"options":[
				{
				"id": 6400,
				"description": "AIX {ssha256}"
				"example": "{ssha256}06$aJckFGJAB30LTe10$ohUsB7LBPlgclE3hJg9x042DLJvQyxVCX.nZZLEz.g2"
				}
			]
		},
		{
			"regex": "^{ssha512}[0-9]{2}\\$[a-z0-9\\/.]{16,48}\\$[a-z0-9\\/.]{86}$",
			"rAttack": " ",
			"options":[
				{
				"id": 6500,
				"description": "AIX {ssha512}"
				"example": "{ssha512}06$bJbkFGJAB30L2e23$bXiXjyH5YGIyoWWmEVwq67nCU5t7GLy9HkCzrodRCQCx3r9VvG98o7O3V0r9cVrX3LPPGuHqT5LLn0oGCuI1.."
				}
			]
		},
		{
			"regex": "^[0-9]{4}:[a-f0-9]{16}:[a-f0-9]{2080}$",
			"rAttack": " ",
			"options":[
				{
				"id": 6600,
				"description": "1Password, Agile Keychain"
				"example": "https://hashcat.net/misc/example_hashes/hashcat.agilekeychain"
				}
			]
		},
		{
			"regex": "^{ssha1}[0-9]{2}\\$[a-z0-9$\\/.]{44}$",
			"rAttack": " ",
			"options":[
				{
				"id": 6700,
				"description": "AIX {ssha1}"
				"example": "{ssha1}06$bJbkFGJAB30L2e23$dCESGOsP7jaIIAJ1QAcmaGeG.kr"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{32}:[0-9]+:[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-.]+$",
			"rAttack": " ",
			"options":[
				{
				"id": 6800,
				"description": "Lastpass"
				"example": "a2d1f7b7a1862d0d4a52644e72d59df5:500:lp@trash-mail.com"
				}
			]
		},
		{
			"regex": "^[a-z0-9=]{47}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7000,
				"description": "Fortigate (FortiOS)"
				"example": "AK1AAECAwQFBgcICRARNGqgeC3is8gv2xWWRony9NJnDgE="
				}
			]
		},
		{
			"regex": "^\\$ml\\$[0-9]+\\$[a-f0-9]{64}\\$[a-f0-9]{128}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7100,
				"description": "OS X v10.8 / v10.9"
				"example": "$ml$35460$93a94bd24b5de64d79a5e49fa372827e739f4d7b6975c752c9a0ff1e5cf72e05$752351df64dd2ce9dc9c64a72ad91de6581a15c19176266b44d98919dfa81f0f96cbcb20a1ffb400718c20382030f637892f776627d34e021bad4f81b7de8222"
				}
			]
		},
		{
			"regex": "^grub\\.pbkdf2\\.sha512\\.[0-9]+\\.([a-f0-9]{128,2048}\\.|[0-9]+\\.)?[a-f0-9]{128}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7200,
				"description": "GRUB 2"
				"example": "grub.pbkdf2.sha512.10000.7d391ef48645f626b427b1fae06a7219b5b54f4f02b2621f86b5e36e83ae492bd1db60871e45bc07925cecb46ff8ba3db31c723c0c6acbd4f06f60c5b246ecbf.26d59c52b50df90d043f070bd9cbcd92a74424da42b3666fdeb08f1a54b8f1d2f4f56cf436f9382419c26798dc2c209a86003982b1e5a9fcef905f4dfaa4c524"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{130}(:[a-f0-9]{40})?$",
			"rAttack": " ",
			"options":[
				{
				"id": 7300,
				"description": "IPMI2 RAKP HMAC-SHA1"
				"example": "b7c2d6f13a43dce2e44ad120a9cd8a13d0ca23f0414275c0bbe1070d2d1299b1c04da0f1a0f1e4e2537300263a2200000000000000000000140768617368636174:472bdabe2d5d4bffd6add7b3ba79a291d104a9ef"
				}
			]
		},
		{
			"regex": "^\\$5\\$(rounds=[0-9]+\\$)?[a-z0-9\\/.]{0,16}\\$[a-z0-9\\/.]{43}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7400,
				"description": "sha256crypt, SHA256(Unix)"
				"example": "$5$rounds=5000$GX7BopJZJxPc/KEK$le16UF8I2Anb.rOrn22AUPWvzUETDGefUmAV8AZkGcD"
				}
			]
		},
		{
			"id": 7401,
			"description": "MySQL $A$ (sha256crypt)"
		},
		{
			"regex": "^\\$(krb5pa|mskrb5)\\$([0-9]{2})?\\$.+\\$[a-f0-9]{1,}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7500,
				"description": "Kerberos 5 AS-REQ Pre-Auth"
				"example": "$krb5pa$23$user$realm$salt$4e751db65422b2117f7eac7b721932dc8aa0d9966785ecd958f971f622bf5c42dc0c70b532363138363631363132333238383835"
				}
			]
		},
		{
			"regex": "^(.+)?\\$[a-f0-9]{16}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7700,
				"description": "SAP CODVN B (BCODE)"
				"example": "USER$C8B48F26B87B7EA7"
				}
			]
		},
		{
			"id": 7701,
			"description": "SAP CODVN B (BCODE) from RFC_READ_TABLE"
		},
		{
			"regex": "^(.+)?\\$[a-f0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7800,
				"description": "SAP CODVN F/G (PASSCODE)"
				"example": "USER$ABCAD719B17E7F794DF7E686E563E9E2D24DE1D0"
				}
			]
		},
		{
			"id": 7801,
			"description": "SAP CODVN F/G (PASSCODE) from RFC_READ_TABLE"
		},
		{
			"regex": "^\\$S\\$[a-z0-9\\/.]{52}$",
			"rAttack": " ",
			"options":[
				{
				"id": 7900,
				"description": "Drupal7"
				"example": "$S$C33783772bRXEx1aCsvY.dqgaaSu76XmVlKrW9Qu8IQlvxHlmzLf"
				}
			]
		},
		{
			"regex": "^0x[a-f0-9]{4}[a-f0-9]{16}[a-f0-9]{64}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8000,
				"description": "Sybase ASE"
				"example": "0xc00778168388631428230545ed2c976790af96768afa0806fe6c0da3b28f3e132137eac56f9bad027ea2"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{49}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8100,
				"description": "Citrix Netscaler"
				"example": "1765058016a22f1b4e076dccd1c3df4e8e5c0839ccded98ea"
				}
			]
		},
		{
			"regex": "^[a-f0-9]{64}:[a-f0-9]{32}:[0-9]{5}:[a-f0-9]{608}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8200,
				"description": "1Password, Cloud Keychain"
				"example": "https://hashcat.net/misc/example_hashes/hashcat.cloudkeychain"
				}
			]
		},
		{
			"regex": "^[a-z0-9]{32}(:([a-z0-9-]+\\.)?[a-z0-9-.]+\\.[a-z]{2,7}:.+:[0-9]+)?$",
			"rAttack": " ",
			"options":[
				{
				"id": 8300,
				"description": "DNSSEC (NSEC3)"
				"example": "7b5n74kq8r441blc2c5qbbat19baj79r:.lvdsiqfj.net:33164473:1"
				}
			]
		},
		{
			"regex": "^(\\$wbb3\\$\\*1\\*)?[a-f0-9]{40}[:*][a-f0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8400,
				"description": "WBB3, Woltlab Burning Board 3"
				"example": "8084df19a6dc81e2597d051c3d8b400787e2d5a9:6755045315424852185115352765375338838643"
				}
			]
		},
		{
			"regex": "^(user-.+:)?\\$racf\\$\\*.+\\*[a-f0-9]{16}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8500,
				"description": "RACF"
				"example": "$racf$*USER*FC2577C6EBE6265B"
				}
			]
		},
		{
			"regex": "^\\([a-z0-9\\/+]{20}\\)$",
			"rAttack": " ",
			"options":[
				{
				"id": 8600,
				"description": "Lotus Notes/Domino 5",
				"example": "3dd2e1e5ac03e230243d58b8c5ada076"
				}
			]
		},
		{
			"id": 8700,
			"description": "Lotus Notes/Domino 6"
		},
		{
			"regex": "^\\$fde\\$[0-9]{2}\\$[a-f0-9]{32}\\$[0-9]{2}\\$[a-f0-9]{32}\\$[a-f0-9]{3072}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8800,
				"description": "Android FDE <= 4.3"
				"example": "https://hashcat.net/misc/example_hashes/hashcat.android43fde"
				}
			]
		},
		{
			"regex": "^SCRYPT:[0-9]{1,}:[0-9]{1}:[0-9]{1}:[a-z0-9:\\/+=]{1,}$",
			"rAttack": " ",
			"options":[
				{
				"id": 8900,
				"description": "scrypt"
				"example": "SCRYPT:1024:1:1:MDIwMzMwNTQwNDQyNQ==:5FW+zWivLxgCWj7qLiQbeC8zaNQ+qdO0NUinvqyFcfo="
				}
			]
		},
		{
			"id": 9000,
			"description": "Password Safe v2"
		},
		{
			"regex": "^\\([a-z0-9\\/+]{49}\\)$",
			"rAttack": " ",
			"options":[
				{
				"id": 9100,
				"description": "Lotus Notes/Domino"
				"example": "(HsjFebq0Kh9kH7aAZYc7kY30mC30mC3KmC30mCluagXrvWKj1)"
				}
			]
		},
		{
			"regex": "^\\$8\\$[a-z0-9\\/.]{14}\\$[a-z0-9\\/.]{43}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9200,
				"description": "Cisco-IOS $8$ (PBKDF2-SHA256)"
				"example": "$8$TnGX/fE4KGHOVU$pEhnEvxrvaynpi8j4f.EMHr6M.FzU8xnZnBr/tJdFWk"
				}
			]
		},
		{
			"regex": "^\\$9\\$[a-z0-9\\/.]{14}\\$[a-z0-9\\/.]{43}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9300,
				"description": "Cisco-IOS $9$ (scrypt)"
				"example": "$9$2MJBozw/9R3UsU$2lFhcKvpghcyw8deP25GOfyZaagyUOGBymkryvOdfo6"
				}
			]
		},
		{
			"regex": "^\\$office\\$\\*2007\\*[0-9]{2}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9400,
				"description": "Office 2007"
				"example": "$office$*2007*20*128*16*411a51284e0d0200b131a8949aaaa5cc*117d532441c63968bee7647d9b7df7d6*df1d601ccf905b375575108f42ef838fb88e1cde"
				}
			]
		},
		{
			"regex": "^\\$office\\$\\*2010\\*[0-9]{6}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{64}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9500,
				"description": "Office 2010"
				"example": "$office$*2010*100000*128*16*77233201017277788267221014757262*b2d0ca4854ba19cf95a2647d5eee906c*e30cbbb189575cafb6f142a90c2622fa9e78d293c5b0c001517b3f5b82993557"
				}
			]
		},
		{
			"regex": "^\\$office\\$\\*2013\\*[0-9]{6}\\*[0-9]{3}\\*[0-9]{2}\\*[a-z0-9]{32}\\*[a-z0-9]{32}\\*[a-z0-9]{64}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9600,
				"description": "Office 2013"
				"example": "$office$*2013*100000*256*16*7dd611d7eb4c899f74816d1dec817b3b*948dc0b2c2c6c32f14b5995a543ad037*0b7ee0e48e935f937192a59de48a7d561ef2691d5c8a3ba87ec2d04402a94895"
				}
			]
		},
		{
			"regex": "^\\$oldoffice\\$[01]\\*[a-f0-9]{32}\\*[a-f0-9]{32}\\*[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9700,
				"description": "MS Office ? 2003 MD5 + RC4, oldoffice$0, oldoffice$1",
				"example": "$oldoffice$1*04477077758555626246182730342136*b1b72ff351e41a7c68f6b45c4e938bd6*0d95331895e99f73ef8b6fbc4a78ac1a"
				},
				{
				"id": 9710,
				"description": "MS Office <= 2003 $0/$1, MD5 + RC4, collider #1"
				"example": "$oldoffice$0*55045061647456688860411218030058*e7e24d163fbd743992d4b8892bf3f2f7*493410dbc832557d3fe1870ace8397e2"
				},
				{
				"id": 9720,
				"description": "MS Office <= 2003 $0/$1, MD5 + RC4, collider #2"
				"example": "$oldoffice$0*55045061647456688860411218030058*e7e24d163fbd743992d4b8892bf3f2f7*493410dbc832557d3fe1870ace8397e2:91b2e062b9"
				}
			]
		},
		{
			"regex": "^\\$oldoffice\\$[34]\\*[a-f0-9]{32}\\*[a-f0-9]{32}\\*[a-f0-9]{40}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9800,
				"description": "MS Office ? 2003 SHA1 + RC4, oldoffice$3, oldoffice$4"
				"example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd"
				},
				{
				"id": 9810,
				"description": "MS Office <= 2003 $3, SHA1 + RC4, collider #1"
				"example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd"
				},
				{
				"id": 9820,
				"description": "MS Office <= 2003 $3, SHA1 + RC4, collider #2"
				"example": "$oldoffice$3*83328705222323020515404251156288*2855956a165ff6511bc7f4cd77b9e101*941861655e73a09c40f7b1e9dfd0c256ed285acd:b8f63619ca"
				}
			]
		},
		{
			"regex": "^(\\$radmin2\\$)?[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 9900,
				"description": "Radmin2"
				"example": "22527bee5c29ce95373c4e0f359f079b"
				}
			]
		},
		{
			"regex": "^(\\$django\\$\\*1\\*)?pbkdf2_sha256\\$[0-9]+\\$[a-z0-9]+\\$[a-z0-9\\/+=]{44}$",
			"rAttack": " ",
			"options":[
				{
				"id": 10000,
				"description": "Django (PBKDF2-SHA256)"
				"example": "pbkdf2_sha256$20000$H0dPx8NeajVu$GiC4k5kqbbR9qWBlsRgDywNqC2vd9kqfk7zdorEnNas="
				}
			]
		},
		{
			"regex": "^[a-f0-9]{16}:2:4:[a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 10100,
				"description": "SipHash"
				"example": "ad61d78c06037cd9:2:4:81533218127174468417660201434054"
				}
			]
		},
		{
			"regex": "^\\$cram_md5\\$[a-z0-9\\/+=-]+\\$[a-z0-9\\/+=-]{52}$",
			"rAttack": " ",
			"options":[
				{
				"id": 10200,
				"description": "Cram MD5"
				"example": "$cram_md5$PG5vLXJlcGx5QGhhc2hjYXQubmV0Pg==$dXNlciA0NGVhZmQyMmZlNzY2NzBmNmIyODc5MDgxYTdmNWY3MQ=="
				}
			]
		},
		{
			"regex": "^{x-issha,\\s[0-9]{4}}[a-z0-9\\/+=]+$",
			"rAttack": " ",
			"options":[
				{
				"id": 10300,
				"description": "SAP CODVN H (PWDSALTEDHASH) iSSHA-1"
				"example": "{x-issha, 1024}C0624EvGSdAMCtuWnBBYBGA0chvqAflKY74oEpw/rpY="
				}
			]
		},
		{
			"id": 10400,
			"description": "PDF 1.1 - 1.3 (Acrobat 2 - 4)"
		},
		{
			"id": 10410,
			"description": "PDF 1.1 - 1.3 (Acrobat 2 - 4), collider #1"
		},
		{
			"id": 10420,
			"description": "PDF 1.1 - 1.3 (Acrobat 2 - 4), collider #2"
		},
		{
			"id": 10500,
			"description": "PDF 1.4 - 1.6 (Acrobat 5 - 8)"
		},
		{
			"id": 10600,
			"description": "PDF 1.7 Level 3 (Acrobat 9)"
		},
		{
			"id": 10700,
			"description": "PDF 1.7 Level 8 (Acrobat 10 - 11)"
		},
		{
			"regex": "^[a-f0-9]{96}$",
			"rAttack": " ",
			"options":[
				{
				"id": 10800,
				"description": "SHA384"
				"example": "07371af1ca1fca7c6941d2399f3610f1e392c56c6d73fddffe38f18c430a2817028dae1ef09ac683b62148a2c8757f42"
				}
			]
		},
		{
			"id": 10810,
			"description": "sha384($pass.$salt)"
		},
		{
			"id": 10820,
			"description": "sha384($salt.$pass)"
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
			"regex": "^sha256[:$][0-9]+[:$][a-z0-9\\/+]+[:$][a-z0-9\\/+]{32,128}$",
			"rAttack": " ",
			"options":[
				{
				"id": 10900,
				"description": "PBKDF2-HMAC-SHA256"
				"example": "sha256:1000:MTc3MTA0MTQwMjQxNzY=:PYjCU215Mi57AYPKva9j7mvF4Rc5bCnt"
				}
			]
		},
		{
			"id": 10901,
			"description": "RedHat 389-DS LDAP (PBKDF2-HMAC-SHA256)"
		},
		{
			"regex": "^\\$postgres\\$.[^\\*]+[*:][a-f0-9]{1,32}[*:][a-f0-9]{32}$",
			"rAttack": " ",
			"options":[
				{
				"id": 11100,
				"description": "PostgreSQL Challenge-Response Authentication (MD5)"
				"example": "$postgres$postgres*f0784ea5*2091bb7d4725d1ca85e8de6ec349baf6"
				}
			]
		},
		{
			"id": 11200,
			"description": "MySQL Challenge-Response Authentication (SHA1)"
		},
		{
			"id": 11300,
			"description": "Bitcoin/Litecoin wallet.dat"
		},
		{
			"id": 11400,
			"description": "SIP digest authentication (MD5)"
		},
		{
			"regex": "^(\\$crc32\\$[a-f0-9]{8}.)?[a-f0-9]{8}$",
			"rAttack": " ",
			"options":[
				{
				"id": 11500,
				"description": "CRC32",
				"example": "c762de4a:00000000"
				}
			]
		},
		{
			"id": 11600,
			"description": "7-Zip"
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
			"regex": "^_[a-z0-9\\/.]{19}$",
			"rAttack": " ",
			"options":[
				{
				"id": 12400,
				"description": "BSDiCrypt, Extended DES",
				"example": "_9G..8147mpcfKT8g0U."
				}
			]
		},
		{
			"id": 12500,
			"description": "RAR3-hp"
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
			"id": 13000,
			"description": "RAR5"
		},
		{
			"id": 13100,
			"description": "Kerberos 5 TGS-REP etype 23"
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
			"id": 13400,
			"description": "Keepass 1/2 AES/Twofish with/without keyfile"
		},
		{
			"id": 13500,
			"description": "PeopleSoft PS_TOKEN"
		},
		{
			"id": 13600,
			"description": "WinZip"
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
			"id": 14700,
			"description": "iTunes Backup < 10.0 11"
		},
		{
			"id": 14800,
			"description": "iTunes Backup >= 10.0 11"
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
			"id": 15100,
			"description": "Juniper/NetBSD sha1crypt"
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
			"id": 15600,
			"description": "Ethereum Wallet, PBKDF2-HMAC-SHA256"
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
			"id": 16300,
			"description": "Ethereum Pre-Sale Wallet, PBKDF2-HMAC-SHA256"
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
			"id": 16600,
			"description": "Electrum Wallet (Salt-Type 1-3)"
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
			"id": 17200,
			"description": "PKZIP (Compressed)"
		},
		{
			"id": 17210,
			"description": "PKZIP (Uncompressed)"
		},
		{
			"id": 17220,
			"description": "PKZIP (Compressed Multi-File)"
		},
		{
			"id": 17225,
			"description": "PKZIP (Mixed Multi-File)"
		},
		{
			"id": 17230,
			"description": "PKZIP (Compressed Multi-File Checksum-Only)"
		},
		{
			"id": 17300,
			"description": "SHA3-224"
		},
		{
			"id": 17400,
			"description": "SHA3-256"
		},
		{
			"id": 17500,
			"description": "SHA3-384"
		},
		{
			"id": 17600,
			"description": "SHA3-512"
		},
		{
			"id": 17700,
			"description": "Keccak-224"
		},
		{
			"id": 17800,
			"description": "Keccak-256"
		},
		{
			"id": 17900,
			"description": "Keccak-384"
		},
		{
			"id": 18000,
			"description": "Keccak-512"
		},
		{
			"id": 18100,
			"description": "TOTP (HMAC-SHA1)"
		},
		{
			"id": 18200,
			"description": "Kerberos 5 AS-REP etype 23"
		},
		{
			"id": 18300,
			"description": "Apple File System (APFS)"
		},
		{
			"id": 18400,
			"description": "Open Document Format (ODF) 1.2 (SHA-256, AES)"
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
			"id": 18900,
			"description": "Android Backup"
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
			"id": 19600,
			"description": "Kerberos 5 TGS-REP etype 17 (AES128-CTS-HMAC-SHA1-96)"
		},
		{
			"id": 19700,
			"description": "Kerberos 5 TGS-REP etype 18 (AES256-CTS-HMAC-SHA1-96)"
		},
		{
			"id": 19800,
			"description": "Kerberos 5, etype 17, Pre-Auth"
		},
		{
			"id": 19900,
			"description": "Kerberos 5, etype 18, Pre-Auth"
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
			"id": 20200,
			"description": "Python passlib pbkdf2-sha512"
		},
		{
			"id": 20300,
			"description": "Python passlib pbkdf2-sha256"
		},
		{
			"id": 20400,
			"description": "Python passlib pbkdf2-sha1"
		},
		{
			"id": 20500,
			"description": "PKZIP Master Key"
		},
		{
			"id": 20510,
			"description": "PKZIP Master Key (6 byte optimization)"
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
			"id": 20711,
			"description": "AuthMe sha256"
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
			"id": 21700,
			"description": "Electrum Wallet (Salt-Type 4)"
		},
		{
			"id": 21800,
			"description": "Electrum Wallet (Salt-Type 5)"
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
			"id": 22100,
			"description": "BitLocker"
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
			"id": 22301,
			"description": "Telegram client app passcode (SHA256)"
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
			"description": "Telegram Desktop App Passcode (PBKDF2-HMAC-SHA1)"
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
			"id": 22941,
			"description": "RSA/DSA/EC/OPENSSH Private Keys ($4$)"
		},
		{
			"id": 22951,
			"description": "RSA/DSA/EC/OPENSSH Private Keys ($5$)"
		},
		{
			"id": 23001,
			"description": "SecureZIP AES-128"
		},
		{
			"id": 23002,
			"description": "SecureZIP AES-192"
		},
		{
			"id": 23003,
			"description": "SecureZIP AES-256"
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
			"id": 23700,
			"description": "RAR3-p (Uncompressed)"
		},
		{
			"id": 23800,
			"description": "RAR3-p (Compressed)"
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
			"id": 25300,
			"description": "MS Office 2016 - SheetProtection"
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
			"id": 25600,
			"description": "bcrypt(md5($pass)) / bcryptmd5"
		},
		{
			"id": 25700,
			"description": "MurmurHash"
		},
		{
			"id": 25800,
			"description": "bcrypt(sha1($pass)) / bcryptsha1"
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
			"id": 31000,
			"description": "BLAKE2s-256"
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
	]
