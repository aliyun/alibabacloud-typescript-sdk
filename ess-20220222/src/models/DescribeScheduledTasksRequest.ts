// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTasksRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The interval at which scheduled task N is repeatedly executed. Valid values:
   * 
   * *   Daily: Scheduled task N is executed once every specified number of days.
   * *   Weekly: Scheduled task N is executed on each specified day of a week.
   * *   Monthly: Scheduled task N is executed on each specified day of a month.
   * *   Cron: Scheduled task N is executed based on the specified Cron expression.
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The number of times scheduled task N is repeatedly executed.
   * 
   * You can specify this parameter only if you set RecurrenceType to Weekly. Separate multiple values with commas (,). The values that correspond to Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6.
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
   * The ID of the scaling group to which the scheduled task belongs.
   * 
   * @example
   * asg-bp1bo5tca4m56nap****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling rules of the scheduled tasks. Once the scheduled tasks are triggered, the scaling rules are executed.
   */
  scheduledActions?: string[];
  /**
   * @remarks
   * The IDs of the scheduled tasks that you want to query.
   */
  scheduledTaskIds?: string[];
  /**
   * @remarks
   * The names of the scheduled tasks that you want to query.
   */
  scheduledTaskNames?: string[];
  /**
   * @remarks
   * Specifies whether scheduled task N is enabled.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  taskEnabled?: boolean;
  /**
   * @remarks
   * The name of scheduled task N. Fuzzy search based on keywords is supported.
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

