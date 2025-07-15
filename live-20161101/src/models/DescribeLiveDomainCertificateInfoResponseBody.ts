// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The streaming domain or ingest domain that matches the certificate.
   * 
   * @example
   * example.com
   */
  certDomainName?: string;
  /**
   * @remarks
   * The expiration time of the certificate. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-06-03T22:03:39Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The validity period of the certificate.
   * 
   * *   If the validity period is greater than 12 months, XX years XX months is displayed. For example, 2 years 3 months indicates that the validity period is 2 years and 3 months.
   * *   If the validity period is less than 12 months, XX months is displayed. For example, 3 months indicates that the validity period is 3 months.
   * 
   * @example
   * 3 months
   */
  certLife?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * Cert-****
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
   * The type of the certificate. Valid values:
   * 
   * *   **free**: a free certificate (for testing)
   * *   **cas**: a certificate that is purchased from Certificate Management Service
   * *   **upload**: a custom certificate that you uploaded
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * The streaming domain or ingest domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of HTTPS. Valid values:
   * 
   * *   **on**: HTTPS is enabled.
   * *   **off**: HTTPS is disabled.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * yourSSLPub
   */
  SSLPub?: string;
  /**
   * @remarks
   * The status of the free certificate that is used for testing. Valid values:
   * 
   * *   **success**: The certificate is effective.
   * *   **checking**: The system is checking whether the domain name is mapped to the CNAME that is assigned by ApsaraVideo Live.
   * *   **cname_error**: The domain name is not mapped to the CNAME that is assigned by ApsaraVideo Live.
   * *   **domain_invalid**: The domain name contains invalid characters.
   * *   **unsupport_wildcard**: The domain name is a wildcard domain name, which is not supported.
   * *   **applying**: The certificate is in the application progress.
   * *   **failed**: The application for the certificate failed.
   * 
   * >  The **Status** parameter is valid only if the certificate is a free certificate for testing. If the certificate is not a free certificate for testing, an empty value is returned.
   * 
   * @example
   * success
   */
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
  /**
   * @remarks
   * The certificate information.
   */
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

