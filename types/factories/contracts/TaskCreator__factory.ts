/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type {
  TaskCreator,
  TaskCreatorInterface,
} from "../../contracts/TaskCreator";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_automate",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fundsOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "automate",
    outputs: [
      {
        internalType: "contract IAutomate",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelTask",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "luckyNumber",
        type: "uint256",
      },
    ],
    name: "createTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dedicatedMsgSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "luckyNumber",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundsOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myTaskId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taskTreasury",
    outputs: [
      {
        internalType: "contract ITaskTreasuryUpgradable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162000c7a38038062000c7a8339810160408190526200003591620001ee565b81818130816001600160a01b03166080816001600160a01b031681525050816001600160a01b031663573ea5756040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000092573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b891906200022d565b6001600160a01b0390811660c0526040516337b6269f60e21b8152908216600482015273c815db16d4be6ddf2685c201937905abf338f5d79063ded89a7c906024016040805180830381865afa15801562000117573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013d919062000254565b506001600160a01b0390811660a05283811660e0526080516040805163e60a321360e01b8152905191909216935063e60a3213925060048083019260209291908290030181865afa15801562000197573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bd91906200022d565b6001600160a01b031661010052506200028c92505050565b6001600160a01b0381168114620001eb57600080fd5b50565b600080604083850312156200020257600080fd5b82516200020f81620001d5565b60208401519092506200022281620001d5565b809150509250929050565b6000602082840312156200024057600080fd5b81516200024d81620001d5565b9392505050565b600080604083850312156200026857600080fd5b82516200027581620001d5565b602084015190925080151581146200022257600080fd5b60805160a05160c05160e05161010051610984620002f6600039600081816101c701526103dd01526000818161014f0152818161031601526103a60152600050506000818160f9015261046201526000818160a801528181610685015261072201526109846000f3fe60806040526004361061008a5760003560e01c8063744bfe6111610059578063744bfe6114610171578063766e91f014610191578063e60a3213146101b5578063f7d9ae73146101e9578063fe0d94c11461020e57600080fd5b8063049aacfe1461009657806328f150eb146100e757806331d669341461011b57806346ee3c591461013d57600080fd5b3661009157005b600080fd5b3480156100a257600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f357600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b34801561012757600080fd5b5061013b610136366004610789565b61022e565b005b34801561014957600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b34801561017d57600080fd5b5061013b61018c3660046107a2565b61030b565b34801561019d57600080fd5b506101a760005481565b6040519081526020016100de565b3480156101c157600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101f557600080fd5b506101fe61043d565b60405190151581526020016100de565b34801561021a57600080fd5b506101fe610229366004610789565b610455565b60005462bc614e901561027f5760405162461bcd60e51b81526020600482015260146024820152737461736b206964206973206e6f7420656d70747960601b60448201526064015b60405180910390fd5b600061028a826104d7565b90506000306001600160a01b031663fe0d94c1856040516024016102b091815260200190565b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050509050600061030130838573eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee61066b565b6000555050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461038f5760405162461bcd60e51b815260206004820152602360248201527f4f6e6c792066756e6473206f776e65722063616e2077697468647261772066756044820152626e647360e81b6064820152608401610276565b604051631c20fadd60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301528281166024830152604482018490527f00000000000000000000000000000000000000000000000000000000000000001690631c20fadd90606401600060405180830381600087803b15801561042157600080fd5b505af1158015610435573d6000803e3d6000fd5b505050505050565b6000805461044a8161070c565b505060008055600190565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104cf5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920646564696361746564206d73672e73656e646572000000000000006044820152606401610276565b506001919050565b604080518082018252606080825260208201528151600281840181815260a0830190945291926000928291908160200160208202803683370190505081526040805160028082526060820190925260209092019190816020015b6060815260200190600190039081610531575050905280518051919250600191600090610560576105606107de565b60200260200101906003811115610579576105796107f4565b9081600381111561058c5761058c6107f4565b81525050600281600001516001815181106105a9576105a96107de565b602002602001019060038111156105c2576105c26107f4565b908160038111156105d5576105d56107f4565b905250604080516fffffffffffffffffffffffffffffffff8516602082015261012c8183015281518082038301815260609091019091528160200151600081518110610623576106236107de565b602002602001018190525061064360408051602081019091526000815290565b816020015160018151811061065a5761065a6107de565b602090810291909101015292915050565b604051633323b46760e01b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633323b467906106c09088908890889088906004016108a5565b6020604051808303816000875af11580156106df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610703919061095e565b95945050505050565b60405163ee8ca3b560e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ee8ca3b590602401600060405180830381600087803b15801561076e57600080fd5b505af1158015610782573d6000803e3d6000fd5b5050505050565b60006020828403121561079b57600080fd5b5035919050565b600080604083850312156107b557600080fd5b8235915060208301356001600160a01b03811681146107d357600080fd5b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6000815180845260005b8181101561083057602081850181015186830182015201610814565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501808196508360051b8101915082860160005b8581101561089857828403895261088684835161080a565b9885019893509084019060010161086e565b5091979650505050505050565b6001600160a01b0385168152608060208083018290526000916108ca9084018761080a565b838103604080860191909152865181835280519183018290528301906000906060840190825b81811015610929578451600480821061091657634e487b7160e01b865260218152602486fd5b50835293860193918601916001016108f0565b5050848901519250838103858501526109428184610850565b9550505050505061070360608301846001600160a01b03169052565b60006020828403121561097057600080fd5b505191905056fea164736f6c6343000813000a";

type TaskCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TaskCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TaskCreator__factory extends ContractFactory {
  constructor(...args: TaskCreatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _automate: PromiseOrValue<string>,
    _fundsOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TaskCreator> {
    return super.deploy(
      _automate,
      _fundsOwner,
      overrides || {}
    ) as Promise<TaskCreator>;
  }
  override getDeployTransaction(
    _automate: PromiseOrValue<string>,
    _fundsOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_automate, _fundsOwner, overrides || {});
  }
  override attach(address: string): TaskCreator {
    return super.attach(address) as TaskCreator;
  }
  override connect(signer: Signer): TaskCreator__factory {
    return super.connect(signer) as TaskCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TaskCreatorInterface {
    return new utils.Interface(_abi) as TaskCreatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TaskCreator {
    return new Contract(address, _abi, signerOrProvider) as TaskCreator;
  }
}