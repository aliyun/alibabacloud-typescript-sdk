// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertDetailResponseBodyCertDetail extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the CA certificate. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The issuance time of the certificate. Unit: milliseconds.
   * 
   * @example
   * 1976256736582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * *.xxxaliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name associated with the certificate.
   * 
   * @example
   * demo.xxxaliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of other domain names associated with the certificate.
   */
  sans?: string[];
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sans)) {
      $dara.Model.validateArray(this.sans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SSL certificate details.
   */
  certDetail?: DescribeCertDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C115DBE-8E53-5A12-9CAF-FD3F****CDF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeCertDetailResponseBodyCertDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certDetail && typeof (this.certDetail as any).validate === 'function') {
      (this.certDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

