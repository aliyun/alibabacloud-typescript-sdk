// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The returned primary domain name of the certificate.
   * 
   * @example
   * *.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The time at which the certificate expires.
   * 
   * @example
   * 2018-12-26 14:45:09
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * cert
   */
  certName?: string;
  /**
   * @remarks
   * The time at which the certificate became effective.
   * 
   * @example
   * 2018-11-26 14:45:09
   */
  certStartTime?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ok**: The certificate is working as expected.
   * *   **mismatch**: The certificate does not match the specified domain name.
   * *   **expired**: The certificate has expired.
   * *   **expire_soon**: The certificate is about to expire.
   * 
   * @example
   * mismatch
   */
  certStatus?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **cas**: a certificate that is purchased by using Certificate Management Service
   * *   **upload**: a custom certificate that you upload
   * 
   * @example
   * upload
   */
  certType?: string;
  /**
   * @remarks
   * The time at which the certificate was updated.
   * 
   * @example
   * 2019-01-08 18:33:16
   */
  certUpdateTime?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * *.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      certExpireTime: 'CertExpireTime',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      certStatus: 'CertStatus',
      certType: 'CertType',
      certUpdateTime: 'CertUpdateTime',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      certExpireTime: 'string',
      certName: 'string',
      certStartTime: 'string',
      certStatus: 'string',
      certType: 'string',
      certUpdateTime: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo },
    };
  }

  validate() {
    if(Array.isArray(this.certInfo)) {
      $dara.Model.validateArray(this.certInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeDcdnHttpsDomainListResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5E8DF64-7175-4186-9B06-F002C0BBD0C5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnHttpsDomainListResponseBodyCertInfos,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.certInfos && typeof (this.certInfos as any).validate === 'function') {
      (this.certInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

