// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditEndUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Shutdown Status</br>
   * 
   * - postPayFreeze, the account have been blocked</br>
   * 
   * - postPayThaw, the account have been unlocked</br>
   * 
   * @example
   * postPayFreeze
   */
  creditStatus?: string;
  /**
   * @remarks
   * UID
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

