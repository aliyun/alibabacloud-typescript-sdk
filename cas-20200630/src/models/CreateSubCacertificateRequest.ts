// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCACertificateRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
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

export class CreateSubCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The key algorithm for the intermediate CA certificate. The algorithm is in the `<Encryption algorithm>_<Key length>` format. Valid values:
   * 
   * - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
   * 
   * - **ECC_256**: The corresponding signature algorithm is Sha256WithECDSA.
   * 
   * - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
   * 
   * The encryption algorithm of the intermediate CA certificate must be the same as that of the root CA certificate, but the key length can be different. For example, if the root CA certificate uses the **RSA_2048** algorithm, the intermediate CA certificate must use **RSA_1024**, **RSA_2048**, or **RSA_4096**.
   * 
   * > Call the [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) operation to get the key algorithm of the root CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  certMaxTime?: number;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. The token must be unique for each request. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * XXX
   */
  clientToken?: string;
  /**
   * @remarks
   * The common name of your organization. The name can contain Chinese characters and English letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  commonName?: string;
  /**
   * @remarks
   * The two- or three-letter country or region code in uppercase. For example, **CN** indicates China and **US** indicates the United States.
   * 
   * For more information, see the **Country codes** section in [Manage company information](https://help.aliyun.com/document_detail/198289.html).
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The validity period of the CRL, in days. Valid values: 1 to 365.
   * 
   * @example
   * 30
   */
  crlDay?: number;
  /**
   * @remarks
   * Specifies whether to enable the certificate revocation list (CRL) feature.
   * 
   * - false: No
   * 
   * - true: Yes
   * 
   * @example
   * true
   */
  enableCrl?: boolean;
  /**
   * @remarks
   * The extended key usages.
   */
  extendedKeyUsages?: string[];
  /**
   * @remarks
   * The name of the city where your organization is located. The name can contain Chinese characters and English letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  locality?: string;
  /**
   * @remarks
   * The name of your organization, such as your company. The name can contain Chinese characters and English letters.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  organization?: string;
  /**
   * @remarks
   * The name of the department in your organization. The name can contain Chinese characters and English letters.
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
   * > Call the [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) operation to get the unique identifiers of all CA certificates.
   * 
   * @example
   * 1a83bcbb89e562885e40aa0108f5****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The certificate path length constraint. The default value is 0.
   * 
   * @example
   * 0
   */
  pathLenConstraint?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ae****vty
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * <props="china">The name of the province, municipality, or autonomous region where the organization is located. Chinese characters and English letters are supported.
   * <props="intl">The name of the province or state where the organization is located. Chinese characters and English letters are supported.
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
  tags?: CreateSubCACertificateRequestTags[];
  /**
   * @remarks
   * The validity period of the intermediate CA certificate, in years. Valid values: 5 to 10.
   * 
   * Set this parameter to a value from 5 to 10.
   * 
   * > The validity period of the intermediate CA certificate cannot exceed that of the root CA certificate. Call the [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) operation to get the validity period of the root CA certificate.
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
      certMaxTime: 'CertMaxTime',
      clientToken: 'ClientToken',
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
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certMaxTime: 'number',
      clientToken: 'string',
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
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': CreateSubCACertificateRequestTags },
      years: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

