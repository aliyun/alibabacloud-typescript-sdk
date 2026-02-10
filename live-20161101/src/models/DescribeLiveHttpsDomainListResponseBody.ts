// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveHttpsDomainListResponseBodyCertInfosCertInfo extends $dara.Model {
  certCommonName?: string;
  certExpireTime?: string;
  certName?: string;
  certStartTime?: string;
  certStatus?: string;
  certType?: string;
  certUpdateTime?: string;
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

