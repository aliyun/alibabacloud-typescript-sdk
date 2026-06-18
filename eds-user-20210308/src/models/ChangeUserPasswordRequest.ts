// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * Channel
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The username of the convenience account whose password is to be modified.
   * 
   * @example
   * alice***
   */
  endUserId?: string;
  /**
   * @remarks
   * The new password for the user.
   * 
   * @example
   * Admin@12***
   */
  newPassword?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      endUserId: 'EndUserId',
      newPassword: 'NewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      endUserId: 'string',
      newPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

