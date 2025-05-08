// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSSLCertResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  afterDate?: string;
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * test
   */
  algorithm?: string;
  /**
   * @remarks
   * The time when the certificate took effect. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  beforeDate?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 1234
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * test.com
   */
  certName?: string;
  /**
   * @remarks
   * The domain name with which the certificate is associated.
   * 
   * @example
   * *.test.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate expires. This value is a GMT timestamp.
   * 
   * @example
   * 2021-04-01 02:35:12
   */
  gmtAfter?: string;
  /**
   * @remarks
   * The time when the certificate took effect. This value is a GMT timestamp.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  gmtBefore?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * test
   */
  issuer?: string;
  /**
   * @remarks
   * The SSL certificate.
   * 
   * @example
   * SSL
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      gmtAfter: 'GmtAfter',
      gmtBefore: 'GmtBefore',
      issuer: 'Issuer',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      gmtAfter: 'string',
      gmtBefore: 'string',
      issuer: 'string',
      sans: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

