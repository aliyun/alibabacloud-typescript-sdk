// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnCertificateSigningRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Common Name of the certificate.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The content of the CSR file.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----\\nMIIC/zCCAecCAQAwZTELMAkGA1UEBhMCQ04xCzAJBgNVBAgTAlpKMQswCQYDVQQH
   */
  csr?: string;
  /**
   * @remarks
   * The MD5 hash value of the certificate public key.
   * 
   * @example
   * 629bf4fd8104eda171135bcb0f77a10b
   */
  pubMd5?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      csr: 'Csr',
      pubMd5: 'PubMd5',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      csr: 'string',
      pubMd5: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

