import usdc from "../build/abi/main/usdc.json"
import busdc from "../build/abi/test/busdc.json"
import polydragonbinancematicbridge from "../build/abi/test/polydragonbinancematicbridge.json"
//one to one
export const enum MainTokenBookMark {
	usdc = "Binance-Peg USD Coin (USDC)",
	bnbpolybridge="polydragon binance matic bridge mainnet"

}
export const MainTokenBook = new Map([
	// https://bscscan.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
	['Binance-Peg USD Coin (USDC)', {
		address:'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
		abi:usdc
	}],['polydragon binance matic bridge mainnet',{
		address:'0xE80F6a8221B94D42D2A373CD3A054ae7d189C6F9',
		abi:polydragonbinancematicbridge
	}]
]);
export enum TestTokenBookMark {
	busd="BUSD Token (BUSD)",
	bnbpolybridge="polyDragonBinanceMaticBridge"
 }
export const TestTokenBook = new Map([
    // https://testnet.bscscan.com/address/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
	['BUSD Token (BUSD)', {
		address:'0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
		abi: busdc
	}],
	['polyDragonBinanceMaticBridge',{
		// 0xA9a2498B3Bded57C8d796e18Deddc5c0fc5fC76f
		address:'0xE5d60Be9Df0C85CAD8880d1F454d52fE921acd0B',
		abi:polydragonbinancematicbridge
	}]
])
export type ContractDto= {
	abi:any,
	address:string,
}

export type WalletConnection = {
    address: string,
    mnemonic?:string
}
export enum State{
	MAIN="MAIN",TEST="TEST",LOCAL="LOCAL"
}