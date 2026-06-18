// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The start time of the task, in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format.
   * 
   * @example
   * 2021-10-20T19:40:00Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The database name associated with the task. This parameter is generally empty.
   * 
   * @example
   * DBName
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the task, in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format.
   * 
   * @example
   * 2021-10-20T20:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task progress, in percentage.
   * 
   * @example
   * 80
   */
  progress?: string;
  /**
   * @remarks
   * The detailed progress information of the task. This parameter is generally empty.
   * 
   * @example
   * ProgressInfo
   */
  progressInfo?: string;
  /**
   * @remarks
   * The scale-out ID if the task is a scale-out task. This value serves as a unique key in the backend.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  scaleOutToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **RUNNING**: The task is running.
   * - **FAILED**: The task failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task action, which serves as the unique key for the backend task type.
   * 
   * @example
   * multi_scale_out
   */
  taskAction?: string;
  /**
   * @remarks
   * The error code of the failed task.
   * 
   * @example
   * TaskErrorCode
   */
  taskErrorCode?: string;
  /**
   * @remarks
   * The error message of the failed task.
   * 
   * @example
   * TaskErrorMessage
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 20089398
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      DBName: 'DBName',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      scaleOutToken: 'ScaleOutToken',
      status: 'Status',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      DBName: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      scaleOutToken: 'string',
      status: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
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

export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of result items.
   */
  items?: DescribeTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6045D78-C119-5A17-9DEA-0F810394E008
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

