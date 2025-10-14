// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationRuleResponseBodyNormalizationRule extends $dara.Model {
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  extendContentPacked?: string;
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
  /**
   * @example
   * nr-z0b2ssjteut85uoh9nzp。
   */
  normalizationRuleId?: string;
  normalizationRuleIds?: string[];
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
  /**
   * @example
   * started。
   */
  normalizationRuleStatus?: string;
  /**
   * @example
   * predefined。
   */
  normalizationRuleType?: string;
  /**
   * @example
   * V1。
   */
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
   * 1733269771123。
   */
  updateTime?: number;
  /**
   * @example
   * alibaba_cloud。
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      extendContentPacked: 'ExtendContentPacked',
      normalizationCategoryId: 'NormalizationCategoryId',
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
      normalizationCategoryId: 'string',
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
  normalizationRule?: GetNormalizationRuleResponseBodyNormalizationRule;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
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

