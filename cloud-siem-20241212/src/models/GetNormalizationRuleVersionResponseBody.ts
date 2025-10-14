// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion extends $dara.Model {
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
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
  normalizationRuleVersionName?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  regionId?: string;
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
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleDescription: 'NormalizationRuleDescription',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleFormat: 'NormalizationRuleFormat',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleStatus: 'NormalizationRuleStatus',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      normalizationRuleVersionName: 'NormalizationRuleVersionName',
      normalizationSchemaId: 'NormalizationSchemaId',
      productId: 'ProductId',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationRuleDescription: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleFormat: 'string',
      normalizationRuleId: 'string',
      normalizationRuleName: 'string',
      normalizationRuleStatus: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'number',
      normalizationRuleVersionName: 'string',
      normalizationSchemaId: 'string',
      productId: 'string',
      regionId: 'string',
      updateTime: 'number',
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

export class GetNormalizationRuleVersionResponseBody extends $dara.Model {
  normalizationRuleVersion?: GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationRuleVersion: 'NormalizationRuleVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationRuleVersion: GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.normalizationRuleVersion && typeof (this.normalizationRuleVersion as any).validate === 'function') {
      (this.normalizationRuleVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

