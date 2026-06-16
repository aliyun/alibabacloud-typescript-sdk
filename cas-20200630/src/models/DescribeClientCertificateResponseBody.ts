// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateResponseBodyCertificateTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * [{\\"tag\\":\\"PROPERTY_TYPE\\",\\"values\\":[]}]
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponseBodyCertificate extends $dara.Model {
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
   * The type of the encryption algorithm. Valid values:
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
   * The alias of the issued certificate.
   * 
   * @example
   * rsa_root_2048
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
   * The complete certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * cert
   * -----END CERTIFICATE-----
   * -----BEGIN CERTIFICATE-----
   * subCA
   * -----END CERTIFICATE-----
   * -----BEGIN CERTIFICATE-----
   * rootCA
   * -----END CERTIFICATE-----
   */
  certChain?: string;
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
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code of the subject organization.
   * 
   * For more information about country codes, see the **International codes** section in [Manage company profiles](https://help.aliyun.com/document_detail/198289.html).
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
   * ***3a32d96883a6650e672ea0276****
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
   * The algorithm and its length.
   * 
   * @example
   * RSA_2048
   */
  fullAlgorithm?: string;
  /**
   * @remarks
   * The ID of the data source to which the certificate order belongs.
   * 
   * @example
   * 1137354
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
   * The city where the subject organization is located.
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
   * The organization associated with the certificate of the issuing subordinate CA.
   * 
   * @example
   * Aliyun
   */
  organization?: string;
  /**
   * @remarks
   * The organizational unit of the certificate subject.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issued the certificate.
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
   * rg-acfmxllajdpw3fi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) extension of the certificate. The SAN extension indicates other domain names or IP addresses that are associated with the certificate.
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
   * The state or province where the subject organization is located.
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
   * The subject Distinguished Name (DN) of the certificate. This value is composed of the following fields:
   * 
   * - **C**: Country.
   * 
   * - **O**: Organization.
   * 
   * - **OU**: Organizational unit.
   * 
   * - **CN**: Common name.
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
   * - **ST**: Province or state.
   * 
   * 
   * 
   * 
   * - **CN**: Common name.
   * 
   * @example
   * C=CN,O=Aliyun,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * mtls
   */
  tags?: DescribeClientCertificateResponseBodyCertificateTags[];
  /**
   * @remarks
   * Indicates whether the certificate is synchronized to Digital Certificate Management Service.
   * 
   * @example
   * 1
   */
  uploadFlag?: number;
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
      certChain: 'CertChain',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      customIdentifier: 'CustomIdentifier',
      days: 'Days',
      fullAlgorithm: 'FullAlgorithm',
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
      tags: 'Tags',
      uploadFlag: 'UploadFlag',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      aliasName: 'string',
      beforeDate: 'number',
      certChain: 'string',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      customIdentifier: 'string',
      days: 'number',
      fullAlgorithm: 'string',
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
      tags: { 'type': 'array', 'itemType': DescribeClientCertificateResponseBodyCertificateTags },
      uploadFlag: 'number',
      x509Certificate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the client certificate or server-side certificate.
   */
  certificate?: DescribeClientCertificateResponseBodyCertificate;
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
      certificate: 'Certificate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: DescribeClientCertificateResponseBodyCertificate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificate && typeof (this.certificate as any).validate === 'function') {
      (this.certificate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

