// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 23451111
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * Cert-****
   */
  certName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C7C69682-7F88-40DD-A198-10D0309E439B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certName: 'CertName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certName: 'string',
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

