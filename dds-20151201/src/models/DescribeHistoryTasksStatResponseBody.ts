// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The number of tasks in a specified state.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class DescribeHistoryTasksStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task objects.
   */
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FC724D23-XXXX-XXXX-ABB1-606C935AE7FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksStatResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

