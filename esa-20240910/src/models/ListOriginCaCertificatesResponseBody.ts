// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginCaCertificatesResponseBodyResult extends $dara.Model {
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
   * babaabcd****
   */
  id?: string;
  /**
   * @remarks
   * The certification authority.
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
   * 2023-11-26 16:00:00
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
   * The update time. Format: YYYY-MM-DD HH:MM:SS, in the UTC/GMT time zone.
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

export class ListOriginCaCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: ListOriginCaCertificatesResponseBodyResult[];
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456789****
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
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOriginCaCertificatesResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

