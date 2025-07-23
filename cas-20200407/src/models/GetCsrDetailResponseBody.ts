// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCsrDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The private key. Specify a Base64-encoded string.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----…… -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08F45EA0-66A7-4504-9B31-3589F5CE308D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      privateKey: 'string',
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

