// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificateResponseBodyCertificateTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * 使用状态
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * BMS
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

export class DescribeCACertificateResponseBodyCertificate extends $dara.Model {
  /**
   * @remarks
   * The date when the CA certificate expires. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  afterDate?: number;
  /**
   * @remarks
   * The type of the encryption algorithm of the CA certificate. Valid values:
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
   * The date when the CA certificate was issued. This is a UNIX timestamp. Unit: milliseconds.
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
   * -----END CERTIFICATE-----
   * 
   * -----BEGIN CERTIFICATE-----
   * -----END CERTIFICATE-----
   * 
   * -----BEGIN CERTIFICATE-----
   * -----END CERTIFICATE-----
   */
  caCertChain?: string;
  /**
   * @remarks
   * The number of certificates that the private CA instance has issued.
   * 
   * @example
   * 10
   */
  certIssuedCount?: number;
  certMaxTime?: number;
  /**
   * @remarks
   * The number of remaining certificates that can be issued.
   * 
   * @example
   * 30
   */
  certRemainingCount?: number;
  /**
   * @remarks
   * The total certificate quota you purchased.
   * 
   * @example
   * 40
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The type of the CA certificate. Valid values:
   * 
   * - **ROOT**: A root CA certificate.
   * 
   * - **SUB_ROOT**: A subordinate CA certificate.
   * 
   * @example
   * SUB_ROOT
   */
  certificateType?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM) cluster. This parameter is available when the CA is enabled using an HSM.
   * 
   * @example
   * XXX-id
   */
  clusterId?: string;
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
   * The country code of the organization that is associated with the CA certificate.
   * 
   * For more information about country codes, see the **International codes** section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The validity period of the CRL. Valid values: 1 to 365. Unit: days.
   * 
   * @example
   * 90
   */
  crlDay?: number;
  /**
   * @remarks
   * The status of the Certificate Revocation List (CRL).
   * 
   * @example
   * ACTIVE
   */
  crlStatus?: string;
  /**
   * @remarks
   * The CRL URL.
   * 
   * @example
   * https://crl-cn-publish.oss-cn-hangzhou.aliyuncs.com/pca/crl/1925647866611395/1ed40789-483f-6023-b6b8-29ddd3bb0a9a.crl
   */
  crlUrl?: string;
  /**
   * @remarks
   * The algorithm and its key length.
   * 
   * @example
   * RSA_2048
   */
  fullAlgorithm?: string;
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
   * The issuer of the CA. Valid values:
   * 
   * - local: A private certificate.
   * 
   * - iTrusChina: A compliance CA.
   * 
   * - external: An imported certificate.
   * 
   * @example
   * local
   */
  issuerType?: string;
  /**
   * @remarks
   * The index of the key in the HSM. This parameter is available when the CA is enabled using an HSM.
   * 
   * @example
   * 8
   */
  keyIndex?: number;
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
   * The name of the organization that is associated with the CA certificate.
   * 
   * @example
   * aliyun
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization that is associated with the CA certificate.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate that issued the CA certificate.
   * 
   * > This parameter is returned only when **CertificateType** is **SUB_ROOT**, which indicates a subordinate CA certificate.
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
   * rg-aek2pxd7ekpoo2y
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
   * <props="china">The name of the province, municipality, or autonomous region where the organization associated with the CA certificate is located.
   * <props="intl">The name of the province or state where the organization associated with the CA certificate is located.
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
   * The subject of the CA certificate. It contains the following information:
   * 
   * - **C**: The country code of the organization.
   * 
   * - **O**: The name of the organization.
   * 
   * - **OU**: The department of the organization.
   * 
   * - **L**: The city where the organization is located.
   * 
   * <props="china">
   * 
   * - **ST**: The province, municipality, or autonomous region where the organization is located.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **ST**: The province or state where the organization is located.
   * 
   * 
   * 
   * 
   * - **CN**: The common name or abbreviation of the organization.
   * 
   * @example
   * C=CN,O=aliyun,OU=Security,L=Hangzhou,ST=Zhejiang,CN=Aliyun
   */
  subjectDN?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeCACertificateResponseBodyCertificateTags[];
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
   * The validity period of the CA certificate. Unit: years.
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
      caCertChain: 'CaCertChain',
      certIssuedCount: 'CertIssuedCount',
      certMaxTime: 'CertMaxTime',
      certRemainingCount: 'CertRemainingCount',
      certTotalCount: 'CertTotalCount',
      certificateType: 'CertificateType',
      clusterId: 'ClusterId',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlDay: 'CrlDay',
      crlStatus: 'CrlStatus',
      crlUrl: 'CrlUrl',
      fullAlgorithm: 'FullAlgorithm',
      identifier: 'Identifier',
      issuerType: 'IssuerType',
      keyIndex: 'KeyIndex',
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
      certMaxTime: 'number',
      certRemainingCount: 'number',
      certTotalCount: 'number',
      certificateType: 'string',
      clusterId: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlDay: 'number',
      crlStatus: 'string',
      crlUrl: 'string',
      fullAlgorithm: 'string',
      identifier: 'string',
      issuerType: 'string',
      keyIndex: 'number',
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
      tags: { 'type': 'array', 'itemType': DescribeCACertificateResponseBodyCertificateTags },
      x509Certificate: 'string',
      years: 'number',
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

export class DescribeCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the CA certificate.
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

