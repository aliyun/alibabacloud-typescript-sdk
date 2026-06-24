// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOtaTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The OTA version.
   * 
   * @example
   * 0.0.1-R-20220708.110604
   */
  otaVersion?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  taskDisplayStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task start time in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      otaVersion: 'OtaVersion',
      taskDisplayStatus: 'TaskDisplayStatus',
      taskId: 'TaskId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaVersion: 'string',
      taskDisplayStatus: 'string',
      taskId: 'string',
      taskStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOtaTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the query results to display.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of over-the-air update tasks.
   */
  taskList?: ListOtaTaskResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of over-the-air update tasks.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListOtaTaskResponseBodyTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

