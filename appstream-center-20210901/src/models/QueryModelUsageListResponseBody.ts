// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModelUsageListResponseBodyDataCreditMultiplier extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the credit multiplier, in multiples. If it is empty, it indicates that the multiplier starts from Min and no maximum multiplier is specified.
   * 
   * @example
   * 3
   */
  max?: number;
  /**
   * @remarks
   * The lower limit of the credit multiplier, in multiples. If it is equal to Max, it indicates a fixed multiplier.
   * 
   * @example
   * 1
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModelUsageListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The average time to first token (TTFT) latency, which is the total duration of valid TTFT samples divided by the number of samples, in milliseconds, rounded to the nearest integer. This field is empty when no valid samples are available. It does not represent the total time taken for a complete response.
   * 
   * @example
   * 620
   */
  avgTtftMs?: number;
  /**
   * @remarks
   * The proportion of cached input usage to the total input usage, expressed as a decimal between 0 and 1. For example, 0.86 indicates 86%. It is not the proportion of requests that hit the cache. This field is empty when the base usage is incomplete or the total input usage is 0. The return value is rounded to a maximum of 8 decimal places.
   * 
   * @example
   * 0.86
   */
  cacheHitRate?: number;
  /**
   * @remarks
   * The total number of model calls within the query range, including both successful and failed calls.
   * 
   * @example
   * 12480
   */
  callCount?: number;
  /**
   * @remarks
   * The maximum context length of the model, in tokens. This field is empty when no model information is available.
   * 
   * @example
   * 1000000
   */
  contextWindow?: number;
  /**
   * @remarks
   * The display range of the credit consumption multiplier, in multiples. It is used to display price hints and is not used to recalculate the PointsConsumption returned by this API operation.
   * 
   * - If Min and Max are equal: fixed multiplier.
   * - If Max is greater than Min: multiplier range.
   * - If Max is empty: starts from the Min multiplier.
   * - If the entire object is empty: the model does not participate in credit billing, or no multiplier information is available. An empty value for this field alone cannot determine whether actual charges apply.
   * 
   * @example
   * {"Min":1,"Max":3}
   */
  creditMultiplier?: QueryModelUsageListResponseBodyDataCreditMultiplier;
  /**
   * @remarks
   * The description of the model. The display language is affected by Language. This field is empty when no description is available.
   * 
   * @example
   * Qwen large language model
   */
  description?: string;
  /**
   * @remarks
   * The proportion of explicit cache creation credits to the total credits. This field is empty when it cannot be calculated.
   * 
   * @example
   * 0.115
   */
  explicitCacheCreationPointsRate?: number;
  /**
   * @remarks
   * The proportion of explicit cache hit credits to the total credits. This field is empty when it cannot be calculated.
   * 
   * @example
   * 0.043
   */
  explicitCacheHitPointsRate?: number;
  /**
   * @remarks
   * The number of failed calls within the query range, including failed calls that are throttled.
   * 
   * @example
   * 180
   */
  failureCount?: number;
  /**
   * @remarks
   * The list of model capability tags. The display language is affected by Language. Capabilities without a configured display name retain their original codes. An empty list is returned when no capability information is available. Tags are extensible, not a fixed enumeration, and do not imply that all capabilities can be called through this API operation.
   * 
   * @example
   * ["Text generation","Tool calling"]
   */
  featureList?: string[];
  /**
   * @remarks
   * The URL of the model brand icon. This field is empty when no brand icon is available. The example URL only illustrates the URL format and is not a fixed download address.
   * 
   * @example
   * https://example.com/qwen.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The proportion of implicit cache hit credits to the total credits. This field is empty when it cannot be calculated.
   * 
   * @example
   * 0.171
   */
  implicitCacheHitPointsRate?: number;
  /**
   * @remarks
   * The proportion of input credits to the total consumed credits, expressed as a decimal between 0 and 1. For example, 0.739 indicates 73.9%. This field is provided only when the input and output credit details are complete, the values are valid, and the total credits are greater than 0. Otherwise, it is empty.
   * 
   * The proportion is rounded to a maximum of 8 decimal places. The sum of input and output credits may be less than the total credits. Additionally, adding this value to OutputPointsRate may result in minor rounding errors. Do not calculate other credits or verify bills based solely on the sum of the proportions.
   * 
   * @example
   * 0.739
   */
  inputPointsRate?: number;
  /**
   * @remarks
   * The new model tag. The current version does not provide this tag. Ignore this field and do not use it to determine whether a model is newly released.
   * 
   * @example
   * null
   */
  isNew?: boolean;
  /**
   * @remarks
   * The identifier or code of the model, used to identify the model and associate usage and model information. The return value is an open string and should not be hardcoded as an enumeration on the client side.
   * 
   * @example
   * qwen3-max-2026-01-23
   */
  llmCode?: string;
  /**
   * @remarks
   * The maximum output length for a single generation of the model, in tokens. This field is empty when no model information is available.
   * 
   * @example
   * 65536
   */
  maxOutput?: number;
  /**
   * @remarks
   * The display name of the model brand. The display language is affected by Language. This field is empty when no brand information is available.
   * 
   * @example
   * Qwen
   */
  modelBrandName?: string;
  /**
   * @remarks
   * The display name of the model. The display language is affected by Language. If no name is available, LlmCode is returned. The name may change, so the model code should be used when associating data.
   * 
   * @example
   * Qwen3 Max
   */
  modelName?: string;
  /**
   * @remarks
   * The proportion of normal input credits to the total credits. This field is empty when it cannot be calculated.
   * 
   * @example
   * 0.329
   */
  normalInputPointsRate?: number;
  /**
   * @remarks
   * The proportion of output credits to the total consumed credits, expressed as a decimal between 0 and 1. For example, 0.261 indicates 26.1%. This field is provided only when the input and output credit details are complete, the values are valid, and the total credits are greater than 0. Otherwise, it is empty. The proportion is rounded to a maximum of 8 decimal places, and adding this value to InputPointsRate may result in minor rounding errors.
   * 
   * @example
   * 0.261
   */
  outputPointsRate?: number;
  /**
   * @remarks
   * The actual credits consumed within the query range. The return value can be displayed directly without further conversion. CreditMultiplier is only used to display the multiplier and should not be multiplied by this value.
   * 
   * @example
   * 100
   */
  pointsConsumption?: number;
  /**
   * @remarks
   * The number of successful calls divided by the total number of calls, expressed as a decimal between 0 and 1, not a percentage. This field is empty when the number of calls is 0. Multiply this value by 100 to display it as a percentage. The return value is rounded to a maximum of 8 decimal places.
   * 
   * @example
   * 0.98557692
   */
  successRate?: number;
  /**
   * @remarks
   * The proportion of tool calling credits to the total credits. This field is empty when it cannot be calculated.
   * 
   * @example
   * 0
   */
  toolCallPointsRate?: number;
  /**
   * @remarks
   * The 95th percentile value of the time to first token (TTFT) latency, in milliseconds. This field is provided only when corresponding data exists within a fixed statistical window. **It is empty when custom start and end dates are passed, even if the start and end dates are the same.** The value 700 in the field table is an example under a fixed statistical window and does not apply to custom date ranges.
   * 
   * @example
   * 700
   */
  ttftP95Ms?: number;
  static names(): { [key: string]: string } {
    return {
      avgTtftMs: 'AvgTtftMs',
      cacheHitRate: 'CacheHitRate',
      callCount: 'CallCount',
      contextWindow: 'ContextWindow',
      creditMultiplier: 'CreditMultiplier',
      description: 'Description',
      explicitCacheCreationPointsRate: 'ExplicitCacheCreationPointsRate',
      explicitCacheHitPointsRate: 'ExplicitCacheHitPointsRate',
      failureCount: 'FailureCount',
      featureList: 'FeatureList',
      iconUrl: 'IconUrl',
      implicitCacheHitPointsRate: 'ImplicitCacheHitPointsRate',
      inputPointsRate: 'InputPointsRate',
      isNew: 'IsNew',
      llmCode: 'LlmCode',
      maxOutput: 'MaxOutput',
      modelBrandName: 'ModelBrandName',
      modelName: 'ModelName',
      normalInputPointsRate: 'NormalInputPointsRate',
      outputPointsRate: 'OutputPointsRate',
      pointsConsumption: 'PointsConsumption',
      successRate: 'SuccessRate',
      toolCallPointsRate: 'ToolCallPointsRate',
      ttftP95Ms: 'TtftP95Ms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTtftMs: 'number',
      cacheHitRate: 'number',
      callCount: 'number',
      contextWindow: 'number',
      creditMultiplier: QueryModelUsageListResponseBodyDataCreditMultiplier,
      description: 'string',
      explicitCacheCreationPointsRate: 'number',
      explicitCacheHitPointsRate: 'number',
      failureCount: 'number',
      featureList: { 'type': 'array', 'itemType': 'string' },
      iconUrl: 'string',
      implicitCacheHitPointsRate: 'number',
      inputPointsRate: 'number',
      isNew: 'boolean',
      llmCode: 'string',
      maxOutput: 'number',
      modelBrandName: 'string',
      modelName: 'string',
      normalInputPointsRate: 'number',
      outputPointsRate: 'number',
      pointsConsumption: 'number',
      successRate: 'number',
      toolCallPointsRate: 'number',
      ttftP95Ms: 'number',
    };
  }

  validate() {
    if(this.creditMultiplier && typeof (this.creditMultiplier as any).validate === 'function') {
      (this.creditMultiplier as any).validate();
    }
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModelUsageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model usage details on the current page. If no models match or the page number exceeds the result range, an empty list is returned. For 24h or 1d queries without specified start and end dates, an empty list is also returned when no statistical results are available. For other windows or custom date ranges, no valid list data is provided when no statistical results are available. The absence of statistical results does not directly indicate that no actual calls were made.
   * 
   * @example
   * [{"LlmCode":"qwen3-max-2026-01-23","ModelName":"Qwen3 Max","CallCount":12480,"FailureCount":180,"PointsConsumption":100,"InputPointsRate":0.739,"OutputPointsRate":0.261,"SuccessRate":0.98557692,"AvgTtftMs":620,"CacheHitRate":0.86}]
   */
  data?: QueryModelUsageListResponseBodyData[];
  /**
   * @remarks
   * The page number for this query, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size used for this query. The actual number of returned entries may be less than this value.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier for this request, used to locate and troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of models used for pagination. When statistical results are available, this field returns the number of models that meet the model type and keyword conditions. This may include models with 0 calls within the selected date range, so it is not necessarily equal to ActiveModelCount.
   * 
   * **When no statistical results are available within the query range, this value returns 0. You cannot determine that the business has no models or no actual calls based solely on TotalCount=0.**
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryModelUsageListResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

