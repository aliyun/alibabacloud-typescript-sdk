// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaActiveUserUsagesRequest extends $dara.Model {
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 999
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  selfOnly?: boolean;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * 200xxxxxx
   */
  userId?: string;
  /**
   * @example
   * test
   */
  username?: string;
  workloadCount?: number;
  /**
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

