// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadUserCertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the non-SM certificate in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * @example
   * XXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the SM encryption certificate in PEM format. This field is ignored if Cert and Key are not empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCA***
   * -----END CERTIFICATE-----
   */
  encryptCert?: string;
  /**
   * @remarks
   * The private key of the SM encryption certificate in PEM format. This field is ignored if Cert and Key are not empty.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEI****
   * -----END EC PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The private key of the non-SM certificate in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw
   * -----END CERTIFICATE-----
   */
  key?: string;
  /**
   * @remarks
   * The custom name of the certificate. Maximum length: 63 characters. Supports all character types, including letters, digits, and underscores.
   * > Certificate names must be unique within the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * cert-1
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ae****vty
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The content of the SM signing certificate in PEM format. This field is ignored if Cert and Key are not empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  signCert?: string;
  /**
   * @remarks
   * The private key of the SM signing certificate in PEM format. This field is ignored if Cert and Key are not empty.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEILR****
   * -----END EC PRIVATE KEY-----
   */
  signPrivateKey?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: UploadUserCertificateRequestTags[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      clientToken: 'ClientToken',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      key: 'Key',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      clientToken: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      key: 'string',
      name: 'string',
      resourceGroupId: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
      tags: { 'type': 'array', 'itemType': UploadUserCertificateRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

