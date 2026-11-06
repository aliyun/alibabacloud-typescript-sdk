// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The event archive status. Valid values:
   * 
   * - Archived: The event is archived.
   * 
   * - UnArchived: The event is not archived.
   * 
   * - All: All events.
   * 
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The system event category. Valid values:
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
   * The event ID.
   * 
   * @example
   * 5345398
   */
  eventId?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - **INFO**: Notification.
   * - **WARN**: Warning.
   * - **CRITICAL**: Critical.
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **Inquiring**: Inquiring.
   * - **Scheduled**: Scheduled.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Canceled**: Canceled.
   * > To query multiple statuses, separate them with commas (,).
   * 
   * @example
   * Succeed
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. This parameter is valid only when InstanceEventType.N is not specified. Valid values: 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * - **SystemMaintenance.Redeploy**: The instance is redeployed due to system maintenance.
   * - **SystemFailure.Reboot**: The instance is restarted due to a system failure.
   * - **SystemFailure.Redeploy**: The instance is redeployed due to a system failure.
   * - **SystemFailure.Delete**: The instance is released due to a creation failure.
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance failure.
   * - **InstanceExpiration.Stop**: The subscription instance is stopped due to expiration.
   * - **InstanceExpiration.Delete**: The subscription instance is released due to expiration.
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * > The value of this parameter must be an instance system event, not a disk system event.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The start time of the task start time range. This parameter specifies that only tasks whose start time is later than this value are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The earliest supported time is 30 days ago. If the specified time is more than 30 days before the current time, it is automatically changed to 30 days ago.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The resource ID. This parameter is used to query tasks of the corresponding resources. Separate multiple IDs with commas (,). You can specify up to 30 IDs. By default, this parameter is left empty, which indicates that no limit is applied.
   * 
   * > Only cluster IDs are supported.
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - **Instance**: Instance resources.
   * - **Instance**: Host: Host resources.
   * - **Instance**: User: User resources.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the scheduled task to be canceled.
   * > * You can call the [DescribeScheduleTasks](https://help.aliyun.com/document_detail/199648.html) operation to query the information about all scheduled tasks under the current account, including the task IDs.
   * * Only tasks in the pending state (the return value of the `Status` parameter is `pending`) can be canceled.
   * 
   * @example
   * 32077515
   */
  taskId?: string;
  /**
   * @remarks
   * The end time of the task start time range. This parameter specifies that only tasks whose start time is earlier than this value are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-01-03T12:31:03Z
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
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

