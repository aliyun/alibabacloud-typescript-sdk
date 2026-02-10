// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainByCertificateResponseBodyCertInfosCertInfo extends $dara.Model {
  certCaIsLegacy?: string;
  certExpireTime?: string;
  certExpired?: string;
  certStartTime?: string;
  certSubjectCommonName?: string;
  certType?: string;
  domainList?: string;
  domainNames?: string;
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      certCaIsLegacy: 'CertCaIsLegacy',
      certExpireTime: 'CertExpireTime',
      certExpired: 'CertExpired',
      certStartTime: 'CertStartTime',
      certSubjectCommonName: 'CertSubjectCommonName',
      certType: 'CertType',
      domainList: 'DomainList',
      domainNames: 'DomainNames',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCaIsLegacy: 'string',
      certExpireTime: 'string',
      certExpired: 'string',
      certStartTime: 'string',
      certSubjectCommonName: 'string',
      certType: 'string',
      domainList: 'string',
      domainNames: 'string',
      issuer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainByCertificateResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeLiveDomainByCertificateResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeLiveDomainByCertificateResponseBodyCertInfosCertInfo },
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

export class DescribeLiveDomainByCertificateResponseBody extends $dara.Model {
  certInfos?: DescribeLiveDomainByCertificateResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D
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
      certInfos: DescribeLiveDomainByCertificateResponseBodyCertInfos,
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

