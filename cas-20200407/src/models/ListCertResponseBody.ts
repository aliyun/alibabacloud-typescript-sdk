// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertResponseBodyCertList extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The issuance time of the certificate. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * 证书的类型 。取值：
   * 
   * - **CA**：表示CA证书。
   * - **CERT**：表示签发的证书。
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * aliyun.alibaba.com
   */
  commonName?: string;
  /**
   * @remarks
   * Indicates whether the certificate contains a private key. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The domain names that are bound to the certificate. Multiple domain names are separated by commas.
   * 
   * @example
   * *.alibaba.com,aliyun.alibaba.com
   */
  sans?: string;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **aliyun**: Alibaba Cloud certificate
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the certificate repository.
   * 
   * @example
   * 2
   */
  whId?: number;
  /**
   * @remarks
   * The instance ID of the certificate repository.
   * 
   * @example
   * test_whInstanceId
   */
  whInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certType: 'CertType',
      commonName: 'CommonName',
      existPrivateKey: 'ExistPrivateKey',
      identifier: 'Identifier',
      issuer: 'Issuer',
      sans: 'Sans',
      sourceType: 'SourceType',
      status: 'Status',
      whId: 'WhId',
      whInstanceId: 'WhInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certType: 'string',
      commonName: 'string',
      existPrivateKey: 'boolean',
      identifier: 'string',
      issuer: 'string',
      sans: 'string',
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
   * An array that consists of the certificates.
   */
  certList?: ListCertResponseBodyCertList[];
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
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
   * The number of entries returned per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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

