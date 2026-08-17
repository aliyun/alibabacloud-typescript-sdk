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
   * The expiration time of the server certificate in timestamp format. Unit: seconds.
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the server certificate. The key algorithm is in the `<encryption algorithm>_<key length>` format. Valid values:
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
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The asynchronous processing flag. If the value is "true", the backend service issues the certificate asynchronously.
   * After the request is submitted, you can call the ListClientCertificate operation to obtain the latest certificate.
   * 
   * @example
   * false
   */
  asynchronousFlag?: boolean;
  /**
   * @remarks
   * The issuance time of the server certificate in timestamp format. Default value: the time when you call this operation. Unit: seconds.
   * 
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The name of the certificate user. For a server authentication (ServerAuth) certificate, the user is a server. Enter the domain name or IP address bound to the server.
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
   * The custom identifier, which is a unique key.
   * 
   * @example
   * ****6bb538d538c70c01f81dg3****
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
   * The extended domain names and extended IP addresses of the server certificate. After you add extended information to the certificate, you can apply the certificate to multiple domain names and IP addresses.
   * 
   * Separate multiple domain names and IP addresses with commas (,).
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to include the Certificate Revocation List (CRL) address. Valid values:
   * 
   * 0: no. 
   * 
   * 1: yes.
   * 
   * @example
   * 1
   */
  enableCrl?: number;
  /**
   * @remarks
   * Specifies whether to immediately return the digital certificate. Valid values:
   * - **0**: does not return the certificate. This is the default value.
   * - **1**: returns the certificate.
   * - **2**: returns the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city where the certificate organization is located. Chinese and English characters are supported.
   * Default value: the name of the city where the organization of the subordinate CA certificate that issues this certificate is located.
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
   * 271ae6bb538d538c70c01f81dg3****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The resource group ID. You can obtain this ID by calling the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * <props="china">The name of the province, municipality, or autonomous region where the certificate organization is located. Chinese and English characters are supported. Default value: the name of the province, municipality, or autonomous region where the organization of the subordinate CA certificate that issues this certificate is located.
   * <props="intl">The name of the province or state where the certificate organization is located. Chinese and English characters are supported. Default value: the name of the province or state where the organization of the subordinate CA certificate that issues this certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateServerCertificateRequestTags[];
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

