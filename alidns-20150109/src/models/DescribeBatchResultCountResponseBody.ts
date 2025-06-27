// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The total number of domain names or DNS records that failed to be processed.
   * 
   * @example
   * 2
   */
  failedCount?: number;
  /**
   * @remarks
   * The cause of the execution failure.
   * 
   * @example
   * failed_reason
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **-1**: No task for importing domain names or DNS records is submitted.
   * *   **0**: The task is being processed.
   * *   **1**: The task is complete.
   * *   **2**: The task failed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The total number of domain names or DNS records that were processed.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The ID of the last task.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  /**
   * @remarks
   * The total number of DNS records that were processed in batches.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      failedCount: 'FailedCount',
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      failedCount: 'number',
      reason: 'string',
      requestId: 'string',
      status: 'number',
      successCount: 'number',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

