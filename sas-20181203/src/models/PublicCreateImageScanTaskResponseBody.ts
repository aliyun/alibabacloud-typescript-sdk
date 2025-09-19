// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicCreateImageScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can create more image scan tasks. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > By default, a maximum of 10 image scan tasks can be running at the same time. If 10 image scan tasks are running, you cannot create an image scan task by calling this operation. You must wait for at least one of the 10 existing image scan tasks to complete before you can create an image scan task.
   * 
   * @example
   * true
   */
  canCreate?: boolean;
  /**
   * @remarks
   * The timestamp when the image information was collected. Unit: milliseconds.
   * 
   * @example
   * 1644286364150
   */
  collectTime?: number;
  /**
   * @remarks
   * The timestamp when the image scan task started to run. Unit: milliseconds.
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
   * The progress of the image scan task in percentage.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The result of the image scan task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **TASK_NOT_SUPPORT_REGION**: The images are deployed in a region that is not supported by container image scan.
   * 
   * > For more information about the regions supported by container image scan, see the "Regions supported by container image scan" section in this topic.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The status of the image scan task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **PRE_ANALYZER**: The task is being pre-processed.
   * *   **SUCCESS**: The task is successful.
   * *   **FAIL**: The task fails.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the image scan task.
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
   * The data returned if the call is successful.
   */
  data?: PublicCreateImageScanTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

