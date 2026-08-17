// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerCertificateWithCsrRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * account
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The expiration time of the server certificate in UNIX timestamp format. Unit: seconds.
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the server certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * - **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * - **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * - **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * - **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * 
   * The encryption algorithm of the server certificate must be the same as that of the subordinate CA certificate, but the key length can be different. For example, if the key algorithm of the subordinate CA certificate is RSA_2048, the key algorithm of the server certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * >You can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the key algorithm of the subordinate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @example
   * false
   */
  asynchronousFlag?: boolean;
  /**
   * @remarks
   * The issuance time of the server certificate in UNIX timestamp format. The default value is the time when you call this operation. Unit: seconds.
   * 
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The common name of the certificate. Chinese characters, English characters, and other characters are supported.
   * >If you set the **Csr** parameter, the value of the **CommonName** parameter is determined by the corresponding information in the **Csr** parameter.
   * 
   * @example
   * mtcsq.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code, such as **CN**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The CSR content.
   * You can use OpenSSL or Keytool to generate a CSR. For more information, see [How do I create a CSR file?](https://help.aliyun.com/document_detail/42218.html).
   * <props="china">You can also create a CSR in the SSL Certificates Service console. For more information, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html).
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The user-defined identifier, which serves as a unique key.
   * 
   * @example
   * ***e6bb538d538c70c01f81hfd3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the server certificate. Unit: days.
   * The **Days**, **BeforeTime**, and **AfterTime** parameters cannot all be empty. The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified. The following rules apply:
   * 
   * - If you set the **Days** parameter, you can choose to set or not set the **BeforeTime** and **AfterTime** parameters.
   * 
   * 
   * - If you do not set the **Days** parameter, you must set the **BeforeTime** and **AfterTime** parameters.
   * 
   * >- If you set the **Days**, **BeforeTime**, and **AfterTime** parameters at the same time, the validity period of the server certificate is determined by the value of the **Days** parameter.
   * - The validity period of the server certificate cannot exceed the validity period of the subordinate CA certificate. You can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the validity period of the subordinate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * The extended domain name or extended IP address of the server certificate. After you add extended information to the certificate, you can apply the certificate to multiple domain names or IP addresses.
   * 
   * You can enter multiple domain names and IP addresses at the same time. Separate multiple values with commas (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to include the CRL address. Valid values:
   * 
   * - 0: No. 
   * 
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to immediately return the digital certificate. Valid values:
   * - **0**: Does not return the certificate. This is the default value.
   * - **1**: Returns the certificate.
   * - **2**: Returns the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city where the certificate organization is located. Chinese characters, English characters, and other characters are supported.
   * The default value is the name of the city where the organization of the subordinate CA certificate that issues this certificate is located.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The certificate validity period. Unit: months.
   * 
   * @example
   * 12
   */
  months?: number;
  /**
   * @remarks
   * The organization name. Default value: Alibaba Inc.
   * 
   * @example
   * Alibaba Cloud
   */
  organization?: string;
  /**
   * @remarks
   * The department name. Default value: Aliyun CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issues this certificate.
   * >You can call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifier of the subordinate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 270oe6bb538d538c70c01f81hfd3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * <props="china">The name of the province, municipality, or autonomous region where the certificate organization is located. Chinese characters, English characters, and other characters are supported. The default value is the name of the province, municipality, or autonomous region where the organization of the subordinate CA certificate that issues this certificate is located.
   * <props="intl">The name of the province or state where the certificate organization is located. Chinese characters, English characters, and other characters are supported. The default value is the name of the province or state where the organization of the subordinate CA certificate that issues this certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateServerCertificateWithCsrRequestTags[];
  /**
   * @remarks
   * The certificate validity period. Unit: years.
   * 
   * @example
   * 1
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      asynchronousFlag: 'AsynchronousFlag',
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
      asynchronousFlag: 'boolean',
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

