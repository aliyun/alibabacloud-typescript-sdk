// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseCreditUsageSummaryResponseBodyBuckets extends $dara.Model {
  /**
   * @remarks
   * The start time of the bucket, in ISO 8601 UTC time format ending with `Z`.
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  bucketStart?: string;
  /**
   * @remarks
   * The total credit consumption of priced records in the bucket. Returned as a decimal string with up to 6 decimal places, where 1 credit equals 1 CNY. Returns the string `0` when all records are unpriced.
   * 
   * @example
   * 0.2513
   */
  credits?: string;
  /**
   * @remarks
   * The billing item corresponding to the bucket. Valid values: KnowledgeBaseRead (knowledge base read), MemoryRead (memory read), MemoryWrite (memory write), KnowledgeBaseWriteToken (knowledge base write token), and ContextGrowth (context growth).
   * 
   * @example
   * ContextGrowth
   */
  item?: string;
  /**
   * @remarks
   * The total usage of all records in the bucket, including unpriced records. The unit is specified by Unit.
   * 
   * @example
   * 251300
   */
  quantity?: number;
  /**
   * @remarks
   * The number of metering records in the bucket, including unpriced records.
   * 
   * @example
   * 3
   */
  recordCount?: number;
  /**
   * @remarks
   * The context evolution sub-item. Recognized values include KnowledgeOrganization (knowledge organization), MemoryPromotion (memory promotion), KnowledgeReview (knowledge review), KnowledgeEvolution (knowledge evolution), and MemoryEvolution (memory evolution). Returns null for other billing items, missing sub-items, or unrecognized sub-items.
   * 
   * @example
   * MemoryEvolution
   */
  subItem?: string;
  /**
   * @remarks
   * The unit of measurement. Valid values: Count (number of times), Token (number of tokens), and MicroCredit (one millionth of a credit).
   * 
   * @example
   * MicroCredit
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      bucketStart: 'BucketStart',
      credits: 'Credits',
      item: 'Item',
      quantity: 'Quantity',
      recordCount: 'RecordCount',
      subItem: 'SubItem',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketStart: 'string',
      credits: 'string',
      item: 'string',
      quantity: 'number',
      recordCount: 'number',
      subItem: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseCreditUsageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bucketing results, sorted sequentially by BucketStart, Item, and SubItem. Unpriced records are included in Quantity and RecordCount, but not in Credits.
   */
  buckets?: GetContextDatabaseCreditUsageSummaryResponseBodyBuckets[];
  /**
   * @remarks
   * The query dimension. Valid values: Workspace (a single workspace) and Account (all workspaces under the caller account).
   * 
   * @example
   * Workspace
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the query interval passed in the request, exclusive.
   * 
   * @example
   * 2026-10-15T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The actual bucketing granularity used. Valid values: Hour (hourly) and Day (daily). When the request parameter is omitted, the automatically selected granularity is returned.
   * 
   * @example
   * Day
   */
  interval?: string;
  /**
   * @remarks
   * The ID of the API request, which is used to troubleshoot call issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query interval passed in the request, inclusive.
   * 
   * @example
   * 2026-09-15T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total credit consumption of priced records that meet the filter conditions within the query interval. Returned as a decimal string with up to 6 decimal places, where 1 credit equals 1 CNY. Returns the string `0` when there are no priced records. Unpriced records are not included in the total. Do not treat this value as the final bill amount.
   * 
   * @example
   * 0.2513
   */
  totalCredits?: string;
  /**
   * @remarks
   * The ID of the queried workspace. This parameter has a value only when Dimension is Workspace. It is empty for the account dimension.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      dimension: 'Dimension',
      endTime: 'EndTime',
      interval: 'Interval',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalCredits: 'TotalCredits',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: { 'type': 'array', 'itemType': GetContextDatabaseCreditUsageSummaryResponseBodyBuckets },
      dimension: 'string',
      endTime: 'string',
      interval: 'string',
      requestId: 'string',
      startTime: 'string',
      totalCredits: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buckets)) {
      $dara.Model.validateArray(this.buckets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

