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
   * - **RSA**: RSA algorithm.
   * 
   * - **ECC**: ECC algorithm.
   * 
   * - **SM2**: SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the issued certificate.
   * 
   * @example
   * 生产培训10.153.13.177
   */
  aliasName?: string;
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
   * - **CLIENT**: a client certificate.
   * 
   * - **SERVER**: a server-side certificate.
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
   * The country code of the country where the organization associated with the issuing subordinate CA certificate is located.
   * 
   * For more information about country codes, see the **Country codes** section of [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The custom identifier, which is a unique key.
   * 
   * @example
   * ****48d8d3ecc9976d9ecd2b2f25****
   */
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
   * The primary key ID of the certificate.
   * 
   * @example
   * 12321
   */
  id?: number;
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
   * The city where the organization associated with the issuing subordinate CA certificate is located.
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
   * The name of the organization that is associated with the issuing subordinate CA certificate.
   * 
   * @example
   * 阿里云计算有限公司
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department of the organization that is associated with the issuing subordinate certificate authority (CA) certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issued this certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group to which the certificate belongs.
   * 
   * @example
   * rg-acfmyxa2uv6cu5a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) extension of the certificate. This extension indicates other domain names, IP addresses, and so on that are associated with the certificate.
   * 
   * This parameter is a string that is converted from a JSON array. Each element in the JSON array is a struct that corresponds to a SAN extension. Each SAN extension struct contains the following parameters:
   * 
   * - **Type**: The type of the extension. This parameter is of the Integer type. Valid values:
   * 
   *   - **1**: an email address.
   * 
   *   - **2**: a domain name.
   * 
   *   - **6**: a Uniform Resource Identifier (URI).
   * 
   *   - **7**: an IP address.
   * 
   * - **Value**: The content of the extension. This parameter is of the String type.
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
   * <props="china">The name of the province, municipality, or autonomous region where the organization associated with the issuing subordinate CA certificate is located.
   * <props="intl">The name of the province or state where the organization associated with the issuing subordinate CA certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
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
   * The Distinguished Name (DN) of the certificate. The DN indicates the user of the certificate and contains the following information:
   * 
   * - **C**: The country.
   * 
   * - **O**: The organization.
   * 
   * - **OU**: The department.
   * 
   * - **L**: The city.
   * 
   * <props="china">
   * 
   * - **ST**: The province, municipality, or autonomous region.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **ST**: The province or state.
   * 
   * 
   * 
   * 
   * - **CN**: The common name.
   * 
   * @example
   * C=CN,O=阿里云计算有限公司,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
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
      aliasName: 'AliasName',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      customIdentifier: 'CustomIdentifier',
      days: 'Days',
      id: 'Id',
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
      aliasName: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      customIdentifier: 'string',
      days: 'number',
      id: 'number',
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
   * A list of details about the client or server-side certificates.
   */
  certificateList?: ListClientCertificateResponseBodyCertificateList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Paging parameter: the maximum number of entries in the result set.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The number of certificates returned per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of client and server-side certificates that are queried.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
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
      maxResults: 'number',
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

