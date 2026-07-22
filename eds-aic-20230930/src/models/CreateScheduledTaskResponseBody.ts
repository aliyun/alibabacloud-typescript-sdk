// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskResponseBodyTasksInstanceResults extends $dara.Model {
  /**
   * @example
   * privateAccount not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * acp-iuyb1zv1ap6nb****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      instanceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponseBodyTasks extends $dara.Model {
  instanceResults?: CreateScheduledTaskResponseBodyTasksInstanceResults[];
  /**
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @example
   * tsk-260705-0jj*****
   */
  taskConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceResults: 'InstanceResults',
      scheduledId: 'ScheduledId',
      taskConfigId: 'TaskConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResults: { 'type': 'array', 'itemType': CreateScheduledTaskResponseBodyTasksInstanceResults },
      scheduledId: 'string',
      taskConfigId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceResults)) {
      $dara.Model.validateArray(this.instanceResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  tasks?: CreateScheduledTaskResponseBodyTasks[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateScheduledTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

