// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks } from "./DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks";


export class DescribeAutoSnapshotTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried automatic snapshot tasks.
   */
  autoSnapshotTasks?: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot tasks.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotTasks: 'AutoSnapshotTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotTasks: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotTasks && typeof (this.autoSnapshotTasks as any).validate === 'function') {
      (this.autoSnapshotTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

