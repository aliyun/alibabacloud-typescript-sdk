// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageLatestScanTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. Format: yyyy-MM-ddTHH:mm:ss.
   * 
   * @example
   * 2022-12-20 11:59:05
   */
  create?: string;
  /**
   * @remarks
   * The number of completed image tasks.
   * 
   * @example
   * 100
   */
  finish?: number;
  /**
   * @remarks
   * The time when the task ended. This parameter is returned only when the task status is Finished. Otherwise, an empty value is returned.
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
   * The time when the task was last modified. Format: yyyy-MM-ddTHH:mm:ss.
   * 
   * @example
   * 2022-12-20 12:00:05
   */
  modified?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * IMAGE_SCAN
   */
  name?: string;
  /**
   * @remarks
   * The creation method. Valid values:
   * 
   * - **console_batch**: console
   * - **openapi**: API.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 1668614400000
   */
  startTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **PROCESSING**: The task is being executed.
   * - **START**: The task is starting.
   * - **MESSAGE_SEND**: The scan is being distributed.
   * - **PRE_ANALYZER**: The image is being pre-checked.
   * - **SUCCESS**: The task is executed.
   * - **FAIL**: The task failed.
   * - **TIMOUT**: The task timed out.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The digest of the target image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  target?: string;
  /**
   * @remarks
   * The scan target type. Valid values:
   * 
   * - **IMAGE**: image.
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
   * The task type. Valid values:
   * - **IMAGE_SCAN**: image scan.
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
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
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

