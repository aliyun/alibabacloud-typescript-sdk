// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageLatestScanTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-12-20 11:59:05
   */
  create?: string;
  /**
   * @remarks
   * The number of images that are scanned.
   * 
   * @example
   * 100
   */
  finish?: number;
  /**
   * @remarks
   * The end time of the task. A value is returned only when the task is in the Finished state. Otherwise, the returned value is empty.
   * 
   * @example
   * 1669693430977
   */
  finishTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9755662
   */
  id?: number;
  /**
   * @remarks
   * The time when the task was last modified. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-12-20 12:00:05
   */
  modified?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * IMAGE_SCAN
   */
  name?: string;
  /**
   * @remarks
   * The method in which the task was created. A task can be created in the Security Center console or by calling an API operation. Valid values:
   * 
   * *   **console_batch**: The task was created in the Security Center console.
   * *   **openapi**: The task was created by calling an API operation.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 1668614400000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid value:
   * 
   * *   **PROCESSING**: The task is running.
   * *   **START**: The task is being started.
   * *   **MESSAGE_SEND**: The scan task is sent.
   * *   **PRE_ANALYZER**: The image is in precheck.
   * *   **SUCCESS**: The task was successful.
   * *   **FAIL**: The task failed.
   * *   **TIMOUT**: The task timed out.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  target?: string;
  /**
   * @remarks
   * The type of the scanned asset. Valid value:
   * 
   * *   **IMAGE**
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * 0a960b9a48b788a8689154b032bf****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid value:
   * 
   * *   **IMAGE_SCAN**
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      finish: 'Finish',
      finishTime: 'FinishTime',
      id: 'Id',
      modified: 'Modified',
      name: 'Name',
      source: 'Source',
      startTime: 'StartTime',
      status: 'Status',
      target: 'Target',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'string',
      finish: 'number',
      finishTime: 'number',
      id: 'number',
      modified: 'string',
      name: 'string',
      source: 'string',
      startTime: 'number',
      status: 'string',
      target: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageLatestScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about the task.
   */
  task?: DescribeImageLatestScanTaskResponseBodyTask[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: { 'type': 'array', 'itemType': DescribeImageLatestScanTaskResponseBodyTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

