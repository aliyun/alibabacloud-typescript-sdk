// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration extends $dara.Model {
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
   * The IDs of the SAML signing certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The time when the IdP was configured for the first time.
   * 
   * @example
   * 2021-11-10T02:57:16Z
   */
  createTime?: string;
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
   * *   Disabled
   * 
   * @example
   * Disabled
   */
  SSOStatus?: string;
  /**
   * @remarks
   * The time when the IdP configurations were last modified.
   * 
   * @example
   * 2021-11-10T02:57:16Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  wantRequestSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
      certificateIds: 'CertificateIds',
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      loginUrl: 'LoginUrl',
      SSOStatus: 'SSOStatus',
      updateTime: 'UpdateTime',
      wantRequestSigned: 'WantRequestSigned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      loginUrl: 'string',
      SSOStatus: 'string',
      updateTime: 'string',
      wantRequestSigned: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.certificateIds)) {
      $dara.Model.validateArray(this.certificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

