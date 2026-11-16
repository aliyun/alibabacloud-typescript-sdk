// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanRecycleAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the source account for reclamation (the payer account ID). If this parameter is not specified, the ID of the account owned by the current user is used by default.
   * 
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

