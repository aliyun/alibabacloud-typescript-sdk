// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditDetailResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The agent type. This field is populated only when querying by a single agent type.
   * 
   * @example
   * cloudphone_enterprise
   */
  agentType?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * default
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The number of cached tokens.
   * 
   * @example
   * 50
   */
  cachedTokens?: number;
  /**
   * @remarks
   * The time when the change occurred.
   * 
   * @example
   * 2026-06-30T08:14:02Z
   */
  changeTime?: string;
  /**
   * @remarks
   * The credit change amount.
   * 
   * @example
   * 0.7637
   */
  creditChange?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Open Xiaohongshu
   */
  description?: string;
  /**
   * @remarks
   * The model inference duration, in milliseconds.
   * 
   * @example
   * 3000
   */
  durationMs?: number;
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-12oe0l75vl7o5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * my-instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 200
   */
  outputTokens?: number;
  /**
   * @remarks
   * The credit or package ID.
   * 
   * @example
   * cmag-0c1g77wjljl9h****
   */
  packageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A923337-44D9-5CAD-B2A5-4B9E6628B1C8
   */
  requestId?: string;
  /**
   * @remarks
   * The globally unique task ID.
   * 
   * @example
   * t-1fr0k51pozyr5****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 350
   */
  totalTokens?: number;
  /**
   * @remarks
   * The response time of the first token, in milliseconds.
   * 
   * @example
   * 500
   */
  ttftMs?: number;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      apiKeyName: 'ApiKeyName',
      cachedTokens: 'CachedTokens',
      changeTime: 'ChangeTime',
      creditChange: 'CreditChange',
      description: 'Description',
      durationMs: 'DurationMs',
      inputTokens: 'InputTokens',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      modelId: 'ModelId',
      outputTokens: 'OutputTokens',
      packageId: 'PackageId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      totalTokens: 'TotalTokens',
      ttftMs: 'TtftMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      apiKeyName: 'string',
      cachedTokens: 'number',
      changeTime: 'string',
      creditChange: 'string',
      description: 'string',
      durationMs: 'number',
      inputTokens: 'number',
      instanceId: 'string',
      instanceName: 'string',
      modelId: 'string',
      outputTokens: 'number',
      packageId: 'string',
      requestId: 'string',
      taskId: 'string',
      totalTokens: 'number',
      ttftMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The credit change details.
   */
  details?: DescribeCreditDetailResponseBodyDataDetails[];
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for pagination. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of detail records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total credit change.
   * 
   * @example
   * 100
   */
  totalCreditChange?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalCreditChange: 'TotalCreditChange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeCreditDetailResponseBodyDataDetails },
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalCreditChange: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response object.
   */
  data?: DescribeCreditDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCreditDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

