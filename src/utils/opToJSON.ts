import { ethers } from "ethers";
import { IUserOperation } from "../types/IUserOperation";

export const OpToJSON = (op: IUserOperation): IUserOperation => {
  return Object.keys(op)
    .map((key) => {
      let val = (op as any)[key];
      if (typeof val !== "string" || !val.startsWith("0x")) {
        val = ethers.toQuantity(val);
      }
      return [key, val];
    })
    .reduce(
      (set, [k, v]) => ({
        ...set,
        [k]: v,
      }),
      {}
    ) as IUserOperation;
};