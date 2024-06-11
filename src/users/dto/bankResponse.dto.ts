import { AccountInfo } from "./accountInfo.dto"

export class BankResponseDTO{
    responseCode: string
    responseMessage: string
    accountInfo: AccountInfo
}