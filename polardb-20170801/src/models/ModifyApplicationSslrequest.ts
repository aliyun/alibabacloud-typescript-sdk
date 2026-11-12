// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The server certificate chain in PEM format. This parameter is optional.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICa
   * -----END CERTIFICATE-----
   */
  caPem?: string;
  /**
   * @remarks
   * The server certificate in PEM format. This parameter is provided when you use a bring-your-own (BYO) certificate. It must match KeyPem and override the instance connection domain name. This parameter is allowed only when CA SSL is enabled for the instance.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICert
   * -----END CERTIFICATE-----
   */
  certPem?: string;
  /**
   * @remarks
   * The server private key in PEM format. PKCS#1, PKCS#8, and EC SEC1 formats are supported.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * MIIKey
   * -----END PRIVATE KEY-----
   */
  keyPem?: string;
  /**
   * @remarks
   * Specifies whether SSL is enabled.
   * 
   * This parameter is required.
   */
  sslEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      caPem: 'CaPem',
      certPem: 'CertPem',
      keyPem: 'KeyPem',
      sslEnabled: 'SslEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      caPem: 'string',
      certPem: 'string',
      keyPem: 'string',
      sslEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

