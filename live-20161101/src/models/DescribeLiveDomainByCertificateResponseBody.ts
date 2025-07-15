// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainByCertificateResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SSL certificate is obsolete. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  certCaIsLegacy?: string;
  /**
   * @remarks
   * The time at which the certificate expires.
   * 
   * @example
   * Nov 29 00:00:00 2016 GMT
   */
  certExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate is expired. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  certExpired?: string;
  /**
   * @remarks
   * The effective time of the certificate.
   * 
   * @example
   * Nov 29 23:59:59 2017 GMT
   */
  certStartTime?: string;
  /**
   * @remarks
   * The name of the SSL certificate owner.
   * 
   * @example
   * owner
   */
  certSubjectCommonName?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values: **RSA**, **DSA**, and **ECDSA**.
   * 
   * @example
   * RSA
   */
  certType?: string;
  /**
   * @remarks
   * The list of domain names. If a value is returned, the value matches the SSL certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * example.com,aliyundoc.com
   */
  domainList?: string;
  /**
   * @remarks
   * The domain names (DNS fields) that match the SSL certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * *.example.com,aliyundoc.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the SSL certificate.
   * 
   * @example
   * C=US, O=Symantec Corporation, OU=Symantec Trust Network, OU=Domain Validated SSL, CN=Symantec Basic DV SSL CA - G1
   */
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
  /**
   * @remarks
   * The information about the certificate.
   */
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

