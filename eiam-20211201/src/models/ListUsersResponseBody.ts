// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The account expiration time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The creation time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The user description.
   * 
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. `true` means the user has verified the email address or an administrator has marked it as verified. `false` means the email address is not verified.
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
   * The account lock expiration time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * The password expiration time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the phone number is verified. `true` means the user has verified the phone number or an administrator has marked it as verified. `false` means the phone number is not verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country calling code. For example, specify `86` for Chinese mainland. Do not include `00` or a plus sign (+).
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The registration time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - `enabled`: The user is enabled.
   * 
   * - `disabled`: The user is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The last update time. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external user ID. This ID maps data from an external system to a user in IDaaS. It defaults to the user ID.
   * 
   * Note: The external user ID must be unique for the same source type and source ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The user source ID.
   * 
   * If the user is built-in, this is the instance ID. For users from other sources, this is the enterprise ID from the source, such as the `corpId` for a DingTalk organization.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The user source type. Valid values:
   * 
   * - `build_in`: The user is a built-in user.
   * 
   * - `ding_talk`: The user is imported from DingTalk.
   * 
   * - `ad`: The user is imported from AD.
   * 
   * - `ldap`: The user is imported from LDAP.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
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
      passwordExpireTime: 'number',
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
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

