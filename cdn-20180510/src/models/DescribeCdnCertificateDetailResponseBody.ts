// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIFzDCCBLSgAwIBxxxx
   */
  cert?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 881049
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * cert-15480655xxxx
   */
  certName?: string;
  /**
   * @remarks
   * The key of the SSL certificate.
   * 
   * @example
   * xxxx
   */
  key?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certName: 'CertName',
      key: 'Key',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certName: 'string',
      key: 'string',
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

