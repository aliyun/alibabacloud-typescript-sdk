// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteOriginClientCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Common Name of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate was created.
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
   * babaabcd****
   */
  id?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * DigiCert
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
   * The time when the certificate expires.
   * 
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-03-31 02:08:00
   */
  notBefore?: string;
  /**
   * @remarks
   * The public-key algorithm of the certificate.
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
   * The serial number of the certificate.
   * 
   * @example
   * babab022c5e9b27bf9c64d7f4b16****
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
   * The status of the certificate.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * upload
   */
  type?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 2024-07-20 06:18:42
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
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

export class GetSiteOriginClientCertificateResponseBody extends $dara.Model {
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
   * Request ID.
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate information.
   */
  result?: GetSiteOriginClientCertificateResponseBodyResult;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * @example
   * OK
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
      result: GetSiteOriginClientCertificateResponseBodyResult,
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

