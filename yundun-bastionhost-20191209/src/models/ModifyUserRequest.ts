// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserRequest extends $dara.Model {
  /**
   * @remarks
   * The new remarks of the user. The remarks can be up to 500 characters in length.
   * 
   * >  Leave this parameter empty if you do not want to change the remarks of the user.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The new display name of the user. The display name can be up to 128 characters in length.
   * 
   * >  Leave this parameter empty if you do not want to change the display name of the user.
   * 
   * @example
   * Bob
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the validity period of the user. Specify a UNIX timestamp. Unit: seconds.
   * 
   * >  Leave this parameter empty if you do not want to change the end time of the validity period.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the user. Specify a UNIX timestamp. Unit: seconds.
   * 
   * >  Leave this parameter empty if you do not want to change the start time of the validity period.
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The new email address of the user.
   * 
   * > 
   * 
   * *   This parameter is required if TwoFactorStatus is set to Enable and TwoFactorMethods is set to email, or if TwoFactorStatus is set to Global and TwoFactorMethods is set to email in the global two-factor authentication settings.
   * 
   * *   You can call the [GetInstanceTwoFactor](https://help.aliyun.com/document_detail/462968.html) operation to query the global two-factor authentication settings.
   * 
   * *   Leave this parameter empty if you do not want to change the email address of the user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to modify the information about the user.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required if LanguageStatus is set to Custom.
   * 
   * - **zh-cn**: simplified Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Specifies whether to send notifications in the language specified in the global settings or a custom language.
   * 
   * *   **Global**
   * *   **Custom**
   * 
   * >  Leave this parameter empty if you do not want to change the natural language used to notify the user.
   * 
   * @example
   * Custom
   */
  languageStatus?: string;
  /**
   * @remarks
   * The new mobile phone number of the user.
   * 
   * > 
   * 
   * *   This parameter is required if TwoFactorStatus is set to Enable and TwoFactorMethods is set to sms or dingtalk, or if TwoFactorStatus is set to Global and TwoFactorMethods is set to sms or dingtalk in the global two-factor authentication settings.
   * 
   * *   You can call the [GetInstanceTwoFactor](https://help.aliyun.com/document_detail/462968.html) operation to query the global two-factor authentication settings.
   * 
   * *   Leave this parameter empty if you do not want to change the mobile phone number of the user.
   * 
   * @example
   * 1358888****
   */
  mobile?: string;
  /**
   * @remarks
   * The country where the new mobile number of the user is registered. Valid values:
   * 
   * *   **CN:** the Chinese mainland, whose country calling code is +86
   * *   **HK:** Hong Kong (China), whose country calling code is +852
   * *   **MO:** Macao (China), whose country calling code is +853
   * *   **TW:** Taiwan (China), whose country calling code is +886
   * *   **RU:** Russia, whose country calling code is +7
   * *   **SG:** Singapore, whose country calling code is +65
   * *   **MY:** Malaysia, whose country calling code is +60
   * *   **ID:** Indonesia, whose country calling code is +62
   * *   **DE:** Germany, whose country calling code is +49
   * *   **AU:** Australia, whose country calling code is +61
   * *   **US:** US, whose country calling code is +1
   * *   **AE:** United Arab Emirates, whose country calling code is +971
   * *   **JP:** Japan, whose country calling code is +81
   * *   **GB:** UK, whose country calling code is +44
   * *   **IN:** India, whose country calling code is +91
   * *   **KR:** Republic of Korea, whose country calling code is +82
   * *   **PH:** Philippines, whose country calling code is +63
   * *   **CH:** Switzerland, whose country calling code is +41
   * *   **SE:** Sweden, whose country calling code is +46
   * *   **SA:** Saudi Arabia, whose country calling code is +966
   * 
   * @example
   * CN
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * Specifies whether password reset is required upon the next logon. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Leave this parameter empty if you do not want to change the password reset settings for the user.
   * 
   * @example
   * true
   */
  needResetPassword?: boolean;
  /**
   * @remarks
   * The new password of the user. The password must be 8 to 128 characters in length. It must contain uppercase letters, lowercase letters, digits, and special characters.
   * 
   * > Leave this parameter empty if you do not want to change the password of the user.
   * 
   * @example
   * 321****
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the bastion host on which you want to modify the information about the user.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The two-factor authentication method. You can select only one method. Valid values:
   * 
   * *   **sms**: text message-based two-factor authentication.
   * *   **email**: email-based two-factor authentication.
   * *   **dingtalk**: DingTalk-based two-factor authentication.
   * *   **totp OTP:** one-time password (OTP) token-based two-factor authentication.
   * 
   * >  If TwoFactorStatus is set to Enable, you must specify one of the valid values as TwoFactorMethods.
   * 
   * @example
   * sms
   */
  twoFactorMethods?: string;
  /**
   * @remarks
   * Specifies whether two-factor authentication is enabled for the user. Valid values:
   * 
   * *   **Global**: The global settings apply.
   * *   **Disable**: Two-factor authentication is disabled.
   * *   **Enable**: Two-factor authentication is enabled and user-specific settings apply.
   * 
   * >  Leave this parameter empty if you do not want to change the two-factory authentication settings for the user.
   * 
   * @example
   * Enable
   */
  twoFactorStatus?: string;
  /**
   * @remarks
   * The ID of the user whose information you want to modify.
   * 
   * >  You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      instanceId: 'InstanceId',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      password: 'Password',
      regionId: 'RegionId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      instanceId: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      password: 'string',
      regionId: 'string',
      twoFactorMethods: 'string',
      twoFactorStatus: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

