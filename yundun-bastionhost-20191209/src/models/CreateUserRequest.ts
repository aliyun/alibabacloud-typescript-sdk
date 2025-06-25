// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the user that you want to add. The remarks can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The display name of the user that you want to add. The display name can be up to 128 characters in length.
   * 
   * >  If you leave this parameter empty, the logon name is used as the display name.
   * 
   * @example
   * Bob
   */
  displayName?: string;
  /**
   * @remarks
   * The end time of the validity period of the user. Specify a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the user. Specify a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The email address of the user that you want to add.
   * 
   * > 
   * 
   * *   This parameter is required if TwoFactorStatus is set to Enable and TwoFactorMethods is set to email, or if TwoFactorStatus is set to Global and TwoFactorMethods is set to email in the global two-factor authentication settings.
   * 
   * *   You can call the [GetInstanceTwoFactor](https://help.aliyun.com/document_detail/462968.html) operation to query the global two-factor authentication settings.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the bastion host to which you want to add a user.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
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
   * Specifies whether to send notifications in the language specified in the global settings or a custom language.
   * 
   * *   **Global**
   * *   **Custom**
   * 
   * >  If you leave this parameter empty, the default value Global is used.
   * 
   * @example
   * Custom
   */
  languageStatus?: string;
  /**
   * @remarks
   * The mobile phone number of the user that you want to add.
   * 
   * > 
   * 
   * *   This parameter is required if TwoFactorStatus is set to Enable and TwoFactorMethods is set to sms or dingtalk, or if TwoFactorStatus is set to Global and TwoFactorMethods is set to sms or dingtalk in the global two-factor authentication settings.
   * 
   * *   You can call the [GetInstanceTwoFactor](https://help.aliyun.com/document_detail/462968.html) operation to query the global two-factor authentication settings.
   * 
   * @example
   * 1359999****
   */
  mobile?: string;
  /**
   * @remarks
   * The location where the mobile phone number of the user is registered. Default value: CN. Valid values:
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
   * *   **JP**: Japan, whose international dialing code is +81.
   * *   **GB**: UK, whose international dialing code is +44.
   * *   **IN**: India, whose international dialing code is +91.
   * *   **KR**: Republic of Korea, whose international dialing code is +82.
   * *   **PH**: Philippines, whose international dialing code is +63.
   * *   **CH**: Switzerland, whose international dialing code is +41.
   * *   **SE:** Sweden, whose international dialing code is +46.
   * *   **SA:** Saudi Arabia, whose international dialing code is +966.
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
   * >  If you leave this parameter empty, the default value false is used.
   * 
   * @example
   * true
   */
  needResetPassword?: boolean;
  /**
   * @remarks
   * The logon password of the user that you want to add. The logon password must be 8 to 128 characters in length. It must contain uppercase letters, lowercase letters, digits, and special characters.
   * 
   * > This parameter is required if Source is set to Local.
   * 
   * @example
   * 213****
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the bastion host to which you want to add a user.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the user that you want to add. Valid values:
   * 
   * *   **Local**: a local user.
   * *   **Ram**: a RAM user.
   * *   **AD**: an AD-authenticated user.
   * *   **LDAP**: an LDAP-authenticated user.
   * 
   * This parameter is required.
   * 
   * @example
   * local
   */
  source?: string;
  /**
   * @remarks
   * The unique ID of the user that you want to add.
   * 
   * > 
   * 
   * *   This parameter uniquely identifies a RAM user of the bastion host. This parameter is required if Source is set to Ram. You can call the [ListUsers](https://help.aliyun.com/document_detail/28684.html) operation in RAM to obtain the unique ID of the user from the UserId response parameter.
   * 
   * *   This parameter is required if Source is set to AD or LDAP. Specify the distinguished name (DN) of the Active Directory (AD)-authenticated user or Lightweight Directory Access Protocol (LDAP)-authenticated user that you want to add.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * The two-factor authentication method. You can select only one method. Valid values:
   * 
   * *   **sms**: text message-based two-factor authentication.
   * *   **email**: email-based two-factor authentication.
   * *   **dingtalk**: DingTalk-based two-factor authentication.
   * *   **totp OTP**: one-time password (OTP) token-based two-factor authentication.
   * 
   * >  If TwoFactorStatus is set to Enable, you must select one of the preceding values for TwoFactorMethods.
   * 
   * @example
   * ["sms"]
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
   * >  If you leave this parameter empty, the default value Global is used.
   * 
   * @example
   * Enable
   */
  twoFactorStatus?: string;
  /**
   * @remarks
   * The logon name of the user that you want to add. The logon name must be 1 to 128 characters in length and can contain only letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * abc_def
   */
  userName?: string;
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
      source: 'Source',
      sourceUserId: 'SourceUserId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userName: 'UserName',
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
      source: 'string',
      sourceUserId: 'string',
      twoFactorMethods: 'string',
      twoFactorStatus: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

