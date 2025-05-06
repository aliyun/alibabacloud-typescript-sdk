// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduleTasksResponseBodyDataTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The type of the scheduled tasks.
   * 
   * @example
   * CreateDBNodes
   */
  action?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
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
   * The description of the cluster.
   * 
   * @example
   * test_cluster
   */
  dbClusterDescription?: string;
  /**
   * @remarks
   * The state of the cluster.
   * 
   * @example
   * Running
   */
  dbClusterStatus?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * >  This parameter is returned only when you set the `Action` parameter to **CreateDBNodes** or **ModifyDBNodeClass**.
   * 
   * @example
   * 208161753******
   */
  orderId?: string;
  /**
   * @remarks
   * The latest start time of the task that you specified when you created the scheduled task. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-28T12:30Z
   */
  plannedEndTime?: string;
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest start time of the task that you specified when you created the scheduled task. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-28T12:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The expected start time of the task. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-28T12:16Z
   */
  plannedTime?: string;
  /**
   * @remarks
   * The ID of the region in which the scheduled task runs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The state of the scheduled task.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task can be canceled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  taskCancel?: boolean;
  /**
   * @remarks
   * The ID of the task.
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

