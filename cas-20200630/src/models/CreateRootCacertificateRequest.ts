// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRootCACertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * runtime
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

export class CreateRootCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The key algorithm of the root CA certificate. The key algorithm is in the `<encryption algorithm>_<key length>` format. Valid values:
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
   * The encryption algorithm of the root CA certificate must be the same as the **Certificate Algorithm** of the private root CA that you purchased. For example, if you set **Certificate Algorithm** to **RSA** when you purchase a private root CA, the key algorithm of the root CA certificate must be **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a unique value for this parameter from your client. The token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 3838B684-3075-582B-9A45-8C99104029DF
   */
  clientToken?: string;
  /**
   * @remarks
   * The common name or abbreviation of the organization. Supports Chinese characters and letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  commonName?: string;
  /**
   * @remarks
   * The two-letter uppercase code of the country or region where the organization is located. For example, **CN** indicates China and **US** indicates the United States.
   * 
   * For more information about country codes, see the **Country codes** section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The name of the city where the organization is located. Supports Chinese characters and letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of the organization for the root CA certificate. This is typically your company or enterprise name. Supports Chinese characters and letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department or branch in the organization. Supports Chinese characters and letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * <props="intl">The name of the province or state where the organization is located. Supports Chinese characters and letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: CreateRootCACertificateRequestTags[];
  /**
   * @remarks
   * The validity period of the root CA certificate. Unit: years.
   * 
   * > Set the validity period to 5 to 10 years.
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
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': CreateRootCACertificateRequestTags },
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

