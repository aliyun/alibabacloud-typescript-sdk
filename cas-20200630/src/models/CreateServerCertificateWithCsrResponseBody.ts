// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerCertificateWithCsrResponseBody extends $dara.Model {
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
   * The unique identifier of the server certificate.
   * 
   * @example
   * 180ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 55C66C7B-671A-4297-9187-2C4477247A74
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
   * The content of the server certificate.
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

