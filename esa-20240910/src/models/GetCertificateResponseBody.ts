// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateResponseBodyResultDCV extends $dara.Model {
  /**
   * @remarks
   * DCV ID。
   * 
   * @example
   * bababf7cdd1546a2ad04c0def1f4c980
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

export class GetCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The error code of the certificate application.
   * 
   * @example
   * 2
   */
  applyCode?: number;
  /**
   * @remarks
   * The error message of the certificate application.
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
   * 30000478
   */
  casId?: string;
  /**
   * @remarks
   * The Common Name (CN) field of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:MM:SS format in the UTC/GMT time zone.
   * 
   * @example
   * 2026-07-01 07:25:23
   */
  createTime?: string;
  /**
   * @remarks
   * The Domain Control Validation (DCV) information.
   */
  DCV?: GetCertificateResponseBodyResultDCV[];
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
   * The certificate ID.
   * 
   * @example
   * babaded901474b9693acf530e0fb1d95
   */
  id?: string;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * The certification authority.
   * 
   * @example
   * DigiCert Global Root CA
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
   * The end time of the certificate validity period. The time is in the YYYY-MM-DD HH:MM:SS format in the UTC/GMT time zone.
   * 
   * @example
   * 2026-09-29 06:26:46
   */
  notAfter?: string;
  /**
   * @remarks
   * The start time of the certificate validity period. The time is in the YYYY-MM-DD HH:MM:SS format in the UTC/GMT time zone.
   * 
   * @example
   * 2026-07-01 06:26:47
   */
  notBefore?: string;
  /**
   * @remarks
   * The public key algorithm of the certificate.
   * 
   * @example
   * ECDSA
   */
  pubAlg?: string;
  /**
   * @remarks
   * The region.
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
   * babaded901474b9693acf530e0fb1daa
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * ECDSA-SHA1
   */
  sigAlg?: string;
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
   * free
   */
  type?: string;
  /**
   * @remarks
   * The update time. The time is in the YYYY-MM-DD HH:MM:SS format in the UTC/GMT time zone.
   * 
   * @example
   * 2026-07-01 07:25:23
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
      DCV: { 'type': 'array', 'itemType': GetCertificateResponseBodyResultDCV },
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

export class GetCertificateResponseBody extends $dara.Model {
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate information.
   */
  result?: GetCertificateResponseBodyResult;
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
      result: GetCertificateResponseBodyResult,
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

