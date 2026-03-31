// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertDetailResponseBodyCertDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The time when the certificate was issued. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1976256736582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * @example
   * *.xxxaliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name that is associated with the certificate.
   * 
   * @example
   * demo.xxxaliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The other domain names that are associated with the certificate.
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
   * The details of the certificate.
   */
  certDetail?: DescribeCertDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The ID of the request.
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

