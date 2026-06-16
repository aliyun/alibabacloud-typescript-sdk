// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateWithCsrRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * database
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
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

export class CreateClientCertificateWithCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate. This is a UNIX timestamp in seconds.
   * 
   * > Specify the **BeforeTime** and **AfterTime** parameters together, or omit both.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the client certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **ECC_256**: The corresponding signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_512**: The corresponding signature algorithm is Sha256WithECDSA.
   * 
   * - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same as that of the subordinate CA certificate, but the key length can be different. For example, if the key algorithm of the subordinate CA certificate is RSA_2048, the key algorithm of the client certificate must be one of RSA_1024, RSA_2048, and RSA_4096.
   * 
   * > Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the key algorithm of the subordinate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the client certificate. This is a UNIX timestamp in seconds. The default value is the time of the API call.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must be specified together or left empty.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The common name of the certificate. Chinese and English characters are supported.
   * 
   * > If you specify the **Csr** parameter, the value of this parameter is determined by the information in the **Csr** parameter.
   * 
   * @example
   * aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code, for example, **CN** or **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the CSR. Use OpenSSL or Keytool to generate a CSR. For more information, see [Create a CSR file](https://help.aliyun.com/document_detail/42218.html).
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
   * ***e6bb538d538c70c01f81fg3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the client certificate, in days. You must specify the validity period using one of the following methods:
   * 
   * - Specify the **Days** parameter.
   * 
   * - Specify both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > * If you specify **Days**, **BeforeTime**, and **AfterTime** at the same time, the value of **Days** is used.
   * 
   * - The validity period of the client certificate cannot exceed that of the subordinate CA certificate. Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to view the validity period of the subordinate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Specifies whether to include the Certificate Revocation List (CRL) address.
   * 
   * 0: No
   * 
   * 1: Yes
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the digital certificate.
   * 
   * - **0**: Do not return the certificate. This is the default value.
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
   * The name of the city where the organization is located. Chinese and English characters are supported. By default, this parameter uses the city name of the organization that is associated with the issuing subordinate CA certificate.
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
   * Alibaba Inc
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default value: Alibaba Cloud CDN.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issues the client certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifiers of subordinate CA certificates.
   * 
   * @example
   * 270ae6bb538d538c70c01f81fg3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group to which the certificate belongs.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the Subject Alternative Name (SAN) extension for the client certificate. Valid values:
   * 
   * - **1**: Email address.
   * 
   * - **6**: Uniform Resource Identifier (URI).
   * 
   * @example
   * 2
   */
  sanType?: number;
  /**
   * @remarks
   * The extension for the client certificate. To specify multiple extensions, separate them with a comma.
   * 
   * @example
   * somebody@example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * Specify the name of the province or state where the certificate organization is located. The value can contain letters. The default value is the name of the province or state of the intermediate CA\\"s organization.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: CreateClientCertificateWithCsrRequestTags[];
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
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      resourceGroupId: 'ResourceGroupId',
      sanType: 'SanType',
      sanValue: 'SanValue',
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
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      resourceGroupId: 'string',
      sanType: 'number',
      sanValue: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': CreateClientCertificateWithCsrRequestTags },
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

