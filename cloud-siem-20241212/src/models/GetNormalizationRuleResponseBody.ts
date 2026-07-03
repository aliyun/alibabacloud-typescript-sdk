// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationRuleResponseBodyNormalizationRule extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
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
   * The storage mode for extended fields. Valid values:
   * - flat: ingested as-is.
   * - reject: not ingested.
   * - pack: packed into the extend_content field.
   * 
   * @example
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @remarks
   * The category ID of the normalization rule.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * normalized
   */
  normalizationFieldSource?: string;
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
   * The normalization rule ID.
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
   * The status of the normalization rule.
   * 
   * @example
   * started
   */
  normalizationRuleStatus?: string;
  /**
   * @remarks
   * The type of the normalization rule. Valid values:
   * - predefined: predefined normalization rule.
   * - custom: custom normalization rule.
   * 
   * @example
   * predefined
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The version of the normalization rule.
   * 
   * @example
   * V1
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
   * GmtModified
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
   * The update time.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
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
      createTime: 'CreateTime',
      extendContentPacked: 'ExtendContentPacked',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationRuleDescription: 'NormalizationRuleDescription',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleFormat: 'NormalizationRuleFormat',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleIds: 'NormalizationRuleIds',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleStatus: 'NormalizationRuleStatus',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      orderField: 'OrderField',
      productId: 'ProductId',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      extendContentPacked: 'string',
      extendFieldStoreMode: 'string',
      normalizationCategoryId: 'string',
      normalizationFieldSource: 'string',
      normalizationRuleDescription: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleFormat: 'string',
      normalizationRuleId: 'string',
      normalizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      normalizationRuleMode: 'string',
      normalizationRuleName: 'string',
      normalizationRuleStatus: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'number',
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      orderField: 'string',
      productId: 'string',
      updateTime: 'number',
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

export class GetNormalizationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The normalization rule.
   */
  normalizationRule?: GetNormalizationRuleResponseBodyNormalizationRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationRule: 'NormalizationRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationRule: GetNormalizationRuleResponseBodyNormalizationRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.normalizationRule && typeof (this.normalizationRule as any).validate === 'function') {
      (this.normalizationRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

