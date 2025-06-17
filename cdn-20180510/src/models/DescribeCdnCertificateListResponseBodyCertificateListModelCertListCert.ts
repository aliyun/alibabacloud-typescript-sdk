// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 1
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * Certificate1
   */
  certName?: string;
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
   * 2ED68FD33786C5B42950D40A6C50353575BB****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * CO****
   */
  issuer?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1512388610
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
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

