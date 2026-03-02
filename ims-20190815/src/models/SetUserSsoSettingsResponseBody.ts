// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserSsoSettingsResponseBodyUserSsoSettings extends $dara.Model {
  /**
   * @remarks
   * The signature algorithm that is supported by the Alibaba Cloud SP. Valid values:
   * 
   * - rsa-sha256
   * 
   * - rsa-sha1 (default)
   */
  authnSignAlgo?: string;
  /**
   * @remarks
   * The auxiliary domain name.
   */
  auxiliaryDomain?: string;
  /**
   * @remarks
   * The metadata file. The file is Base64-encoded.
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Indicates whether user-based SSO is enabled.
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the `<saml:NameID>` element in a SAML response must contain a domain name when a user logs on using SAML-based SSO. This applies if the username that is specified on the IdP for logon matching contains a domain name suffix.
   * 
   * - If this parameter is set to `true`, the value of the `<saml:NameID>` element **must** be in the `username@domain` format, which includes a domain name suffix. The `domain` can be the default domain name or a domain alias if one is configured.
   * 
   * - If this parameter is set to `false`, the value of the `<saml:NameID>` element **must** be the `username` only. The value **must not** contain the `domain` part.
   * 
   * The default value is `true`.
   */
  ssoLoginWithDomain?: boolean;
  static names(): { [key: string]: string } {
    return {
      authnSignAlgo: 'AuthnSignAlgo',
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      ssoLoginWithDomain: 'SsoLoginWithDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnSignAlgo: 'string',
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
   */
  requestId?: string;
  /**
   * @remarks
   * The user-based SSO settings.
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

