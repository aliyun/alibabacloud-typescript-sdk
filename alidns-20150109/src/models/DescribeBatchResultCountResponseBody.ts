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
   * The reason why the task failed.
   * 
   * @example
   * No match is found for the domain name specified in the file.
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
   * The status of the task. Valid values:
   * 
   * - **-1**: No task was submitted to import domain names or DNS records.
   * 
   * - **0**: Processing
   * 
   * - **1**: Completed
   * 
   * - **2**: Failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The total number of domain names or DNS records that were successfully processed.
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
   * 1******
   */
  taskId?: number;
  /**
   * @remarks
   * The total number of records that are processed in batches.
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

