// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveHttpsDomainListResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The primary domain name of the certificate.
   * 
   * @example
   * example.org
   */
  certCommonName?: string;
  /**
   * @remarks
   * The time when the certificate expires.
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
   * test
   */
  certName?: string;
  /**
   * @remarks
   * The time when the certificate became effective.
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
   * *   **expire_soon**: The certificate will expire soon.
   * 
   * @example
   * mismatch
   */
  certStatus?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **cas**: a certificate that you purchased from Certificate Management Service
   * *   **upload**: a custom certificate that you uploaded
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
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
   * example.com
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

export class DescribeLiveHttpsDomainListResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeLiveHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeLiveHttpsDomainListResponseBodyCertInfosCertInfo },
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

export class DescribeLiveHttpsDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificates.
   */
  certInfos?: DescribeLiveHttpsDomainListResponseBodyCertInfos;
  /**
   * @remarks
   * The request ID.
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
      certInfos: DescribeLiveHttpsDomainListResponseBodyCertInfos,
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

