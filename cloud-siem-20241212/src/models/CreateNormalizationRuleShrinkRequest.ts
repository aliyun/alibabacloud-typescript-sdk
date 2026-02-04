// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationRuleShrinkRequest extends $dara.Model {
  extendContentPacked?: string;
  /**
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationRuleDescription?: string;
  /**
   * @example
   * * | pack-fields -include=\\"[\\s\\S]+\\" as extend_content。
   */
  normalizationRuleExpression?: string;
  /**
   * @example
   * SPL。
   */
  normalizationRuleFormat?: string;
  normalizationRuleIdsShrink?: string;
  /**
   * @example
   * both。
   */
  normalizationRuleMode?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationRuleName?: string;
  normalizationRuleType?: string;
  normalizationRuleVersion?: number;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  orderField?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  /**
   * @example
   * alibaba_cloud。
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
      normalizationRuleIdsShrink: 'NormalizationRuleIds',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      normalizationSchemaId: 'NormalizationSchemaId',
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
      normalizationRuleIdsShrink: 'string',
      normalizationRuleMode: 'string',
      normalizationRuleName: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'number',
      normalizationSchemaId: 'string',
      orderField: 'string',
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

