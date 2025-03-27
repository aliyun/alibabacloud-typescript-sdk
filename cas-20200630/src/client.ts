// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage extends $dara.Model {
  /**
   * @remarks
   * The original name of the parameter is NonRepudiation.
   * 
   * @example
   * false
   */
  contentCommitment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for data encryption.
   * 
   * @example
   * false
   */
  dataEncipherment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used only for data decryption.
   * 
   * @example
   * false
   */
  decipherOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for digital signing. If you set this parameter to true, the private key of the certificate can be used to generate digital signatures, and the public key of the certificate can be used to verify digital signatures.
   * 
   * @example
   * true
   */
  digitalSignature?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used only for data encryption.
   * 
   * @example
   * false
   */
  encipherOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for key agreement.
   * 
   * @example
   * false
   */
  keyAgreement?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for data encipherment.
   * 
   * @example
   * false
   */
  keyEncipherment?: boolean;
  /**
   * @remarks
   * Specifies whether the key can be used for non-repudiation. This parameter is renamed ContentCommitment in the X.509 standard.
   * 
   * @example
   * false
   */
  nonRepudiation?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentCommitment: 'ContentCommitment',
      dataEncipherment: 'DataEncipherment',
      decipherOnly: 'DecipherOnly',
      digitalSignature: 'DigitalSignature',
      encipherOnly: 'EncipherOnly',
      keyAgreement: 'KeyAgreement',
      keyEncipherment: 'KeyEncipherment',
      nonRepudiation: 'NonRepudiation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentCommitment: 'boolean',
      dataEncipherment: 'boolean',
      decipherOnly: 'boolean',
      digitalSignature: 'boolean',
      encipherOnly: 'boolean',
      keyAgreement: 'boolean',
      keyEncipherment: 'boolean',
      nonRepudiation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames extends $dara.Model {
  /**
   * @remarks
   * The type of the alias. Valid values:
   * 
   * *   rfc822Name: email address
   * *   dNSName: domain name
   * *   uniformResourceIdentifier: URI
   * *   iPAddress: IP address
   * 
   * This parameter is required.
   * 
   * @example
   * dNSName
   */
  type?: string;
  /**
   * @remarks
   * The alias that meets the requirement of a specified type.
   * 
   * @example
   * rfc822Name:
   * exmaple@certqa.cn
   * 
   * dNSName:
   * www.certqa.cn
   * 
   * uniformResourceIdentifier:
   * acs:ecs:regionid:15619224785*****:instance/i-bp1bzvz55uz27hf*****
   * 
   * iPAddress:
   * 127.0.0.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensions extends $dara.Model {
  /**
   * @remarks
   * If it is a necessary parameter, the critical list contains the parameter name.
   */
  criticals?: string[];
  /**
   * @remarks
   * The extended key usage.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The key usage.
   */
  keyUsage?: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage;
  /**
   * @remarks
   * The aliases of the entities.
   */
  subjectAlternativeNames?: CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames[];
  static names(): { [key: string]: string } {
    return {
      criticals: 'Criticals',
      extendedKeyUsages: 'ExtendedKeyUsages',
      keyUsage: 'KeyUsage',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticals: { 'type': 'array', 'itemType': 'string' },
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      keyUsage: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage,
      subjectAlternativeNames: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames },
    };
  }

  validate() {
    if(Array.isArray(this.criticals)) {
      $dara.Model.validateArray(this.criticals);
    }
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    if(this.keyUsage && typeof (this.keyUsage as any).validate === 'function') {
      (this.keyUsage as any).validate();
    }
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes extends $dara.Model {
  /**
   * @remarks
   * Custom attribute type as:
   * 
   * - 2.5.4.6 : country
   * - 2.5.4.10 : organization
   * - 2.5.4.11 : organizational unit
   * - 2.5.4.12 : title
   * - 2.5.4.3 : common name
   * - 2.5.4.9 : street
   * - 2.5.4.5 : serial number
   * - 2.5.4.7 : locality
   * - 2.5.4.8 : state
   * - 1.3.6.1.4.1.37244.1.1 : Matter Operational Certificate - Node ID
   * - 1.3.6.1.4.1.37244.1.5 : Matter Operational Certificate - Fabric ID
   * - 1.3.6.1.4.1.37244.2.1 : Matter Device Attestation Certificate Vender ID (VID)
   * - 1.3.6.1.4.1.37244.2.2 : Matter Device Attestation Certificate Product ID (PID).
   * 
   * @example
   * 2.5.4.3
   */
  objectIdentifier?: string;
  /**
   * @remarks
   * Custom attribute value.
   * 
   * @example
   * Aliyun
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      objectIdentifier: 'ObjectIdentifier',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectIdentifier: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughSubject extends $dara.Model {
  /**
   * @remarks
   * The common name of the certificate user.
   * 
   * @example
   * Bob
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country. The value is an alpha-2 country code that complies with the ISO 3166-1 standard. For more information about country codes, visit <https://www.iso.org/obp/ui/#search/code/>.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Customize the Subject attributes of the certificate.
   */
  customAttributes?: CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes[];
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * XXX company
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization.
   * 
   * @example
   * XXX department
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The name of the province or state in which the organization associated with the certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      country: 'Country',
      customAttributes: 'CustomAttributes',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      country: 'string',
      customAttributes: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customAttributes)) {
      $dara.Model.validateArray(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthrough extends $dara.Model {
  /**
   * @remarks
   * The extensions of the certificate.
   */
  extensions?: CreateCustomCertificateRequestApiPassthroughExtensions;
  /**
   * @remarks
   * The serial number MUST be a positive integer assigned by the CA to each certificate.
   * 
   * @example
   * 16889526086333
   */
  serialNumber?: string;
  /**
   * @remarks
   * The name of the entity that uses the certificate.
   */
  subject?: CreateCustomCertificateRequestApiPassthroughSubject;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      serialNumber: 'SerialNumber',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: CreateCustomCertificateRequestApiPassthroughExtensions,
      serialNumber: 'string',
      subject: CreateCustomCertificateRequestApiPassthroughSubject,
    };
  }

  validate() {
    if(this.extensions && typeof (this.extensions as any).validate === 'function') {
      (this.extensions as any).validate();
    }
    if(this.subject && typeof (this.subject as any).validate === 'function') {
      (this.subject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The Distinguished Name (DN) attribute of the CA certificate, which indicates the user information of the certificate. The DN attribute contains the following information:
   * 
   * *   **C**: the country code in which the organization is located
   * *   **O**: the name of the organization
   * *   **OU**: the name of the department or branch in the organization
   * *   **L**: the name of the city in which the organization is located
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
  /**
   * @remarks
   * The validity period of the CA certificate. Unit: years.
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
   * The type of the encryption algorithm of the certificate. Valid values:
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
   * The issuance date of the certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **CLIENT**: client certificate
   * *   **SERVER**: server certificate
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
   * The code of the country in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
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
   * The name of the city in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
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
   * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization. The organization is associated with the intermediate certificate authority (CA) certificate from which the certificate is issued.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate certificate from which the client certificate is issued.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The subject alternative name (SAN) extension of the certificate. The value indicates additional information, including the additional domain names or IP addresses that are associated with the certificate.
   * 
   * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that corresponds to a SAN extension. A SAN extension struct contains the following parameters:
   * 
   * *   **Type**: the type of the extension. Data type: integer. Valid values:
   * 
   *     *   **1**: an email address
   *     *   **2**: a domain name
   *     *   **6**: a Uniform Resource Identifier (URI)
   *     *   **7**: an IP address
   * 
   * *   **Value**: the value of the extension. Data type: string.
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
   * The name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The distinguished name (DN) extension of the certificate, which indicates the user of the certificate. The DN extension includes the following information:
   * 
   * *   **C**: the country
   * *   **O**: the organization
   * *   **OU**: the department
   * *   **L**: the city
   * *   **ST**: the province, municipality, or autonomous region
   * *   **CN**: the common name
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
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      days: 'Days',
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
      days: 'number',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponseBodyCertificateStatus extends $dara.Model {
  /**
   * @remarks
   * The date on which the certificate was revoked.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **revoked**. The value revoked indicates that the certificate is revoked.
   * 
   * @example
   * 2021-01-01T00:00Z
   */
  revokeTime?: number;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * b67e53ebcea9b77d65b0c3236646d715****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **good**: The certificate is not revoked.
   * *   **revoked**: The certificate is revoked.
   * *   **unknown**: The server cannot determine the status of the certificate.
   * 
   * @example
   * good
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      revokeTime: 'RevokeTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeTime: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * 1792944000000
   */
  afterTime?: number;
  /**
   * @remarks
   * The issuance date of the private CA certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * 1635177600000
   */
  beforeTime?: number;
  /**
   * @remarks
   * The number of certificates that are issued by using the private CA instance.
   * 
   * @example
   * 1
   */
  certIssuedCount?: number;
  /**
   * @remarks
   * The number of certificates that can be issued by using the private CA instance.
   * 
   * For a private root CA instance whose **Type** is **ROOT**, this parameter indicates the number of intermediate CA certificates that can be issued.
   * 
   * For a private intermediate CA instance whose **Type** is **SUB_ROOT**, this parameter indicates the total number of client certificates and server certificates that can be issued
   * 
   * @example
   * 10
   */
  certTotalCount?: number;
  /**
   * @remarks
   * The unique identifier of the private CA certificate.
   * 
   * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
   * 
   * @example
   * a7bb2dd212a2112128cd5cc9b753****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the private CA instance.
   * 
   * @example
   * cas-member-0hmi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the private CA instance. Valid values:
   * 
   * *   **BUY**: The private CA instance is purchased but is not enabled.
   * *   **USED**: The private CA instance is enabled.
   * *   **REFUND**: The private CA instance is refunded.
   * *   **REVOKE**: The private CA instance is revoked.
   * 
   * @example
   * USED
   */
  status?: string;
  /**
   * @remarks
   * The type of the private CA instance. Valid values:
   * 
   * *   **ROOT**: root CA instance
   * *   **SUB_ROOT**: intermediate CA instance
   * 
   * @example
   * ROOT
   */
  type?: string;
  /**
   * @remarks
   * The expiration date of the private CA instance. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter corresponds to the duration that you select when you purchase the private CA instance. The duration indicates the subscription period of the Private Certificate Authority (PCA) service.
   * 
   * @example
   * 1637251200000
   */
  useExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      beforeTime: 'BeforeTime',
      certIssuedCount: 'CertIssuedCount',
      certTotalCount: 'CertTotalCount',
      identifier: 'Identifier',
      instanceId: 'InstanceId',
      status: 'Status',
      type: 'Type',
      useExpireTime: 'UseExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      beforeTime: 'number',
      certIssuedCount: 'number',
      certTotalCount: 'number',
      identifier: 'string',
      instanceId: 'string',
      status: 'string',
      type: 'string',
      useExpireTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBodyCertificateList extends $dara.Model {
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
   * The type of the encryption algorithm of the certificate. Valid values:
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
   * The issuance date of the certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1634283958000
   */
  beforeDate?: number;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **CLIENT**: client certificate
   * *   **SERVER**: server certificate
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
   * The code of the country in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
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
   * The name of the city in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
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
   * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization. The organization is associated with the intermediate certificate authority (CA) certificate from which the certificate is issued.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate certificate from which the client certificate is issued.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The subject alternative name (SAN) extension of the certificate. The value indicates additional information, including the additional domain names or IP addresses that are associated with the certificate.
   * 
   * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that corresponds to a SAN extension. A SAN extension struct contains the following parameters:
   * 
   * *   **Type**: the type of the extension. Data type: integer. Valid values:
   * 
   *     *   **1**: an email address
   *     *   **2**: a domain name
   *     *   **6**: a Uniform Resource Identifier (URI)
   *     *   **7**: an IP address
   * 
   * *   **Value**: the value of the extension. Data type: string.
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
   * The name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The distinguished name (DN) extension of the certificate, which indicates the user of the certificate. The DN extension includes the following information:
   * 
   * *   **C**: the country
   * *   **O**: the organization
   * *   **OU**: the department
   * *   **L**: the city
   * *   **ST**: the province, municipality, or autonomous region
   * *   **CN**: the common name
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
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      days: 'Days',
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
      days: 'number',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate. The date is in the `yyyy-MM-ddT00:00Z` format. For example, the value `2021-12-31T00:00Z` indicates December 31, 2021.
   * 
   * @example
   * 2021-12-31T00:00Z
   */
  afterDate?: string;
  /**
   * @remarks
   * The type of the encryption algorithm of the certificate. Valid values:
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
   * The issuance date of the certificate. The date is in the `yyyy-MM-ddT00:00Z` format. For example, the value `2021-01-01T00:00Z` indicates January 1, 2021.
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
   * The code of the country in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
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
   * The name of the city in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
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
   * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in the organization. The organization is associated with the intermediate certificate authority (CA) certificate from which the certificate is issued.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The identifier of the root certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The date on which the certificate was revoked. The value is in the `yyyy-MM-ddT00:00Z` format. For example, the value `2021-09-01T00:00Z` indicates September 1, 2021.
   * 
   * @example
   * 2021-09-01T00:00Z
   */
  revokeDate?: string;
  /**
   * @remarks
   * The subject alternative name (SAN) extension of the certificate.
   * 
   * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that corresponds to a SAN extension. A SAN extension struct contains the following parameters:
   * 
   * *   **Type**: the type of the extension. Data type: integer. Valid values:
   * 
   *     *   **1**: an email address
   *     *   **2**: a domain name
   *     *   **6**: a Uniform Resource Identifier (URI)
   *     *   **7**: an IP address
   * 
   * *   **Value**: the value of the extension. Data type: string.
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
   * The name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The distinguished name (DN) extension of the certificate, which indicates the user of the certificate. The DN extension includes the following information:
   * 
   * *   **C**: the country
   * *   **O**: the organization
   * *   **OU**: the department
   * *   **L**: the city
   * *   **ST**: the province, municipality, or autonomous region
   * *   **CN**: the common name
   * 
   * @example
   * C=CN,O=Alibaba Cloud Computing Co., Ltd.,OU=Security,L=ZheJiang,ST=HangZhou,CN=aliyundoc.com
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

export class CreateClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate. This value is a UNIX timestamp. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the client certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same with the encryption algorithm of the intermediate certificate authority (CA) certificate. The key length can be different. For example, if the key algorithm of the intermediate CA certificate is RSA_2048, the key algorithm of the client certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * > You can call the [DescribeCACertificate] operation to query the key algorithm of an intermediate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the client certificate. This value is a UNIX timestamp. The default value is the time when you call this operation. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The name of the client certificate user. In most cases, the user of a client certificate is an individual, a company, an organization, or an application. We recommend that you enter the common name of a user. Examples: Bob, Alibaba, Alibaba Cloud password platform, and Tmall Genie.
   * 
   * @example
   * aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The country in which the organization is located. Default value: CN.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: day. You must specify at least one of the **Days**, **BeforeTime**, and **AfterTime** parameters. The **BeforeTime** and **AfterTime** parameters must be both empty or both specified. The following list describes how to specify these parameters:
   * 
   * *   If you specify the **Days** parameter, you can specify both the **BeforeTime** and **AfterTime** parameters or leave them both empty.
   * *   If you do not specify the **Days** parameter, you must specify both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > 
   * 
   * *   If you specify the **Days**, **BeforeTime**, and **AfterTime** parameters at the same time, the validity period of the client certificate is determined by the value of the **Days** parameter.
   * 
   * *   The validity period of the client certificate cannot exceed the validity period of the intermediate CA certificate. You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) operation to query the validity period of an intermediate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the certificate. Valid values:
   * 
   * *   **0**: does not return the certificate. This is the default value.
   * *   **1**: returns the certificate.
   * *   **2**: returns the certificate and the certificate chain of the certificate.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters. The default value is the name of the city in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: months.
   * 
   * @example
   * 1
   */
  months?: number;
  /**
   * @remarks
   * The name of the organization. Default value: Alibaba Inc.
   * 
   * @example
   * Alibaba Cloud
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Aliyun CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate CA certificate from which the server certificate is issued.
   * 
   * > You can call the [DescribeCACertificateList] operation to query the unique identifier of an intermediate CA certificate.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The type of the Subject Alternative Name (SAN) extension that is supported by the client certificate. Valid values:
   * 
   * *   **1**: an email address
   * *   **6**: a Uniform Resource Identifier (URI)
   * 
   * @example
   * 1
   */
  sanType?: number;
  /**
   * @remarks
   * The content of the extension. You can specify multiple SAN extensions. If you want to specify multiple SAN extensions, separate them with commas (,).
   * 
   * @example
   * somebody@example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * The province, municipality, or autonomous region in which the organization is located. The value can contain letters. The default value is the name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: years.
   * 
   * @example
   * 5
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      days: 'Days',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sanType: 'SanType',
      sanValue: 'SanValue',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      country: 'string',
      days: 'number',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sanType: 'number',
      sanValue: 'string',
      state: 'string',
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

export class CreateClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate chain of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate.
   * 
   * @example
   * 190ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 0f29522da2dae7a1c4b6ab7132ad3c06
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate. This value is a UNIX timestamp. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the client certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same with the encryption algorithm of the intermediate CA certificate. The key length can be different. For example, if the key algorithm of the intermediate CA certificate is RSA_2048, the key algorithm of the client certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * >  You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the key algorithm of an intermediate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the client certificate. This value is a UNIX timestamp. The default value is the time when you call this operation. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The common name of the certificate. The value can contain letters.
   * 
   * >  If you specify the **CsrPemString** parameter, the value of the **CommonName** parameter is determined by the **CsrPemString** parameter.
   * 
   * @example
   * aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located, such as **CN** and **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the CSR file. You can generate a CSR file by using the OpenSSL tool or Keytool. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html) You can also create a CSR file in the Certificate Management Service console. For more information, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html).
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: days. You must specify at least one of the **Days**, **BeforeTime**, and **AfterTime** parameters. The **BeforeTime** and **AfterTime** parameters must be both empty or both specified. The following list describes how to specify these parameters:
   * 
   * *   If you specify the **Days** parameter, you can specify both the **BeforeTime** and **AfterTime** parameters or leave them both empty.********
   * *   If you do not specify the **Days** parameter, you must specify both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > 
   * 
   * *   If you specify the **Days**, **BeforeTime**, and **AfterTime** parameters together, the validity period of the client certificate is determined by the value of the **Days** parameter.
   * 
   * *   The validity period of the client certificate cannot exceed the validity period of the intermediate CA certificate. You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the validity period of an intermediate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the certificate. Valid values:
   * 
   * *   **0**: does not return the certificate. This is the default value.
   * *   **1**: returns the certificate.
   * *   **2**: returns the certificate and the certificate chain of the certificate.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters. The default value is the name of the city in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: months.
   * 
   * @example
   * 12
   */
  months?: number;
  /**
   * @remarks
   * The name of the organization. Default value: Alibaba Inc.
   * 
   * @example
   * Alibaba Cloud Computing Co., Ltd.
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Aliyun CDN.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate CA certificate from which the client certificate is issued.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifier of an intermediate CA certificate.
   * 
   * @example
   * 270ae6bb538d538c70c01f81fg3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The type of the Subject Alternative Name (SAN) extension that is supported by the client certificate. Valid values:
   * 
   * *   **1**: an email address
   * *   **6**: a Uniform Resource Identifier (URI)
   * 
   * @example
   * 1
   */
  sanType?: number;
  /**
   * @remarks
   * The content of the extension. You can specify multiple SAN extensions. If you want to specify multiple SAN extensions, separate them with commas (,).
   * 
   * @example
   * somebody@example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * The province, municipality, or autonomous region in which the organization is located. The value can contain letters. The default value is the name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: years.
   * 
   * @example
   * 1
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      csr: 'Csr',
      days: 'Days',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sanType: 'SanType',
      sanValue: 'SanValue',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      country: 'string',
      csr: 'string',
      days: 'number',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sanType: 'number',
      sanValue: 'string',
      state: 'string',
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

export class CreateClientCertificateWithCsrResponseBody extends $dara.Model {
  certKmcRep1?: string;
  certSignBufKmc?: string;
  /**
   * @remarks
   * The certificate chain of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate.
   * 
   * @example
   * 200ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 31C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the server certificate.
   * 
   * @example
   * 0f29522da2dae7a1c4b6ab7132ad3c06
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the client certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certKmcRep1: 'CertKmcRep1',
      certSignBufKmc: 'CertSignBufKmc',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certKmcRep1: 'string',
      certSignBufKmc: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientCertificateWithCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The passthrough parameters.
   */
  apiPassthrough?: CreateCustomCertificateRequestApiPassthrough;
  /**
   * @remarks
   * The content of the CSR. You can generate a CSR by using the OpenSSL tool or the Keytool tool. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * ...
   * ...
   * vbIgMQIhAKHDWD6/WAMbtezAt4bysJ/BZIDz1jPWuUR5GV4TJ/mS
   * -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to immediately issue the certificate. Valid values:
   * 
   * *   0: asynchronously issues the certificate.
   * *   1: immediately issues the certificate.
   * *   2: immediately issues the certificate and returns the certificate chain.
   * 
   * @example
   * 0
   */
  immediately?: number;
  /**
   * @remarks
   * The identifier of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ed4068c-6f1b-6deb-8e32-3f8439a851cb
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The validity period of the certificate. The value cannot exceed the validity period of the certificate instance. Relative time and absolute time are supported.
   * 
   * Units of relative time: year, month, and day.
   * 
   * *   Use y to specify years.
   * *   Use m to specify months.
   * *   Use d to specify days.
   * 
   * Absolute time: Use Greenwich Mean Time (GMT). Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`
   * 
   * *   Format of the end time: $NotAfter
   * *   Format of the start time and end time: $NotBefore/$NotAfter
   * 
   * This parameter is required.
   * 
   * @example
   * Relative time:
   *  ● 1y
   *  ● 3m
   *  ● 7d
   * Absolute time: 
   * ● 2006-01-02T15:04:05Z 
   * ● 2006-01-02T15:04:05Z/2023-03-09T17:48:13Z
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      csr: 'Csr',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      parentIdentifier: 'ParentIdentifier',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateCustomCertificateRequestApiPassthrough,
      csr: 'string',
      enableCrl: 'number',
      immediately: 'number',
      parentIdentifier: 'string',
      validity: 'string',
    };
  }

  validate() {
    if(this.apiPassthrough && typeof (this.apiPassthrough as any).validate === 'function') {
      (this.apiPassthrough as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate. This parameter is returned only if Immediately is set to 1 or 2.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/
   * ...
   * ...
   * ...
   * KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==
   * -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain of the certificate. This parameter is returned only if Immediately is set to 2.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIBfzCCATGgAwIBAgIUfI5kSdcO2S0+LkpdL3b2VUJG10YwBQYDK2VwMDUxCzAJ
   * ...
   * ...
   * ...
   * ZYYG
   * -----END CERTIFICATE-----
   * -----BEGIN CERTIFICATE-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * ...
   * ...
   * KL5cUmF
   * -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the certificate. This parameter is returned only if Immediately is set to 1 or 2.
   * 
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRevokeClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to revoke.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRevokeClientCertificateResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRevokeClientCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRevokeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRevokeClientCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRootCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The key algorithm of the root CA certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the root CA certificate must be consistent with the **encryption algorithm** of the private root CA instance that you purchase. For example, if the **encryption algorithm** of the private root CA instance that you purchase is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. You can enter an alpha-2 code. For example, you can use **CN** to indicate China and use **US** to indicate the United States.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization that is associated with the root CA certificate. You can enter the name of your enterprise or company. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The name of the province, municipality, or autonomous region in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the root CA certificate. Unit: years.
   * 
   * >  We recommend that you set this parameter to a value from 5 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
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

export class CreateRootCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The root CA certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain of the root CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D9B4C5F-7140-5B41-924C-329181DC00C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRootCACertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRootCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRootCACertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the server certificate. This value is a UNIX timestamp. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the server certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the server certificate must be the same as the encryption algorithm of the intermediate CA certificate. The key length can be different. For example, if the key algorithm of the intermediate CA certificate is RSA_2048, the key algorithm of the server certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * >  You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the key algorithm of an intermediate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the server certificate. This value is a UNIX timestamp. The default value is the time when you call this operation. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The name of the certificate user. The user of a server certificate is a server. We recommend that you enter the domain name or IP address of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located, such as CN or US.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: days. You must specify at least one of the **Days**, **BeforeTime**, and **AfterTime** parameters. The **BeforeTime** and **AfterTime** parameters must be both empty or both specified. The following list describes how to specify these parameters:
   * 
   * *   If you specify the **Days** parameter, you can specify both the **BeforeTime** and **AfterTime** parameters or leave them both empty.
   * *   If you do not specify the **Days** parameter, you must specify both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > 
   * 
   * *   If you specify the **Days**, **BeforeTime**, and **AfterTime** parameters together, the validity period of the server certificate is determined by the value of the **Days** parameter.
   * 
   * *   The validity period of the server certificate cannot exceed the validity period of the intermediate CA certificate. You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the validity period of an intermediate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * The additional domain names and additional IP addresses of the server certificate. After you add additional domain names and additional IP addresses to a certificate, you can apply the certificate to the domain names and IP addresses.
   * 
   * Separate multiple domain names and multiple IP addresses with commas (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the certificate. Valid values:
   * 
   * *   **0**: does not return the certificate. This is the default value.
   * *   **1**: returns the certificate.
   * *   **2**: returns the certificate and the certificate chain of the certificate.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters. The default value is the name of the city in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: months.
   * 
   * @example
   * 12
   */
  months?: number;
  /**
   * @remarks
   * The name of the organization. Default value: Alibaba Inc.
   * 
   * @example
   * Alibaba Cloud
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Aliyun CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate CA certificate from which the server certificate is issued.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifier of an intermediate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 271ae6bb538d538c70c01f81dg3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The province, municipality, or autonomous region in which the organization is located. The value can contain letters. The default value is the name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: years.
   * 
   * @example
   * 1
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      days: 'Days',
      domain: 'Domain',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      country: 'string',
      days: 'number',
      domain: 'string',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      state: 'string',
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

export class CreateServerCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate chain of the server certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the server certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the server certificate.
   * 
   * @example
   * 0f29522da2dae7a1c4b6ab7132ad3c06
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the server certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServerCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the server certificate. This value is a UNIX timestamp. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the server certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the server certificate must be the same as the encryption algorithm of the intermediate CA certificate. The key length can be different. For example, if the key algorithm of the intermediate CA certificate is RSA_2048, the key algorithm of the server certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * >  You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the key algorithm of an intermediate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the server certificate. This value is a UNIX timestamp. The default value is the time when you call this operation. Unit: seconds.
   * 
   * >  The **BeforeTime** and **AfterTime** parameters must be both empty or both specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The name of the certificate user. The user of a server certificate is a server. We recommend that you enter the domain name or IP address of the server.
   * 
   * @example
   * mtcsq.com
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country in which the organization is located, such as CN or US.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the CSR.
   * 
   * You can generate a CSR by using the OpenSSL tool or the Keytool tool. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html)
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: days.
   * 
   * You must specify at least one of the **Days**, **BeforeTime**, and **AfterTime** parameters. The **BeforeTime** and **AfterTime** parameters must be both empty or both specified. The following list describes how to specify these parameters:
   * 
   * *   If you specify the **Days** parameter, you can specify both the **BeforeTime** and **AfterTime** parameters or leave them both empty.********
   * *   If you do not specify the **Days** parameter, you must specify both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > 
   * 
   * *   If you specify the **Days**, **BeforeTime**, and **AfterTime** parameters at the same time, the validity period of the server certificate is determined by the value of the **Days** parameter.
   * *   The validity period of the server certificate cannot exceed the validity period of the intermediate CA certificate. You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the validity period of an intermediate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * The additional domain names or additional IP addresses of the server certificate. After you add additional domain names and additional IP addresses to a certificate, you can apply the certificate to the domain names and IP addresses.
   * 
   * You can specify multiple domain names and IP addresses. If you specify multiple domain names and IP addresses, separate them with commas (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * include the CRL address.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the certificate. Valid values:
   * 
   * *   **0**: does not return the certificate. This is the default value.
   * *   **1**: returns the certificate.
   * *   **2**: returns the certificate and the certificate chain of the certificate.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters. The default value is the name of the city in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: months.
   * 
   * @example
   * 12
   */
  months?: number;
  /**
   * @remarks
   * The name of the organization. Default value: Alibaba Inc.
   * 
   * @example
   * ec server o
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Aliyun CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the intermediate CA certificate from which the server certificate is issued.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifier of an intermediate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 270oe6bb538d538c70c01f81hfd3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The province, municipality, or autonomous region in which the organization is located. The value can contain letters. The default value is the name of the province, municipality, or autonomous region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: years.
   * 
   * @example
   * 1
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      csr: 'Csr',
      days: 'Days',
      domain: 'Domain',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      country: 'string',
      csr: 'string',
      days: 'number',
      domain: 'string',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      state: 'string',
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

export class CreateServerCertificateWithCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate chain of the server certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the server certificate.
   * 
   * @example
   * 180ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 55C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the server certificate.
   * 
   * @example
   * 084bde9cd233f0ddae33adc438cfbbbd****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The content of the server certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServerCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServerCertificateWithCsrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the key algorithm of the intermediate CA. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of an intermediate CA certificate must be consistent with the encryption algorithm of a root CA certificate. The length of the keys can be different. For example, if the key algorithm of the root CA certificate is **RSA_2048**, the key algorithm of the intermediate CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * > You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) operation to query the key algorithm of a root CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. You can enter an alpha-2 or alpha-3 code. For example, you can use **CN** to indicate China and use **US** to indicate the United States.
   * 
   * For more information about country codes, see the **"Country codes"** section in [Manage company profiles](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * CRL validity period: 1-365 days
   * 
   * @example
   * 30
   */
  crlDay?: number;
  /**
   * @remarks
   * Enable Crl Service.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: boolean;
  /**
   * @remarks
   * The extended key usages of the certificate.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization that is associated with the intermediate CA certificate. You can enter the name of your enterprise or company. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Maizi Technology
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate.
   * 
   * > You can call the [DescribeCACertificateList] operation to query the unique identifiers of all CA certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The path length constraint of the certificate. Default value: 0.
   * 
   * @example
   * 0
   */
  pathLenConstraint?: number;
  /**
   * @remarks
   * The name of the province or state in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the intermediate CA certificate. Unit: years.
   * 
   * We recommend that you set this parameter to 5 to 10.
   * 
   * > The validity period of the intermediate CA certificate cannot exceed the validity period of the root CA certificate. You can call the [DescribeCACertificate]operation to query the validity period of a root CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlDay: 'CrlDay',
      enableCrl: 'EnableCrl',
      extendedKeyUsages: 'ExtendedKeyUsages',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      pathLenConstraint: 'PathLenConstraint',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlDay: 'number',
      enableCrl: 'boolean',
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      pathLenConstraint: 'number',
      state: 'string',
      years: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain of the CA certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n-----BEGIN CERTIFICATE-----\\n......\\n-----END CERTIFICATE-----\\n
   */
  certificateChain?: string;
  /**
   * @remarks
   * The unique identifier of the sub CA certificate created in this request.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of this call request is a unique identifier generated by Alibaba Cloud for the request, which can be used for troubleshooting and locating issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSubCACertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to delete. The status of the certificate must be **REVOKE**.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers and status of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientCertificateResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the CA certificate that you want to query.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifiers of all CA certificates.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
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

export class DescribeCACertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCACertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateCountResponseBody extends $dara.Model {
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
   * The number of created CA certificates, which includes root CA certificates and intermediate CA certificates.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCACertificateCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCACertificateCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to revoke.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The number of CA certificates to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifier: 'string',
      showSize: 'number',
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
   * An array that consists of the details about the CA certificate.
   */
  certificateList?: DescribeCACertificateListResponseBodyCertificateList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of returned pages.
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
   * The number of CA certificates returned per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of root CA certificates and intermediate CA certificates that are returned.
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

export class DescribeCACertificateListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCACertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCACertificateListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The password that is used to encrypt the private key. The password can contain letters, digits, and special characters, such as `, + - _ #`. The password can be up to 32 bytes in length.
   * 
   * **Warning** You must remember the password that you specify. The password is required to decrypt the encrypted private key. If you forget the password, the encrypted private key that is returned cannot be decrypted. You must call this operation again.
   * 
   * This parameter is required.
   * 
   * @example
   * !QA@WS3ed
   */
  encryptedCode?: string;
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to query.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * bc37133bb7ed68c7938d928fd26d****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedCode: 'EncryptedCode',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedCode: 'string',
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the encrypted private key.
   * 
   * @example
   * -----BEGIN ENCRYPTED PRIVATE KEY----- …… -----END ENCRYPTED PRIVATE KEY-----
   */
  encryptedData?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedData: 'EncryptedData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedData: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertificatePrivateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertificatePrivateKeyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the client certificate or the server certificate that you want to query.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * d3b95700998e47afc4d95f886579****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the client certificate or the server certificate.
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

export class DescribeClientCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifiers of the client certificates or server certificates that you want to query. Separate multiple unique identifiers with commas (,).
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the status information about the certificates.
   */
  certificateStatus?: DescribeClientCertificateStatusResponseBodyCertificateStatus[];
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
      certificateStatus: 'CertificateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusResponseBodyCertificateStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateStatus)) {
      $dara.Model.validateArray(this.certificateStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClientCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientCertificateStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the private CA instance.
   * 
   * >  After you purchase a private CA instance by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist), you can click **Details** for the private CA instance on the **Private Certificates** page to query the ID of the private CA instance.
   * 
   * @example
   * cas-member-0hmi****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information of the private CA instance.
   */
  instanceStatusList?: GetCAInstanceStatusResponseBodyInstanceStatusList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25589516-2A56-5159-AB88-4A1D9824E183
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': GetCAInstanceStatusResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatusList)) {
      $dara.Model.validateArray(this.instanceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCAInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCAInstanceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the client certificate or the server certificate that you want to query.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
   * 
   * @example
   * 190ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The number of certificates to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifier: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details about all client certificates and server certificates.
   */
  certificateList?: ListClientCertificateResponseBodyCertificateList[];
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
   * The number of certificates that are returned per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The number of client certificates and server certificates that are returned.
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
      certificateList: { 'type': 'array', 'itemType': ListClientCertificateResponseBodyCertificateList },
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

export class ListClientCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClientCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of revoked certificates to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      showSize: 'number',
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
   * An array that consists of the details about the revoked client certificates or server certificates.
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
   * The number of revoked certificates that are returned per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of revoked client certificates and server certificates that are returned.
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

export class ListRevokeCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRevokeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRevokeCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCACertificateStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the CA certificate whose status you want to change.
   * 
   * >  You can call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) operation to query the unique identifiers of all CA certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The state to which you want to change the CA certificate. Set to the value to **REVOKE**. After this operation is called, the status of the CA certificate is changed to **REVOKE**.
   * 
   * >  You can call this operation only if the status of a CA certificate is **ISSUE**. You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/328096.html) operation to query the status of a CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * REVOKE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCACertificateStatusResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCACertificateStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCACertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCACertificateStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "cas.aliyuncs.com",
      'ap-northeast-2-pop': "cas.aliyuncs.com",
      'ap-southeast-3': "cas.aliyuncs.com",
      'ap-southeast-5': "cas.aliyuncs.com",
      'cn-beijing': "cas.aliyuncs.com",
      'cn-beijing-finance-1': "cas.aliyuncs.com",
      'cn-beijing-finance-pop': "cas.aliyuncs.com",
      'cn-beijing-gov-1': "cas.aliyuncs.com",
      'cn-beijing-nu16-b01': "cas.aliyuncs.com",
      'cn-chengdu': "cas.aliyuncs.com",
      'cn-edge-1': "cas.aliyuncs.com",
      'cn-fujian': "cas.aliyuncs.com",
      'cn-haidian-cm12-c01': "cas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cas.aliyuncs.com",
      'cn-hangzhou-finance': "cas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cas.aliyuncs.com",
      'cn-hangzhou-test-306': "cas.aliyuncs.com",
      'cn-hongkong': "cas.aliyuncs.com",
      'cn-hongkong-finance-pop': "cas.aliyuncs.com",
      'cn-huhehaote': "cas.aliyuncs.com",
      'cn-huhehaote-nebula-1': "cas.aliyuncs.com",
      'cn-north-2-gov-1': "cas.aliyuncs.com",
      'cn-qingdao': "cas.aliyuncs.com",
      'cn-qingdao-nebula': "cas.aliyuncs.com",
      'cn-shanghai': "cas.aliyuncs.com",
      'cn-shanghai-et15-b01': "cas.aliyuncs.com",
      'cn-shanghai-et2-b01': "cas.aliyuncs.com",
      'cn-shanghai-finance-1': "cas.aliyuncs.com",
      'cn-shanghai-inner': "cas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cas.aliyuncs.com",
      'cn-shenzhen': "cas.aliyuncs.com",
      'cn-shenzhen-finance-1': "cas.aliyuncs.com",
      'cn-shenzhen-inner': "cas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cas.aliyuncs.com",
      'cn-wuhan': "cas.aliyuncs.com",
      'cn-wulanchabu': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei': "cas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cas.aliyuncs.com",
      'cn-zhangjiakou': "cas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cas.aliyuncs.com",
      'eu-west-1': "cas.aliyuncs.com",
      'eu-west-1-oxs': "cas.aliyuncs.com",
      'rus-west-1-pop': "cas.aliyuncs.com",
      'us-east-1': "cas.aliyuncs.com",
      'us-west-1': "cas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Issues a client certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~CreateRootCACertificate~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~CreateRootCACertificate~~) operation. Only intermediate CA certificates can issue client certificates.
   * ## QPS limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificateWithOptions(request: CreateClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.sanType)) {
      query["SanType"] = request.sanType;
    }

    if (!$dara.isNull(request.sanValue)) {
      query["SanValue"] = request.sanValue;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateResponse({}));
    } else {
      return $dara.cast<CreateClientCertificateResponse>(await this.execute(params, req, runtime), new CreateClientCertificateResponse({}));
    }

  }

  /**
   * Issues a client certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~CreateRootCACertificate~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~CreateRootCACertificate~~) operation. Only intermediate CA certificates can issue client certificates.
   * ## QPS limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateRequest
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificate(request: CreateClientCertificateRequest): Promise<CreateClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a client certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue client certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateWithCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsrWithOptions(request: CreateClientCertificateWithCsrRequest, runtime: $dara.RuntimeOptions): Promise<CreateClientCertificateWithCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.sanType)) {
      query["SanType"] = request.sanType;
    }

    if (!$dara.isNull(request.sanValue)) {
      query["SanValue"] = request.sanValue;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateClientCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateWithCsrResponse({}));
    } else {
      return $dara.cast<CreateClientCertificateWithCsrResponse>(await this.execute(params, req, runtime), new CreateClientCertificateWithCsrResponse({}));
    }

  }

  /**
   * Issues a client certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue client certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateClientCertificateWithCsrRequest
   * @returns CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsr(request: CreateClientCertificateWithCsrRequest): Promise<CreateClientCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Issues a certificate based on the specified key usage, extended key usage, and name and alias of the entity that uses the certificate.
   * 
   * @remarks
   * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
   * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
   * *   Server certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth
   * *   Client certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: clientAuth
   * *   Mutual Transport Layer Security (TLS) authentication certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth or clientAuth
   * *   Email certificate
   * Key usage: digitalSignature or contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
   * 
   * @param request - CreateCustomCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomCertificateResponse
   */
  async createCustomCertificateWithOptions(request: CreateCustomCertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateCustomCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiPassthrough)) {
      query["ApiPassthrough"] = request.apiPassthrough;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.validity)) {
      query["Validity"] = request.validity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCustomCertificateResponse>(await this.callApi(params, req, runtime), new CreateCustomCertificateResponse({}));
    } else {
      return $dara.cast<CreateCustomCertificateResponse>(await this.execute(params, req, runtime), new CreateCustomCertificateResponse({}));
    }

  }

  /**
   * Issues a certificate based on the specified key usage, extended key usage, and name and alias of the entity that uses the certificate.
   * 
   * @remarks
   * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
   * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
   * *   Server certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth
   * *   Client certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: clientAuth
   * *   Mutual Transport Layer Security (TLS) authentication certificate
   * Key usage: digitalSignature or keyEncipherment
   * Extended key usage: serverAuth or clientAuth
   * *   Email certificate
   * Key usage: digitalSignature or contentCommitment
   * Extended key usage: emailProtection
   * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
   * 
   * @param request - CreateCustomCertificateRequest
   * @returns CreateCustomCertificateResponse
   */
  async createCustomCertificate(request: CreateCustomCertificateRequest): Promise<CreateCustomCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomCertificateWithOptions(request, runtime);
  }

  /**
   * Revokes a client certificate or a server certificate.
   * 
   * @remarks
   * After a client certificate or a server certificate is revoked, the client or the server on which the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client certificate or a server certificate is revoked, you can call the [DeleteClientCertificate](https://help.aliyun.com/document_detail/330880.html) operation to permanently delete the certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRevokeClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRevokeClientCertificateResponse
   */
  async createRevokeClientCertificateWithOptions(request: CreateRevokeClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateRevokeClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRevokeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRevokeClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateRevokeClientCertificateResponse({}));
    } else {
      return $dara.cast<CreateRevokeClientCertificateResponse>(await this.execute(params, req, runtime), new CreateRevokeClientCertificateResponse({}));
    }

  }

  /**
   * Revokes a client certificate or a server certificate.
   * 
   * @remarks
   * After a client certificate or a server certificate is revoked, the client or the server on which the certificate is installed cannot establish HTTPS connections with other devices.
   * After a client certificate or a server certificate is revoked, you can call the [DeleteClientCertificate](https://help.aliyun.com/document_detail/330880.html) operation to permanently delete the certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRevokeClientCertificateRequest
   * @returns CreateRevokeClientCertificateResponse
   */
  async createRevokeClientCertificate(request: CreateRevokeClientCertificateRequest): Promise<CreateRevokeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRevokeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Creates a root certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call the CreateRootCACertificate operation to create a self-signed root CA certificate. A root CA certificate is the trust anchor in a chain of trust for private certificates that are used within an enterprise. You must create a root CA certificate before you can use the root CA certificate to issue intermediate CA certificates. Then, you can use the intermediate CA certificates to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have purchased a private root CA instance by using the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRootCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRootCACertificateResponse
   */
  async createRootCACertificateWithOptions(request: CreateRootCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateRootCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRootCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRootCACertificateResponse>(await this.callApi(params, req, runtime), new CreateRootCACertificateResponse({}));
    } else {
      return $dara.cast<CreateRootCACertificateResponse>(await this.execute(params, req, runtime), new CreateRootCACertificateResponse({}));
    }

  }

  /**
   * Creates a root certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call the CreateRootCACertificate operation to create a self-signed root CA certificate. A root CA certificate is the trust anchor in a chain of trust for private certificates that are used within an enterprise. You must create a root CA certificate before you can use the root CA certificate to issue intermediate CA certificates. Then, you can use the intermediate CA certificates to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have purchased a private root CA instance by using the [Certificate Management Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateRootCACertificateRequest
   * @returns CreateRootCACertificateResponse
   */
  async createRootCACertificate(request: CreateRootCACertificateRequest): Promise<CreateRootCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateServerCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerCertificateResponse
   */
  async createServerCertificateWithOptions(request: CreateServerCertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateServerCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServerCertificateResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateResponse({}));
    } else {
      return $dara.cast<CreateServerCertificateResponse>(await this.execute(params, req, runtime), new CreateServerCertificateResponse({}));
    }

  }

  /**
   * Issues a server certificate by using a system-generated certificate signing request (CSR) file.
   * 
   * @remarks
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateServerCertificateRequest
   * @returns CreateServerCertificateResponse
   */
  async createServerCertificate(request: CreateServerCertificateRequest): Promise<CreateServerCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  /**
   * Issues a server certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * 
   * @param request - CreateServerCertificateWithCsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsrWithOptions(request: CreateServerCertificateWithCsrRequest, runtime: $dara.RuntimeOptions): Promise<CreateServerCertificateWithCsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.months)) {
      query["Months"] = request.months;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServerCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServerCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateWithCsrResponse({}));
    } else {
      return $dara.cast<CreateServerCertificateWithCsrResponse>(await this.execute(params, req, runtime), new CreateServerCertificateWithCsrResponse({}));
    }

  }

  /**
   * Issues a server certificate by using a custom certificate signing request (CSR) file.
   * 
   * @remarks
   * ## Usage notes
   * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](https://help.aliyun.com/document_detail/328093.html) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](https://help.aliyun.com/document_detail/328094.html) operation. Only intermediate CA certificates can be used to issue server certificates.
   * 
   * @param request - CreateServerCertificateWithCsrRequest
   * @returns CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsr(request: CreateServerCertificateWithCsrRequest): Promise<CreateServerCertificateWithCsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  /**
   * Creates an intermediate certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSubCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubCACertificateResponse
   */
  async createSubCACertificateWithOptions(request: CreateSubCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<CreateSubCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.crlDay)) {
      query["CrlDay"] = request.crlDay;
    }

    if (!$dara.isNull(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!$dara.isNull(request.extendedKeyUsages)) {
      query["ExtendedKeyUsages"] = request.extendedKeyUsages;
    }

    if (!$dara.isNull(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.pathLenConstraint)) {
      query["PathLenConstraint"] = request.pathLenConstraint;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSubCACertificateResponse>(await this.callApi(params, req, runtime), new CreateSubCACertificateResponse({}));
    } else {
      return $dara.cast<CreateSubCACertificateResponse>(await this.execute(params, req, runtime), new CreateSubCACertificateResponse({}));
    }

  }

  /**
   * Creates an intermediate certificate authority (CA) certificate.
   * 
   * @remarks
   * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
   * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSubCACertificateRequest
   * @returns CreateSubCACertificateResponse
   */
  async createSubCACertificate(request: CreateSubCACertificateRequest): Promise<CreateSubCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a client certificate or a server certificate that is revoked.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/330876.html) operation to revoke a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificateWithOptions(request: DeleteClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteClientCertificateResponse>(await this.callApi(params, req, runtime), new DeleteClientCertificateResponse({}));
    } else {
      return $dara.cast<DeleteClientCertificateResponse>(await this.execute(params, req, runtime), new DeleteClientCertificateResponse({}));
    }

  }

  /**
   * Deletes a client certificate or a server certificate that is revoked.
   * 
   * @remarks
   * Before you call this operation, you must call the [CreateRevokeClientCertificate](https://help.aliyun.com/document_detail/330876.html) operation to revoke a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteClientCertificateRequest
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificate(request: DeleteClientCertificateRequest): Promise<DeleteClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details about a root certificate authority (CA) certificate or an intermediate CA certificate.
   * 
   * @remarks
   * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateResponse
   */
  async describeCACertificateWithOptions(request: DescribeCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCACertificateResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateResponse({}));
    } else {
      return $dara.cast<DescribeCACertificateResponse>(await this.execute(params, req, runtime), new DescribeCACertificateResponse({}));
    }

  }

  /**
   * Queries the details about a root certificate authority (CA) certificate or an intermediate CA certificate.
   * 
   * @remarks
   * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateRequest
   * @returns DescribeCACertificateResponse
   */
  async describeCACertificate(request: DescribeCACertificateRequest): Promise<DescribeCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateWithOptions(request, runtime);
  }

  /**
   * Queries the number of certificate authority (CA) certificates that you create.
   * 
   * @remarks
   * You can call the DescribeCACertificateCount operation to query the number of created CA certificates, which includes root CA certificates and intermediate CA certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateCountResponse
   */
  async describeCACertificateCountWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeCACertificateCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificateCount",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCACertificateCountResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateCountResponse({}));
    } else {
      return $dara.cast<DescribeCACertificateCountResponse>(await this.execute(params, req, runtime), new DescribeCACertificateCountResponse({}));
    }

  }

  /**
   * Queries the number of certificate authority (CA) certificates that you create.
   * 
   * @remarks
   * You can call the DescribeCACertificateCount operation to query the number of created CA certificates, which includes root CA certificates and intermediate CA certificates.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns DescribeCACertificateCountResponse
   */
  async describeCACertificateCount(): Promise<DescribeCACertificateCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  /**
   * Queries the details about all root certificate authority (CA) certificates and intermediate CA certificates.
   * 
   * @remarks
   * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCACertificateListResponse
   */
  async describeCACertificateListWithOptions(request: DescribeCACertificateListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCACertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCACertificateList",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCACertificateListResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateListResponse({}));
    } else {
      return $dara.cast<DescribeCACertificateListResponse>(await this.execute(params, req, runtime), new DescribeCACertificateListResponse({}));
    }

  }

  /**
   * Queries the details about all root certificate authority (CA) certificates and intermediate CA certificates.
   * 
   * @remarks
   * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCACertificateListRequest
   * @returns DescribeCACertificateListResponse
   */
  async describeCACertificateList(request: DescribeCACertificateListRequest): Promise<DescribeCACertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the encrypted private key of a client certificate or a server certificate.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
   * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * >  You can call the [DescribeClientCertificate] operation to query the encryption algorithm type of a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCertificatePrivateKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKeyWithOptions(request: DescribeCertificatePrivateKeyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCertificatePrivateKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptedCode)) {
      query["EncryptedCode"] = request.encryptedCode;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertificatePrivateKey",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCertificatePrivateKeyResponse>(await this.callApi(params, req, runtime), new DescribeCertificatePrivateKeyResponse({}));
    } else {
      return $dara.cast<DescribeCertificatePrivateKeyResponse>(await this.execute(params, req, runtime), new DescribeCertificatePrivateKeyResponse({}));
    }

  }

  /**
   * Queries the encrypted private key of a client certificate or a server certificate.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
   * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
   * >  You can call the [DescribeClientCertificate] operation to query the encryption algorithm type of a client certificate or a server certificate.
   * ## Limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCertificatePrivateKeyRequest
   * @returns DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKey(request: DescribeCertificatePrivateKeyRequest): Promise<DescribeCertificatePrivateKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificatePrivateKeyWithOptions(request, runtime);
  }

  /**
   * Queries the details about a client certificate or a server certificate by using the unique identifier of the certificate.
   * 
   * @remarks
   * You can call the DescribeClientCertificate operation to query the details about a client certificate or a server certificate by using the unique identifier of the certificate. The details include the serial number, user information, content, and status of each certificate.
   * Before you call this operation, make sure that you have created a client certificate or a server certificate.
   * For more information about how to call an operation to create a client certificate, see the following topics:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * For more information about how to call an operation to create a server certificate, see the following topics:
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * *   [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateResponse
   */
  async describeClientCertificateWithOptions(request: DescribeClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<DescribeClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeClientCertificateResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateResponse({}));
    } else {
      return $dara.cast<DescribeClientCertificateResponse>(await this.execute(params, req, runtime), new DescribeClientCertificateResponse({}));
    }

  }

  /**
   * Queries the details about a client certificate or a server certificate by using the unique identifier of the certificate.
   * 
   * @remarks
   * You can call the DescribeClientCertificate operation to query the details about a client certificate or a server certificate by using the unique identifier of the certificate. The details include the serial number, user information, content, and status of each certificate.
   * Before you call this operation, make sure that you have created a client certificate or a server certificate.
   * For more information about how to call an operation to create a client certificate, see the following topics:
   * *   [CreateClientCertificate](https://help.aliyun.com/document_detail/330873.html)
   * *   [CreateClientCertificateWithCsr](https://help.aliyun.com/document_detail/330875.html)
   * For more information about how to call an operation to create a server certificate, see the following topics:
   * *   [CreateServerCertificate](https://help.aliyun.com/document_detail/330877.html)
   * *   [CreateServerCertificateWithCsr](https://help.aliyun.com/document_detail/330878.html)
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateRequest
   * @returns DescribeClientCertificateResponse
   */
  async describeClientCertificate(request: DescribeClientCertificateRequest): Promise<DescribeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the status information about client certificates and server certificates by using the unique identifiers of the certificates.
   * 
   * @remarks
   * You can call the DescribeClientCertificateStatus operation to query the status information about multiple client certificates or server certificates at a time by using the unique identifiers of the certificates. For example, you can check whether a certificate is revoked.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientCertificateStatusResponse
   */
  async describeClientCertificateStatusWithOptions(request: DescribeClientCertificateStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeClientCertificateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClientCertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeClientCertificateStatusResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateStatusResponse({}));
    } else {
      return $dara.cast<DescribeClientCertificateStatusResponse>(await this.execute(params, req, runtime), new DescribeClientCertificateStatusResponse({}));
    }

  }

  /**
   * Queries the status information about client certificates and server certificates by using the unique identifiers of the certificates.
   * 
   * @remarks
   * You can call the DescribeClientCertificateStatus operation to query the status information about multiple client certificates or server certificates at a time by using the unique identifiers of the certificates. For example, you can check whether a certificate is revoked.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeClientCertificateStatusRequest
   * @returns DescribeClientCertificateStatusResponse
   */
  async describeClientCertificateStatus(request: DescribeClientCertificateStatusRequest): Promise<DescribeClientCertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status information about a private root certificate authority (CA) instance or a private intermediate CA instance that you purchase by using the Certificate Management Service console.
   * 
   * @remarks
   * ## Usage notes
   * You can call the GetCAInstanceStatus operation to query the status information of a private CA instance by using the ID of the instance. The instance is purchased by using the SSL Certificates Service console. The status information includes the status of the private CA instance, the number of certificates that can be issued by using the private CA instance, and the number of issued certificates.
   * Before you call this operation, make sure that you have purchased a private CA by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * 
   * @param request - GetCAInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCAInstanceStatusResponse
   */
  async getCAInstanceStatusWithOptions(request: GetCAInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetCAInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCAInstanceStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCAInstanceStatusResponse>(await this.callApi(params, req, runtime), new GetCAInstanceStatusResponse({}));
    } else {
      return $dara.cast<GetCAInstanceStatusResponse>(await this.execute(params, req, runtime), new GetCAInstanceStatusResponse({}));
    }

  }

  /**
   * Queries the status information about a private root certificate authority (CA) instance or a private intermediate CA instance that you purchase by using the Certificate Management Service console.
   * 
   * @remarks
   * ## Usage notes
   * You can call the GetCAInstanceStatus operation to query the status information of a private CA instance by using the ID of the instance. The instance is purchased by using the SSL Certificates Service console. The status information includes the status of the private CA instance, the number of certificates that can be issued by using the private CA instance, and the number of issued certificates.
   * Before you call this operation, make sure that you have purchased a private CA by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist). For more information, see [Create a private CA](https://help.aliyun.com/document_detail/208553.html).
   * 
   * @param request - GetCAInstanceStatusRequest
   * @returns GetCAInstanceStatusResponse
   */
  async getCAInstanceStatus(request: GetCAInstanceStatusRequest): Promise<GetCAInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details about all client certificates and server certificates.
   * 
   * @remarks
   * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientCertificateResponse
   */
  async listClientCertificateWithOptions(request: ListClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ListClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListClientCertificateResponse>(await this.callApi(params, req, runtime), new ListClientCertificateResponse({}));
    } else {
      return $dara.cast<ListClientCertificateResponse>(await this.execute(params, req, runtime), new ListClientCertificateResponse({}));
    }

  }

  /**
   * Queries the details about all client certificates and server certificates.
   * 
   * @remarks
   * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListClientCertificateRequest
   * @returns ListClientCertificateResponse
   */
  async listClientCertificate(request: ListClientCertificateRequest): Promise<ListClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details about all client certificates and server certificates that are revoked.
   * 
   * @remarks
   * You can call the ListRevokeCertificate operation to perform a paged query of the details about all revoked client certificates and server certificates. The details include the unique identifier, serial number, and revocation date of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListRevokeCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRevokeCertificateResponse
   */
  async listRevokeCertificateWithOptions(request: ListRevokeCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ListRevokeCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRevokeCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRevokeCertificateResponse>(await this.callApi(params, req, runtime), new ListRevokeCertificateResponse({}));
    } else {
      return $dara.cast<ListRevokeCertificateResponse>(await this.execute(params, req, runtime), new ListRevokeCertificateResponse({}));
    }

  }

  /**
   * Queries the details about all client certificates and server certificates that are revoked.
   * 
   * @remarks
   * You can call the ListRevokeCertificate operation to perform a paged query of the details about all revoked client certificates and server certificates. The details include the unique identifier, serial number, and revocation date of each certificate.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListRevokeCertificateRequest
   * @returns ListRevokeCertificateResponse
   */
  async listRevokeCertificate(request: ListRevokeCertificateRequest): Promise<ListRevokeCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a root certificate authority (CA) certificate or an intermediate CA certificate from ISSUE to REVOKE.
   * 
   * @remarks
   * After a CA certificate is created, the CA certificate is in the ISSUE state by default. You can call the UpdateCACertificateStatus operation to change the status of a CA certificate from ISSUE to REVOKE. If a CA certificate is in the ISSUE state, the CA certificate can be used to issue certificates. If a CA certificate is in the REVOKE state, the CA certificate cannot be used to issue certificates, and the certificates that are issued from the CA certificate become invalid.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCACertificateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCACertificateStatusResponse
   */
  async updateCACertificateStatusWithOptions(request: UpdateCACertificateStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCACertificateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCACertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCACertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCACertificateStatusResponse({}));
    } else {
      return $dara.cast<UpdateCACertificateStatusResponse>(await this.execute(params, req, runtime), new UpdateCACertificateStatusResponse({}));
    }

  }

  /**
   * Changes the status of a root certificate authority (CA) certificate or an intermediate CA certificate from ISSUE to REVOKE.
   * 
   * @remarks
   * After a CA certificate is created, the CA certificate is in the ISSUE state by default. You can call the UpdateCACertificateStatus operation to change the status of a CA certificate from ISSUE to REVOKE. If a CA certificate is in the ISSUE state, the CA certificate can be used to issue certificates. If a CA certificate is in the REVOKE state, the CA certificate cannot be used to issue certificates, and the certificates that are issued from the CA certificate become invalid.
   * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate] operation or an intermediate CA certificate by calling the [CreateSubCACertificate] operation.
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCACertificateStatusRequest
   * @returns UpdateCACertificateStatusResponse
   */
  async updateCACertificateStatus(request: UpdateCACertificateStatusRequest): Promise<UpdateCACertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

}
