// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their own AccessKey pairs. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageAccessKeys: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their own passwords.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether RAM users can log on directly using passkeys.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  allowUserToLoginWithPasskey?: boolean;
  /**
   * @remarks
   * Indicates whether the MFA status is saved for seven days after a RAM user logs on using MFA.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The IP addresses or CIDR blocks from which RAM users are allowed to sign in to the Alibaba Cloud console.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The duration of a logon session for a RAM user.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Indicates whether MFA is required for logon. This parameter replaces `EnforceMFAForLogin`. The `EnforceMFAForLogin` parameter is still valid, but using this new parameter is recommended.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their own MFA devices.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $dara.Model {
  /**
   * @remarks
   * The maximum idle period for the AccessKey pair of a RAM user. If an AccessKey pair remains unused for this period, it is automatically disabled the next day.
   * 
   * Default value: 730.
   * 
   * Unit: days.
   * 
   * @example
   * 730
   */
  maxIdleDaysForAccessKeys?: number;
  /**
   * @remarks
   * The maximum idle period for RAM users. If a RAM user with console logon enabled remains inactive for this period, their console logon is automatically disabled the next day. This does not apply to single sign-on (SSO) logons.
   * 
   * Default value: 730.
   * 
   * Unit: days.
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

export class SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can attach or detach their personal DingTalk accounts.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $dara.Model {
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

export class SetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
  /**
   * @remarks
   * The AccessKey pair preferences.
   */
  accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The logon preferences.
   */
  loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preferences.
   */
  MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The configuration of the maximum idle period in days.
   */
  maxIdleDays?: SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
  /**
   * @remarks
   * The personal information preferences.
   */
  personalInfoPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  /**
   * @remarks
   * The preferences for MFA methods.
   */
  verificationPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
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
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      maxIdleDays: SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays,
      personalInfoPreference: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
      verificationPreference: SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference,
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

export class SetSecurityPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17494710-B4BA-4185-BBBB-C1A6ABDE1639
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: SetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: SetSecurityPreferenceResponseBodySecurityPreference,
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

