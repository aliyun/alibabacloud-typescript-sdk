// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseCreditUsageSummaryByMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range, exclusive. It must be later than StartTime. Use the ISO 8601 time format, such as 2026-10-08T00:00:00Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-08T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The billable item used to filter records. Valid values: KnowledgeBaseRead (knowledge base read), MemoryRead (memory base read), MemoryWrite (memory base write), KnowledgeBaseWriteToken (knowledge base write token), and ContextGrowth (context evolution). If omitted, all billable items that consume credits are included. Storage items or unlisted values return InvalidParameter.
   * 
   * @example
   * MemoryWrite
   */
  item?: string;
  /**
   * @remarks
   * The member ID used to filter the aggregated results. If specified, only this member is analyzed without changing the caller identity. An empty list is returned if no matching records are found.
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
   * The maximum number of members to return per page. Valid values: 1 to 200. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query range, inclusive. Use the ISO 8601 time format, such as 2026-10-01T00:00:00Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the workspace to be analyzed. This parameter is required. The workspace must belong to the caller\\"s account. Locked workspaces can still be queried. Member IDs are unique only within their respective workspaces, and cross-workspace ranking is not supported.
   * 
   * This parameter is required.
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
      startTime: 'StartTime',
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
      startTime: 'string',
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

