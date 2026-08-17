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

export class CreateClientCertificateWithCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate in UNIX timestamp format. Unit: seconds.
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the client certificate. The key algorithm is in the `<encryption algorithm>_<key length>` format. Valid values:
   * 
   * - **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * - **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * - **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * - **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same as that of the sub-CA certificate, but the key length can be different. For example, if the key algorithm of the sub-CA certificate is RSA_2048, the key algorithm of the client certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * >You can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the key algorithm of the sub-CA certificate.
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
   * The issuance time of the client certificate in UNIX timestamp format. Default value: the time when you call this operation. Unit: seconds.
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
   * >If you set the **CsrPemString** parameter, the value of the **CommonName** parameter is determined by the corresponding information in the **CsrPemString** parameter.
   * 
   * @example
   * aliyundoc.com
   */
  commonName?: string;
  /**
   * @remarks
   * The country code. Example: **CN** or **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The CSR content. You can use OpenSSL or Keytool to generate a CSR. For more information, see [How to create a CSR file](https://help.aliyun.com/document_detail/42218.html).
   * <props="china">You can also create a CSR in the SSL Certificates Service console. For more information, see [Create a CSR](https://help.aliyun.com/document_detail/313297.html).
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The custom identifier, which serves as a unique key.
   * 
   * @example
   * ***e6bb538d538c70c01f81fg3****
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: days.
   * The **Days**, **BeforeTime**, and **AfterTime** parameters cannot all be empty. The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified. The following rules apply:
   * 
   * - If you set the **Days** parameter, you can choose to set or not set the **BeforeTime** and **AfterTime** parameters.
   * - If you do not set the **Days** parameter, you must set the **BeforeTime** and **AfterTime** parameters.
   * 
   * >- If you set the **Days**, **BeforeTime**, and **AfterTime** parameters at the same time, the validity period of the client certificate is determined by the value of the **Days** parameter.
   * - The validity period of the client certificate cannot exceed the validity period of the sub-CA certificate. You can call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to view the validity period of the sub-CA certificate.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Specifies whether to include the Certificate Revocation List (CRL) address. Valid values:
   * 
   * - 0: No.
   * - 1: Yes.
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
   * The name of the city where the certificate organization is located. Chinese characters, English characters, and other characters are supported.
   * Default value: the name of the city where the sub-CA certificate organization that issues this certificate is located.
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
   * Alibaba Inc
   */
  organization?: string;
  /**
   * @remarks
   * The organizational unit name. Default value: Aliyun CDN.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the sub-CA certificate that issues this certificate.
   * >You can call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifier of the sub-CA certificate.
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
   * The type of the Subject Alternative Name (SAN) extension of the client certificate. Valid values:
   * 
   * - **0**: otherName (0): other name.
   * - **1**: rfc822Name (1): RFC 822 name, which is typically an email address.
   * - **2**: dNSName (2): DNS name (domain name).
   * - **3**: x400Address (3): X.400 address, an early email standard address.
   * - **4**: directoryName (4): directory name, which is typically an X.500 distinguished name (DN).
   * - **5**: ediPartyName (5): Electronic Data Interchange (EDI) party name.
   * - **6**: uniformResourceIdentifier (6): Uniform Resource Identifier (URI).
   * - **7**: iPAddress (7): IP address.
   * - **8**: registeredID (8): registered ID (object identifier OID).
   * 
   * @example
   * 2
   */
  sanType?: number;
  /**
   * @remarks
   * The specific SAN extension information of the client certificate. You can enter multiple values separated by commas (,).
   * 
   * 1. otherName (0): other name
   * 
   * - Example: 1.3.6.1.4.1.311.20.2.3 (OID) + user@domain.com (UPN - User Principal Name)
   * - Description: A custom extension type that typically consists of a specific OID (object identifier) and a corresponding value. In Windows environments, it is commonly used to store UPN (User Principal Name), such as zhangsan@company.com for smart card logon.
   * 
   * 2. rfc822Name (1): RFC 822 name (email address)
   * 
   * - Example: admin@example.com,support@company.cn
   * - Description: An Internet email address that complies with the RFC 822 standard. It is commonly used in S/MIME email signing and encryption certificates to identify the sender or recipient of an email.
   * - dNSName (2): DNS name (domain name)
   * - Example: www.example.com,api.test.cn,*.mydomain.com (wildcard domain name)
   * - Description: The most commonly used type in HTTPS website SSL/TLS certificates. A certificate can contain multiple DNS names through the SAN extension, allowing a single certificate to protect multiple subdomains or completely different domain names.
   * 3. x400Address (3): X.400 address
   * - Example: G=Zhang; S=San; O=Company; PRMD=IT; ADMD=Telecom; C=CN
   * - Description: An early email system address standard with a complex structure that includes attributes such as country (C), administration domain (ADMD), organization (O), surname (S), and given name (G). It is rarely used in modern Internet HTTPS certificates and is mostly found in traditional European government, enterprise, or military communication systems.
   * 4. directoryName (4): directory name
   * - Example: CN=IT Department, OU=Tech, O=Company Ltd, L=Beijing, ST=Beijing, C=CN
   * - Description: A standard X.500 distinguished name (DN). It is typically used to explicitly identify the complete hierarchical information of an organization, department, or entity in a certificate. It is commonly found in enterprise internal root certificates or specific government digital certificates.
   * 5. ediPartyName (5): EDI party name
   * - Example: nameAssigner=GlobalTradeOrg, partyName=SupplierA
   * - Description: Used specifically in the Electronic Data Interchange (EDI) domain. It identifies a specific party in business message exchanges (such as order and invoice transmissions) and typically includes the assigning organization (nameAssigner) and the party name (partyName).
   * 6. uniformResourceIdentifier (6): Uniform Resource Identifier (URI)
   * - Example: http://www.example.com/verify,https://api.test.cn/status
   * - Description: A standard URL format that must include a protocol prefix (such as http:// or https://). It can point to a specific network resource address.
   * 7. iPAddress (7): IP address
   * - Example: 192.168.1.100 (IPv4), 2001:0db8:85a3::8a2e:0370:7334 (IPv6)
   * - Description: Directly binds to a server IP address. It is commonly used for internal systems without domain names, API servers, or specific services that can only be accessed through a public IP address. Note: Public IP certificates typically require strict Organization Validation (OV).
   * 8. registeredID (8): registered ID (object identifier OID)
   * - Example: 1.2.3.4.55.6.5.99, 2.5.29.17
   * - Description: A unique numeric identifier assigned by international standards organizations. It is rarely used directly as a subject name in certificates and is more commonly used as a unique identity code or policy identifier within systems.
   * 
   * @example
   * somebody@example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * <props="china">The name of the province, municipality, or autonomous region where the certificate organization is located. Chinese characters, English characters, and other characters are supported. Default value: the name of the province, municipality, or autonomous region where the sub-CA certificate organization that issues this certificate is located.
   * <props="intl">The name of the province or state where the certificate organization is located. Chinese characters, English characters, and other characters are supported. Default value: the name of the province or state where the sub-CA certificate organization that issues this certificate is located.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateClientCertificateWithCsrRequestTags[];
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
      asynchronousFlag: 'boolean',
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

