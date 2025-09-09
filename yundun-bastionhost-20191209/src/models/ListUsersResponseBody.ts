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
   * The end time of the validity period of the user. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the user. The value is a UNIX timestamp. Unit: seconds.
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
   * This parameter is required if LanguageStatus is set to Custom. Valid values:
   * 
   * *   **zh-cn**: simplified Chinese.
   * *   **en**: English.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Indicates whether notifications are sent in the language specified in the global settings or a custom language.
   * 
   * *   **Global**
   * *   **Custom**
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
   * The location where the mobile phone number of the user is registered. Valid values:
   * 
   * *   **CN**: the Chinese mainland, whose international dialing code is +86.
   * *   **HK**: Hong Kong (China), whose international dialing code is +852.
   * *   **MO**: Macao (China), whose international dialing code is +853.
   * *   **TW**: Taiwan (China), whose international dialing code is +886.
   * *   **RU**: Russia, whose international dialing code is +7.
   * *   **SG**: Singapore, whose international dialing code is +65.
   * *   **MY**: Malaysia, whose international dialing code is +60.
   * *   **ID**: Indonesia, whose international dialing code is +62.
   * *   **DE**: Germany, whose international dialing code is +49.
   * *   **AU**: Australia, whose international dialing code is +61.
   * *   **US**: US, whose international dialing code is +1.
   * *   **AE**: United Arab Emirates, whose international dialing code is +971.
   * *   **JP:** Japan, whose international dialing code is +81.
   * *   **GB**: UK, whose international dialing code is +44.
   * *   **IN**: India, whose international dialing code is +91.
   * *   **KR**: Republic of Korea, whose international dialing code is +82.
   * *   **PH**: Philippines, whose international dialing code is +63.
   * *   **CH**: Switzerland, whose international dialing code is +41.
   * *   **SE**: Sweden, whose international dialing code is +46.
   * 
   * @example
   * CN
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * Indicates whether password reset is required upon the next logon. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needResetPassword?: boolean;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   **Local**: a local user.
   * *   **Ram**: a RAM user.
   * *   **AD**: an AD-authenticated user.
   * *   **LDAP**: an LDAP-authenticated user.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique ID of the user.
   * 
   * >  This parameter uniquely identifies a RAM user of the bastion host. A value is returned for this parameter if **Source** is set to **Ram**. No value is returned for this parameter if **Source** is set to **Local**.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * An array of the enabled two-factor authentication methods.
   */
  twoFactorMethods?: string[];
  /**
   * @remarks
   * Indicates whether two-factor authentication is enabled for the user. Valid values:
   * 
   * *   **Global**: The global setting applies.
   * *   **Disable**: Two-factor authentication is disabled.
   * *   **Enable**: Two-factor authentication is enabled. The user-specific setting for the authentication method applies.
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
   * An array that lists the states of users.
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
   * The users returned.
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

