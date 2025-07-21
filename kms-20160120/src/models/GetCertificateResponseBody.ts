// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate in the Privacy Enhanced Mail (PEM) format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The CSR in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----MIICxjCCAa4CAQAwPzELMAkGA1UEBhMCQ04xDzANBgNVBAoTBmFsaXl1bjEMMAoGA1UECxMDa21zMREwDwY****-----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b3e104b4-0319-4a20-ab7f-9fef6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
      csr: 'string',
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

