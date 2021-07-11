/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface BridgeEventContract
  extends Truffle.Contract<BridgeEventInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BridgeEventInstance>;
}

export interface BridgeEventContract
  extends Truffle.Contract<BridgeEventInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BridgeEventInstance>;
}

export interface ConvertLibContract
  extends Truffle.Contract<ConvertLibInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ConvertLibInstance>;
}

export interface IERC20Contract extends Truffle.Contract<IERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC20Instance>;
}

export interface MetaCoinContract extends Truffle.Contract<MetaCoinInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MetaCoinInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface BridgeEventInstance extends Truffle.ContractInstance {
  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  bridgeUSDC: {
    (
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface BridgeEventInstance extends Truffle.ContractInstance {
  bridgeUSDC: {
    (
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BigNumber | string,
      stableCoin: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface ConvertLibInstance extends Truffle.ContractInstance {
  convert(
    amount: number | BigNumber | string,
    conversionRate: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}

export interface IERC20Instance extends Truffle.ContractInstance {
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface MetaCoinInstance extends Truffle.ContractInstance {
  sendCoin: {
    (
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      receiver: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getBalanceInEth(
    addr: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  getBalance(
    addr: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setCompleted: {
    (
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  upgrade: {
    (
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}