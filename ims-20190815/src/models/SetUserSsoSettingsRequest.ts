// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserSsoSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The signature algorithm that is supported by the Alibaba Cloud service provider (SP). Valid values:
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
   * The metadata file. The file must be Base64-encoded.
   * 
   * The file is provided by an identity provider (IdP) that supports the Security Assertion Markup Language (SAML) 2.0 protocol.
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Specifies whether to enable user-based SSO for Resource Access Management (RAM) users. Valid values:
   * 
   * - true: Enables user-based SSO.
   * 
   * - false (default): Disables user-based SSO.
   */
  ssoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether the `<saml:NameID>` element in a SAML response must contain a domain name when a user logs on using SAML-based SSO. This applies if the username that is specified on the IdP for logon matching contains a domain name suffix.
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

