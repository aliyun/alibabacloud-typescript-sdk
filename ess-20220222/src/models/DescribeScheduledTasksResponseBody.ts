// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTasksResponseBodyScheduledTasksWarmPoolCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * The expected number of instances covered by the warm pool. The system maintains the sum of the current number of instances in the scaling group and the number of instances in the warm pool at this value.
   * 
   * @example
   * 5
   */
  desiredGroupPreparedCapacity?: number;
  /**
   * @remarks
   * The minimum number of instances in the warm pool.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      desiredGroupPreparedCapacity: 'DesiredGroupPreparedCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredGroupPreparedCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBodyScheduledTasks extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled task.
   * 
   * @example
   * Test scheduled task.
   */
  description?: string;
  /**
   * @remarks
   * The expected number of instances in the scaling group. This parameter takes effect when the scaling method of the scheduled task is set to adjust the number of instances in the scaling group.
   * 
   * @example
   * 10
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * The time period during which a retry is performed after the scheduled task fails to be triggered. Unit: seconds. Valid values: 0 to 21600.
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * The time at which the scheduled task is triggered. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2014-08-18T10:52Z
   */
  launchTime?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. This parameter takes effect when the scaling method of the scheduled task is set to adjust the number of instances in the scaling group.
   * 
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group. This parameter takes effect when the scaling method of the scheduled task is set to adjust the number of instances in the scaling group.
   * 
   * @example
   * 0
   */
  minValue?: number;
  /**
   * @remarks
   * The end time of the recurring scheduled task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2014-08-20T16:55Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * The recurrence type of the scheduled task.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrence value of the scheduled task.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The ID of the scaling group that executes the scheduled task.
   * 
   * @example
   * asg-bp1bo5tca4m56nap****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling rule used when the scheduled task is executed. This parameter is returned only when a scaling rule is specified for the scheduled task.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:1406926474****:scalingrule/asr-bp1id5rhu8edp7kd****
   */
  scheduledAction?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * edRtShc57WGXdt8TlPbr****
   */
  scheduledTaskId?: string;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * scheduled****
   */
  scheduledTaskName?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is started. Valid values: 
   * - true: The task is started.
   * - false: The task is stopped.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  taskEnabled?: boolean;
  /**
   * @remarks
   * The warm pool capacity configurations of the scaling group.
   */
  warmPoolCapacityOptions?: DescribeScheduledTasksResponseBodyScheduledTasksWarmPoolCapacityOptions;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desiredCapacity: 'DesiredCapacity',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
      warmPoolCapacityOptions: 'WarmPoolCapacityOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desiredCapacity: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      maxValue: 'number',
      minValue: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskId: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
      warmPoolCapacityOptions: DescribeScheduledTasksResponseBodyScheduledTasksWarmPoolCapacityOptions,
    };
  }

  validate() {
    if(this.warmPoolCapacityOptions && typeof (this.warmPoolCapacityOptions as any).validate === 'function') {
      (this.warmPoolCapacityOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the scheduled tasks.
   */
  scheduledTasks?: DescribeScheduledTasksResponseBodyScheduledTasks[];
  /**
   * @remarks
   * The total number of scheduled tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scheduledTasks: 'ScheduledTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scheduledTasks: { 'type': 'array', 'itemType': DescribeScheduledTasksResponseBodyScheduledTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scheduledTasks)) {
      $dara.Model.validateArray(this.scheduledTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

