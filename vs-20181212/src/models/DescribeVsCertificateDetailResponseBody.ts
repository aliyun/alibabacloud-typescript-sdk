// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsCertificateDetailResponseBody extends $dara.Model {
  /**
   * @example
   * -----BEGIN CERTIFICATE-----xxxxx-----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @example
   * 63000000
   */
  certId?: number;
  /**
   * @example
   * cert-539xxxxx
   */
  certName?: string;
  /**
   * @example
   * xxxxx
   */
  key?: string;
  /**
   * @example
   * D94D0E1E-E71B-562D-8C18-969BB3653FBD
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

