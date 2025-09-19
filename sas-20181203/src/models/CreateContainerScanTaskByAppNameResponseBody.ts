// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerScanTaskByAppNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can create more scan tasks. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canCreate?: boolean;
  /**
   * @remarks
   * The timestamp generated when the image information was collected. Unit: milliseconds.
   * 
   * @example
   * 1644286364150
   */
  collectTime?: number;
  /**
   * @remarks
   * The timestamp generated when the scan task started. Unit: milliseconds.
   * 
   * @example
   * 1644286364150
   */
  execTime?: number;
  /**
   * @remarks
   * The number of container applications that are scanned.
   * 
   * @example
   * 5
   */
  finishCount?: number;
  /**
   * @remarks
   * The progress of the scan task in percentage.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The result of the scan task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **TASK_NOT_SUPPORT_REGION**: The task is not supported in the region where the image is deployed.
   * 
   * >
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The status of the scan task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **PRE_ANALYZER**: The task is being pre-processed.
   * *   **SUCCESS**: The task succeeds.
   * *   **FAIL**: The task fails.
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
   * The total number of container applications that you want to scan.
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
   * The data returned if the request was successful.
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
   * The request ID.
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

