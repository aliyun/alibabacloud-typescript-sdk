// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
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
   * The validity period of the certificate. Unit: **months** or **years**.
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
   * The type of the certificate.
   * 
   * *   **cas**: a certificate that is purchased by using Certificates Management Service
   * *   **upload**: a custom certificate that you upload
   * 
   * @example
   * cas
   */
  certType?: string;
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
   * The status of HTTPS. Valid values:
   * 
   * *   **on**
   * *   **off**
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
   * xxxx
   */
  SSLPub?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **success**: The certificate has taken effect.
   * *   **checking**: The system is checking whether the domain name is using Dynamic Route for CDN (DCDN).
   * *   **cname_error**: The domain name is not using DCDN.
   * *   **domain_invalid**: The domain name contains invalid characters.
   * *   **unsupport_wildcard**: The wildcard domain name is not supported.
   * *   **applying**: Certificate application is in progress.
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
      certId: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certRegion: 'string',
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

export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo },
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

export class DescribeDcdnDomainCertificateInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos;
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
      certInfos: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos,
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

