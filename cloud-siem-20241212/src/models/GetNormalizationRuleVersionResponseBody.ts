// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the rule version was created.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the normalization rule category.
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
   * 
   * - predefined: a predefined rule.
   * 
   * - custom: a custom rule.
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
   * The name of the normalization rule version.
   * 
   * @example
   * v1
   */
  normalizationRuleVersionName?: string;
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
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the Data Management center for Threat Analysis is located. Select a region for the management center based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the rule version was last updated.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vendor for the normalization rule.
   * 
   * @example
   * alibaba_cloud
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
  /**
   * @remarks
   * The version of the normalization rule.
   */
  normalizationRuleVersion?: GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
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

