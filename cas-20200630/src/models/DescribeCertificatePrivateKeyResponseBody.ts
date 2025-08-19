// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificatePrivateKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the encrypted private key.
   * 
   * @example
   * -----BEGIN ENCRYPTED PRIVATE KEY----- …… -----END ENCRYPTED PRIVATE KEY-----
   */
  encryptedData?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedData: 'EncryptedData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedData: 'string',
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

