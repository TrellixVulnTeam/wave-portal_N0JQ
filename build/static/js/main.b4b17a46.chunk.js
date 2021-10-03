(this["webpackJsonpwave-portal"]=this["webpackJsonpwave-portal"]||[]).push([[0],{16:function(f,e,a){f.exports={container:"transaction_container__2ecn6",txnContainer:"transaction_txnContainer__KYiTf",nonMessageData:"transaction_nonMessageData__YZ0Ao",walletContainer:"transaction_walletContainer__2midg",timestampContainer:"transaction_timestampContainer__3PAu2",messageContainer:"transaction_messageContainer__3KZ0C"}},24:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601b81526020017f636f6e737472756374656420736d61727420636f6e74726163742100000000008152506200005560201b620006481760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61117c80620001f96000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098b565b6100d9565b005b6100756104d6565b6040516100829190610cf8565b60405180910390f35b6100a560048036038101906100a09190610962565b6104df565b6040516100b29190610cf8565b60405180910390f35b6100c36104f7565b6040516100d09190610bf4565b60405180910390f35b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610e0a565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610cd8565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610e0a565b925050819055506102026040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e1565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c1929190610842565b506040820151816002015550506000606460015442446102e19190610e0a565b6102eb9190610e0a565b6102f59190610f41565b90506103366040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a202573000000000000000000008152508261077d565b806001819055506032811015610482576103856040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106e1565b6000655af3107a40009050478111156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca90610c98565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f990610bdf565b60006040518083038185875af1925050503d8060008114610436576040519150601f19603f3d011682016040523d82523d6000602084013e61043b565b606091505b505090508061047f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047690610cb8565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642846040516104ca929190610d13565b60405180910390a25050565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063f57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a490610ede565b80601f01602080910402602001604051908101604052809291908181526020018280546105d090610ede565b801561061d5780601f106105f25761010080835404028352916020019161061d565b820191906000526020600020905b81548152906001019060200180831161060057829003601f168201915b505050505081526020016002820154815250508152602001906001019061051b565b50505050905090565b6106de8160405160240161065c9190610c16565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b50565b61077982826040516024016106f7929190610c38565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b6108158282604051602401610793929190610c68565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084e90610ede565b90600052602060002090601f01602090048101928261087057600085556108b7565b82601f1061088957805160ff19168380011785556108b7565b828001600101855582156108b7579182015b828111156108b657825182559160200191906001019061089b565b5b5090506108c491906108c8565b5090565b5b808211156108e15760008160009055506001016108c9565b5090565b60006108f86108f384610d68565b610d43565b90508281526020810184848401111561091057600080fd5b61091b848285610e9c565b509392505050565b6000813590506109328161112f565b92915050565b600082601f83011261094957600080fd5b81356109598482602086016108e5565b91505092915050565b60006020828403121561097457600080fd5b600061098284828501610923565b91505092915050565b60006020828403121561099d57600080fd5b600082013567ffffffffffffffff8111156109b757600080fd5b6109c384828501610938565b91505092915050565b60006109d88383610b71565b905092915050565b6109e981610e60565b82525050565b6109f881610e60565b82525050565b6000610a0982610da9565b610a138185610dcc565b935083602082028501610a2585610d99565b8060005b85811015610a615784840389528151610a4285826109cc565b9450610a4d83610dbf565b925060208a01995050600181019050610a29565b50829750879550505050505092915050565b6000610a7e82610db4565b610a888185610de8565b9350610a98818560208601610eab565b610aa18161102e565b840191505092915050565b6000610ab782610db4565b610ac18185610df9565b9350610ad1818560208601610eab565b610ada8161102e565b840191505092915050565b6000610af2603483610df9565b9150610afd8261103f565b604082019050919050565b6000610b15602783610df9565b9150610b208261108e565b604082019050919050565b6000610b38602d83610df9565b9150610b43826110dd565b604082019050919050565b6000610b5b600083610ddd565b9150610b668261112c565b600082019050919050565b6000606083016000830151610b8960008601826109e0565b5060208301518482036020860152610ba18282610a73565b9150506040830151610bb66040860182610bc1565b508091505092915050565b610bca81610e92565b82525050565b610bd981610e92565b82525050565b6000610bea82610b4e565b9150819050919050565b60006020820190508181036000830152610c0e81846109fe565b905092915050565b60006020820190508181036000830152610c308184610aac565b905092915050565b60006040820190508181036000830152610c528185610aac565b9050610c6160208301846109ef565b9392505050565b60006040820190508181036000830152610c828185610aac565b9050610c916020830184610bd0565b9392505050565b60006020820190508181036000830152610cb181610ae5565b9050919050565b60006020820190508181036000830152610cd181610b08565b9050919050565b60006020820190508181036000830152610cf181610b2b565b9050919050565b6000602082019050610d0d6000830184610bd0565b92915050565b6000604082019050610d286000830185610bd0565b8181036020830152610d3a8184610aac565b90509392505050565b6000610d4d610d5e565b9050610d598282610f10565b919050565b6000604051905090565b600067ffffffffffffffff821115610d8357610d82610fff565b5b610d8c8261102e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e1582610e92565b9150610e2083610e92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5557610e54610f72565b5b828201905092915050565b6000610e6b82610e72565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ec9578082015181840152602081019050610eae565b83811115610ed8576000848401525b50505050565b60006002820490506001821680610ef657607f821691505b60208210811415610f0a57610f09610fd0565b5b50919050565b610f198261102e565b810181811067ffffffffffffffff82111715610f3857610f37610fff565b5b80604052505050565b6000610f4c82610e92565b9150610f5783610e92565b925082610f6757610f66610fa1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b7f6d75737420776169742077616974203135207365636f6e6473206265666f726560008201527f20776176696e6720616761696e00000000000000000000000000000000000000602082015250565b50565b61113881610e60565b811461114357600080fd5b5056fea26469706673582212208feacf8ce891432127cdec7ae61e51c495bf86f47ce202568f3205755821ad0264736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098b565b6100d9565b005b6100756104d6565b6040516100829190610cf8565b60405180910390f35b6100a560048036038101906100a09190610962565b6104df565b6040516100b29190610cf8565b60405180910390f35b6100c36104f7565b6040516100d09190610bf4565b60405180910390f35b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610e0a565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610cd8565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610e0a565b925050819055506102026040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e1565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c1929190610842565b506040820151816002015550506000606460015442446102e19190610e0a565b6102eb9190610e0a565b6102f59190610f41565b90506103366040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a202573000000000000000000008152508261077d565b806001819055506032811015610482576103856040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106e1565b6000655af3107a40009050478111156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca90610c98565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f990610bdf565b60006040518083038185875af1925050503d8060008114610436576040519150601f19603f3d011682016040523d82523d6000602084013e61043b565b606091505b505090508061047f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047690610cb8565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642846040516104ca929190610d13565b60405180910390a25050565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063f57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a490610ede565b80601f01602080910402602001604051908101604052809291908181526020018280546105d090610ede565b801561061d5780601f106105f25761010080835404028352916020019161061d565b820191906000526020600020905b81548152906001019060200180831161060057829003601f168201915b505050505081526020016002820154815250508152602001906001019061051b565b50505050905090565b6106de8160405160240161065c9190610c16565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b50565b61077982826040516024016106f7929190610c38565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b6108158282604051602401610793929190610c68565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084e90610ede565b90600052602060002090601f01602090048101928261087057600085556108b7565b82601f1061088957805160ff19168380011785556108b7565b828001600101855582156108b7579182015b828111156108b657825182559160200191906001019061089b565b5b5090506108c491906108c8565b5090565b5b808211156108e15760008160009055506001016108c9565b5090565b60006108f86108f384610d68565b610d43565b90508281526020810184848401111561091057600080fd5b61091b848285610e9c565b509392505050565b6000813590506109328161112f565b92915050565b600082601f83011261094957600080fd5b81356109598482602086016108e5565b91505092915050565b60006020828403121561097457600080fd5b600061098284828501610923565b91505092915050565b60006020828403121561099d57600080fd5b600082013567ffffffffffffffff8111156109b757600080fd5b6109c384828501610938565b91505092915050565b60006109d88383610b71565b905092915050565b6109e981610e60565b82525050565b6109f881610e60565b82525050565b6000610a0982610da9565b610a138185610dcc565b935083602082028501610a2585610d99565b8060005b85811015610a615784840389528151610a4285826109cc565b9450610a4d83610dbf565b925060208a01995050600181019050610a29565b50829750879550505050505092915050565b6000610a7e82610db4565b610a888185610de8565b9350610a98818560208601610eab565b610aa18161102e565b840191505092915050565b6000610ab782610db4565b610ac18185610df9565b9350610ad1818560208601610eab565b610ada8161102e565b840191505092915050565b6000610af2603483610df9565b9150610afd8261103f565b604082019050919050565b6000610b15602783610df9565b9150610b208261108e565b604082019050919050565b6000610b38602d83610df9565b9150610b43826110dd565b604082019050919050565b6000610b5b600083610ddd565b9150610b668261112c565b600082019050919050565b6000606083016000830151610b8960008601826109e0565b5060208301518482036020860152610ba18282610a73565b9150506040830151610bb66040860182610bc1565b508091505092915050565b610bca81610e92565b82525050565b610bd981610e92565b82525050565b6000610bea82610b4e565b9150819050919050565b60006020820190508181036000830152610c0e81846109fe565b905092915050565b60006020820190508181036000830152610c308184610aac565b905092915050565b60006040820190508181036000830152610c528185610aac565b9050610c6160208301846109ef565b9392505050565b60006040820190508181036000830152610c828185610aac565b9050610c916020830184610bd0565b9392505050565b60006020820190508181036000830152610cb181610ae5565b9050919050565b60006020820190508181036000830152610cd181610b08565b9050919050565b60006020820190508181036000830152610cf181610b2b565b9050919050565b6000602082019050610d0d6000830184610bd0565b92915050565b6000604082019050610d286000830185610bd0565b8181036020830152610d3a8184610aac565b90509392505050565b6000610d4d610d5e565b9050610d598282610f10565b919050565b6000604051905090565b600067ffffffffffffffff821115610d8357610d82610fff565b5b610d8c8261102e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e1582610e92565b9150610e2083610e92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5557610e54610f72565b5b828201905092915050565b6000610e6b82610e72565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ec9578082015181840152602081019050610eae565b83811115610ed8576000848401525b50505050565b60006002820490506001821680610ef657607f821691505b60208210811415610f0a57610f09610fd0565b5b50919050565b610f198261102e565b810181811067ffffffffffffffff82111715610f3857610f37610fff565b5b80604052505050565b6000610f4c82610e92565b9150610f5783610e92565b925082610f6757610f66610fa1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b7f6d75737420776169742077616974203135207365636f6e6473206265666f726560008201527f20776176696e6720616761696e00000000000000000000000000000000000000602082015250565b50565b61113881610e60565b811461114357600080fd5b5056fea26469706673582212208feacf8ce891432127cdec7ae61e51c495bf86f47ce202568f3205755821ad0264736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,a){f.exports={container:"app_container__2KuGn"}},49:function(f,e){},59:function(f,e,a){},60:function(f,e,a){"use strict";a.r(e);var b=a(11),t=a.n(b),n=a(35),c=a.n(n),r=a(2),s=a.n(r),d=a(12),o=a(17),i=a(16),u=a.n(i),l=a(6),p=function(f){return Object(l.jsx)("div",{className:u.a.container,children:Object(l.jsxs)("div",{className:u.a.txnContainer,children:[Object(l.jsxs)("div",{className:u.a.nonMessageData,children:[Object(l.jsx)("div",{className:u.a.walletContainer,children:f.wave.address}),Object(l.jsx)("div",{className:u.a.timestampContainer,children:f.wave.timestamp})]}),Object(l.jsx)("div",{className:u.a.messageContainer,children:f.wave.message})]})})},v=a(9),m=a.n(v),h=a(15),x="0x728954a5ea8974f00cA8854185fb8004C69cF540",j=a(24),w=function(){var f=Object(d.a)(s.a.mark((function f(e){var a,b,t,n,c,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,a=window,b=a.ethereum,t=new h.a.providers.Web3Provider(b),n=t.getSigner(),void 0===(c=new h.a.Contract(x,j.abi,n))){f.next=15;break}return f.next=8,c.wave(e,{gasLimit:3e5});case 8:return r=f.sent,console.log("Mining... ",r.hash),f.next=12,r.wait();case 12:console.log("Mined--",r.hash),f.next=16;break;case 15:console.log("contract was undefined");case 16:f.next=21;break;case 18:f.prev=18,f.t0=f.catch(0),console.log(f.t0);case 21:case"end":return f.stop()}}),f,null,[[0,18]])})));return function(e){return f.apply(this,arguments)}}(),g=function(){var f=Object(d.a)(s.a.mark((function f(){var e,a,b,t,n,c,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,e=window,a=e.ethereum,b=new h.a.providers.Web3Provider(a),t=b.getSigner(),n=new h.a.Contract(x,j.abi,t),f.next=7,n.getTotalWaves();case 7:return c=f.sent,console.log("returned total waves count: ",c),r=Number(c),console.log(r),f.abrupt("return",c);case 14:return f.prev=14,f.t0=f.catch(0),console.log(f.t0),f.abrupt("return",void 0);case 18:case"end":return f.stop()}}),f,null,[[0,14]])})));return function(){return f.apply(this,arguments)}}(),y=function(){var f=Object(d.a)(s.a.mark((function f(){var e,a,b,t,n,c,r;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=window,a=e.ethereum,f.prev=1,!window.ethereum){f.next=15;break}return b=new h.a.providers.Web3Provider(a),t=b.getSigner(),n=new h.a.Contract(x,j.abi,t),f.next=8,n.getAllWaves();case 8:return c=f.sent,r=[],c.forEach((function(f){var e=new Date(1e3*f.timestamp).toString().split(" (")[0];r.push({address:f.waver,timestamp:e,message:f.message})})),console.log(r),f.abrupt("return",r);case 15:return console.log("Ethereum object does not exist!"),f.abrupt("return",void 0);case 17:f.next=23;break;case 19:return f.prev=19,f.t0=f.catch(1),console.log(f.t0),f.abrupt("return",void 0);case 23:case"end":return f.stop()}}),f,null,[[1,19]])})));return function(){return f.apply(this,arguments)}}(),_=function(){var f=Object(d.a)(s.a.mark((function f(e){var a,b,t,n,c;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:console.log("listening for new waves!"),a=window,b=a.ethereum;try{window.ethereum?(t=new h.a.providers.Web3Provider(b),n=t.getSigner(),(c=new h.a.Contract(x,j.abi,n)).on("NewWave",function(){var f=Object(d.a)(s.a.mark((function f(a,b,t){var n;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return console.log("NewWave",a,b,t),f.next=3,c.getAllWaves();case 3:n=f.sent,e(n);case 5:case"end":return f.stop()}}),f)})));return function(e,a,b){return f.apply(this,arguments)}}())):console.log("Ethereum object does not exist!")}catch(r){console.log(r)}case 3:case"end":return f.stop()}}),f)})));return function(e){return f.apply(this,arguments)}}(),O=[],C=function(f){var e=Object(b.useState)(""),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(b.useState)(O),r=Object(o.a)(c,2),i=r[0],u=r[1],v=Object(b.useState)(0),h=Object(o.a)(v,2),x=h[0],j=h[1],C=function(f){n(f.target.value)},k=function(){return""!==f.account},N=function(){var f=Object(d.a)(s.a.mark((function f(){return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(k){f.next=2;break}return f.abrupt("return");case 2:if(""!==t){f.next=4;break}return f.abrupt("return");case 4:return f.next=6,w(t);case 6:n("");case 7:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}(),W=function(){var f=Object(d.a)(s.a.mark((function f(){var e;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(k){f.next=2;break}return f.abrupt("return");case 2:return f.next=4,y();case 4:void 0!==(e=f.sent)&&u(e);case 6:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}(),T=function(){var f=Object(d.a)(s.a.mark((function f(){var e;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(k){f.next=2;break}return f.abrupt("return");case 2:return f.next=4,g();case 4:void 0!==(e=f.sent)&&j(e);case 6:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}(),S=function(){var f=Object(d.a)(s.a.mark((function f(){return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(k){f.next=2;break}return f.abrupt("return");case 2:return f.next=4,_(u);case 4:f.sent;case 5:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}();Object(b.useEffect)((function(){T(),W()}),[]),Object(b.useEffect)((function(){S()}),[]);return Object(l.jsx)("div",{className:m.a.container,children:Object(l.jsxs)("div",{className:m.a.dataContainer,children:[Object(l.jsx)("div",{className:m.a.headerContainer,children:Object(l.jsx)("div",{className:m.a.header,children:"Waveportal"})}),Object(l.jsx)("div",{className:m.a.countContainer,children:Object(l.jsxs)("div",{children:["So far ".concat(x," waves have been sent!")," "]})}),Object(l.jsxs)("div",{className:m.a.bodyContainer,children:[Object(l.jsx)("div",{className:m.a.textContainer,children:"Connect your wallet and leave a message!"}),f.account?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:m.a.textInputContainer,children:Object(l.jsx)("input",{className:m.a.textInput,type:"text",value:t,placeholder:"leave a message!",onChange:C})}),Object(l.jsx)("div",{className:m.a.buttonContainer,children:Object(l.jsx)("div",{className:m.a.waveButton,onClick:N,children:Object(l.jsx)("div",{className:m.a.buttonText,children:"wave"})})})]}):Object(l.jsx)("div",{className:m.a.buttonContainer,children:Object(l.jsx)("div",{className:m.a.waveButton,onClick:f.connectWallet,children:Object(l.jsx)("div",{className:m.a.buttonText,children:"connect wallet"})})})]}),0!==i.length?Object(l.jsx)("div",{className:m.a.transactionsContainer,children:i.map((function(f){return Object(l.jsx)(p,{wave:f},f.timestamp)}))}):null]})})},k=a(39),N=a.n(k),W=function(){var f=Object(b.useState)(""),e=Object(o.a)(f,2),a=e[0],t=e[1],n=function(){var f=Object(d.a)(s.a.mark((function f(){var e,a,b,n;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,a=e.ethereum){f.next=5;break}return t(""),f.abrupt("return");case 5:return f.next=8,a.request({method:"eth_accounts"});case 8:if(b=f.sent,console.log("getaccounts"),0!==b.length){f.next=16;break}return t(""),console.log("No authorized account found"),f.abrupt("return");case 16:if(!(b.length>1)){f.next=20;break}return t(""),console.log("more than one account found"),f.abrupt("return");case 20:n=b[0],t(n),console.log("authorized account: ",n),f.next=29;break;case 25:f.prev=25,f.t0=f.catch(0),t(""),console.log(f.t0);case 29:case 30:case"end":return f.stop()}}),f,null,[[0,25]])})));return function(){return f.apply(this,arguments)}}(),c=function(){var f=Object(d.a)(s.a.mark((function f(){var e,a,b;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,a=e.ethereum){f.next=6;break}return t(""),alert("Get Metamask!"),f.abrupt("return");case 6:return f.next=8,a.request({method:"eth_requestAccounts"});case 8:b=f.sent,t(b[0]),console.log("connected: ",b[0]),f.next=17;break;case 13:f.prev=13,f.t0=f.catch(0),t(""),console.log(f.t0);case 17:case"end":return f.stop()}}),f,null,[[0,13]])})));return function(){return f.apply(this,arguments)}}();return Object(b.useEffect)((function(){n()}),[]),Object(l.jsx)("div",{className:N.a.container,children:Object(l.jsx)(C,{account:a,connectWallet:c})})},T=(a(59),function(f){f&&f instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(e){var a=e.getCLS,b=e.getFID,t=e.getFCP,n=e.getLCP,c=e.getTTFB;a(f),b(f),t(f),n(f),c(f)}))});c.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root")),T()},9:function(f,e,a){f.exports={container:"mainbody_container__3Z1Uk",dataContainer:"mainbody_dataContainer__A3_uc",headerContainer:"mainbody_headerContainer__2yHNO",header:"mainbody_header__2tsLS",bodyContainer:"mainbody_bodyContainer__3Mqs-",textContainer:"mainbody_textContainer__2RSyd",textInputContainer:"mainbody_textInputContainer__2ddl5",textInput:"mainbody_textInput__1FHFU",buttonContainer:"mainbody_buttonContainer__3nZWz",waveButton:"mainbody_waveButton__2gxVb",countContainer:"mainbody_countContainer__2p1cV",transactionsContainer:"mainbody_transactionsContainer__3wBp0"}}},[[60,1,2]]]);
//# sourceMappingURL=main.b4b17a46.chunk.js.map