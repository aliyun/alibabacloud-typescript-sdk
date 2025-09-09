// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The description of the user.
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
   * The end of the validity period of the user. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The beginning of the validity period of the user. The value is a UNIX timestamp. Unit: seconds.
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
   * This parameter is required if LanguageStatus is set to Custom.
   * 
   * - **zh-cn**: simplified Chinese.
   * - **en**: English.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Indicates whether notifications are sent in the language specified in the global settings or a custom language.
   * 
   * *   **Global**: Global
   * *   **Custom**: Custom
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
   * The location in which the mobile number of the user is registered. Valid values:
   * 
   * *   **CN**: the Chinese mainland, whose country calling code is +86
   * *   **HK**: Hong Kong (China), whose country calling code is +852
   * *   **MO**: Macao (China), whose country calling code is +853
   * *   **TW**: Taiwan (China), whose country calling code is +886
   * *   **RU**: Russia, whose country calling code is +7
   * *   **SG**: Singapore, whose country calling code is +65
   * *   **MY**: Malaysia, whose country calling code is +60
   * *   **ID**: Indonesia, whose country calling code is +62
   * *   **DE**: Germany, whose country calling code is +49
   * *   **AU**: Australia, whose country calling code is +61
   * *   **US**: US, whose country calling code is +1
   * *   **AE**: United Arab Emirates, whose country calling code is +971
   * *   **JP:** Japan, whose country calling code is +81
   * *   **GB**: UK, whose country calling code is +44
   * *   **IN**: India, whose country calling code is +91
   * *   **KR**: Republic of Korea, whose country calling code is +82
   * *   **PH**: Philippines, whose country calling code is +63
   * *   **CH**: Switzerland, whose country calling code is +41
   * *   **SE**: Sweden, whose country calling code is +46
   * 
   * @example
   * CN
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * Specifies whether password reset is required upon the next logon. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  needResetPassword?: boolean;
  /**
   * @remarks
   * The source of the user. Valid values:
   * 
   * *   **Local**: a local user
   * *   **Ram**: a RAM user
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique ID of the user.
   * 
   * > This parameter uniquely identifies a RAM user of the bastion host. A value is returned for this parameter if the **Source** parameter is set to **Ram**. No value is returned for this parameter if the **Source** parameter is set to **Local**.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * An array that consists of the details of the two-factor authentication method.
   */
  twoFactorMethods?: string[];
  /**
   * @remarks
   * The two-factor authentication status of the user. Valid values:
   * 
   * *   **Global**: The global settings are used.
   * *   **Disable**: The two-factor authentication is disabled.
   * *   **Enable**: The two-factor authentication is enabled and the user-specific setting is used.
   * 
   * @example
   * Enable
   */
  twoFactorStatus?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * abcabc_def
   */
  userName?: string;
  /**
   * @remarks
   * An array that consists of the details of the user status.
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

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the queried user.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

