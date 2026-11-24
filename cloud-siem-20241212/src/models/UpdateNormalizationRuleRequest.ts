// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNormalizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pack non-standard fields into the extend_content field. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The storage mode of extension fields. Valid values: flat, pack, and reject.
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
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The normalization category to which the rule belongs.
   * 
   * @example
   * HOST_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The description of the normalization rule.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationRuleDescription?: string;
  /**
   * @remarks
   * The expression of the normalization rule.
   * 
   * @example
   * * | pack-fields -include=\\"[\\s\\S]+\\" as extend_content
   */
  normalizationRuleExpression?: string;
  /**
   * @remarks
   * The format of the normalization rule.
   * 
   * @example
   * SPL
   */
  normalizationRuleFormat?: string;
  /**
   * @remarks
   * The ID of the normalization rule.
   * 
   * @example
   * nr-z0b2ssjteut85uoh9nzp
   */
  normalizationRuleId?: string;
  /**
   * @remarks
   * The IDs of the normalization rules.
   */
  normalizationRuleIds?: string[];
  /**
   * @remarks
   * The mode of the normalization rule. Valid values:
   * - both
   * - scan
   * - realtime
   * 
   * @example
   * both
   */
  normalizationRuleMode?: string;
  /**
   * @remarks
   * The name of the normalization rule.
   * 
   * @example
   * normalization_rule_Z57np
   */
  normalizationRuleName?: string;
  /**
   * @remarks
   * The type of the normalization rule. Valid values:
   * - predefined: Predefined normalization rule.
   * - custom: Custom normalization rule.
   * 
   * @example
   * custom
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The ID of the normalization schema.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The ID of the normalization security domain.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The field by which the rule list is sorted. Valid values:
   * - GmtModified: Sorts by modification time.
   * - Id: Sorts by rule ID (default).
   * 
   * @example
   * Id
   */
  orderField?: string;
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
   * The ID of the vendor that corresponds to the normalization rule.
   * 
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      extendContentPacked: 'ExtendContentPacked',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      lang: 'Lang',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleDescription: 'NormalizationRuleDescription',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleFormat: 'NormalizationRuleFormat',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleIds: 'NormalizationRuleIds',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      orderField: 'OrderField',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendContentPacked: 'string',
      extendFieldStoreMode: 'string',
      lang: 'string',
      normalizationCategoryId: 'string',
      normalizationRuleDescription: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleFormat: 'string',
      normalizationRuleId: 'string',
      normalizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      normalizationRuleMode: 'string',
      normalizationRuleName: 'string',
      normalizationRuleType: 'string',
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      orderField: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationRuleIds)) {
      $dara.Model.validateArray(this.normalizationRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

