// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaActiveUserUsagesRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: Descending order.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
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
   * Specifies whether to view only the resource usage in the current quota.
   * 
   * @example
   * false
   */
  selfOnly?: boolean;
  /**
   * @remarks
   * The name of the field by which to sort the response. Valid values:
   * - QuotaId
   * - SubmittedCPU
   * - SubmittedMemory
   * - SubmittedGPU
   * - UsedCPU
   * - UsedMemory
   * - UsedGPU
   * - WorkloadCount
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the user whose resource usage you want to query.
   * 
   * @example
   * 200xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The username of the user whose resource usage you want to query.
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * The number of workloads.
   * 
   * @example
   * 1
   */
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

