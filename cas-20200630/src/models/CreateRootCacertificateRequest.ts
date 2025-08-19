// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRootCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The key algorithm of the root CA certificate. The key algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * *   **RSA_1024**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_2048**: The signature algorithm is Sha256WithRSA.
   * *   **RSA_4096**: The signature algorithm is Sha256WithRSA.
   * *   **ECC_256**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_384**: The signature algorithm is Sha256WithECDSA.
   * *   **ECC_512**: The signature algorithm is Sha256WithECDSA.
   * *   **SM2_256**: The signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the root CA certificate must be consistent with the **encryption algorithm** of the private root CA instance that you purchase. For example, if the **encryption algorithm** of the private root CA instance that you purchase is **RSA**, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  clientToken?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  commonName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. You can enter an alpha-2 code. For example, you can use **CN** to indicate China and use **US** to indicate the United States.
   * 
   * For more information about country codes, see the **"Country codes"** section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
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
   * The name of the organization that is associated with the root CA certificate. You can enter the name of your enterprise or company. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
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
   * The name of the province, municipality, or autonomous region in which the organization is located. The value can contain letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The validity period of the root CA certificate. Unit: years.
   * 
   * >  We recommend that you set this parameter to a value from 5 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      clientToken: 'ClientToken',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      clientToken: 'string',
      commonName: 'string',
      countryCode: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
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

