// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 9128192
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The region ID of the certificate. Valid values: **cn-hangzhou** and **ap-southeast-1**. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The Common Name (CN) attribute of the certificate. In most cases, the CN is a domain name.
   * 
   * @example
   * example.com
   */
  common?: string;
  /**
   * @remarks
   * The fingerprint of the certificate.
   * 
   * @example
   * 933c6ddee95c9c41a40f9f50493d82be03ad87bf
   */
  fingerprint?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * yourCertIssuer
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate was last modified. Unit: milliseconds.
   * 
   * @example
   * 1679896965
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      certRegion: 'CertRegion',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      certRegion: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

