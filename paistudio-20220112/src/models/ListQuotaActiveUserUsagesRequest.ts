// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaActiveUserUsagesRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `desc`: descending order.
   * 
   * - `asc`: ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 999
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * If true, retrieves resource usage from the current quota only.
   * 
   * @example
   * false
   */
  selfOnly?: boolean;
  /**
   * @remarks
   * The field to sort the results by. Valid values:
   * 
   * - QuotaId
   * 
   * - SubmittedCPU
   * 
   * - SubmittedMemory
   * 
   * - SubmittedGPU
   * 
   * - UsedCPU
   * 
   * - UsedMemory
   * 
   * - UsedGPU
   * 
   * - WorkloadCount
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Filters the results by user ID.
   * 
   * @example
   * 200xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Filters the results by username.
   * 
   * @example
   * test
   */
  username?: string;
  workloadCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      selfOnly: 'SelfOnly',
      sortBy: 'SortBy',
      userId: 'UserId',
      username: 'Username',
      workloadCount: 'WorkloadCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      selfOnly: 'boolean',
      sortBy: 'string',
      userId: 'string',
      username: 'string',
      workloadCount: 'number',
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

