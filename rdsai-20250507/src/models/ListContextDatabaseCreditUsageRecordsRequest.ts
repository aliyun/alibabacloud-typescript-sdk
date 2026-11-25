// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseCreditUsageRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range, exclusive. It must be later than StartTime. Use the ISO 8601 time format, such as `2026-10-15T00:00:00Z` (UTC). The maximum length of the query range is 31 days. If the limit is exceeded, InvalidParameter is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-15T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The billing item used to filter records. Valid values: KnowledgeBaseRead (knowledge base read), MemoryRead (memory base read), MemoryWrite (memory base write), KnowledgeBaseWriteToken (knowledge base write token), and ContextGrowth (context growth). If omitted, all billing items that consume credits are included. Storage items or unlisted values return InvalidParameter.
   * 
   * @example
   * ContextGrowth
   */
  item?: string;
  /**
   * @remarks
   * The member ID used to filter records. If specified, WorkspaceId must also be provided. Otherwise, InvalidParameter is returned. A member ID is unique only within its workspace. This parameter only filters data and does not change the caller identity. Records without a member ID are not matched.
   * 
   * @example
   * mb-abcdefghijklmno
   */
  memberId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 200. Default value: 50. The pagination offset (Page - 1) × PageSize must not exceed 10,000.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort. Only credits is supported. If omitted, results are sorted in descending order of request time. Specifying a sort field does not change the total number of filtered records.
   * 
   * @example
   * credits
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values: asc for ascending order and desc for descending order. The values are case-insensitive. The default value is desc when SortBy is specified. If only SortOrder is provided, InvalidParameter is returned. When sorting by credits, unpriced records are always placed at the end, and records with the same amount are sorted in descending order of request time.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time of the query range, inclusive. Use the ISO 8601 time format, such as `2026-09-15T00:00:00Z` (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-15T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The context growth sub-item used to filter records. Valid values: KnowledgeOrganization (knowledge organization), MemoryPromotion (memory promotion), KnowledgeReview (knowledge review), KnowledgeEvolution (knowledge evolution), and MemoryEvolution (memory evolution). The values are case-sensitive. If only SubItem is provided, the billing item is automatically restricted to ContextGrowth. If other Item values are provided simultaneously or the sub-item is not in the list, InvalidParameter is returned.
   * 
   * @example
   * KnowledgeReview
   */
  subItem?: string;
  /**
   * @remarks
   * The ID of the workspace to query. If specified, only the data of this workspace under the caller account is queried, and locked workspaces can also be queried. If omitted, all workspaces under the caller account are queried.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      item: 'Item',
      memberId: 'MemberId',
      page: 'Page',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      subItem: 'SubItem',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      item: 'string',
      memberId: 'string',
      page: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      startTime: 'string',
      subItem: 'string',
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

