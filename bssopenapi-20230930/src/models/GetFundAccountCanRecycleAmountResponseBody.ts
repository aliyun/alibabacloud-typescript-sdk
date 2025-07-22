// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList extends $dara.Model {
  /**
   * @example
   * 122323121
   */
  fundAccountId?: string;
  /**
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @example
   * 183221321
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * 120
   */
  maxRecyclableAmount?: string;
  /**
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
   * @example
   * 300
   */
  availableAmount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1232122132
   */
  recycleFromFundAccountId?: string;
  recycleToFundAccountList?: GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList[];
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
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

