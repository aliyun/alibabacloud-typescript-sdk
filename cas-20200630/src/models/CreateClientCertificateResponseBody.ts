// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate.
   * 
   * @example
   * 190ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 8C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

