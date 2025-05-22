// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The method to notify the user after the password is reset.
   * 
   * > Alibaba Cloud accounts of the international site do not support sending notification through text messages.
   * 
   * @example
   * 1
   */
  notifyType?: number;
  /**
   * @remarks
   * The names of the convenience users whose passwords you want to reset.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

