// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetExternalSAMLIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The binding for sending SAML requests. Valid values:
   * 
   * *   Post: HTTP Post bindings.
   * *   Redirect: HTTP Redirect bindings.
   * 
   * @example
   * Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata file of the IdP. The value of this parameter is Base64-encoded.
   * 
   * The file is provided by the IdP that supports SAML 2.0.
   * 
   * @example
   * PD94bWwgdmVyc2lvbj0iMS4****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the IdP.
   * 
   * @example
   * http://www.okta.com/exk3qwgtjhetR2Od****
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP.
   */
  loginUrl?: string;
  /**
   * @remarks
   * The status of SSO logon. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * @example
   * Disabled
   */
  SSOStatus?: string;
  /**
   * @remarks
   * Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  wantRequestSigned?: boolean;
  /**
   * @remarks
   * The X.509 certificate in the PEM format. If you specify this parameter, all existing certificates are replaced.
   * 
   * @example
   * MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      loginUrl: 'LoginUrl',
      SSOStatus: 'SSOStatus',
      wantRequestSigned: 'WantRequestSigned',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      loginUrl: 'string',
      SSOStatus: 'string',
      wantRequestSigned: 'boolean',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

