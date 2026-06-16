// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateClientCertificateRequestTags extends $dara.Model {
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

export class CreateClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate in UNIX timestamp format. The unit is seconds.
   * 
   * > **BeforeTime** and **AfterTime** must be specified together or left empty together.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm for the client certificate. The format is `<encryption algorithm>_<key length>`. Valid values:
   * 
   * - **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * 
   * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * 
   * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * 
   * - **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same as the subordinate CA certificate. The key length can be different. For example, if the subordinate CA certificate uses the RSA_2048 key algorithm, the client certificate must use RSA_1024, RSA_2048, or RSA_4096.
   * 
   * > Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to find the key algorithm of the subordinate CA certificate.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * Set the name of the issued certificate.
   * 
   * @example
   * cert-name
   */
  aliasName?: string;
  /**
   * @remarks
   * The issuance time of the client certificate in UNIX timestamp format. The unit is seconds. The default value is the time when you call this operation.
   * 
   * > **BeforeTime** and **AfterTime** must be specified together or left empty together.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * Used to ensure request idempotence. The client generates this parameter value, which must be unique across different requests. It can contain a maximum of 64 ASCII characters and must not include any non-ASCII characters.
   * 
   * @example
   * XXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the certificate user. For a client authentication (ClientAuth) certificate, the user is typically an individual, a company, an organization, or an application. Specify the common name of the user, such as John Doe, Alibaba, Alibaba Cloud Cryptography Platform, or Tmall Genie.
   * 
   * @example
   * aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The country code. Default: CN.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * A custom identifier. This is a unique key.
   * 
   * @example
   * ****6bb538d538c70c01f81jh2****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the client certificate in days. The **Days**, **BeforeTime**, or **AfterTime** parameters cannot all be empty. The **BeforeTime** and **AfterTime** parameters must be set together or left empty. The parameters are configured as follows:
   * 
   * - If you set the **Days** parameter, the **BeforeTime** and **AfterTime** parameters are optional.
   * 
   * - If you do not set the **Days** parameter, you must set both the **BeforeTime** and **AfterTime** parameters.
   * 
   * > * If you set the **Days**, **BeforeTime**, and **AfterTime** parameters, the value of the **Days** parameter takes precedence.
   * 
   * - The validity period of the client certificate cannot exceed the validity period of the subordinate CA certificate. To view the validity period of the subordinate CA certificate, you can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html).
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Specifies whether to include the Certificate Revocation List (CRL) address.
   * 
   * Valid values: 0 (No) and 1 (Yes).
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to return the digital certificate immediately.
   * 
   * - **0**: No. This is the default value.
   * 
   * - **1**: Yes, return the certificate.
   * 
   * - **2**: Yes, return the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city where the organization is located. The default value is the city of the subordinate CA that issues the certificate.
   * 
   * @example
   * 杭州市
   */
  locality?: string;
  /**
   * @remarks
   * The validity period of the certificate in months.
   * 
   * @example
   * 1
   */
  months?: number;
  /**
   * @remarks
   * The name of the organization. Default: Alibaba Inc.
   * 
   * @example
   * 阿里云
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. Default: Alibaba Cloud CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issues this certificate.
   * 
   * > Call DescribeCACertificateList to query the unique identifier of the subordinate CA certificate.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
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
   * The type of Subject Alternative Name (SAN) extension for the client certificate. Valid values:
   * 
   * - **1**: Email
   * 
   * - **6**: Uniform Resource Identifier (URI)
   * 
   * @example
   * 1
   */
  sanType?: number;
  /**
   * @remarks
   * The extension information for the client certificate. To enter multiple extensions, separate them with commas (,).
   * 
   * @example
   * somebody@example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * Specify the province or state of the certificate organization. The value can contain letters. The default value is the province or state of the organization for the intermediate CA that issued the certificate.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: CreateClientCertificateRequestTags[];
  /**
   * @remarks
   * The validity period of the certificate in years.
   * 
   * @example
   * 5
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      aliasName: 'AliasName',
      beforeTime: 'BeforeTime',
      clientToken: 'ClientToken',
      commonName: 'CommonName',
      country: 'Country',
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
      aliasName: 'string',
      beforeTime: 'number',
      clientToken: 'string',
      commonName: 'string',
      country: 'string',
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
      tags: { 'type': 'array', 'itemType': CreateClientCertificateRequestTags },
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

