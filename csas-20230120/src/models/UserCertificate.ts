// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserCertificate extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * cert-aabbccdd
   */
  certId?: string;
  /**
   * @remarks
   * The certificate content in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIID...****
   * -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate description.
   * 
   * @example
   * Internal network application access certificate
   */
  description?: string;
  /**
   * @remarks
   * The domain names for which the certificate is valid.
   */
  dnsNames?: string[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1734492686
   */
  expTimeUnix?: number;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1734523812
   */
  gmtCreateUnix?: number;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1734523812
   */
  gmtModifiedUnix?: number;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * Certificate 1
   */
  name?: string;
  /**
   * @remarks
   * The PEM private key.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   * MIIE...****
   * -----END PRIVATE KEY-----
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certificate: 'Certificate',
      description: 'Description',
      dnsNames: 'DnsNames',
      expTimeUnix: 'ExpTimeUnix',
      gmtCreateUnix: 'GmtCreateUnix',
      gmtModifiedUnix: 'GmtModifiedUnix',
      name: 'Name',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certificate: 'string',
      description: 'string',
      dnsNames: { 'type': 'array', 'itemType': 'string' },
      expTimeUnix: 'number',
      gmtCreateUnix: 'number',
      gmtModifiedUnix: 'number',
      name: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsNames)) {
      $dara.Model.validateArray(this.dnsNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

