// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList } from "./GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList";


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

