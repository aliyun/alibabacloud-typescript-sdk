// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  /**
   * @example
   * 6338888
   */
  certId?: number;
  /**
   * @example
   * cert-5391062
   */
  certName?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  common?: string;
  /**
   * @example
   * 3EB2585309AE5C8F369****7CDA6A8F5CEC8B2D4
   */
  fingerprint?: string;
  /**
   * @example
   * xxxxCert Inc
   */
  issuer?: string;
  /**
   * @example
   * 1632462708
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

