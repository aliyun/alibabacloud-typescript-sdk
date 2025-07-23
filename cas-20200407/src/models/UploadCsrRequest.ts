// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The private key content of the certificate in the PEM format.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  /**
   * @remarks
   * The name of the CSR.
   * 
   * @example
   * name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

