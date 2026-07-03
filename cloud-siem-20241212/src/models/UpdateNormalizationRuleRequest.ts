// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNormalizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to package non-standard fields into the extend_content extension field. Valid values:
   * 
   * - enabled: The feature is enabled.
   * 
   * - disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The storage mode for extension fields. Valid values: flat, pack, and reject.
   * 
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The normalization category.
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
   * The expression for the normalization rule.
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
   * The list of normalization rule IDs.
   */
  normalizationRuleIds?: string[];
  /**
   * @remarks
   * The mode of the normalization rule. Valid values:
   * 
   * - both
   * 
   * - scan
   * 
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
   * 
   * - predefined: predefined normalization rule.
   * 
   * - custom: custom normalization rule.
   * 
   * @example
   * custom
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The ID of the normalization structure.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The field to use for sorting the rule list. Valid values:
   * 
   * - GmtModified: Sorts by modification time.
   * 
   * - Id: Sorts by rule ID (default).
   * 
   * @example
   * Id
   */
  orderField?: string;
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
   * The region where the Data Management center of threat analysis is located. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: an asset in the Chinese mainland.
   * 
   * - ap-southeast-1: an asset outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. This parameter is used when an administrator switches to the perspective of the member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor ID that corresponds to the normalization rule.
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

