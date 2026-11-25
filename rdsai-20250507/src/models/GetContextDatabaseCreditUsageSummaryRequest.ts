// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseCreditUsageSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query interval, exclusive. It must be later than StartTime. Use the ISO 8601 time format, such as `2026-10-15T00:00:00Z` (UTC). The maximum interval is 7 days for hourly statistics and 31 days for daily statistics.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-15T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The bucketing granularity. Valid values: Hour (hourly) and Day (daily). The values are case-insensitive. When omitted, Hour is used by default for intervals up to 7 days, and Day is used for intervals longer than 7 days. The maximum interval for Hour is 7 days, and the maximum interval for Day is 31 days. Exceeding the limit returns InvalidParameter.
   * 
   * @example
   * Day
   */
  interval?: string;
  /**
   * @remarks
   * The billing item used to filter records. Valid values: KnowledgeBaseRead (knowledge base read), MemoryRead (memory read), MemoryWrite (memory write), KnowledgeBaseWriteToken (knowledge base write token), and ContextGrowth (context growth). When omitted, all billing items that consume credits are included. Storage items or unlisted values return InvalidParameter.
   * 
   * @example
   * ContextGrowth
   */
  item?: string;
  /**
   * @remarks
   * The member ID used to filter records. When specified, WorkspaceId must also be provided. Otherwise, InvalidParameter is returned. A member ID is unique only within its workspace. This parameter only filters data and does not change the caller identity. Records without a member ID are not matched. The results are still bucketed by time and billing item, and are not split by member.
   * 
   * @example
   * mb-abcdefghijklmno
   */
  memberId?: string;
  /**
   * @remarks
   * The start time of the query interval, inclusive. Use the ISO 8601 time format, such as `2026-09-15T00:00:00Z` (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-15T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The context evolution sub-item used to filter records. Valid values: KnowledgeOrganization (knowledge organization), MemoryPromotion (memory promotion), KnowledgeReview (knowledge review), KnowledgeEvolution (knowledge evolution), and MemoryEvolution (memory evolution). The values are case-sensitive. When only SubItem is provided, the billing item is automatically restricted to ContextGrowth. If other Item values are provided simultaneously or the sub-item is not in the list, InvalidParameter is returned.
   * 
   * @example
   * MemoryEvolution
   */
  subItem?: string;
  /**
   * @remarks
   * The ID of the workspace to query. When specified, only the data of this workspace under the caller account is queried, and locked workspaces can also be queried. When omitted, all workspaces under the caller account are queried.
   * 
   * @example
   * ws-x9z4ctzed9gfu2w
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      item: 'Item',
      memberId: 'MemberId',
      startTime: 'StartTime',
      subItem: 'SubItem',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      item: 'string',
      memberId: 'string',
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

