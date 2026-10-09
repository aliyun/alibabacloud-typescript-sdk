// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateForSerialNumberResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate. The format is YYYY-MM-DD.
   * 
   * @example
   * 2022-08-23T16:15Z
   */
  afterDate?: string;
  /**
   * @remarks
   * The encryption algorithm type of the certificate. Valid values:
   * 
   * - **RSA**: RSA algorithm.
   * - **ECC**: ECC algorithm.
   * - **SM2**: SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance date of the certificate. The format is YYYY-MM-DD.
   * 
   * @example
   * 2021-10-28T16:15Z
   */
  beforeDate?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country where the organization associated with the subordinate CA certificate that issued this certificate is located.
   * 
   * For more information about country codes, see the **International codes** section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
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
   * The name of the city where the organization associated with the subordinate CA certificate that issued this certificate is located.
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
   * The name of the organization associated with the subordinate CA certificate that issued this certificate.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization associated with the subordinate CA certificate that issued this certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * If this parameter is not empty, the client certificate is issued by Alibaba Cloud.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) extension of the certificate, which indicates other domain names or IP addresses associated with the certificate.
   * 
   * This parameter is represented as a string converted from a JSON array. Each element in the JSON array is a structure that corresponds to a SAN extension. Each SAN extension structure contains the following parameters:
   * 
   * - **Type**: An Integer value that indicates the type of the extension. Valid values:
   * 	- **1**: an email address.
   * 	- **2**: a domain name.
   * 	- **6**: a Uniform Resource Identifier (URI).
   * 	- **7**: an IP address.
   * - **Value**: A String value that indicates the content of the extension.
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
   * 084bde9cd233f0ddae33adc438cfbbbd****
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
   * <props="china">The name of the province, municipality, or autonomous region where the organization associated with the subordinate CA certificate that issued this certificate is located.
   * <props="intl">The name of the province or state where the organization associated with the subordinate CA certificate that issued this certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * - **ISSUE**: issued.
   * - **REVOKE**: revoked.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The distinguished name (DN) attribute of the certificate, which indicates the subject of the certificate. The DN contains the following information:
   * 
   * - **C**: The country.
   * - **O**: The organization.
   * - **OU**: The department.
   * - **L**: The city.
   * <props="china">- **ST**: The province, municipality, or autonomous region.
   * <props="intl">- **ST**: The province or state.
   * - **CN**: The common name.
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
  /**
   * @remarks
   * The validity period of the certificate. Unit: years.
   * 
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
  /**
   * @remarks
   * The details of the client certificates or server certificates.
   */
  certificateList?: DescribeClientCertificateForSerialNumberResponseBodyCertificateList[];
  /**
   * @remarks
   * The request ID.
   * 
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

