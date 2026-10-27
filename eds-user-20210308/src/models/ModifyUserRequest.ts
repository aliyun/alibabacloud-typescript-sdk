// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The email address of the convenience account.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The user ID of the convenience account, which corresponds to the username field displayed in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile phone number of the convenience account.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      email: 'string',
      endUserId: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

