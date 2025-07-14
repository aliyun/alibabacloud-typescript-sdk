// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserSsoSettingsResponseBodyUserSsoSettings extends $dara.Model {
  /**
   * @remarks
   * The auxiliary domain name.
   * 
   * @example
   * example.com
   */
  auxiliaryDomain?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Indicates whether user-based SSO is enabled.
   * 
   * @example
   * true
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the SAML SSO requires a domain name in the `<saml:NameID>` element of the SAML response. If yes, the username specified by the IdP for SSO must have a domain name as the suffix.
   * 
   * *   If the value of the parameter is `true`, the `<saml:NameID>` element **must** be in the `username@domain` format. You can set `domain` to the default domain name or the configured domain alias.
   * *   If the value of the parameter is `false`, the `<saml:NameID>` element **must** be in the `username` format and **cannot** contain the `domain` suffix.
   * 
   * The default value is `true`.
   * 
   * @example
   * true
   */
  ssoLoginWithDomain?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      ssoLoginWithDomain: 'SsoLoginWithDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
      ssoLoginWithDomain: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87F2E3F6-28A0-43F3-A77F-F7760E62F61E
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of user-based SSO.
   */
  userSsoSettings?: SetUserSsoSettingsResponseBodyUserSsoSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSsoSettings: 'UserSsoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSsoSettings: SetUserSsoSettingsResponseBodyUserSsoSettings,
    };
  }

  validate() {
    if(this.userSsoSettings && typeof (this.userSsoSettings as any).validate === 'function') {
      (this.userSsoSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

