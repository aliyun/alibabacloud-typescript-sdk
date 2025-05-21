// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2020-01-07T07:39:56Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2020-01-07T08:08:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The progress of the task. Unit: %.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Finished
   * *   Failed
   * *   Closed
   * *   Cancel
   * *   Retry
   * *   Pause
   * *   Stop
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 225685759
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      finishTime: 'string',
      progress: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

