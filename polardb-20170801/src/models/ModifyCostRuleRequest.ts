// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bypass the quota check. This parameter is optional and has no default value. If omitted, it is not passed through. Both false and true are passed through as-is.
   * 
   * @example
   * false
   */
  bypassQuotaCheck?: boolean;
  /**
   * @remarks
   * The cache cost points per million tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  cacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The cache creation cost points per million tokens.
   * 
   * @example
   * 400
   */
  cacheCreationCostPointsPerMillion?: string;
  /**
   * @remarks
   * The cost rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The explicit cache read cost points per million tokens.
   * 
   * @example
   * 100
   */
  explicitCacheCostPointsPerMillion?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The image input cost points per image.
   * 
   * @example
   * 5
   */
  imageCostPointsPerCount?: string;
  /**
   * @remarks
   * The input cost points per million tokens. Default value: 0.
   * 
   * @example
   * 0
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The tiered price for input tokens (non-cumulative). This parameter is a JSON array character string. Each element contains Tier and InputCostPointsPerMillion. Valid values for Tier: "" (default tier), 0-32K, 32K-64K, 64K-128K, 128K-256K, 256K-512K, 512K-1M, and 1M+. Example: [{"Tier":"0-32K","InputCostPointsPerMillion":"1200"}]. If this parameter is not empty, all tiers are replaced. If this parameter is not specified or an empty string is passed, the original tiers are retained. An empty array [] is not allowed.
   * 
   * @example
   * [{"Tier":"0-32K","InputCostPointsPerMillion":"1200"}]
   */
  inputTokenTiers?: string;
  /**
   * @remarks
   * The name of the model, such as gpt-4 or qwen-turbo.
   * 
   * This parameter is required.
   * 
   * @example
   * gpt-4
   */
  modelName?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ms-xxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The output cost points per million tokens. Default value: 0.
   * 
   * @example
   * 10
   */
  outputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The video input cost points per second.
   * 
   * @example
   * 20
   */
  videoCostPointsPerSecond?: string;
  static names(): { [key: string]: string } {
    return {
      bypassQuotaCheck: 'BypassQuotaCheck',
      cacheCostPointsPerMillion: 'CacheCostPointsPerMillion',
      cacheCreationCostPointsPerMillion: 'CacheCreationCostPointsPerMillion',
      costRuleId: 'CostRuleId',
      explicitCacheCostPointsPerMillion: 'ExplicitCacheCostPointsPerMillion',
      gwClusterId: 'GwClusterId',
      imageCostPointsPerCount: 'ImageCostPointsPerCount',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      inputTokenTiers: 'InputTokenTiers',
      modelName: 'ModelName',
      modelServiceId: 'ModelServiceId',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
      regionId: 'RegionId',
      videoCostPointsPerSecond: 'VideoCostPointsPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypassQuotaCheck: 'boolean',
      cacheCostPointsPerMillion: 'string',
      cacheCreationCostPointsPerMillion: 'string',
      costRuleId: 'string',
      explicitCacheCostPointsPerMillion: 'string',
      gwClusterId: 'string',
      imageCostPointsPerCount: 'string',
      inputCostPointsPerMillion: 'string',
      inputTokenTiers: 'string',
      modelName: 'string',
      modelServiceId: 'string',
      outputCostPointsPerMillion: 'string',
      regionId: 'string',
      videoCostPointsPerSecond: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

