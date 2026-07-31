// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The remarks of the user.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Bob
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the validity period of the user, in seconds (UNIX timestamp format).
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the user, in seconds (UNIX timestamp format).
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1099**@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The language for message notifications. This parameter is required when LanguageStatus is set to Custom. Valid values:
   * 
   * - **zh-cn**: Simplified Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The language setting for message notifications. Valid values:
   * 
   * - **Global**: follows the global settings
   * - **Custom**: custom
   * 
   * @example
   * Custom
   */
  languageStatus?: string;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * @example
   * 1359999****
   */
  mobile?: string;
  /**
   * @remarks
   * The country code of the mobile phone number of the user. Valid values:
   * - **CN**: the Chinese mainland (+86)
   * - **HK**: Hong Kong (China) (+852)
   * - **MO**: Macao (China) (+853)
   * - **TW**: Taiwan (China) (+886)
   * - **RU**: Russia (+7)
   * - **SG**: Singapore (+65)
   * - **MY**: Malaysia (+60)
   * - **ID**: Indonesia (+62)
   * - **DE**: Germany (+49)
   * - **AU**: Australia (+61)
   * - **US**: United States (+1)
   * - **AE**: Dubai (+971)
   * - **JP**: Japan (+81)
   * - **GB**: United Kingdom (+44)
   * - **IN**: India (+91)
   * - **KR**: South Korea (+82)
   * - **PH**: Philippines (+63)
   * - **CH**: Switzerland (+41)
   * - **SE**: Sweden (+46)
   * 
   * @example
   * CN
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * Indicates whether the password must be reset upon next logon. Valid values:
   * 
   * - **true**: The password must be reset.
   * - **false**: The password does not need to be reset.
   * 
   * @example
   * true
   */
  needResetPassword?: boolean;
  /**
   * @remarks
   * The source of the user. Valid values:
   * - **Local**: local user
   * - **Ram**: Resource Access Management (RAM) user
   * - **AD**: AD user
   * - **LDAP**: LDAP user
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique identity of the user.
   * > This parameter is the unique identity of the Resource Access Management (RAM) user that corresponds to the bastion host user. This parameter is returned when the user source is a RAM user (that is, **Source** is set to **Ram**). If the user source is a local user (that is, **Source** is set to **Local**), this parameter is empty.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * The array of enabled two-factor authentication methods.
   */
  twoFactorMethods?: string[];
  /**
   * @remarks
   * The two-factor authentication status of the user. Valid values:
   * 
   * - **Global**: follows the global settings
   * - **Disable**: two-factor authentication disabled
   * - **Enable**: two-factor authentication enabled, follows individual user settings
   * 
   * @example
   * Enable
   */
  twoFactorStatus?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the user.
   * 
   * @example
   * abc_def
   */
  userName?: string;
  /**
   * @remarks
   * The user status array.
   */
  userState?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userId: 'UserId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      source: 'string',
      sourceUserId: 'string',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
      twoFactorStatus: 'string',
      userId: 'string',
      userName: 'string',
      userState: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.twoFactorMethods)) {
      $dara.Model.validateArray(this.twoFactorMethods);
    }
    if(Array.isArray(this.userState)) {
      $dara.Model.validateArray(this.userState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of users returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users returned.
   */
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

