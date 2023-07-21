import { BigNumberish, BytesLike, ethers } from "ethers";
import { OpToJSON } from "./utils/opToJSON";
import { IUserOperation } from "./types";

export const DEFAULT_VERIFICATION_GAS_LIMIT = 7000n;
export const DEFAULT_CALL_GAS_LIMIT = 35000n;
export const DEFAULT_PRE_VERIFICATION_GAS = 21000n;