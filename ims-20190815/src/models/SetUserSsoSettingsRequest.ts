// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserSsoSettingsRequest extends $dara.Model {
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
   * The file is provided by an identity provider (IdP) that supports Security Assertion Markup Language (SAML) 2.0.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Specifies whether to enable SSO for the RAM user. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the SAML SSO requires a domain name in the `<saml:NameID>` element of the SAML response. If yes, the username specified by the IdP for SSO must have a domain name as the suffix.
   * 
   * *   If the value of the parameter is `true`, the `<saml:NameID>` element **must** be in the `username@domain` format. You can set `domain` to the default domain name or the configured domain alias.
   * *   If the value of the parameter is `false`, the `<saml:NameID>` element **must** be in the `username` format and **cannot** contain the `domain` suffix.
   * 
   * Set the value to the default `true`.
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

