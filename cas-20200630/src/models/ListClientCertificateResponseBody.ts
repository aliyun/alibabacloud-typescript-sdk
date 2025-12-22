// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientCertificateResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The type of the encryption algorithm of the certificate. Valid values:
   * 
   * *   **RSA**: the Rivest-Shamir-Adleman (RSA) algorithm.
   * *   **ECC**: the elliptic curve cryptography (ECC) algorithm.
   * *   **SM2**: the SM2 algorithm, which is developed and approved by the State Cryptography Administration of China.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance date of the certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **CLIENT**: client certificate
   * *   **SERVER**: server certificate
   * 
   * @example
   * SERVER
   */
  certificateType?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the certificate. Unit: days.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * d3b95700998e47afc4d95f886579****
   */
  identifier?: string;
  /**
   * @remarks
   * The key length of the certificate.
   * 
   * @example
   * 4096
   */
  keySize?: number;
  /**
   * @remarks
   * The name of the city in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The MD5 fingerprint of the certificate.
   * 
   * @example
   * d3b95700998e47afc4d95f886579****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization. The organization is associated with the intermediate certificate authority (CA) certificate from which the certificate is issued.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate certificate from which the client certificate is issued.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The subject alternative name (SAN) extension of the certificate. The value indicates additional information, including the additional domain names or IP addresses that are associated with the certificate.
   * 
   * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that corresponds to a SAN extension. A SAN extension struct contains the following parameters:
   * 
   * *   **Type**: the type of the extension. Data type: integer. Valid values:
   * 
   *     *   **1**: an email address
   *     *   **2**: a domain name
   *     *   **6**: a Uniform Resource Identifier (URI)
   *     *   **7**: an IP address
   * 
   * *   **Value**: the value of the extension. Data type: string.
   * 
   * @example
   * [ {"Type": 7, "Value": "192.0.XX.XX"}, {"Type": 2, "Value": "www.aliyundoc.com"}, ]
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 62b2b943a32d96883a6650e672ea0276****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * 14dcc8afc7578e1fcec36d658f7e20de18f6957bbac42b373a66bc9de4e9****
   */
  sha2?: string;
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
   * The name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
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
   * The distinguished name (DN) extension of the certificate, which indicates the user of the certificate. The DN extension includes the following information:
   * 
   * *   **C**: the country
   * *   **O**: the organization
   * *   **OU**: the department
   * *   **L**: the city
   * *   **ST**: the province, municipality, or autonomous region
   * *   **CN**: the common name
   * 
   * @example
   * C=CN,O=Alibaba Cloud Computing Co., Ltd.,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  ...... -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      customIdentifier: 'CustomIdentifier',
      days: 'Days',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      resourceGroupId: 'ResourceGroupId',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      customIdentifier: 'string',
      days: 'number',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details about all client certificates and server certificates.
   */
  certificateList?: ListClientCertificateResponseBodyCertificateList[];
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  pageCount?: number;
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
   * The number of certificates that are returned per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The number of client certificates and server certificates that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': ListClientCertificateResponseBodyCertificateList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificateList)) {
      $dara.Model.validateArray(this.certificateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

