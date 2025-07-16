// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name that matches the certificate.
   * 
   * @example
   * example.com
   */
  certDomainName?: string;
  /**
   * @remarks
   * The time at which the certificate expires.
   * 
   * @example
   * 2018-06-03T22:03:39Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 9002448
   */
  certId?: string;
  /**
   * @remarks
   * The unit of the validity period of the certificate. Valid values:
   * 
   * *   **months**
   * *   **years**
   * 
   * @example
   * months
   */
  certLife?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * example.com
   */
  certName?: string;
  /**
   * @remarks
   * The name of the certificate authority (CA) that issued the certificate.
   * 
   * @example
   * Let\\"s Encrypt
   */
  certOrg?: string;
  /**
   * @remarks
   * The region where the certificate is used.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The time when the certificate became effective.
   * 
   * @example
   * 2018-06-03T22:03:39Z
   */
  certStartTime?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * *   **free**: a free certificate
   * *   **cas**: a certificate that is purchased by using Certificate Management Service
   * *   **upload**: a custom certificate that you upload
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * The time at which the certificate was updated.
   * 
   * @example
   * 2018-06-03T22:03:39Z
   */
  certUpdateTime?: string;
  /**
   * @remarks
   * The CNAME status of the domain name.
   * 
   * *   **ok**: The domain name points to the CNAME assigned by Alibaba Cloud CDN.
   * *   **cname_error**: An error occurred and the domain name cannot point to the CNAME.
   * *   **op_domain_cname_error** : An error occurred to the CNAME of the top-level domain. The domain name cannot point to the CNAME.
   * *   **unsupport_wildcard**: The wildcard domain name is not supported.
   * 
   * @example
   * ok
   */
  domainCnameStatus?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * asdadaxxxx
   */
  serverCertificate?: string;
  /**
   * @remarks
   * The status of HTTPS.
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  serverCertificateStatus?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **success**: The certificate has taken effect.
   * *   **checking**: The system is checking whether the domain name is using Alibaba Cloud CDN.
   * *   **cname_error**: No valid CNAME record has been added for the domain name.
   * *   **top_domain_cname_error**: No valid CNAME record has been added for the top-level domain.
   * *   **domain_invalid**: The domain name contains invalid characters.
   * *   **unsupport_wildcard**: The domain name is a wildcard domain name. Wildcard domain names are not supported.
   * *   **applying**: The certificate application is in progress.
   * *   **get_token_timeout**: The certificate application request has timed out.
   * *   **check_token_timeout**: The verification has timed out.
   * *   **get_cert_timeout**: The request to obtain the certificate has timed out.
   * *   **failed**: The certificate application request failed.
   * 
   * @example
   * success
   */
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

export class DescribeDomainCertificateInfoResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDomainCertificateInfoResponseBodyCertInfosCertInfo },
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

export class DescribeDomainCertificateInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
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
      certInfos: DescribeDomainCertificateInfoResponseBodyCertInfos,
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

