// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertResponseBodyCertList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1634283958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The encryption algorithm of the certificate. Valid values:
   * 
   * - **RSA**: the RSA algorithm
   * 
   * - **ECC**: the ECC algorithm
   * 
   * - **SM2**: the SM2 algorithm
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The start date of the certificate\\"s validity period. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1665819958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * - **CA**: a Certificate Authority (CA) certificate
   * 
   * - **CERT**: an issued certificate
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The common name of the certificate. This is typically the primary domain name associated with the certificate.
   * 
   * @example
   * aliyun.alibaba.com
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether a private key is available for the certificate. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  existPrivateKey?: boolean;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 14dcc8afc7578e
   */
  identifier?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * mySSL
   */
  issuer?: string;
  /**
   * @remarks
   * The Subject Alternative Names (SANs) associated with the certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * *.alibaba.com,aliyun.alibaba.com
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the certificate. This parameter is returned only if the `OrderType` request parameter is set to `CERT` or `UPLOAD`.
   * 
   * @example
   * 038abf4c27c33a7c11ad6658124135b52180
   */
  serialNo?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * - **upload**: The certificate is uploaded.
   * 
   * - **aliyun**: The certificate is from Alibaba Cloud.
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * - **ISSUE**: The certificate is issued.
   * 
   * - **REVOKE**: The certificate is revoked.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The warehouse ID.
   * 
   * @example
   * 2
   */
  whId?: number;
  /**
   * @remarks
   * The warehouse instance ID.
   * 
   * @example
   * test_whInstanceId
   */
  whInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certType: 'CertType',
      commonName: 'CommonName',
      existPrivateKey: 'ExistPrivateKey',
      identifier: 'Identifier',
      issuer: 'Issuer',
      sans: 'Sans',
      serialNo: 'SerialNo',
      signAlgorithm: 'SignAlgorithm',
      sourceType: 'SourceType',
      status: 'Status',
      whId: 'WhId',
      whInstanceId: 'WhInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certType: 'string',
      commonName: 'string',
      existPrivateKey: 'boolean',
      identifier: 'string',
      issuer: 'string',
      sans: 'string',
      serialNo: 'string',
      signAlgorithm: 'string',
      sourceType: 'string',
      status: 'string',
      whId: 'number',
      whInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certList?: ListCertResponseBodyCertList[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The page size. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': ListCertResponseBodyCertList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

