// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

