// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
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
   * The time at which the certificate expires. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-06-03T13:03:39Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 13227737-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The validity period of the certificate. Unit: months or years.
   * 
   * @example
   * 3 months
   */
  certLife?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert-example.com
   */
  certName?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
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
   * 2023-04-26T20:23:38Z
   */
  certStartTime?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **free**: a free certificate.
   * *   **cas**: a certificate that is purchased from Certificate Management Service.
   * *   **upload**: a user-uploaded certificate.
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
   * 2023-04-26T20:23:38Z
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
   * The accelerated domain name whose ICP filing status you want to update.
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
   * ****
   */
  serverCertificate?: string;
  /**
   * @remarks
   * The status of the SSL certificate.
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * checking
   */
  serverCertificateStatus?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * *   **success**: The certificate is in effect.
   * *   **checking**: The system is checking whether the domain name is added to ApsaraVideo VOD.
   * *   **cname_error**: The domain name is not added to ApsaraVideo VOD.
   * *   **domain_invalid**: The domain name contains invalid characters.
   * *   **unsupport_wildcard**: The domain name is a wildcard domain name. Wildcard domain names are not supported.
   * *   **applying**: The certificate application is in progress.
   * *   **failed**: The certificate application failed.
   * 
   * >  A value is returned for this parameter only when you set `CertType` to `free`. Otherwise, an empty value is returned for this parameter.
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
  /**
   * @remarks
   * The certificate information.
   */
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

