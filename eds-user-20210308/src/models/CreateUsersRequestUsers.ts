// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the convenience user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user. The name can contain lowercase letters, digits, and underscores (_), and must be 3 to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The organization to which the convenience user belongs.
   * 
   * @example
   * 1111****
   */
  orgId?: string;
  /**
   * @remarks
   * The type of the account ownership.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated
   * *   Normal: user-activated
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The user password.
   * 
   * >  The password must be at least 10 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (excluding spaces).
   * 
   * @example
   * password1
   */
  password?: string;
  /**
   * @remarks
   * Mobile numbers are not supported on the international site (alibabacloud.com).
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      password: 'Password',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      orgId: 'string',
      ownerType: 'string',
      password: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

