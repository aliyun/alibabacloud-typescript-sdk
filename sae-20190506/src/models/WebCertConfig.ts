// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebCertConfig extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * sae-certname
   */
  certName?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   *  …… 
   * -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MIIEowIBAAKCAQEA5SIfpNCBoiDrZhX1H39CHwQMVD0kBNeBTWfP9xkeesvfzbOz ******* POVNFfDf9h7pJtQ5fRZNTYTDs/d+cH62Z3+nS74mNnEfff0nkvne 
   * -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
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

