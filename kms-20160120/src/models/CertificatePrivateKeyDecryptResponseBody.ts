// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertificatePrivateKeyDecryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The plaintext after data is decrypted.
   * 
   * The value is encoded in Base64.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      plaintext: 'string',
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

