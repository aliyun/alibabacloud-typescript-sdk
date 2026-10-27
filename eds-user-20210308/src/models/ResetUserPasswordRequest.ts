// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The method used to notify the user after the password is reset.
   * 
   * > Notification by text message is not supported for Alibaba Cloud International Website accounts.
   * 
   * @example
   * 1
   */
  notifyType?: number;
  /**
   * @remarks
   * The usernames of the convenience users whose passwords you want to reset.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      notifyType: 'NotifyType',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

