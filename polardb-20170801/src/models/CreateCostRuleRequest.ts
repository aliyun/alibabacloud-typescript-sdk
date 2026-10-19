// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cache read cost points per million tokens. Default value: 0.
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
   * The effective start time in the yyyy-MM-dd HH:mm:ss format. If this parameter is not specified, the rule takes effect immediately.
   * 
   * @example
   * 2026-10-14 00:00:00
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The effective target type. Valid values: global, consumerGroup, and consumer. Default value: global.
   * 
   * @example
   * global
   */
  effectiveTargetType?: string;
  /**
   * @remarks
   * The effective target value. This parameter is required when the effective target type is not global.
   * 
   * @example
   * user
   */
  effectiveTargetValue?: string;
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
   * pg-xxxxxxx
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
   * The tiered price for input tokens (non-cumulative). The value is a JSON array character string. Each element contains Tier and InputCostPointsPerMillion. Valid values for Tier: "" (default tier), 0-32K, 32K-64K, 64K-128K, 128K-256K, 256K-512K, 512K-1M, and 1M+. Example: [{"Tier":"0-32K","InputCostPointsPerMillion":"1000"},{"Tier":"32K-64K","InputCostPointsPerMillion":"1800"}]. If this parameter is specified, it takes precedence over InputCostPointsPerMillion. An empty array [] is not allowed.
   * 
   * @example
   * [{"Tier":"0-32K","InputCostPointsPerMillion":"1000"},{"Tier":"32K-64K","InputCostPointsPerMillion":"1800"}]
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
   * The ID of the model service.
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
   * 0
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
      cacheCostPointsPerMillion: 'CacheCostPointsPerMillion',
      cacheCreationCostPointsPerMillion: 'CacheCreationCostPointsPerMillion',
      effectiveStartTime: 'EffectiveStartTime',
      effectiveTargetType: 'EffectiveTargetType',
      effectiveTargetValue: 'EffectiveTargetValue',
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
      cacheCostPointsPerMillion: 'string',
      cacheCreationCostPointsPerMillion: 'string',
      effectiveStartTime: 'string',
      effectiveTargetType: 'string',
      effectiveTargetValue: 'string',
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

