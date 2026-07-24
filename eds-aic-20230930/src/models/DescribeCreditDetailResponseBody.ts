// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditDetailResponseBodyDataDetails extends $dara.Model {
  apiKeyName?: string;
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
   * Open Xiaohongshu.
   */
  description?: string;
  inputTokens?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-12oe0l75vl7o5****
   */
  instanceId?: string;
  instanceName?: string;
  modelId?: string;
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the credit or plan package.
   * 
   * @example
   * cmag-0c1g77wjljl9h****
   */
  packageId?: string;
  requestId?: string;
  /**
   * @remarks
   * The task ID, which is globally unique.
   * 
   * @example
   * t-1fr0k51pozyr5****
   */
  taskId?: string;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      cachedTokens: 'CachedTokens',
      changeTime: 'ChangeTime',
      creditChange: 'CreditChange',
      description: 'Description',
      inputTokens: 'InputTokens',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      modelId: 'ModelId',
      outputTokens: 'OutputTokens',
      packageId: 'PackageId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      cachedTokens: 'number',
      changeTime: 'string',
      creditChange: 'string',
      description: 'string',
      inputTokens: 'number',
      instanceId: 'string',
      instanceName: 'string',
      modelId: 'string',
      outputTokens: 'number',
      packageId: 'string',
      requestId: 'string',
      taskId: 'string',
      totalTokens: 'number',
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
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
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

