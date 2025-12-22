// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateClientCertificateRequestTags extends $dara.Model {
  key?: string;
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
  customIdentifier?: string;
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
  resourceGroupId?: string;
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
  tags?: CreateClientCertificateRequestTags[];
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

