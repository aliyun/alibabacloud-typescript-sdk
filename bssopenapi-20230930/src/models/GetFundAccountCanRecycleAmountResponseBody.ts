// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList extends $dara.Model {
  /**
   * @remarks
   * The ID of the reclaimable account.
   * 
   * @example
   * 122323121
   */
  fundAccountId?: string;
  /**
   * @remarks
   * The name of the reclaimable account.
   * 
   * @example
   * Yun\\"s account
   */
  fundAccountName?: string;
  /**
   * @remarks
   * The ID of the account that owns the reclaimable account.
   * 
   * @example
   * 183221321
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @remarks
   * The maximum reclaimable amount.
   * 
   * @example
   * 120
   */
  maxRecyclableAmount?: string;
  /**
   * @remarks
   * The transfer amount that can be reclaimed through the original route.
   * 
   * @example
   * 120
   */
  originalTransferRemainAmount?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxRecyclableAmount: 'MaxRecyclableAmount',
      originalTransferRemainAmount: 'OriginalTransferRemainAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'string',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'string',
      maxRecyclableAmount: 'string',
      originalTransferRemainAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanRecycleAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available balance of the reclaimed account.
   * 
   * @example
   * 300
   */
  availableAmount?: string;
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
   * The metadata of the response struct.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The ID of the source account for reclamation.
   * 
   * @example
   * 1232122132
   */
  recycleFromFundAccountId?: string;
  /**
   * @remarks
   * The list of accounts to which the funds can be reclaimed.
   */
  recycleToFundAccountList?: GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList[];
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
   * The balance of the transfer ledger.
   * 
   * @example
   * 200
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      currency: 'Currency',
      metadata: 'Metadata',
      recycleFromFundAccountId: 'RecycleFromFundAccountId',
      recycleToFundAccountList: 'RecycleToFundAccountList',
      requestId: 'RequestId',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      currency: 'string',
      metadata: 'any',
      recycleFromFundAccountId: 'string',
      recycleToFundAccountList: { 'type': 'array', 'itemType': GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList },
      requestId: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recycleToFundAccountList)) {
      $dara.Model.validateArray(this.recycleToFundAccountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

