// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateForSerialNumberResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 2022-08-23T16:15Z
   */
  afterDate?: string;
  /**
   * @remarks
   * The encryption algorithm of the certificate. Valid values:
   * 
   * - **RSA**: The RSA algorithm.
   * 
   * - **ECC**: The ECC algorithm.
   * 
   * - **SM2**: The SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the certificate.
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
   * The two-letter country code of the issuer.
   * 
   * For more information about country codes, see the **Country codes** section in [Manage company profiles](https://help.aliyun.com/document_detail/198289.html).
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
   * The city of the issuer.
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
   * The organization of the issuer.
   * 
   * @example
   * 阿里云计算有限公司
   */
  organization?: string;
  /**
   * @remarks
   * The organizational unit of the issuer.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The identifier of the issuer. This parameter is returned only if the certificate is issued by Alibaba Cloud.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The subject alternative name (SAN) extension, which specifies identifiers such as email addresses, domain names, URIs, and IP addresses.
   * 
   * A JSON string that represents an array of SAN objects. Each object contains the following parameters:
   * 
   * - **Type**: The type of the extension. This parameter is an integer. Valid values:
   * 
   *   - **1**: email address.
   * 
   *   - **2**: domain name.
   * 
   *   - **6**: uniform resource identifier (URI).
   * 
   *   - **7**: IP address.
   * 
   * - **Value**: The content of the extension. This parameter is a string.
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
   * <props="china">The state or province of the issuer.
   * <props="intl">The state or province of the issuer.
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
   * The distinguished name (DN) of the certificate. The DN contains information about the certificate subject, including:
   * 
   * - **C**: Country.
   * 
   * - **O**: Organization.
   * 
   * - **OU**: Organizational unit.
   * 
   * - **L**: City.
   * 
   * <props="china">
   * 
   * - **ST**: State or province.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **ST**: State or province.
   * 
   * 
   * 
   * 
   * - **CN**: Common name.
   * 
   * @example
   * C=CN,O=阿里云计算有限公司,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  ...... -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  /**
   * @remarks
   * This parameter is deprecated.
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
   * Details of the client or server certificates.
   */
  certificateList?: DescribeClientCertificateForSerialNumberResponseBodyCertificateList[];
  /**
   * @remarks
   * The ID of the request.
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

