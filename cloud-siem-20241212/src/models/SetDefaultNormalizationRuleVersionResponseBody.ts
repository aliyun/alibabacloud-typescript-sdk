// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultNormalizationRuleVersionResponseBodyNormalizationRuleVersion extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
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
   * - predefined: predefined normalization rule
   * - custom: custom normalization rule
   * 
   * @example
   * predefined
   */
  normalizationRuleType?: string;
  /**
   * @remarks
   * The current version of the normalization rule.
   * 
   * @example
   * 1
   */
  normalizationRuleVersion?: number;
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
   * The ID of the product.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vendor corresponding to the normalization rule.
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
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      productId: 'ProductId',
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
      normalizationSchemaId: 'string',
      normalizationSecurityDomainId: 'string',
      productId: 'string',
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

export class SetDefaultNormalizationRuleVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version of the normalization rule.
   */
  normalizationRuleVersion?: SetDefaultNormalizationRuleVersionResponseBodyNormalizationRuleVersion;
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
      normalizationRuleVersion: SetDefaultNormalizationRuleVersionResponseBodyNormalizationRuleVersion,
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

