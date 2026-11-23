// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseCreditUsageRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The credit consumption of this record. It is returned as a decimal string with up to 6 decimal places, where 1 credit equals 1 CNY. The amount is recorded at the time of metering and does not change with subsequent price adjustments. If unpriced, null is returned, which does not indicate zero consumption.
   * 
   * @example
   * 0.0742
   */
  credits?: string;
  /**
   * @remarks
   * The billing item of this record. Valid values: KnowledgeBaseRead (knowledge base read), MemoryRead (memory base read), MemoryWrite (memory base write), KnowledgeBaseWriteToken (knowledge base write token), and ContextGrowth (context growth).
   * 
   * @example
   * ContextGrowth
   */
  item?: string;
  /**
   * @remarks
   * The member ID that generated this record. Historical or system records may not have a member ID, in which case null is returned.
   * 
   * @example
   * mb-abcdefghijklmno
   */
  memberId?: string;
  /**
   * @remarks
   * The usage of this record. The unit is specified by the Unit field in the same record.
   * 
   * @example
   * 74200
   */
  quantity?: number;
  /**
   * @remarks
   * The request time when this metering record was generated, in ISO 8601 UTC time format ending with `Z`.
   * 
   * @example
   * 2026-10-14T08:30:12Z
   */
  requestTime?: string;
  /**
   * @remarks
   * The context growth sub-item. Recognized values include KnowledgeOrganization (knowledge organization), MemoryPromotion (memory promotion), KnowledgeReview (knowledge review), KnowledgeEvolution (knowledge evolution), and MemoryEvolution (memory evolution). For other billing items, missing sub-items, or unrecognized sub-items, null is returned.
   * 
   * @example
   * KnowledgeReview
   */
  subItem?: string;
  /**
   * @remarks
   * The metering unit. Valid values: Count (number of times), Token (number of tokens), and MicroCredit (one millionth of a credit).
   * 
   * @example
   * MicroCredit
   */
  unit?: string;
  /**
   * @remarks
   * The ID of the workspace to which this record belongs. Even if queried by account, each record still indicates the workspace it belongs to.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      credits: 'Credits',
      item: 'Item',
      memberId: 'MemberId',
      quantity: 'Quantity',
      requestTime: 'RequestTime',
      subItem: 'SubItem',
      unit: 'Unit',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credits: 'string',
      item: 'string',
      memberId: 'string',
      quantity: 'number',
      requestTime: 'string',
      subItem: 'string',
      unit: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseCreditUsageRecordsResponseBody extends $dara.Model {
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
   * The end time of the query range passed in the request, exclusive.
   * 
   * @example
   * 2026-10-15T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The actual page number used for this query.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The actual page size used for this query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The metering records on the current page. If SortBy is not specified, the records are sorted in descending order of request time.
   */
  records?: ListContextDatabaseCreditUsageRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the OpenAPI request, which is used to troubleshoot call issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query range passed in the request, inclusive.
   * 
   * @example
   * 2026-09-15T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of metering records that meet the filter conditions, which is not affected by pagination.
   * 
   * @example
   * 1
   */
  total?: number;
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
      dimension: 'Dimension',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      startTime: 'StartTime',
      total: 'Total',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListContextDatabaseCreditUsageRecordsResponseBodyRecords },
      requestId: 'string',
      startTime: 'string',
      total: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

