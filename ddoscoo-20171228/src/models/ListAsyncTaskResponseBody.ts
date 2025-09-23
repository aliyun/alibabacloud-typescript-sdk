// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTaskResponseBodyAsyncTasks extends $dara.Model {
  /**
   * @example
   * 1533866201000
   */
  endTime?: number;
  /**
   * @example
   * 1533866201000
   */
  startTime?: number;
  /**
   * @example
   * 123
   */
  taskId?: number;
  /**
   * @example
   * {"instanceId": "ddoscoo-1234-qrq2134"}
   */
  taskParams?: string;
  /**
   * @example
   * {"instanceId": "ddoscoo-1234-qrq2134", "url": "https://oss.xxx.xxx"}
   */
  taskResult?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'number',
      taskParams: 'string',
      taskResult: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseBody extends $dara.Model {
  asyncTasks?: ListAsyncTaskResponseBodyAsyncTasks[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': ListAsyncTaskResponseBodyAsyncTasks },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTasks)) {
      $dara.Model.validateArray(this.asyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

