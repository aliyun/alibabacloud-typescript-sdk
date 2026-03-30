// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can change their passwords. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether a RAM user can use a passkey for logon. Valid values:
   * 
   * *   true: A RAM user can use a passkey for logon. This is the default value.
   * *   false: A RAM user cannot use a passkey for logon.
   * 
   * @example
   * true
   */
  allowUserToLoginWithPasskey?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their personal DingTalk accounts, such as binding and unbinding of the accounts. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can remember the MFA devices for seven days. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). This parameter does not take effect on API calls that are authenticated by using AccessKey pairs.
   * 
   * *   If you specify a subnet mask, RAM users can use only the IP addresses in the subnet mask to log on to the Alibaba Cloud Management Console.
   * *   If you do not specify a subnet mask, RAM users can use all IP addresses to log on to the Alibaba Cloud Management Console.
   * 
   * If you need to specify multiple subnet masks, separate the subnet masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8.
   * 
   * You can specify up to 40 subnet masks. The total length of the subnet masks can be a maximum of 512 characters.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users.
   * 
   * Valid values: 1 to 24. Unit: hours.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Specifies whether MFA is required for all RAM users when they log on to the Alibaba Cloud Management Console. This parameter is used to replace EnforceMFAForLogin. EnforceMFAForLogin is still valid. However, we recommend that you use MFAOperationForLogin. Valid values:
   * 
   * *   mandatory: MFA is required for all RAM users. If you use EnforceMFAForLogin, set the value to true.
   * *   independent (default): User-specific settings are applied. If you use EnforceMFAForLogin, set the value to false.
   * *   adaptive: MFA is required only for RAM users who initiated unusual logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  maxIdleDaysForAccessKeys?: number;
  maxIdleDaysForUsers?: number;
  /**
   * @remarks
   * Specifies whether to enable MFA for RAM users who initiated unusual logons. Valid values:
   * 
   * *   autonomous (default): yes. MFA is prompted for RAM users who initiated unusual logons. However, the RAM users are allowed to skip MFA.
   * *   enforceVerify: MFA is prompted for RAM users who initiated unusual logons and the RAM users cannot skip MFA.
   * 
   * @example
   * autonomous
   * 
   * @deprecated
   */
  operationForRiskLogin?: string;
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToLoginWithPasskey: 'AllowUserToLoginWithPasskey',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
      maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
      operationForRiskLogin: 'OperationForRiskLogin',
      verificationTypesShrink: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToLoginWithPasskey: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePersonalDingTalk: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      maxIdleDaysForAccessKeys: 'number',
      maxIdleDaysForUsers: 'number',
      operationForRiskLogin: 'string',
      verificationTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

