// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @example
   * example.com
   */
  certDomainName?: string;
  /**
   * @example
   * 2018-06-03T22:03:39Z
   */
  certExpireTime?: string;
  /**
   * @example
   * months
   */
  certLife?: string;
  /**
   * @example
   * myname
   */
  certName?: string;
  /**
   * @example
   * Let\\"s Encrypt
   */
  certOrg?: string;
  /**
   * @example
   * free
   */
  certType?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * asdadaxxxx
   */
  SSLPub?: string;
  /**
   * @example
   * on
   */
  serverCertificateStatus?: string;
  /**
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
      SSLPub: 'SSLPub',
      serverCertificateStatus: 'ServerCertificateStatus',
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
      SSLPub: 'string',
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

