// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostRulesResponseBodyItemsInputTokenTiers extends $dara.Model {
  /**
   * @remarks
   * The input cost points per million tokens for the tier.
   * 
   * @example
   * 1000
   */
  inputCostPointsPerMillion?: string;
  /**
   * @remarks
   * The token tier. Valid values: "" (default tier), 0-32K, 32K-64K, 64K-128K, 128K-256K, 256K-512K, 512K-1M, and 1M+.
   * 
   * @example
   * 0-32K
   */
  tier?: string;
  static names(): { [key: string]: string } {
    return {
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      tier: 'Tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputCostPointsPerMillion: 'string',
      tier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostRulesResponseBodyItems extends $dara.Model {
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
   * The cache creation or write cost points per million tokens.
   * 
   * @example
   * 400
   */
  cacheCreationCostPointsPerMillion?: string;
  /**
   * @remarks
   * The ID of the cost rule.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The end time of the effective period.
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  effectiveEndTime?: string;
  /**
   * @remarks
   * The start time of the effective period.
   * 
   * @example
   * 2026-09-01T00:00:00Z
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The type of the effective target.
   * 
   * @example
   * global
   */
  effectiveTargetType?: string;
  /**
   * @remarks
   * The value of the effective target.
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
   * The time when the cost rule was created.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the cost rule was last updated.
   * 
   * @example
   * 2024-10-16 16:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
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
   * The input token tier. An empty value indicates a legacy or default rule.
   * 
   * @example
   * 0-32K
   */
  inputTokenTier?: string;
  /**
   * @remarks
   * The non-cumulative tiered pricing for input tokens. Each element includes the tier and the input cost points per million tokens.
   */
  inputTokenTiers?: DescribeCostRulesResponseBodyItemsInputTokenTiers[];
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * gpt-4
   */
  model?: string;
  /**
   * @remarks
   * The ID of the model service.
   * 
   * @example
   * ms-xxxxxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The model service name.
   * 
   * @example
   * qwen-service
   */
  modelServiceName?: string;
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
      costRuleId: 'CostRuleId',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      effectiveTargetType: 'EffectiveTargetType',
      effectiveTargetValue: 'EffectiveTargetValue',
      explicitCacheCostPointsPerMillion: 'ExplicitCacheCostPointsPerMillion',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      imageCostPointsPerCount: 'ImageCostPointsPerCount',
      inputCostPointsPerMillion: 'InputCostPointsPerMillion',
      inputTokenTier: 'InputTokenTier',
      inputTokenTiers: 'InputTokenTiers',
      model: 'Model',
      modelServiceId: 'ModelServiceId',
      modelServiceName: 'ModelServiceName',
      outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
      videoCostPointsPerSecond: 'VideoCostPointsPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostPointsPerMillion: 'string',
      cacheCreationCostPointsPerMillion: 'string',
      costRuleId: 'string',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      effectiveTargetType: 'string',
      effectiveTargetValue: 'string',
      explicitCacheCostPointsPerMillion: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      imageCostPointsPerCount: 'string',
      inputCostPointsPerMillion: 'string',
      inputTokenTier: 'string',
      inputTokenTiers: { 'type': 'array', 'itemType': DescribeCostRulesResponseBodyItemsInputTokenTiers },
      model: 'string',
      modelServiceId: 'string',
      modelServiceName: 'string',
      outputCostPointsPerMillion: 'string',
      videoCostPointsPerSecond: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputTokenTiers)) {
      $dara.Model.validateArray(this.inputTokenTiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cost rules.
   */
  items?: DescribeCostRulesResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCostRulesResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

