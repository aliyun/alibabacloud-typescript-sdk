// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertificatePrivateKeySignResponseBody extends $dara.Model {
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  /**
   * @remarks
   * The signature value.
   * 
   * The value is encoded in Base64.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

