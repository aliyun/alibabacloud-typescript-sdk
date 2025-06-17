// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The returned primary domain name of the certificate.
   * 
   * @example
   * example.org
   */
  certCommonName?: string;
  /**
   * @remarks
   * The time at which the certificate expires.
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
   * The time at which the certificate became effective.
   * 
   * @example
   * 2018-11-26 14:45:09
   */
  certStartTime?: string;
  /**
   * @remarks
   * The status of the certificate.
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
   * The type of the certificate.
   * 
   * *   **free**: a free certificate.
   * *   **cas**: a certificate that is purchased from Alibaba Cloud SSL Certificates Service.
   * *   **upload**: a certificate that is uploaded by the user.
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

