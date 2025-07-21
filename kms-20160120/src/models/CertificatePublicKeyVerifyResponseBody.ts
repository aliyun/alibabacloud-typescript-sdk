// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertificatePublicKeyVerifyResponseBody extends $dara.Model {
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
   * The verification result. Valid values:
   * 
   * *   true: The signature is valid.
   * *   false: The signature is invalid.
   * 
   * @example
   * true
   */
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

