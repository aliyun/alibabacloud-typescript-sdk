// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * 测试账户
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the account.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. A value of true indicates that the email address is verified by the user or set to verified by the administrator. A value of false indicates that the email address is not verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * true
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile phone number of the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number is verified. A value of true indicates that the mobile phone number is verified by the user or set to verified by the administrator. A value of false indicates that the mobile phone number is not verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The area code for the mobile phone number. For example, the area code for a mobile phone number in the Chinese mainland is 86. Do not add 00 or a plus sign (+).
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values: enabled: The account is enabled. disabled: The account is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last updated. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. This ID is used to map external data to the IDaaS account. By default, this parameter is the same as the IDaaS account ID.
   * 
   * Note: The external ID must be unique for the same source type and source ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * For accounts created in IDaaS, the default value is the instance ID. For other types of accounts, the value is the enterprise ID from the source. For example, for an account from DingTalk, the value is the corpId of the DingTalk enterprise.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * - build_in: The account is created in IDaaS.
   * 
   * - ding_talk: The account is imported from DingTalk.
   * 
   * - ad: The account is imported from Active Directory (AD).
   * 
   * - ldap: The account is imported from LDAP.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'accountExpireTime',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      instanceId: 'instanceId',
      lockExpireTime: 'lockExpireTime',
      passwordSet: 'passwordSet',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      registerTime: 'registerTime',
      status: 'status',
      updateTime: 'updateTime',
      userExternalId: 'userExternalId',
      userId: 'userId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      lockExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data objects.
   */
  data?: ListUsersResponseBodyData[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUsersResponseBodyData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

