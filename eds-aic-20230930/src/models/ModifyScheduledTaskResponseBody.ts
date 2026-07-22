// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskResponseBodyTasksInstanceResults extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-4dkmkip0l0uw*****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
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

export class ModifyScheduledTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The list of batch delivery results for instance scheduled tasks.
   */
  instanceResults?: ModifyScheduledTaskResponseBodyTasksInstanceResults[];
  /**
   * @remarks
   * The updated CAS version number.
   * 
   * @example
   * 2
   */
  newVersion?: number;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * sch-260705-agbx*****
   */
  scheduledId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceResults: 'InstanceResults',
      newVersion: 'NewVersion',
      scheduledId: 'ScheduledId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResults: { 'type': 'array', 'itemType': ModifyScheduledTaskResponseBodyTasksInstanceResults },
      newVersion: 'number',
      scheduledId: 'string',
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

export class ModifyScheduledTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of modification results.
   */
  tasks?: ModifyScheduledTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of records.
   * 
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
      tasks: { 'type': 'array', 'itemType': ModifyScheduledTaskResponseBodyTasks },
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

