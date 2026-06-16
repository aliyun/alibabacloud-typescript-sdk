// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerCertificateWithCsrRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * account
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateServerCertificateWithCsrRequest extends $dara.Model {
  /**
   * @remarks
   * Expiration time of the server-side certificate, in UNIX timestamp format. Unit: seconds.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must both be empty or both configured.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * Key algorithm for the server-side certificate. Use the format `<encryption algorithm>_<key length>`. Valid values:
   * 
   * - **RSA_1024**: Signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_2048**: Signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_4096**: Signature algorithm is Sha256WithRSA.
   * 
   * - **ECC_256**: Signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_384**: Signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_512**: Signature algorithm is Sha256WithECDSA.
   * 
   * - **SM2_256**: Signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the server-side certificate must match that of the sub-CA certificate. The key length can differ. For example, if the sub-CA certificate uses RSA_2048, the server-side certificate must use RSA_1024, RSA_2048, or RSA_4096.
   * 
   * > Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to check the key algorithm of the sub-CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * Issue time of the server-side certificate, in UNIX timestamp format. Default: current time when you call this API. Unit: seconds.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must both be empty or both configured.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * Set the common name for the certificate. Supports Chinese, English, and other characters.
   * 
   * > If you set the **Csr** parameter, the value of **CommonName** comes from the corresponding field in the **Csr** parameter.
   * 
   * @example
   * mtcsq.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code. For example, CN or US.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * You can generate a CSR using OpenSSL or Keytool. For more information, see [How to create a CSR file](https://help.aliyun.com/document_detail/42218.html).
   * 
   * <props="china">
   * 
   * You can also create a CSR in the SSL Certificate console. For more information, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html).
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * A custom identifier. This is a unique key.
   * 
   * @example
   * ***e6bb538d538c70c01f81hfd3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The **Days**, **BeforeTime**, and **AfterTime** parameters cannot all be empty. The **BeforeTime** and **AfterTime** parameters must both be empty or both set. Follow these rules:
   * 
   * - If you set **Days**, you can optionally set **BeforeTime** and **AfterTime**.
   * 
   * - If you do not set **Days**, you must set both **BeforeTime** and **AfterTime**.
   * 
   * > * If you set **Days**, **BeforeTime**, and **AfterTime** together, the validity period uses the value of **Days**.
   * 
   * - The server-side certificate validity period cannot exceed that of the sub-CA certificate. Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to check the sub-CA certificate validity period.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Additional domain names or IP addresses for the server-side certificate. Adding this information lets you apply the certificate to multiple domains or IP addresses.
   * 
   * You can enter multiple domain names and IP addresses. Separate them with commas (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to include the certificate revocation list (CRL) address.
   * 
   * 0 - No
   * 
   * 1 - Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the digital certificate immediately.
   * 
   * - **0**: Do not return. Default.
   * 
   * - **1**: Return the certificate.
   * 
   * - **2**: Return the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The city where the organization for the certificate is located. The name can contain both Chinese and English characters. By default, this parameter is set to the city of the organization for the issuing subordinate Certificate Authority (CA).
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the certificate, in months.
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
   * 阿里云
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Alibaba Cloud CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * Unique identifier of the sub-CA certificate that issues this certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifier of the sub-CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 270oe6bb538d538c70c01f81hfd3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * <props="china">Set the name of the province, municipality, or autonomous region where the organization is located. Supports Chinese, English, and other characters. Defaults to the province, municipality, or autonomous region of the issuing sub-CA certificate\\"s organization.
   * <props="intl">Set the name of the state or province where the organization is located. Supports Chinese, English, and other characters. Defaults to the state or province of the issuing sub-CA certificate\\"s organization.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: CreateServerCertificateWithCsrRequestTags[];
  /**
   * @remarks
   * The validity period of the certificate, in years.
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
      customIdentifier: 'CustomIdentifier',
      days: 'Days',
      domain: 'Domain',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
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
      customIdentifier: 'string',
      days: 'number',
      domain: 'string',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': CreateServerCertificateWithCsrRequestTags },
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

