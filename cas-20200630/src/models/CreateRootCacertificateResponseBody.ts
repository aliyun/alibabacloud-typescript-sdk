// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRootCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The root CA certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain of the root CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D9B4C5F-7140-5B41-924C-329181DC00C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
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

