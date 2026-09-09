// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerScanTaskByAppNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether more scan tasks can be created. Valid values:
   * 
   * - **true**: More scan tasks can be created.
   * - **false**: No more scan tasks can be created.
   * 
   * @example
   * true
   */
  canCreate?: boolean;
  /**
   * @remarks
   * The timestamp when image information was collected, in milliseconds.
   * 
   * @example
   * 1644286364150
   */
  collectTime?: number;
  /**
   * @remarks
   * The timestamp when the scan task started running, in milliseconds.
   * 
   * @example
   * 1644286364150
   */
  execTime?: number;
  /**
   * @remarks
   * The number of containers that have been scanned.
   * 
   * @example
   * 5
   */
  finishCount?: number;
  /**
   * @remarks
   * The progress percentage of the scan task.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The execution result of the scan task. Valid values:
   * 
   * - **SUCCESS**: The scan task was executed successfully.
   * - **TASK_NOT_SUPPORT_REGION**: The image is in a region that does not support scanning.
   * 
   * > For the regions that support image security scanning, refer to the table of supported regions after the response parameters table in this document.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The status of the scan task. Valid values:
   * 
   * - **INIT**: Initializing.
   * - **PRE_ANALYZER**: Pre-analyzing.
   * - **SUCCESS**: Execution succeeded.
   * - **FAIL**: Execution failed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * fc98d58eb56f699d49bf7ebbd6d7****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of containers to scan.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canCreate: 'CanCreate',
      collectTime: 'CollectTime',
      execTime: 'ExecTime',
      finishCount: 'FinishCount',
      progress: 'Progress',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCreate: 'boolean',
      collectTime: 'number',
      execTime: 'number',
      finishCount: 'number',
      progress: 'number',
      result: 'string',
      status: 'string',
      taskId: 'string',
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

export class CreateContainerScanTaskByAppNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: CreateContainerScanTaskByAppNameResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 1EE7B150-D67E-53FD-A52D-3E8E669A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateContainerScanTaskByAppNameResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

