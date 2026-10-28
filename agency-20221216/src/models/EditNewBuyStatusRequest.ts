// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditNewBuyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The new purchase status. Valid values:
   * 
   * - cancelBan: allows new purchases
   * - ban: prohibits new purchases.
   * 
   * @example
   * cancelBan
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * The UID of the customer.
   * 
   * @example
   * 1133166938931507
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      newBuyStatus: 'NewBuyStatus',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newBuyStatus: 'string',
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

