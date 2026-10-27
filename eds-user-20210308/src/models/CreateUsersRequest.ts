// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The email address. The email address is used to receive relevant emails, such as notification emails for cloud computer allocation. You must specify either the email address or the phone number.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username. The username is custom and must be 3 to 24 characters in length. It can contain only lowercase letters, digits, and underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The IDs of the user groups to join.
   */
  groupIdList?: string[];
  /**
   * @remarks
   * The organization to which the user belongs.
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
   * The user password.
   * 
   * > The password must be at least 10 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (excluding spaces).
   * 
   * @example
   * Wuying1234
   */
  password?: string;
  /**
   * @remarks
   * <props="china">The phone number. The phone number is used to receive relevant text messages, such as notification text messages for cloud computer allocation. You must specify either the email address or the phone number.
   * 
   * <props="intl">Phone numbers are not supported on the international site.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The user remarks.
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
   * The date when the account is automatically locked. Specify the date in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-11-28 00:00:00
   */
  autoLockTime?: string;
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
   * Specifies whether to set the convenience account as a local administrator.
   * 
   * @example
   * true
   */
  isLocalAdmin?: boolean;
  /**
   * @remarks
   * The initial password. If you do not specify this parameter, a password reset email is sent to the user\\"s email address.
   * 
   * @example
   * Test123****
   */
  password?: string;
  /**
   * @remarks
   * The validity period of the password for the user account. By default, the password never expires. You can set this parameter to a value from 30 to 365 to specify the validity period in days. After the password expires, the end user must change the password before logging on again.
   * 
   * > This feature is in invitational preview. To use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: string;
  /**
   * @remarks
   * The convenience account information.
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

