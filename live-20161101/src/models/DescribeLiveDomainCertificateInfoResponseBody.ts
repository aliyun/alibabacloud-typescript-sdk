// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  certDomainName?: string;
  certExpireTime?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certType?: string;
  domainName?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certLife: 'CertLife',
      certName: 'CertName',
      certOrg: 'CertOrg',
      certType: 'CertType',
      domainName: 'DomainName',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpireTime: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certType: 'string',
      domainName: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
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

export class DescribeLiveDomainCertificateInfoResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo },
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

export class DescribeLiveDomainCertificateInfoResponseBody extends $dara.Model {
  certInfos?: DescribeLiveDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C1E43DC-9E51-4771-82C0-7D5ECEB547A1
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
      certInfos: DescribeLiveDomainCertificateInfoResponseBodyCertInfos,
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

