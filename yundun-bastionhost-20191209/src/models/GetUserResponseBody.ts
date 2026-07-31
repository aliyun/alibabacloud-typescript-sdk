// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The remarks of the user.
   * 
   * @example
   * commet
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
   * The notification language. This parameter is required when LanguageStatus is set to Custom. Valid values:
   * 
   * - **zh-cn**: Simplified Chinese.
   * - **en**: English.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The notification language setting. Valid values:
   * 
   * - **Global**: follows the global settings.
   * - **Custom**: custom settings.
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
   * Indicates whether the password must be reset upon the next logon. Valid values:
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
   * - **Local**: a local user.
   * - **Ram**: a Resource Access Management (RAM) user.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique identity of the user.
   * > This parameter is the unique identity of the Resource Access Management (RAM) user that corresponds to the Bastionhost user. This parameter is returned when the user source is a RAM user (the value of **Source** is **Ram**). If the user source is a local user (the value of **Source** is **Local**), this parameter is empty.
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
   * - **Global**: follows the global settings.
   * - **Disable**: two-factor authentication is disabled.
   * - **Enable**: two-factor authentication is enabled and follows the individual user settings.
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

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique request ID generated by Alibaba Cloud for this request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the queried user.
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

