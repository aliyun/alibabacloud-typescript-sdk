// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduleTasksResponseBodyDataTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * CreateDBNodes
   */
  action?: string;
  /**
   * @remarks
   * The ID of the scheduled O\\&M task.
   * 
   * @example
   * 86293c29-a03d-4872-b625-***********
   */
  crontabJobId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test_cluster
   */
  dbClusterDescription?: string;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * Running
   */
  dbClusterStatus?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * > This parameter is returned only if `Action` is **CreateDBNodes** or **ModifyDBNodeClass**.
   * 
   * @example
   * 208161753******
   */
  orderId?: string;
  /**
   * @remarks
   * The latest start time of the task. The time is in UTC.
   * 
   * @example
   * 2021-01-28T12:30Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The scheduled time for the transient switchover.
   * 
   * @example
   * 2021-01-28T12:30Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The scheduled start time of the task. The time is in UTC.
   * 
   * @example
   * 2021-01-28T12:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The estimated start time of the task. The time is in UTC.
   * 
   * @example
   * 2021-01-28T12:16Z
   */
  plannedTime?: string;
  /**
   * @remarks
   * The region ID of the task.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task can be canceled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  taskCancel?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 53879cdb-9a00-428e-acaf-ff4cff******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      crontabJobId: 'CrontabJobId',
      DBClusterId: 'DBClusterId',
      dbClusterDescription: 'DbClusterDescription',
      dbClusterStatus: 'DbClusterStatus',
      orderId: 'OrderId',
      plannedEndTime: 'PlannedEndTime',
      plannedFlashingOffTime: 'PlannedFlashingOffTime',
      plannedStartTime: 'PlannedStartTime',
      plannedTime: 'PlannedTime',
      region: 'Region',
      status: 'Status',
      taskCancel: 'TaskCancel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      crontabJobId: 'string',
      DBClusterId: 'string',
      dbClusterDescription: 'string',
      dbClusterStatus: 'string',
      orderId: 'string',
      plannedEndTime: 'string',
      plannedFlashingOffTime: 'string',
      plannedStartTime: 'string',
      plannedTime: 'string',
      region: 'string',
      status: 'string',
      taskCancel: 'boolean',
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

export class DescribeScheduleTasksResponseBodyData extends $dara.Model {
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
   * Details of scheduled tasks.
   */
  timerInfos?: DescribeScheduleTasksResponseBodyDataTimerInfos[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      timerInfos: 'TimerInfos',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': DescribeScheduleTasksResponseBodyDataTimerInfos },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.timerInfos)) {
      $dara.Model.validateArray(this.timerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeScheduleTasksResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, **Successful** is returned. Otherwise, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 936C7025-27A5-4CB1-BB31-540E1F0CCA12
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScheduleTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

