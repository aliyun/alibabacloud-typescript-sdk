// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can manage their own passwords. Valid values:
   * 
   * - true (default)
   * 
   * - false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can log on using passkeys. Valid values:
   * 
   * - true (default)
   * 
   * - false
   * 
   * @example
   * true
   */
  allowUserToLoginWithPasskey?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their own AccessKey pairs. Valid values:
   * 
   * - true:
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their own MFA devices. Valid values:
   * 
   * - true (default)
   * 
   * - false
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can attach or detach their personal DingTalk accounts. Valid values:
   * 
   * - true (default)
   * 
   * - false
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  /**
   * @remarks
   * Specifies whether to save the multi-factor authentication (MFA) status for seven days after a RAM user logs on using MFA. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * Specifies the IP addresses or CIDR blocks from which RAM users are allowed to sign in to the Alibaba Cloud console.
   * 
   * - This restriction applies to both password-based and single sign-on (SSO) logons.
   * 
   * - It does not affect API calls made with an AccessKey pair.
   * 
   * - If a mask is not configured, logons are allowed from any IP address.
   * 
   * Separate multiple entries with a semicolon (`;`). For example: 192.168.0.0/16;10.0.0.0/8.
   * 
   * The mask is limited to a maximum of 40 entries and a total length of 512 characters.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The duration of a logon session for a RAM user.
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
   * Specifies whether MFA is required for logon. This parameter replaces `EnforceMFAForLogin`. The `EnforceMFAForLogin` parameter is still valid, but using this new parameter is recommended. Valid values:
   * 
   * - mandatory: Enforces MFA for all RAM users. This value corresponds to `true` for the `EnforceMFAForLogin` parameter.
   * 
   * - independent (default): The MFA requirement depends on the configuration of each RAM user. This value corresponds to `false` for the `EnforceMFAForLogin` parameter.
   * 
   * - adaptive: Enforces MFA only for abnormal logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * The maximum number of days that a RAM user\\"s AccessKey pair can be idle. If an AccessKey pair is not used within the specified period, it is automatically disabled the next day. Valid values:
   * 
   * - 90
   * 
   * - 180
   * 
   * - 365
   * 
   * - 730 (default)
   * 
   * @example
   * 365
   */
  maxIdleDaysForAccessKeys?: number;
  /**
   * @remarks
   * The maximum number of days that a RAM user can be idle. If a RAM user with console logon enabled does not log on within this period, their console logon is automatically disabled the next day. This setting does not apply to single sign-on (SSO) logons. Valid values:
   * 
   * - 90
   * 
   * - 180
   * 
   * - 365
   * 
   * - 730 (default)
   * 
   * @example
   * 365
   */
  maxIdleDaysForUsers?: number;
  /**
   * @remarks
   * This parameter is deprecated.
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

