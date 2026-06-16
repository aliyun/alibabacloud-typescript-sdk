// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerCertificateRequestTags extends $dara.Model {
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

export class CreateServerCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the server certificate. This value is a UNIX timestamp in seconds.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must be specified together or left empty together.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the server certificate. The algorithm is in the `<encryption algorithm>_<key length>` format. Valid values:
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
   * The encryption algorithm of the server certificate must be the same as the encryption algorithm of the subordinate CA certificate, but the key length can be different. For example, if the key algorithm of the subordinate CA certificate is RSA_2048, the key algorithm of the server certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * > Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the key algorithm of the subordinate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the server certificate. This value is a UNIX timestamp in seconds. The default value is the time when you call this operation.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must be specified together or left empty together.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The name of the certificate user. For a server authentication (ServerAuth) certificate, the user is the server. Enter the domain name or IP address that is bound to the server.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code, such as CN or US.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * A custom identifier. This key must be unique.
   * 
   * @example
   * ****6bb538d538c70c01f81dg3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the server certificate, in days. The **Days**, **BeforeTime**, and **AfterTime** parameters cannot all be empty. The **BeforeTime** and **AfterTime** parameters must be specified together or left empty together. The following rules describe how to set these parameters:
   * 
   * - If you specify **Days**, the **BeforeTime** and **AfterTime** parameters are optional.
   * 
   * - If you do not specify **Days**, you must specify both **BeforeTime** and **AfterTime**.
   * 
   * > * If you specify **Days**, **BeforeTime**, and **AfterTime** at the same time, the value of **Days** determines the validity period of the server certificate.
   * 
   * - The validity period of the server certificate cannot exceed the validity period of the subordinate CA certificate. You can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to view the validity period of the subordinate CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * The additional domain names and IP addresses for the server certificate. This information lets you apply the certificate to multiple domain names and IP addresses.
   * 
   * Separate multiple domain names or IP addresses with a comma (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
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
   * Specifies whether to return the digital certificate immediately.
   * 
   * - **0**: No. This is the default value.
   * 
   * - **1**: Returns the certificate.
   * 
   * - **2**: Returns the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The city where the organization is located. Chinese and English characters are supported. The default value is the city of the organization that is associated with the subordinate CA certificate that issues this certificate.
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
   * The name of the organization. The default value is Alibaba Inc.
   * 
   * @example
   * 阿里云
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department. The default value is Alibaba Cloud CDN.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issues this certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifier of the subordinate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 271ae6bb538d538c70c01f81dg3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The ID of the resource group. Call the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation to get this ID.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The province or state where the organization is located. Chinese and English characters are supported. The default value is the province or state of the organization that is associated with the subordinate CA certificate that issues this certificate.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: CreateServerCertificateRequestTags[];
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
      tags: { 'type': 'array', 'itemType': CreateServerCertificateRequestTags },
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

