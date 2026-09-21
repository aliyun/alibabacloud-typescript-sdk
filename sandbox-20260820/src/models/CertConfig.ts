// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertConfig extends $dara.Model {
  /**
   * @remarks
   * The certificate name, which is used to identify the certificate in the console.
   * 
   * @example
   * sandbox-example-com
   */
  certName?: string;
  /**
   * @remarks
   * The certificate public key content in PEM format, including the complete certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDdzCCAl+gAwIBAgIEbGVzc29u
   * -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate private key content in PEM format. The private key is encrypted and stored on the server side, and is not returned in plaintext when queried.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----
   * ****
   * -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'certName',
      certificate: 'certificate',
      privateKey: 'privateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

