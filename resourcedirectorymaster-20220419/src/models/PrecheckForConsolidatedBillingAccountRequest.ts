// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckForConsolidatedBillingAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member to be used as a main financial account.
   * 
   * This parameter is required.
   * 
   * @example
   * 111***089
   */
  billingAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      billingAccountId: 'BillingAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

