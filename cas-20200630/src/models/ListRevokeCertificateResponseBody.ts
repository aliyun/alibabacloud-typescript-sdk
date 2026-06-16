// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRevokeCertificateResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate. The format is `yyyy-MM-ddT00:00Z`. For example, `2021-12-31T00:00Z` indicates December 31, 2021.
   * 
   * @example
   * 2021-12-31T00:00Z
   */
  afterDate?: string;
  /**
   * @remarks
   * The type of the encryption algorithm of the certificate. Valid values:
   * 
   * - **RSA**: the RSA algorithm.
   * 
   * - **ECC**: the ECC algorithm.
   * 
   * - **SM2**: the SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The date when the certificate was issued. The format is `yyyy-MM-ddT00:00Z`. For example, `2021-01-01T00:00Z` indicates January 1, 2021.
   * 
   * @example
   * 2021-01-01T00:00Z
   */
  beforeDate?: string;
  /**
   * @remarks
   * The type of the certificate.
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
   * The country code of the organization that is associated with the subordinate CA certificate that issued the certificate.
   * 
   * For more information about country codes, see the "Country codes" section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The custom identifier. This is a unique key.
   * 
   * @example
   * ****48d8d3ecc9976d9ecd2b2f25****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 05e148d8d3ecc9976d9ecd2b2f25****
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
   * The name of the city where the organization of the subordinate CA certificate that issued the certificate is located.
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
   * 05e148d8d3ecc9976d9ecd2b2f25****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the organization that is associated with the subordinate CA certificate that issued the certificate.
   * 
   * @example
   * 阿里云计算有限公司
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department of the organization that is associated with the subordinate CA certificate that issued the certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The identifier of the parent certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The date when the certificate was revoked. The format is `yyyy-MM-ddT00:00Z`. For example, `2021-09-01T00:00Z` indicates September 1, 2021.
   * 
   * @example
   * 2021-09-01T00:00Z
   */
  revokeDate?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) extension of the certificate.
   * 
   * This parameter is a string that is converted from a JSON array. Each element in the JSON array is a struct that corresponds to a SAN extension. Each SAN extension struct contains the following parameters:
   * 
   * - **Type**: The type of the extension. This parameter is of the integer type. Valid values:
   * 
   *   - **1**: an email address.
   * 
   *   - **2**: a domain name.
   * 
   *   - **6**: a Uniform Resource Identifier (URI).
   * 
   *   - **7**: an IP address.
   * 
   * - **Value**: The content of the extension. This parameter is of the string type.
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
   * 168b12c42e62339f8d2340ff530f9365****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * b60eff7e04323ff662f9ab5e6986f849f626a9c7bf2c59dcc752fa23779a****
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
   * The name of the province or state of the organization that is associated with the subordinate CA certificate that issued the certificate.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the certificate.
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
   * - **CN**: The common name.
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
   * C=CN,O=阿里云计算有限公司,OU=Security,L=ZheJiang,ST=HangZhou,CN=aliyundoc.com
   */
  subjectDN?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      customIdentifier: 'CustomIdentifier',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      revokeDate: 'RevokeDate',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      customIdentifier: 'string',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      revokeDate: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the revoked client or server-side certificates.
   */
  certificateList?: ListRevokeCertificateResponseBodyCertificateList[];
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
   * The number of revoked certificates on each page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of revoked client and server-side certificates.
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
      certificateList: { 'type': 'array', 'itemType': ListRevokeCertificateResponseBodyCertificateList },
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

