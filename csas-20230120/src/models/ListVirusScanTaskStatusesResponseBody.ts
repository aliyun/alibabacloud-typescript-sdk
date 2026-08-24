// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskStatusesResponseBodyTasksTaskStatus extends $dara.Model {
  /**
   * @example
   * 120
   */
  deviceAckCount?: number;
  /**
   * @example
   * 5
   */
  deviceResultFailCount?: number;
  /**
   * @example
   * 100
   */
  deviceResultSuccessCount?: number;
  /**
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
   * @example
   * v1:1024772
   */
  taskId?: string;
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
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
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

