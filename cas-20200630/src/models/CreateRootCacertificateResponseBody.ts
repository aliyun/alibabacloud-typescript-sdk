// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRootCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The created root certificate in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The CA certificate chain of the created root certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the created root CA certificate.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  identifier?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
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

