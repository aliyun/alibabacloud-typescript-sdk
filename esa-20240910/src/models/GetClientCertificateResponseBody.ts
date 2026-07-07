// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * babab9db65ee5efcca9f3d41d4b50d66
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:MM:SS, in the UTC/GMT time zone.
   * 
   * @example
   * 2024-06-24 07:48:51
   */
  createTime?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456a****
   */
  fingerprintSha256?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * baba39055622c008b90285a8838ed09a
   */
  id?: string;
  /**
   * @remarks
   * The certification authority that issued the certificate.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * The end time of the certificate validity period. Format: YYYY-MM-DD HH:MM:SS, in the UTC/GMT time zone.
   * 
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @remarks
   * The start time of the certificate validity period. Format: YYYY-MM-DD HH:MM:SS, in the UTC/GMT time zone.
   * 
   * @example
   * 2023-03-31 02:08:00
   */
  notBefore?: string;
  /**
   * @remarks
   * The public key algorithm of the certificate.
   * 
   * @example
   * RSA
   */
  pubkeyAlgorithm?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) of the certificate.
   * 
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * babaded901474b9693acf530e0fb1d**
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256-RSA
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * dcdn
   */
  type?: string;
  /**
   * @remarks
   * The update time. Format: YYYY-MM-DD HH:MM:SS, in the UTC/GMT time zone.
   * 
   * @example
   * 2024-09-22 05:33:13
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubkeyAlgorithm: 'PubkeyAlgorithm',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      commonName: 'string',
      createTime: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubkeyAlgorithm: 'string',
      SAN: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate information.
   */
  result?: GetClientCertificateResponseBodyResult;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      requestId: 'string',
      result: GetClientCertificateResponseBodyResult,
      siteId: 'number',
      siteName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

