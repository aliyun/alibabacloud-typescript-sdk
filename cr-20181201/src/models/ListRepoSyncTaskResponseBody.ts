// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoSyncTaskResponseBodySyncTasks } from "./ListRepoSyncTaskResponseBodySyncTasks";


export class ListRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 7640819A-FB5B-4E25-A227-97717F62****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried synchronization tasks.
   */
  syncTasks?: ListRepoSyncTaskResponseBodySyncTasks[];
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncTasks: 'SyncTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncTasks: { 'type': 'array', 'itemType': ListRepoSyncTaskResponseBodySyncTasks },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.syncTasks)) {
      $dara.Model.validateArray(this.syncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

