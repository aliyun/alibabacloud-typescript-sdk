// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanTransferAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available amount.
   * 
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @remarks
   * The cash ledger balance.
   * 
   * @example
   * 500
   */
  cashAmount?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The enterprise entity ID of the fund account owner.
   * 
   * @example
   * 2032121324
   */
  fundAccountEcid?: string;
  /**
   * @remarks
   * The fund account ID.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @remarks
   * The fund account name.
   * 
   * @example
   * Yun\\"s account
   */
  fundAccountName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the fund account owner.
   * 
   * @example
   * 154738212323
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @remarks
   * The maximum transferable amount.
   * 
   * @example
   * 100
   */
  maxTransferableAmount?: string;
  /**
   * @remarks
   * The metadata of the response structure.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The primary sales site.
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * The site.
   * 
   * @example
   * 26842
   */
  site?: string;
  /**
   * @remarks
   * The transfer ledger balance.
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

