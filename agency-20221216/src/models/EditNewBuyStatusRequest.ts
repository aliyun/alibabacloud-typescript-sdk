// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditNewBuyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * New Purchase Status</br>
   * 
   * - cancelBan: Cancel the restriction for New Purchase request</br>
   * 
   * - ban: ban the New Purchase request</br>
   * 
   * @example
   * cancelBan
   */
  newBuyStatus?: string;
  /**
   * @remarks
   * Customer UID
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

