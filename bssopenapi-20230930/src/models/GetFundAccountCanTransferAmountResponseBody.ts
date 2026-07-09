// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanTransferAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Available amount
   * 
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @remarks
   * Cash ledger balance
   * 
   * @example
   * 500
   */
  cashAmount?: string;
  /**
   * @remarks
   * Currency
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Enterprise entity ID of the account owner
   * 
   * @example
   * 2032121324
   */
  fundAccountEcid?: string;
  /**
   * @remarks
   * Account ID
   * 
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @remarks
   * Account name
   * 
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @remarks
   * Alibaba Cloud account ID of the fund account owner
   * 
   * @example
   * 154738212323
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @remarks
   * Transferable amount
   * 
   * @example
   * 100
   */
  maxTransferableAmount?: string;
  /**
   * @remarks
   * Response metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Primary marketplace
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Site
   * 
   * @example
   * 26842
   */
  site?: string;
  /**
   * @remarks
   * Transfer ledger balance
   * 
   * @example
   * 100
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      cashAmount: 'CashAmount',
      currency: 'Currency',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxTransferableAmount: 'MaxTransferableAmount',
      metadata: 'Metadata',
      nbid: 'Nbid',
      requestId: 'RequestId',
      site: 'Site',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      cashAmount: 'string',
      currency: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      maxTransferableAmount: 'string',
      metadata: 'any',
      nbid: 'string',
      requestId: 'string',
      site: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

