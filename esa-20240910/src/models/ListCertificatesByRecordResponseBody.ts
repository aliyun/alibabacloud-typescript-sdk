// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordResponseBodyResultCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate ID on Certificate Management Service.
   * 
   * @example
   * 30000137
   */
  casId?: string;
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
   * The creation time.
   * 
   * @example
   * 2023-02-28 06:17:11
   */
  createTime?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456aca66
   */
  fingerprintSha256?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * babab022c5e9b27bf9c64d7f4b1667f4
   */
  id?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The Common Name of the certificate issuer.
   * 
   * @example
   * GlobalSign Organization Validation CA - SHA256 - G3
   */
  issuerCN?: string;
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
   * 2024-02-28 06:17:11
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-02-28 06:17:11
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
   * The region where the certificate is stored.
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
   * The serial number of the certificate.
   * 
   * @example
   * baba39055622c008b90285a8838ed09a
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
   * The status of the certificate.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The type of the SSL certificate. Valid values:
   * 
   * @example
   * free
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-02-28 06:17:11
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      issuerCN: 'IssuerCN',
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
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      issuerCN: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesByRecordResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of certificates that are being requested.
   * 
   * @example
   * 1
   */
  applylingCount?: number;
  /**
   * @remarks
   * The certificates that match the specified records.
   */
  certificates?: ListCertificatesByRecordResponseBodyResultCertificates[];
  /**
   * @remarks
   * The number of certificates that match the specified records.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The name of the record.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Certificate configuration status. Possible values: none; configured; applying; failed.
   * 
   * @example
   * none
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applylingCount: 'ApplylingCount',
      certificates: 'Certificates',
      count: 'Count',
      recordName: 'RecordName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applylingCount: 'number',
      certificates: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResultCertificates },
      count: 'number',
      recordName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesByRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  /**
   * @remarks
   * The queried certificates.
   */
  result?: ListCertificatesByRecordResponseBodyResult[];
  /**
   * @remarks
   * The website ID,
   * 
   * @example
   * 1234567890123
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
   * The total number of records that you specified.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResult },
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

