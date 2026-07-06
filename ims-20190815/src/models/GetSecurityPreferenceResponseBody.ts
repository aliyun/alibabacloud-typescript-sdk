// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can manage their own AccessKey pairs. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageServiceCredentials: 'AllowUserToManageServiceCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageServiceCredentials: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can manage their own passwords. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can log in with passkeys. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToLoginWithPasskey?: boolean;
  /**
   * @remarks
   * Specifies whether to save the multi-factor authentication (MFA) status for 7 days after a RAM user passes MFA. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The login network mask.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The login session duration for RAM users, in hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Specifies whether MFA is required for logon. This parameter replaces `EnforceMFAForLogin`. Although `EnforceMFAForLogin` is still supported, using this new parameter is recommended. Valid values:
   * 
   * - mandatory: MFA is required for all RAM users. This value corresponds to `true` for the `EnforceMFAForLogin` parameter.
   * 
   * - independent (default): The MFA setting for each RAM user is applied independently. This value corresponds to `false` for the `EnforceMFAForLogin` parameter.
   * 
   * - adaptive: MFA is required only for risky logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * Specifies whether to require multi-factor authentication (MFA) for secondary authentication during a risky logon. Valid values:
   * 
   * - autonomous (default): Secondary authentication is optional, and MFA device binding is not enforced.
   * 
   * - enforceVerify: Secondary authentication is enforced.
   * 
   * @example
   * autonomous
   * 
   * @deprecated
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToLoginWithPasskey: 'AllowUserToLoginWithPasskey',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToLoginWithPasskey: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      operationForRiskLogin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can manage their own MFA devices. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  allowUserToManageMFADevices?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageMFADevices: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $dara.Model {
  /**
   * @remarks
   * The maximum idle period, in days, for a RAM user\\"s AccessKey. If an AccessKey remains unused for this period, it is automatically disabled on the following day. The default value is 730.
   * 
   * @example
   * 730
   */
  maxIdleDaysForAccessKeys?: number;
  /**
   * @remarks
   * The maximum idle period (in days) for RAM users. If a RAM user with console login enabled remains inactive (does not log in, excluding SSO logins) for this period, their console login access is automatically disabled on the following day. The default value is 730.
   * 
   * @example
   * 730
   */
  maxIdleDaysForUsers?: number;
  static names(): { [key: string]: string } {
    return {
      maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
      maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIdleDaysForAccessKeys: 'number',
      maxIdleDaysForUsers: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can bind or unbind their personal DingTalk accounts. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePersonalDingTalk: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $dara.Model {
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      verificationTypes: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.verificationTypes)) {
      $dara.Model.validateArray(this.verificationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
  /**
   * @remarks
   * The AccessKey preferences.
   */
  accessKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The login preferences.
   */
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preferences.
   */
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The settings for the maximum idle period, in days.
   */
  maxIdleDays?: GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
  /**
   * @remarks
   * The personal information preferences.
   */
  personalInfoPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  /**
   * @remarks
   * The preferences for MFA methods.
   */
  verificationPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      maxIdleDays: 'MaxIdleDays',
      personalInfoPreference: 'PersonalInfoPreference',
      verificationPreference: 'VerificationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      maxIdleDays: GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays,
      personalInfoPreference: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
      verificationPreference: GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference,
    };
  }

  validate() {
    if(this.accessKeyPreference && typeof (this.accessKeyPreference as any).validate === 'function') {
      (this.accessKeyPreference as any).validate();
    }
    if(this.loginProfilePreference && typeof (this.loginProfilePreference as any).validate === 'function') {
      (this.loginProfilePreference as any).validate();
    }
    if(this.MFAPreference && typeof (this.MFAPreference as any).validate === 'function') {
      (this.MFAPreference as any).validate();
    }
    if(this.maxIdleDays && typeof (this.maxIdleDays as any).validate === 'function') {
      (this.maxIdleDays as any).validate();
    }
    if(this.personalInfoPreference && typeof (this.personalInfoPreference as any).validate === 'function') {
      (this.personalInfoPreference as any).validate();
    }
    if(this.verificationPreference && typeof (this.verificationPreference as any).validate === 'function') {
      (this.verificationPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30C9068D-FBAA-4998-9986-8A562FED0BC3
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: GetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: GetSecurityPreferenceResponseBodySecurityPreference,
    };
  }

  validate() {
    if(this.securityPreference && typeof (this.securityPreference as any).validate === 'function') {
      (this.securityPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

