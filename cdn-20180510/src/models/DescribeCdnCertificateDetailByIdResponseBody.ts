// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGINCERTIFICATE-----xxx-----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * 587f6db37e3a2f01047b032b739cbe31
   */
  key?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
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

