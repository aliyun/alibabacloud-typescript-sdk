// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePcaAndExternalCACertificateListResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The certificate expiration time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1787539908871
   */
  afterDate?: number;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate issuance time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1787539908871
   */
  beforeDate?: number;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @remarks
   * The primary domain name bound to the certificate.
   * 
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code of the certificate.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 05e148d8d3ecc9976d9ecd2b2f25****
   */
  identifier?: string;
  /**
   * @remarks
   * The size of the certificate key. Unit: GB.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The primary domain name bound to the certificate.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The MD5 value bound to the certificate.
   * 
   * @example
   * 05e148d8d3ecc9976d9ecd2b2f25****
   */
  md5?: string;
  /**
   * @remarks
   * The certificate organization.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd
   */
  organization?: string;
  /**
   * @remarks
   * The certification authority that issued the certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The parent certificate ID.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   * 
   * @example
   * [ {"Type": 7, "Value": "192.0.XX.XX"}, {"Type": 2, "Value": "www.aliyundoc.com"}, ]
   */
  sans?: string;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * 62b2b943a32d96883a6650e672ea0276****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The primary domain name bound to the certificate.
   * 
   * @example
   * 14dcc8afc7578e1fcec36d658f7e20de18f6957bbac42b373a66bc9de4e9****
   */
  sha2?: string;
  /**
   * @remarks
   * The certificate signature algorithm. Valid values:
   * - **prefix**: Prefix match.
   * - **match**: Exact match.
   * - **any**: Match all.
   * 
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
   * @remarks
   * The certificate state. Valid values:
   * - **success**: Effective.
   * - **checking**: Checking whether the domain name is on Alibaba Cloud Dynamic Route for CDN.
   * - **cname_error**: The domain name is not pointed to an Alibaba Cloud Global Accelerator (GA) instance.
   * - **domain_invalid**: The domain name contains invalid characters.
   * - **unsupport_wildcard**: Wildcard domain names are not supported.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * - **payed**: Paid.
   * - **checking**: Being reviewed.
   * - **issued**: Issued.
   * - **revoked**: Revoked.
   * - **checked_fail**: Review failed.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The certificate subject (owner), represented in DN format.
   * 
   * @example
   * C=CN,O=Alibaba Cloud Computing Co. Ltd.,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The x.509 certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  /**
   * @remarks
   * The number of years for which the certificate was purchased.
   * 
   * @example
   * 3
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
      years: 'Years',
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
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
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

export class DescribePcaAndExternalCACertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certificateList?: DescribePcaAndExternalCACertificateListResponseBodyCertificateList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records to display per page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
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
      certificateList: { 'type': 'array', 'itemType': DescribePcaAndExternalCACertificateListResponseBodyCertificateList },
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

