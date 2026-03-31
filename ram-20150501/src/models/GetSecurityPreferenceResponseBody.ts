// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Resource Access Management (RAM) users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false
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

export class GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can change their passwords. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether RAM users can save security codes for MFA during logon. Each security code is valid for seven days. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that indicates the IP addresses from which logon to the Alibaba Cloud Management Console is allowed. This parameter applies to password-based logon and single sign-on (SSO). However, this parameter does not apply to API calls that are authenticated based on AccessKey pairs.
   * 
   * *   If you specify a subnet mask, RAM users can use only the IP addresses in the subnet mask to log on to the Alibaba Cloud Management Console.
   * *   If you do not specify a subnet mask, RAM users can use all IP addresses to log on to the Alibaba Cloud Management Console.
   * 
   * If you want to specify more than one subnet mask, separate the masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users. Unit: hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
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
   * Indicates whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
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

export class GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their public keys. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  allowUserToManagePublicKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePublicKeys: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
  /**
   * @remarks
   * The AccessKey pair preference.
   */
  accessKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The logon preference.
   */
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The multi-factor authentication (MFA) preference.
   */
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The public key preference.
   * 
   * >  This parameter is valid only for the Japan site.
   */
  publicKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      publicKeyPreference: 'PublicKeyPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      publicKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference,
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
    if(this.publicKeyPreference && typeof (this.publicKeyPreference as any).validate === 'function') {
      (this.publicKeyPreference as any).validate();
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
   * DC1213F1-A9D5-4A01-A996-44983689126C
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

