// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference } from "./SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference";
import { SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference } from "./SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference";
import { SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference } from "./SetSecurityPreferenceResponseBodySecurityPreferenceMfapreference";
import { SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference } from "./SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference";


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

