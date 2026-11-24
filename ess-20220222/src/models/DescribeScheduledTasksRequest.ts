// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTasksRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the scheduled task list. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The recurrence type of the scheduled task. Valid values: 
   * - Daily: The scheduled task is executed once every specified number of days. 
   * - Weekly: The scheduled task is executed on specified days of each week. 
   * - Monthly: The scheduled task is executed on specified days of each month. 
   * - Cron: The scheduled task is executed based on a specified cron expression.
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrence value of the scheduled task.
   * 
   * This parameter is supported only when RecurrenceType is set to Weekly. You can specify multiple values separated by commas (,). For example, the values for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6.
   * 
   * @example
   * 1,2,3
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The region ID of the scaling group to which the scheduled task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * The scaling rules that are used when the scheduled tasks are triggered. This parameter is valid only when a scaling rule is specified for the scheduled task.
   */
  scheduledActions?: string[];
  /**
   * @remarks
   * The IDs of the scheduled tasks to be queried.
   */
  scheduledTaskIds?: string[];
  /**
   * @remarks
   * The names of the scheduled tasks to be queried.
   */
  scheduledTaskNames?: string[];
  /**
   * @remarks
   * Specifies whether the scheduled task is started. Valid values:
   * - true: The task is started.
   * - false: The task is stopped.
   * 
   * @example
   * true
   */
  taskEnabled?: boolean;
  /**
   * @remarks
   * The name of the task. Fuzzy match by keyword is supported.
   * 
   * @example
   * scheduled****
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scheduledActions: 'ScheduledActions',
      scheduledTaskIds: 'ScheduledTaskIds',
      scheduledTaskNames: 'ScheduledTaskNames',
      taskEnabled: 'TaskEnabled',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scheduledActions: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskIds: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskNames: { 'type': 'array', 'itemType': 'string' },
      taskEnabled: 'boolean',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    if(Array.isArray(this.scheduledTaskIds)) {
      $dara.Model.validateArray(this.scheduledTaskIds);
    }
    if(Array.isArray(this.scheduledTaskNames)) {
      $dara.Model.validateArray(this.scheduledTaskNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

