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

