// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicCreateImageScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether more scan tasks can be created. Valid values:
   * 
   * - **true**: More scan tasks can be created.
   * - **false**: No more scan tasks can be created.
   * 
   * > By default, up to 10 scan tasks can exist at the same time. If the number of scan tasks exceeds 10, creating a scan task by calling this operation fails. Wait until an existing scan task is completed before creating a new scan task.
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
   * The number of images that have been scanned.
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
   * - **SUCCESS**: The scan task succeeded.
   * - **TASK_NOT_SUPPORT_REGION**: The image is in a region that does not support scanning.
   * 
   * > For the regions that support image security scanning, see the table of supported regions after the response parameters table in this topic.
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
   * - **SUCCESS**: Succeeded.
   * - **FAIL**: Failed.
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
   * a410bb3e68c217a3368bc0238c66886d
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of images to scan.
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

export class PublicCreateImageScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned when the operation is successful.
   */
  data?: PublicCreateImageScanTaskResponseBodyData;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * F9353221-40F4-5F98-B73C-2803DC804033
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PublicCreateImageScanTaskResponseBodyData,
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

