// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanTransferAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @example
   * 500
   */
  cashAmount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 2032121324
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @example
   * 154738212323
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * 100
   */
  maxTransferableAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
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

