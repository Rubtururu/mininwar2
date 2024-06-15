export const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "upgrade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "setContractMiniGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_programs",
				"type": "uint256[]"
			}
		],
		"name": "subPrograms",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isContractMiniGame",
		"outputs": [
			{
				"name": "_isContractMiniGame",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"name": "_factoryTotal",
				"type": "uint256"
			},
			{
				"name": "_factoryLevel",
				"type": "uint256"
			},
			{
				"name": "_factoryTime",
				"type": "uint256"
			},
			{
				"name": "_programs",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "setMemoryInterface",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_idx",
				"type": "uint256"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setProgramPriceByDarkCrystals",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "miningWarDeadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProgramsValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "factories",
		"outputs": [
			{
				"name": "level",
				"type": "uint256"
			},
			{
				"name": "crystals",
				"type": "uint256"
			},
			{
				"name": "programPriceByCrystals",
				"type": "uint256"
			},
			{
				"name": "programPriceByDarkCrystals",
				"type": "uint256"
			},
			{
				"name": "programValue",
				"type": "uint256"
			},
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "setMiningWarInterface",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateFactory",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "removeContractMiniGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_crystals",
				"type": "uint256"
			},
			{
				"name": "_programPriceByCrystals",
				"type": "uint256"
			},
			{
				"name": "_programPriceByDarkCrystals",
				"type": "uint256"
			},
			{
				"name": "_programValue",
				"type": "uint256"
			},
			{
				"name": "_eth",
				"type": "uint256"
			},
			{
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "addFactory",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "miniGames",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Engineer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "_miningWarDeadline",
				"type": "uint256"
			}
		],
		"name": "setupMiniGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Memory",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MiningWar",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_idx",
				"type": "uint256"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setProgramValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "startGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_idx",
				"type": "uint256"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setProgramPriceByCrystals",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_programs",
				"type": "uint256[]"
			}
		],
		"name": "buyProgarams",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "administrator",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "setEngineerInterface",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_crystals",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_eth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_levelUp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_updateTime",
				"type": "uint256"
			}
		],
		"name": "UpdateFactory",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_crystals",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_darkCrystals",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_programs",
				"type": "uint256[]"
			}
		],
		"name": "BuyProgarams",
		"type": "event"
	}
];