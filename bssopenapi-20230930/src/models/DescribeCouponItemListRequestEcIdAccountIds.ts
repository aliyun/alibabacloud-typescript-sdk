// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponItemListRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

