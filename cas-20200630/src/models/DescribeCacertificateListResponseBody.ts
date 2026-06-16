// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificateListResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The encryption algorithm of the CA certificate. Valid values:
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
   * The alias of the instance.
   * 
   * @example
   * Aliyun_CA
   */
  alias?: string;
  /**
   * @remarks
   * The issuance date of the CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * The type of the CA certificate. Valid values:
   * 
   * - **ROOT**: root CA certificate.
   * 
   * - **SUB_ROOT**: intermediate CA certificate.
   * 
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization associated with the CA certificate.
   * 
   * @example
   * Aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The country code of the country where the organization associated with the CA certificate is located.
   * 
   * For more information about country codes, see the **Country codes** section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * Indicates whether the instance is a free instance. Valid values:
   * 
   * - 0: no.
   * 
   * - 1: yes.
   * 
   * @example
   * 1
   */
  gift?: number;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The key length of the CA certificate.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The name of the city where the organization associated with the CA certificate is located.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The MD5 fingerprint of the CA certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the organization associated with the CA certificate.
   * 
   * @example
   * 阿里云计算有限公司
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department of the organization associated with the CA certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate that issued the CA certificate.
   * 
   * > This parameter is returned only when **CertificateType** is **SUB_ROOT**, which indicates an intermediate CA certificate.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group to which the certificate belongs.
   * 
   * @example
   * rg-acfmzjwrhehpavi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the CA certificate.
   * 
   * @example
   * 70e3b2566d92805173767869727fb92e****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The SHA-256 fingerprint of the CA certificate.
   * 
   * @example
   * 14dcc8afc7578e1fcec36d658f7e20de18f6957bbac42b373a66bc9de4e9****
   */
  sha2?: string;
  /**
   * @remarks
   * The signature algorithm of the CA certificate.
   * 
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
   * @remarks
   * The name of the province or state where the organization associated with the CA certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the CA certificate. Valid values:
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
   * The distinguished name (DN) of the CA certificate. The DN indicates the user of the certificate and contains the following information:
   * 
   * - **C**: The country code where the organization is located.
   * 
   * - **O**: The name of the organization.
   * 
   * - **OU**: The department of the organization.
   * 
   * - **L**: The city where the organization is located.
   * 
   * - **CN**: The common name or abbreviation of the organization.
   * 
   * @example
   * C=CN,O=阿里云计算有限公司,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * Indicates whether the instance is a trial instance. Valid values:
   * 
   * - 0: no.
   * 
   * - 1: yes.
   * 
   * @example
   * 0
   */
  trial?: number;
  /**
   * @remarks
   * The content of the CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  /**
   * @remarks
   * The validity period of the CA certificate in years.
   * 
   * @example
   * 3
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      alias: 'Alias',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      gift: 'Gift',
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
      trial: 'Trial',
      x509Certificate: 'X509Certificate',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      alias: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      gift: 'number',
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
      trial: 'number',
      x509Certificate: 'string',
      years: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the CA certificates.
   */
  certificateList?: DescribeCACertificateListResponseBodyCertificateList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of pages returned.
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
   * The number of CA certificates on each page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of root and intermediate CA certificates.
   * 
   * @example
   * 2
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
      certificateList: { 'type': 'array', 'itemType': DescribeCACertificateListResponseBodyCertificateList },
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

