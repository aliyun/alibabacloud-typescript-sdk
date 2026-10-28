// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditEndUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * ### Shutdown status
   * 
   * - postPayFreeze: pay-as-you-go resource suspension
   * - postPayThaw: pay-as-you-go resource resumption.
   * 
   * @example
   * postPayFreeze
   */
  creditStatus?: string;
  /**
   * @remarks
   * The UID of the customer to be processed.
   * 
   * @example
   * 1792155717328010
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      creditStatus: 'CreditStatus',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditStatus: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

