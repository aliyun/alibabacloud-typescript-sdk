// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTaskSummaryResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * v1:1024772
   */
  taskId?: string;
  /**
   * @example
   * 7
   */
  virusFileCount?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      virusFileCount: 'VirusFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      virusFileCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanTaskSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  tasks?: ListVirusScanTaskSummaryResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListVirusScanTaskSummaryResponseBodyTasks },
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

