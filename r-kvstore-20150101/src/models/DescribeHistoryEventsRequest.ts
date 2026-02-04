// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   **Archived**
   * *   **UnArchived**
   * *   **All**
   * 
   * @example
   * Archived
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The system event category. Valid values:
   * 
   * *   **Exception**: abnormal events.
   * *   **Optimize**: optimization events.
   * *   **Notification**: Notification events.
   * *   **Maintenance**: scheduled maintenance events.
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 5345398
   */
  eventId?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **CRITICAL**
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   **Inquiring**
   * *   **Scheduled**: Planned
   * *   **Running**
   * *   **Succeed**
   * *   **Failed**
   * *   **Canceled**
   * 
   * > Separate multiple states with commas (,).
   * 
   * @example
   * Scheduled
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. This parameter takes effect only when InstanceEventType.N is not specified. Valid values:
   * 
   * *   SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * *   SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * *   SystemFailure.Reboot: The instance is restarted due to a system error.
   * *   SystemFailure.Redeploy: The instance is redeployed due to a system error.
   * *   SystemFailure.Delete: The instance is released due to an instance creation failure.
   * *   InstanceFailure.Reboot: The instance is restarted due to an instance error.
   * *   InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
   * *   InstanceExpiration.Delete: The subscription instance is released due to expiration.
   * *   AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * *   AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [Overview of system events](https://help.aliyun.com/document_detail/66574.html). The values of this parameter are applicable only to instance system events, but not to disk system events.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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
   * 
   * *   **Instance**: instance resources.
   * *   **Host**: host resources.
   * *   **User**: user resources
   * 
   * > If you do not specify this parameter, events of all resource types are queried.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The task IDs.
   * 
   * @example
   * 578678678
   */
  taskId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Only events that have a start time earlier than or equal to the time specified by this parameter are queried.
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

