import { BigNumberish, BytesLike, ethers, getBytes } from "ethers";
import { OpToJSON } from "./utils/opToJSON";
import { IUserOperation, IUserOpBuilder } from "./types";

export const DEFAULT_VERIFICATION_GAS_LIMIT = 7000n;
export const DEFAULT_CALL_GAS_LIMIT = 35000n;
export const DEFAULT_PRE_VERIFICATION_GAS = 21000n;

export const DEFAULT_USER_OP: IUserOperation = {
    sender: ethers.ZeroAddress,
    nonce: 0n,
    initCode: ethers.toBeHex("0x"),
    callData: ethers.toBeHex("0x"),
    callGasLimit: DEFAULT_CALL_GAS_LIMIT,
    verificationGasLimit: DEFAULT_VERIFICATION_GAS_LIMIT,
    preVerificationGas: DEFAULT_PRE_VERIFICATION_GAS,
    maxFeePerGas: 0n,
    maxPriorityFeePerGas: 0n,
    paymasterAndData: ethers.toBeHex("0x"),
    signature: ethers.toBeHex("0x"),
  };

  export class UserOpBuilder implements IUserOpBuilder {

    getSender() {
        return "";
      }
      getNonce() {
        return 0n;
      }
      getInitCode() {
        return getBytes("lorem ipsum");
      }
      getCallData() {
        return getBytes("lorem ipsum");
      }
      getCallGasLimit() {
        return 0n;
      }
      getVerificationGasLimit() {
        return 0n;
      }
      getPreVerificationGas() {
        return 0n;
      }
      getMaxFeePerGas() {
        return 0n;
      }
      getMaxPriorityFeePerGas() {
        return 0n;
      }
      getPaymasterAndData() {
        return getBytes("lorem ipsum");
      }
      getSignature() {
        return getBytes("lorem ipsum");
      }
      getOp() {
        return DEFAULT_USER_OP;
      }

  }