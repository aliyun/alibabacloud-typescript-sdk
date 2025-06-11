// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider extends $dara.Model {
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the SP.
   * 
   * @example
   * https://signin-cn-shanghai.alibabacloudsso.com/saml/acs/51d298a9-2a3f-4e23-97c7-7ad1cfa9****
   */
  acsUrl?: string;
  /**
   * @remarks
   * The signature algorithm supported by the AuthNRequest initiated by Alibaba Cloud. Value:
   * 
   * - rsa-sha256
   * 
   * - rsa-sha1
   * 
   * @example
   * rsa-sha256
   */
  authnSignAlgo?: string;
  /**
   * @remarks
   * The certificate type used by Alibaba Cloud for signing during the SSO process. Value:
   * 
   * - self-signed: Use a self-signed certificate.
   * 
   * - public: Use a certificate issued by CA.
   * 
   * @example
   * public
   */
  certificateType?: string;
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
   * The metadata file of the SP. The value of this parameter is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVyc2lv****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the SP.
   * 
   * @example
   * https://signin-cn-shanghai.alibabacloudsso.com/saml/sp/d-00fc2p61****
   */
  entityId?: string;
  /**
   * @remarks
   * Whether to support Assertion encryption on the IdP side.
   * 
   * @example
   * true
   */
  supportEncryptedAssertion?: boolean;
  static names(): { [key: string]: string } {
    return {
      acsUrl: 'AcsUrl',
      authnSignAlgo: 'AuthnSignAlgo',
      certificateType: 'CertificateType',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      supportEncryptedAssertion: 'SupportEncryptedAssertion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsUrl: 'string',
      authnSignAlgo: 'string',
      certificateType: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      supportEncryptedAssertion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

