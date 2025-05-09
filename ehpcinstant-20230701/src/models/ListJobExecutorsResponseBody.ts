// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobExecutorsResponseBodyExecutorStatus } from "./ListJobExecutorsResponseBodyExecutorStatus";
import { ListJobExecutorsResponseBodyExecutors } from "./ListJobExecutorsResponseBodyExecutors";


export class ListJobExecutorsResponseBody extends $dara.Model {
  executorStatus?: ListJobExecutorsResponseBodyExecutorStatus;
  executors?: ListJobExecutorsResponseBodyExecutors[];
  /**
   * @example
   * job-xxxx
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * task0
   */
  taskName?: string;
  /**
   * @example
   * 50
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executorStatus: 'ExecutorStatus',
      executors: 'Executors',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorStatus: ListJobExecutorsResponseBodyExecutorStatus,
      executors: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExecutors },
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskName: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.executorStatus && typeof (this.executorStatus as any).validate === 'function') {
      (this.executorStatus as any).validate();
    }
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

