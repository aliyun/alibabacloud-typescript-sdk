// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificateResponseBodyCertificate extends $dara.Model {
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
   * The issuance date of the CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * CA certificate chain.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * 用户证书
   * -----END CERTIFICATE-----
   * 
   * -----BEGIN CERTIFICATE-----
   * 中间证书
   * -----END CERTIFICATE-----
   * 
   * -----BEGIN CERTIFICATE-----
   * 根证书
   * -----END CERTIFICATE-----
   */
  caCertChain?: string;
  /**
   * @remarks
   * The number of certificates issued by private CA instances.
   * 
   * @example
   * 10
   */
  certIssuedCount?: number;
  /**
   * @remarks
   * The remaining number of assignable certificate quotas.
   * 
   * @example
   * 30
   */
  certRemainingCount?: number;
  /**
   * @remarks
   * The total number of purchased certificate quotas.
   * 
   * @example
   * 40
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The type of the CA certificate. Valid values:
   * 
   * *   **ROOT**: root CA certificate
   * *   **SUB_ROOT**: intermediate CA certificate
   * 
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization that is associated with the CA certificate.
   * 
   * @example
   * Aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * CRL validity period: 1-365 days.
   * 
   * @example
   * 90
   */
  crlDay?: number;
  /**
   * @remarks
   * The status of the certificate revocation list (CRL) feature.
   * 
   * @example
   * ACTIVE
   */
  crlStatus?: string;
  /**
   * @remarks
   * The address of the CRL.
   * 
   * @example
   * https://crl-cn-publish.oss-cn-hangzhou.aliyuncs.com/pca/crl/1925647866611395/1ed40789-483f-6023-b6b8-29ddd3bb0a9a.crl
   */
  crlUrl?: string;
  fullAlgorithm?: string;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  issuerType?: string;
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
   * The name of the city in which the organization is located.
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
   * The name of the organization that is associated with the CA certificate.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization that is associated with the CA certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate from which the CA certificate is issued.
   * 
   * >  This parameter is returned only if the value of the **CertificateType** parameter is **SUB_ROOT**. The value SUB_ROOT indicates an intermediate CA certificate.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
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
   * The name of the province, municipality, or autonomous region in which the organization is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the CA certificate. Valid values:
   * 
   * *   **ISSUE**: The CA certificate is issued.
   * *   **REVOKE**: The CA certificate is revoked.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The user attribute of the CA certificate, which contains the following information:
   * 
   * *   **C**: the country code in which the organization is located
   * *   **O**: the name of the organization
   * *   **OU**: the name of the department or branch in the organization
   * *   **L**: the name of the city in which the organization is located
   * *   **ST**: the name of the province, municipality, or autonomous region in which the organization is located
   * *   **CN**: the common name or abbreviation of the organization
   * 
   * @example
   * C=CN,O=Alibaba Cloud Computing Co., Ltd.,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The content of the CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----
   */
  x509Certificate?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      caCertChain: 'CaCertChain',
      certIssuedCount: 'CertIssuedCount',
      certRemainingCount: 'CertRemainingCount',
      certTotalCount: 'CertTotalCount',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlDay: 'CrlDay',
      crlStatus: 'CrlStatus',
      crlUrl: 'CrlUrl',
      fullAlgorithm: 'FullAlgorithm',
      identifier: 'Identifier',
      issuerType: 'IssuerType',
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
      caCertChain: 'string',
      certIssuedCount: 'number',
      certRemainingCount: 'number',
      certTotalCount: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlDay: 'number',
      crlStatus: 'string',
      crlUrl: 'string',
      fullAlgorithm: 'string',
      identifier: 'string',
      issuerType: 'string',
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

export class DescribeCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the CA certificate.
   */
  certificate?: DescribeCACertificateResponseBodyCertificate;
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
   * The validity period of the CA certificate. Unit: years.
   * 
   * @example
   * 10
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: DescribeCACertificateResponseBodyCertificate,
      requestId: 'string',
      years: 'number',
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

