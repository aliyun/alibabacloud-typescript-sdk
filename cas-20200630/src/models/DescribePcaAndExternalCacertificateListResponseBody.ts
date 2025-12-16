// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePcaAndExternalCACertificateListResponseBodyCertificateList extends $dara.Model {
  /**
   * @example
   * 2022-08-23T16:15Z
   */
  afterDate?: number;
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 2021-01-01T00:00Z
   */
  beforeDate?: number;
  /**
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * 05e148d8d3ecc9976d9ecd2b2f25****
   */
  identifier?: string;
  /**
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @example
   * 05e148d8d3ecc9976d9ecd2b2f25****
   */
  md5?: string;
  organization?: string;
  /**
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @example
   * [ {"Type": 7, "Value": "192.0.XX.XX"}, {"Type": 2, "Value": "www.aliyundoc.com"}, ]
   */
  sans?: string;
  /**
   * @example
   * 62b2b943a32d96883a6650e672ea0276****
   */
  serialNumber?: string;
  /**
   * @example
   * 14dcc8afc7578e1fcec36d658f7e20de18f6957bbac42b373a66bc9de4e9****
   */
  sha2?: string;
  /**
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @example
   * ISSUE
   */
  status?: string;
  subjectDN?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  /**
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
  certificateList?: DescribePcaAndExternalCACertificateListResponseBodyCertificateList[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  showSize?: number;
  /**
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

