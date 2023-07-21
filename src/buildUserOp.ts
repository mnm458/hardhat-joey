import { BigNumberish, BytesLike, ethers } from "ethers";
import { OpToJSON } from "./utils/opToJSON";
import { IUserOperation } from "./types";

export const DEFAULT_VERIFICATION_GAS_LIMIT = 7000n;
export const DEFAULT_CALL_GAS_LIMIT = 35000n;
export const DEFAULT_PRE_VERIFICATION_GAS = 21000n;

export const DEFAULT_USER_OP: IUserOperation = {
    sender: ethers.ZeroAddress,
    nonce: 0,
    initCode: ethers.toBeHex("0x"),
    callData: ethers.toBeHex("0x"),
    callGasLimit: DEFAULT_CALL_GAS_LIMIT,
    verificationGasLimit: DEFAULT_VERIFICATION_GAS_LIMIT,
    preVerificationGas: DEFAULT_PRE_VERIFICATION_GAS,
    maxFeePerGas: 0,
    maxPriorityFeePerGas: 0,
    paymasterAndData: ethers.toBeHex("0x"),
    signature: ethers.toBeHex("0x"),
  };