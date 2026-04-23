// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  certDomainName?: string;
  certExpireTime?: string;
  certId?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certRegion?: string;
  certStartTime?: string;
  certType?: string;
  certUpdateTime?: string;
  domainCnameStatus?: string;
  domainName?: string;
  serverCertificate?: string;
  serverCertificateStatus?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certId: 'CertId',
      certLife: 'CertLife',
      certName: 'CertName',
      certOrg: 'CertOrg',
      certRegion: 'CertRegion',
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      certUpdateTime: 'CertUpdateTime',
      domainCnameStatus: 'DomainCnameStatus',
      domainName: 'DomainName',
      serverCertificate: 'ServerCertificate',
      serverCertificateStatus: 'ServerCertificateStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpireTime: 'string',
      certId: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certRegion: 'string',
      certStartTime: 'string',
      certType: 'string',
      certUpdateTime: 'string',
      domainCnameStatus: 'string',
      domainName: 'string',
      serverCertificate: 'string',
      serverCertificateStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainCertificateInfoResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo },
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

export class DescribeVodDomainCertificateInfoResponseBody extends $dara.Model {
  certInfos?: DescribeVodDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1E43DC-9E51-4771-****-7D5ECEB547A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeVodDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
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

