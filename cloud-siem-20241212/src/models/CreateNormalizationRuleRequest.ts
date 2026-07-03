// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pack non-standard fields into the extension field extend_content. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
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
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The category ID of the normalization rule.
   * 
   * @example
   * NETWORK_CATEGORY
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
   * The list of normalization rule IDs.
   */
  normalizationRuleIds?: string[];
  /**
   * @remarks
   * The mode of the normalization rule. Valid values:
   * - both
   * - scan
   * - realtime.
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
   * - predefined: predefined normalization rule.
   * - custom: custom normalization rule.
   * 
   * @example
   * custom
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The version of the normalization rule.
   * 
   * @example
   * 1
   */
  normalizationRuleVersion?: number;
  /**
   * @remarks
   * The normalization schema ID.
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
   * The field used to sort the rule list. Valid values:
   * - GmtModified: sorted by modification time.
   * - Id: sorted by rule ID (default).
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
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor ID associated with the normalization rule.
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
      normalizationRuleIds: 'NormalizationRuleIds',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
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
      normalizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      normalizationRuleMode: 'string',
      normalizationRuleName: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'number',
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

