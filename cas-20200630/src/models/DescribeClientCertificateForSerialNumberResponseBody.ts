// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateForSerialNumberResponseBodyCertificateList extends $dara.Model {
  /**
   * @example
   * 2022-08-23T16:15Z
   */
  afterDate?: string;
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 2021-10-28T16:15Z
   */
  beforeDate?: string;
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
   * d3b95700998e47afc4d95f886579****
   */
  identifier?: string;
  /**
   * @example
   * 4096
   */
  keySize?: number;
  /**
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @example
   * d3b95700998e47afc4d95f886579****
   */
  md5?: string;
  organization?: string;
  /**
   * @example
   * Security
   */
  organizationUnit?: string;
  parentIdentifier?: string;
  /**
   * @example
   * [ {"Type": 7, "Value": "192.0.XX.XX"}, {"Type": 2, "Value": "www.aliyundoc.com"}, ]
   */
  sans?: string;
  /**
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
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
   * -----BEGIN CERTIFICATE-----  ...... -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  /**
   * @example
   * 1
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
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
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

export class DescribeClientCertificateForSerialNumberResponseBody extends $dara.Model {
  certificateList?: DescribeClientCertificateForSerialNumberResponseBodyCertificateList[];
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': DescribeClientCertificateForSerialNumberResponseBodyCertificateList },
      requestId: 'string',
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

