// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the convenience user. For a user-activated convenience user, the email address or mobile number must be verified. You can choose to verify the email address or the mobile number. For an administrator-activated convenience user, the email address and mobile number can be left empty.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile number of the convenience user. For a user-activated convenience user, the email address or mobile number must be verified. You can choose to verify the email address or the mobile number. For an administrator-activated convenience user, the email address and mobile number can be left empty.
   * 
   * >  Accounts created on the International site (alibabacloud.com) do not support mobile number-based authentication.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

