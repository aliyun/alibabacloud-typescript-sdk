// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can change their own passwords. Valid values:
   * 
   * - true (default): Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can use passkeys to log on to the console. Valid values:
   * 
   * - true (default): Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToLoginWithPasskey?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their own AccessKeys. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false (default): Not allowed.
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their own MFA devices. Valid values:
   * 
   * - true (default): Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can link or unlink their personal DingTalk accounts. Valid values:
   * 
   * - true (default): Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their own API keys. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  allowUserToManageServiceCredentials?: boolean;
  /**
   * @remarks
   * Specifies whether a RAM user who logs on with multi-factor authentication (MFA) can skip MFA for the next seven days. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false (default): Not allowed.
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The IP address mask that is used to log on to the console. This mask applies to password-based logons and single sign-on (SSO) logons, but does not affect API calls that are initiated by using an AccessKey pair.
   * 
   * - If you specify a mask, RAM users can log on to the console only from the specified IP addresses.
   * 
   * - If you do not specify a mask, RAM users can log on to the console from all IP addresses.
   * 
   * If you need to specify multiple masks, separate them with semicolons (`;`). Example: `192.168.0.0/16;10.0.0.0/8`.
   * 
   * You can specify up to 40 masks. The total length cannot exceed 512 characters.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The session duration of a RAM user who logs on to the console. Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Specifies the MFA policy for user logon. This parameter replaces `EnforceMFAForLogin`. We recommend that you use this parameter. `EnforceMFAForLogin` is still valid. Valid values:
   * 
   * - `mandatory`: enforces MFA for all RAM users. This is equivalent to setting `EnforceMFAForLogin` to `true`.
   * 
   * - `independent` (default): The MFA settings for each RAM user are not affected. This is equivalent to setting `EnforceMFAForLogin` to `false`.
   * 
   * - `adaptive`: enforces MFA only for unusual logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * The maximum idle period of the AccessKey pairs of RAM users. An AccessKey pair that is not used for the specified period of time is automatically disabled on the next day. You can set the value to one of the following numbers:
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
   * The maximum idle period of RAM users. If a RAM user who can log on to the console does not log on to the console for the specified period of time (SSO logons are not included), the console logon feature of the RAM user is disabled on the next day. You can set the value to one of the following numbers:
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
      allowUserToManageServiceCredentials: 'AllowUserToManageServiceCredentials',
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
      allowUserToManageServiceCredentials: 'boolean',
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

