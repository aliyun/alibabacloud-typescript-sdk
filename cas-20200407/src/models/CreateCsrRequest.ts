// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The key algorithm for the CSR. Only RSA, SM2, and ECC are supported. For more information about key algorithms, see [Certificate purchasing guide](https://help.aliyun.com/document_detail/197871.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The primary domain name, also known as the common name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Beijing CSR Technology Co., Ltd
   */
  corpName?: string;
  /**
   * @remarks
   * The country or region code of the organization. For example, CN indicates China, and US indicates the United States.
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
   * The length of the key algorithm.
   * - For the RSA algorithm, the length is typically 2048, 3072, or 4096.
   * - For the ECC and SM2 algorithms, the length is typically 256.
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
   * The name of the CSR. The name can be up to 50 characters in length and can contain only uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * csr-123
   */
  name?: string;
  /**
   * @remarks
   * The province or region where the company is located.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The subject alternative names (SANs). These are other domain names for which you want to apply for the same SSL certificate. Separate multiple domain names with commas (,).
   * 
   * @example
   * www.aliyundoc.com,www.example.com
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

