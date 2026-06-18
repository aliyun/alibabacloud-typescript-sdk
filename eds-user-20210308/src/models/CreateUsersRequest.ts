// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the convenience user. This email address is used for notifications, such as an alert when a cloud computer is assigned. You must specify either this parameter or the `Phone` parameter.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The user name. The user name must be 3 to 24 characters long and can contain lowercase letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  groupIdList?: string[];
  /**
   * @remarks
   * The ID of the organization to which the convenience user belongs.
   * 
   * @example
   * design
   */
  orgId?: string;
  /**
   * @remarks
   * The account activation type.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The password for the convenience user.
   * 
   * > The password must be at least 10 characters long and contain characters from at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (excluding spaces).
   * 
   * @example
   * Wuying1234
   */
  password?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The phone number of the convenience user. This phone number is used for notifications, such as a text message when a cloud computer is assigned. You must specify either this parameter or the `Email` parameter.
   * 
   * 
   * 
   * <props="intl">
   * 
   * Phone numbers are not supported on the international site.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the convenience user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * A remark for the convenience user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      groupIdList: 'GroupIdList',
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
      groupIdList: { 'type': 'array', 'itemType': 'string' },
      orgId: 'string',
      ownerType: 'string',
      password: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date and time when the system automatically locks the convenience user\\"s account. The value must be in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2025-11-28 00:00:00
   */
  autoLockTime?: string;
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
   * Specifies whether to set the convenience user as a local administrator.
   * 
   * @example
   * true
   */
  isLocalAdmin?: boolean;
  /**
   * @remarks
   * The initial password. If you do not specify this parameter, the system sends a password reset email to the convenience user\\"s email address.
   * 
   * @example
   * Test123****
   */
  password?: string;
  /**
   * @remarks
   * By default, a convenience user\\"s password does not expire. You can use this parameter to specify a password validity period of 30 to 365 days. After the password expires, the user must reset it to log in again.
   * 
   * > This feature is in invited preview. To use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: string;
  /**
   * @remarks
   * Details about the convenience users.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateUsers
   */
  users?: CreateUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      businessChannel: 'BusinessChannel',
      isLocalAdmin: 'IsLocalAdmin',
      password: 'Password',
      passwordExpireDays: 'PasswordExpireDays',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      businessChannel: 'string',
      isLocalAdmin: 'boolean',
      password: 'string',
      passwordExpireDays: 'string',
      users: { 'type': 'array', 'itemType': CreateUsersRequestUsers },
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

