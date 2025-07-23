// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The data after encryption. The value is encoded in Base64.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      ciphertextBlob: 'string',
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

