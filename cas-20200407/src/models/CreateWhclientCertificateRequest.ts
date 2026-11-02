// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWHClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate. The value is a UNIX timestamp. Unit: seconds.
   * 
   * > The BeforeTime and AfterTime parameters must be both empty or both specified.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm of the client certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * - **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * - **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * - **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * - **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the client certificate must be the same as that of the subordinate CA certificate, but the key length can be different. For example, if the key algorithm of the subordinate CA certificate is RSA_2048, the key algorithm of the client certificate must be RSA_1024, RSA_2048, or RSA_4096.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the client certificate. The value is a UNIX timestamp. Default value: the time when you call this operation. Unit: seconds.
   * 
   * > The BeforeTime and AfterTime parameters must be both empty or both specified.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The common name of the client certificate. Chinese and English characters are supported.
   * 
   * @example
   * aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The country where the company or organization of the user who purchases the certificate is located.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the certificate signing request (CSR). You can use OpenSSL or Keytool to generate a CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The validity period of the client certificate. Unit: days.
   * 
   * The Days, BeforeTime, and AfterTime parameters cannot be left empty at the same time. The BeforeTime and AfterTime parameters must be both empty or both specified. The configuration rules are as follows:
   * 
   * - If you specify the Days parameter, you can choose to specify or not specify the BeforeTime and AfterTime parameters.
   * - If you do not specify the Days parameter, you must specify the BeforeTime and AfterTime parameters.
   * 
   * 
   * > If you specify the Days, BeforeTime, and AfterTime parameters at the same time, the validity period of the client certificate is subject to the value of the Days parameter.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Specifies whether to immediately return the digital certificate. Valid values:
   * - **0**: No. This is the default value.
   * - **1**: Yes, return the certificate.
   * - **2**: Yes, return the certificate and its certificate chain.
   * 
   * @example
   * 1
   */
  immediately?: number;
  /**
   * @remarks
   * The name of the city where the organization is located. Chinese and English characters are supported.
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
   * The name of the organization associated with the root CA certificate. The organization corresponds to your enterprise or institution. Chinese and English characters are supported.
   * 
   * @example
   * Alibaba Network Technology Co., Ltd
   */
  organization?: string;
  /**
   * @remarks
   * The name of the company or organization to which the certificate belongs.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the subordinate CA certificate that issues the client certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) type supported by the client certificate. Valid values:
   * 
   * - **1**: Email address.
   * - **2**: Domain name.
   * - **6**: Uniform Resource Identifier (URI).
   * - **7**: IP address.
   * 
   * @example
   * 2
   */
  sanType?: number;
  /**
   * @remarks
   * The specific SAN of the client certificate. You can specify multiple SANs. Separate multiple SANs with commas (,).
   * 
   * @example
   * example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * The name of the province, municipality, or autonomous region where the organization is located. Chinese and English characters are supported.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
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
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      csr: 'Csr',
      days: 'Days',
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

