// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate issued by the CA, which is in the Privacy Enhanced Mail (PEM) format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain issued by the CA, which is in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

