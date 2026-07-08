// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWHClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the client certificate, specified as a Unix timestamp in seconds.
   * 
   * > The `BeforeTime` and `AfterTime` parameters must be specified together or not at all.
   * 
   * @example
   * 1665819958
   */
  afterTime?: number;
  /**
   * @remarks
   * The key algorithm for the client certificate. The format is `<encryption_algorithm>_<key_length>`. Valid values:
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
   * The encryption algorithm of the client certificate must match that of the issuing subordinate CA certificate, but the key lengths can differ. For example, if the key algorithm of the subordinate CA certificate is RSA_2048, the key algorithm for the client certificate must be one of RSA_1024, RSA_2048, or RSA_4096.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The issuance time of the client certificate, as a Unix timestamp in seconds. If omitted, this defaults to the time of the API call.
   * 
   * > The `BeforeTime` and `AfterTime` parameters must be specified together or not at all.
   * 
   * @example
   * 1634283958
   */
  beforeTime?: number;
  /**
   * @remarks
   * The common name of the client certificate. Supports Chinese, English, and other characters.
   * 
   * @example
   * aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The country where the organization is located.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the certificate signing request (CSR). You can generate a CSR with tools like OpenSSL or Keytool.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The validity period of the client certificate, in days.
   * 
   * You cannot leave the `Days`, `BeforeTime`, and `AfterTime` parameters all empty. The `BeforeTime` and `AfterTime` parameters must be specified together or not at all.
   * 
   * - If you specify the `Days` parameter, specifying `BeforeTime` and `AfterTime` is optional.
   * 
   * - If you do not specify the `Days` parameter, you must specify both `BeforeTime` and `AfterTime`.
   * 
   * > If you specify `Days`, `BeforeTime`, and `AfterTime` simultaneously, the `Days` parameter takes precedence in determining the validity period.
   * 
   * @example
   * 365
   */
  days?: number;
  /**
   * @remarks
   * Specifies which certificate content to return in the response.
   * 
   * - **0**: Does not return the certificate (default).
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
   * The city where the organization is located. Chinese, English, and other characters are supported.
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
   * The organization name associated with the root CA certificate, typically your company or enterprise name. Supports Chinese, English, and other characters.
   * 
   * @example
   * 阿里巴巴网络技术有限公司
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or business unit within the organization.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the issuing subordinate CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The type of the subject alternative name (SAN) for the client certificate. Valid values:
   * 
   * - **1**: email address.
   * 
   * - **2**: domain name.
   * 
   * - **6**: Uniform Resource Identifier (URI).
   * 
   * - **7**: IP address.
   * 
   * @example
   * 2
   */
  sanType?: number;
  /**
   * @remarks
   * The value of the SAN extension. To specify multiple values, separate them with commas (,).
   * 
   * @example
   * example.com
   */
  sanValue?: string;
  /**
   * @remarks
   * The province, municipality, or autonomous region where the organization is located. Chinese, English, and other characters are supported.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
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

