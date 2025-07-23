// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, SM2, and ECC. For more information about algorithms, see [Select an SSL certificate](https://help.aliyun.com/document_detail/197871.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * This parameter is required.
   * 
   * @example
   * 123.com
   */
  commonName?: string;
  /**
   * @remarks
   * The name of the company.
   * 
   * @example
   * aly
   */
  corpName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. For example, you can use CN to indicate China and use US to indicate the United States.
   * 
   * This parameter is required.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The department that uses the certificate.
   * 
   * @example
   * IT
   */
  department?: string;
  /**
   * @remarks
   * The key length that is used by the algorithm.
   * 
   * *   The key length for RSA algorithms can be 2,048, 3,072, and 4,096 bits.
   * *   The key length for ECC and SM2 algorithms can be 256 bits.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The city where the company is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  locality?: string;
  /**
   * @remarks
   * The name of the CSR. The name can be up to 50 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * csr-123
   */
  name?: string;
  /**
   * @remarks
   * The province or location where the company is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The secondary domain names. Separate multiple domain names with commas (,). You can use the CSR to apply for a certificate for both the primary and secondary domain names.
   * 
   * @example
   * www.example.com,www.aliyundoc.com
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      corpName: 'CorpName',
      countryCode: 'CountryCode',
      department: 'Department',
      keySize: 'KeySize',
      locality: 'Locality',
      name: 'Name',
      province: 'Province',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      corpName: 'string',
      countryCode: 'string',
      department: 'string',
      keySize: 'number',
      locality: 'string',
      name: 'string',
      province: 'string',
      sans: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

