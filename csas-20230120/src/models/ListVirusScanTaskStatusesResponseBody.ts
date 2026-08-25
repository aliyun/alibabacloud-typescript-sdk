// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskStatusesResponseBodyTasksTaskStatus extends $dara.Model {
  /**
   * @remarks
   * The number of user terminal devices that have received the task.
   * 
   * @example
   * 120
   */
  deviceAckCount?: number;
  /**
   * @remarks
   * The number of user terminal devices on which the scan execution failed.
   * 
   * @example
   * 5
   */
  deviceResultFailCount?: number;
  /**
   * @remarks
   * The number of user terminal devices on which the scan was executed successfully.
   * 
   * @example
   * 100
   */
  deviceResultSuccessCount?: number;
  /**
   * @remarks
   * The number of user terminal devices that are currently executing the scan.
   * 
   * @example
   * 15
   */
  deviceStartCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceAckCount: 'DeviceAckCount',
      deviceResultFailCount: 'DeviceResultFailCount',
      deviceResultSuccessCount: 'DeviceResultSuccessCount',
      deviceStartCount: 'DeviceStartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceAckCount: 'number',
      deviceResultFailCount: 'number',
      deviceResultSuccessCount: 'number',
      deviceStartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanTaskStatusesResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The virus scan task ID.
   * 
   * @example
   * v1:1024772
   */
  taskId?: string;
  /**
   * @remarks
   * The execution progress measured by device count.
   */
  taskStatus?: ListVirusScanTaskStatusesResponseBodyTasksTaskStatus;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskStatus: ListVirusScanTaskStatusesResponseBodyTasksTaskStatus,
    };
  }

  validate() {
    if(this.taskStatus && typeof (this.taskStatus as any).validate === 'function') {
      (this.taskStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanTaskStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The list of execution progress for virus scan tasks.
   */
  tasks?: ListVirusScanTaskStatusesResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListVirusScanTaskStatusesResponseBodyTasks },
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

