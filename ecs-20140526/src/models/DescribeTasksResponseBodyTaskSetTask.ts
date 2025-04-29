// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyTaskSetTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-11-24T12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2020-11-24T12:50Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * m-bp1i8huqm5u7****
   */
  resourceId?: string;
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * @example
   * true
   */
  supportCancel?: string;
  /**
   * @remarks
   * The name of the operation that generates the task.
   * 
   * @example
   * ImportImage
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp1hvgwromzv32iq****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      finishedTime: 'FinishedTime',
      resourceId: 'ResourceId',
      supportCancel: 'SupportCancel',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      finishedTime: 'string',
      resourceId: 'string',
      supportCancel: 'string',
      taskAction: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

