// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCsrResponseBodyCsrList extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, SM2, and ECC.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The primary domain name, which is a common name.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The name of the company.
   * 
   * @example
   * corp_name
   */
  corpName?: string;
  /**
   * @remarks
   * The code of the country or region in which the organization is located. For example, you can use CN to indicate China and use US to indicate the United States. The default value is the code of the country or region in which the organization is located. The organization is associated with the intermediate CA certificate from which the certificate is issued. For more information about country codes, see the "Country codes" section of the [Manage company profiles](https://help.aliyun.com/document_detail/198289.html) topic.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The ID of the CSR.
   * 
   * @example
   * 3454
   */
  csrId?: number;
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
   * Indicates whether the certificate contains a private key.
   * 
   * @example
   * true
   */
  hasPrivateKey?: boolean;
  /**
   * @remarks
   * The public key that is calculated by using the SHA256 algorithm.
   * 
   * @example
   * 1234
   */
  keySha2?: string;
  /**
   * @remarks
   * The key length that is used by the algorithm. The key length for RSA algorithms can be 2,048, 3,072, and 4,096 bits. The key length for ECC and SM2 algorithms can be 256 bits.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The city where the company is located.
   * 
   * @example
   * Beijing
   */
  locality?: string;
  /**
   * @remarks
   * The name of the CSR.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The province or location.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The secondary domain names. Separate multiple domain names with commas (,).
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
      csrId: 'CsrId',
      department: 'Department',
      hasPrivateKey: 'HasPrivateKey',
      keySha2: 'KeySha2',
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
      csrId: 'number',
      department: 'string',
      hasPrivateKey: 'boolean',
      keySha2: 'string',
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

export class ListCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CSRs.
   */
  csrList?: ListCsrResponseBodyCsrList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E865F6AD-0294-4A24-A58B-DAC6BE2BDD20
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      csrList: 'CsrList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrList: { 'type': 'array', 'itemType': ListCsrResponseBodyCsrList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.csrList)) {
      $dara.Model.validateArray(this.csrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

