// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanRecycleAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 122321223
   */
  recycleFromFundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      recycleFromFundAccountId: 'RecycleFromFundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      recycleFromFundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

