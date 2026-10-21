// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The storage mode of extended fields. Valid values: flat, pack, and reject.
   * 
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If this parameter is not provided, the service returns a 400 error with the message \\"The specified Lang can not be empty.\\" Explicitly specify the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log sample in JSON format.
   * 
   * @example
   * {"aaa":"bbb","xxx":"yyy"}
   */
  logSample?: string;
  /**
   * @remarks
   * The normalization category to which the rule belongs.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The expression of the normalization rule.
   * 
   * @example
   * *
   */
  normalizationRuleExpression?: string;
  /**
   * @remarks
   * The mode of the normalization rule. Valid values: both and realtime.
   * 
   * @example
   * realtime
   */
  normalizationRuleMode?: string;
  /**
   * @remarks
   * The ID of the normalization schema to which the rule belongs. This parameter is required in actual API calls. If this parameter is not provided, the service returns a 400 error.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The ID of the vendor.
   * 
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      lang: 'Lang',
      logSample: 'LogSample',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationSchemaId: 'NormalizationSchemaId',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      extendFieldStoreMode: 'string',
      lang: 'string',
      logSample: 'string',
      normalizationCategoryId: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleMode: 'string',
      normalizationSchemaId: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

