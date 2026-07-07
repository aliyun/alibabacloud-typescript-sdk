// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyResultDCV extends $dara.Model {
  /**
   * @remarks
   * DCV ID。
   * 
   * @example
   * bababf7cdd1546a2ad04c0def1f4****
   */
  id?: string;
  /**
   * @remarks
   * The DCV name. For the DNS type, this is the TXT record name. For the HTTP type, this is the URL.
   * 
   * @example
   * http://www.example.com/.well-known/acme-challenge/pH20CqwS5L3ZnvkhI436DCzadKFuG7QcUcvB_4KsAow
   */
  key?: string;
  /**
   * @remarks
   * The validation status.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The DCV type. Valid values: DNS and HTTP.
   * 
   * @example
   * HTTP
   */
  type?: string;
  /**
   * @remarks
   * The DCV content.
   * 
   * @example
   * pH20CqwS5L3ZnvkhI436DCzadKFuG7QcUcvB_4KsAow.KfzYo4LH3EgOt7a73G-RqZkbR0eYtLfEUmtmqGmr4FQ
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      status: 'Status',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      status: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The error code for the certificate application.
   * 
   * @example
   * 2
   */
  applyCode?: number;
  /**
   * @remarks
   * The error message for the certificate application.
   * 
   * @example
   * canceled
   */
  applyMessage?: string;
  /**
   * @remarks
   * The cloud certificate ID.
   * 
   * @example
   * 30000569
   */
  casId?: string;
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
   * The creation time. Format: YYYY-MM-DD HH:MM:SS, in UTC/GMT time zone.
   * 
   * @example
   * 2022-06-24 07:48:51
   */
  createTime?: string;
  /**
   * @remarks
   * The Domain Control Validation (DCV) information.
   */
  DCV?: ListCertificatesResponseBodyResultDCV[];
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
   * baba39055622c008b90285a8838e****
   */
  id?: string;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The common name of the certificate issuer.
   * 
   * @example
   * GlobalSign Organization Validation CA - SHA256 - G3
   */
  issuerCN?: string;
  /**
   * @remarks
   * The Keyless server ID. This parameter is valid only when Type is set to keyless.
   * 
   * @example
   * baba39055622c008b90285a8838e****
   */
  keyServerId?: string;
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
   * The end time of the certificate validity period. Format: YYYY-MM-DD HH:MM:SS, in UTC/GMT time zone.
   * 
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @remarks
   * The start time of the certificate validity period. Format: YYYY-MM-DD HH:MM:SS, in UTC/GMT time zone.
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
  pubAlg?: string;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
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
  sigAlg?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * - OK: Normal.
   * - Expired: The certificate has expired.
   * - Expiring: The certificate is about to expire (within 30 days).
   * - Issued: Free certificate - issued.
   * - Applying: Free certificate - applying.
   * - ApplyFailed: Free certificate - application failed.
   * - Canceled: Free certificate - canceled.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * - cas: SSL Certificates Service certificate.
   * - upload: Custom uploaded certificate.
   * - free: Free certificate.
   * - keyless: Keyless certificate.
   * 
   * @example
   * free
   */
  type?: string;
  /**
   * @remarks
   * The update time. Format: YYYY-MM-DD HH:MM:SS, in UTC/GMT time zone.
   * 
   * @example
   * 2023-04-20 06:18:42
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      applyCode: 'ApplyCode',
      applyMessage: 'ApplyMessage',
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      DCV: 'DCV',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      issuerCN: 'IssuerCN',
      keyServerId: 'KeyServerId',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubAlg: 'PubAlg',
      region: 'Region',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      sigAlg: 'SigAlg',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCode: 'number',
      applyMessage: 'string',
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
      DCV: { 'type': 'array', 'itemType': ListCertificatesResponseBodyResultDCV },
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      issuerCN: 'string',
      keyServerId: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubAlg: 'string',
      region: 'string',
      SAN: 'string',
      serialNumber: 'string',
      sigAlg: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DCV)) {
      $dara.Model.validateArray(this.DCV);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the data to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The result array.
   */
  result?: ListCertificatesResponseBodyResult[];
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
   * The total number of records.
   * 
   * @example
   * 10
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
      result: { 'type': 'array', 'itemType': ListCertificatesResponseBodyResult },
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

