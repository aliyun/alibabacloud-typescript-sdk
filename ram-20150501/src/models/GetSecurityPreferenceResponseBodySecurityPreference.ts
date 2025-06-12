// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference } from "./GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference";
import { GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference } from "./GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference";
import { GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference } from "./GetSecurityPreferenceResponseBodySecurityPreferenceMfapreference";
import { GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference } from "./GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference";


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

