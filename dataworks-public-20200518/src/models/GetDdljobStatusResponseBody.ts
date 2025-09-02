// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDDLJobStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the task.
   * 
   * @example
   * success
   */
  content?: string;
  /**
   * @remarks
   * The ID of the ongoing task. If no value is returned for this parameter, all subtasks are complete.
   * 
   * @example
   * abc1
   */
  nextTaskId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * abc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDDLJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   */
  data?: GetDDLJobStatusResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abc
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
      data: GetDDLJobStatusResponseBodyData,
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

