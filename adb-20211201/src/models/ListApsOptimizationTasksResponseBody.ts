// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsOptimizationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The computing resources used by the optimization job.
   * 
   * @example
   * 2
   */
  computeUnit?: string;
  /**
   * @remarks
   * The time when the optimization job was created.
   * 
   * @example
   * 2022-01-23T02:18Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the optimization job was modified.
   * 
   * @example
   * 2022-09-30T00:15Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The type of the lifecycle management policy.
   * 
   * @example
   * StrategyValue
   */
  strategyType?: string;
  /**
   * @remarks
   * The description of the optimization job.
   * 
   * @example
   * test
   */
  taskDesc?: string;
  /**
   * @remarks
   * The execution duration of the optimization job.
   * 
   * @example
   * 1000
   */
  taskDuration?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * sj-hz******
   */
  taskId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * -
   */
  taskMessage?: string;
  /**
   * @remarks
   * The execution status. Valid values:
   * 
   * 1.  NEW
   * 2.  RUNNING
   * 3.  SUCCESS
   * 4.  STOPPED
   * 5.  FAILED
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      computeUnit: 'ComputeUnit',
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      modifiedTime: 'ModifiedTime',
      strategyType: 'StrategyType',
      taskDesc: 'TaskDesc',
      taskDuration: 'TaskDuration',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeUnit: 'string',
      createdTime: 'string',
      DBClusterId: 'string',
      modifiedTime: 'string',
      strategyType: 'string',
      taskDesc: 'string',
      taskDuration: 'number',
      taskId: 'string',
      taskMessage: 'string',
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

export class ListApsOptimizationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The queried optimization jobs.
   * 
   * @example
   * -
   */
  items?: ListApsOptimizationTasksResponseBodyItems[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
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
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-3EEC-******-9F06-******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListApsOptimizationTasksResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

