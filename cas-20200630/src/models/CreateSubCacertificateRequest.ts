// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the key algorithm of the intermediate CA. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of an intermediate CA certificate must be consistent with the encryption algorithm of a root CA certificate. The length of the keys can be different. For example, if the key algorithm of the root CA certificate is **RSA_2048**, the key algorithm of the intermediate CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * > You can call the [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) operation to query the key algorithm of a root CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. You can enter an alpha-2 or alpha-3 code. For example, you can use **CN** to indicate China and use **US** to indicate the United States.
   * 
   * For more information about country codes, see the **"Country codes"** section in [Manage company profiles](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * CRL validity period: 1-365 days
   * 
   * @example
   * 30
   */
  crlDay?: number;
  /**
   * @remarks
   * Enable Crl Service.
   * 
   * - 0- No
   * - 1- Yes
   * 
   * @example
   * 1
   */
  enableCrl?: boolean;
  /**
   * @remarks
   * The extended key usages of the certificate.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The name of the city in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization that is associated with the intermediate CA certificate. You can enter the name of your enterprise or company. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Maizi Technology
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The unique identifier of the root CA certificate.
   * 
   * > You can call the [DescribeCACertificateList] operation to query the unique identifiers of all CA certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The path length constraint of the certificate. Default value: 0.
   * 
   * @example
   * 0
   */
  pathLenConstraint?: number;
  /**
   * @remarks
   * The name of the province or state in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the intermediate CA certificate. Unit: years.
   * 
   * We recommend that you set this parameter to 5 to 10.
   * 
   * > The validity period of the intermediate CA certificate cannot exceed the validity period of the root CA certificate. You can call the [DescribeCACertificate]operation to query the validity period of a root CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlDay: 'CrlDay',
      enableCrl: 'EnableCrl',
      extendedKeyUsages: 'ExtendedKeyUsages',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      pathLenConstraint: 'PathLenConstraint',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlDay: 'number',
      enableCrl: 'boolean',
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      pathLenConstraint: 'number',
      state: 'string',
      years: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

