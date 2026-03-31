// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their AccessKey pairs.
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
   * Indicates whether RAM users can change their passwords.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether the MFA devices of RAM users are remembered.
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users.
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their MFA devices.
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

export class SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their public keys.
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

export class SetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
  /**
   * @remarks
   * The AccessKey pair preference.
   */
  accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The logon preference.
   */
  loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preference.
   */
  MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The public key preference.
   * 
   * >  This parameter is valid only for the Japan site.
   */
  publicKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
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
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      publicKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference,
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

export class SetSecurityPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A978915D-F279-4CA0-A89B-9A71219FFB3E
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

