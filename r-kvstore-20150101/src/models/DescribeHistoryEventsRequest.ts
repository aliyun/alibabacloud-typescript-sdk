// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The archive status of the event. Valid values:
   * - **Archived**: The event is archived.
   * - **UnArchived**: The event is not archived.
   * - **All**: All events.
   * 
   * @example
   * Archived
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The category of the system event. Valid values:
   * - **Exception**: Exception events.
   * - **Optimize**: Optimization events.
   * - **Notification**: Notification events.
   * - **Maintenance**: Scheduled O&M events.
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 5345398
   */
  eventId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **INFO**: Information.
   * - **WARN**: Warning.
   * - **CRITICAL**: Critical.
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - **Inquiring**: Inquiring.
   * - **Scheduled**: Scheduled.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Canceled**: Canceled.
   * > To query events in multiple statuses, separate the statuses with commas (,).
   * 
   * @example
   * Scheduled
   */
  eventStatus?: string;
  /**
   * @remarks
   * The type of the system event. The EventType parameter is valid only when the InstanceEventType.N parameter is not specified. Valid values: 
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system failure.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system failure.
   * - SystemFailure.Delete: The instance is released due to a creation failure.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance failure.
   * - InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
   * - InstanceExpiration.Delete: The subscription instance is released due to expiration.
   * - AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * - AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [Overview of system events](https://help.aliyun.com/document_detail/66574.html). The value of this parameter can only be an instance system event, not a cloud disk system event.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The earliest start time of the query task. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and less than or equal to the maximum integer value. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfnuslkubs****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - **Instance**: Instance resources.
   * - **Host**: Host resources.
   * - **User**: User resources.
   * > If you do not specify this parameter, all resource types are queried.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 578678678
   */
  taskId?: string;
  /**
   * @remarks
   * The latest start time of the query task. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC and later than the earliest start time of the task.
   * 
   * @example
   * 2022-02-02T11:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      eventCategory: 'EventCategory',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      eventCategory: 'string',
      eventId: 'string',
      eventLevel: 'string',
      eventStatus: 'string',
      eventType: 'string',
      fromStartTime: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      securityToken: 'string',
      taskId: 'string',
      toStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

