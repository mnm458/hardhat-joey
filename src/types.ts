import { BigNumberish, BytesLike } from "ethers";
export interface IUserOperation {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
  }
export interface IUserOperationBuilder {
    // get methods.
    getSender: () => string;
    getNonce: () => BigNumberish;
    getInitCode: () => BytesLike;
    getCallData: () => BytesLike;
    getCallGasLimit: () => BigNumberish;
    getVerificationGasLimit: () => BigNumberish;
    getPreVerificationGas: () => BigNumberish;
    getMaxFeePerGas: () => BigNumberish;
    getMaxPriorityFeePerGas: () => BigNumberish;
    getPaymasterAndData: () => BytesLike;
    getSignature: () => BytesLike;
    getOp: () => IUserOperation;
}
