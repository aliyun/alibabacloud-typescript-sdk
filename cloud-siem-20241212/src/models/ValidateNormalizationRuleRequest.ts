// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123456
   */
  data?: string;
  /**
   * @remarks
   * The storage mode for extended fields. Valid values: \\`flat\\`, \\`pack\\`, and \\`reject\\`.
   * 
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sample log. The value must be in the JSON format.
   * 
   * @example
   * {"aaa":"bbb","xxx":"yyy"}
   */
  logSample?: string;
  /**
   * @remarks
   * The normalization category of the rule.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The expression for the normalization rule.
   * 
   * @example
   * *
   */
  normalizationRuleExpression?: string;
  /**
   * @remarks
   * The mode of the normalization rule. Valid values: \\`both\\` and \\`realtime\\`.
   * 
   * @example
   * realtime
   */
  normalizationRuleMode?: string;
  /**
   * @remarks
   * The ID of the normalization pattern for the rule.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is deployed. Select the region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator uses this parameter to switch to the perspective of the member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor ID.
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

