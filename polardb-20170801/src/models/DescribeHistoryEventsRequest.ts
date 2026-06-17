// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The event status. Valid values:
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
   * The category of the system event. Valid values:
   * 
   * - **Exception**: anomalous activity
   * 
   * - **Optimize**: optimization events
   * 
   * - **Notification**: notification events
   * 
   * - **Maintenance**: scheduled O\\&M events
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
   * The event level. Valid values are:
   * 
   * - **INFO**: Notification
   * 
   * - **WARN**: Warning
   * 
   * - **CRITICAL**: Critical
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - **Inquiring**: The event is being inquired.
   * 
   * - **Scheduled**: The event is scheduled.
   * 
   * - **Running**: The event is in progress.
   * 
   * - **Succeed**: The event is successful.
   * 
   * - **Failed**: The event failed.
   * 
   * - **Canceled**: The event is canceled.
   * 
   * > To query multiple statuses, separate them with commas (,).
   * 
   * @example
   * Succeed
   */
  eventStatus?: string;
  /**
   * @remarks
   * The type of the system event. This parameter is valid only when InstanceEventType.N is not specified. Valid values:
   * 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * 
   * - **SystemMaintenance.Redeploy**: The instance is redeployed due to system maintenance.
   * 
   * - **SystemFailure.Reboot**: The instance is restarted due to a system fault.
   * 
   * - **SystemFailure.Redeploy**: The instance is redeployed due to a system fault.
   * 
   * - **SystemFailure.Delete**: The instance is released because it failed to be created.
   * 
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance fault.
   * 
   * - **InstanceExpiration.Stop**: The subscription instance is stopped because its subscription expires.
   * 
   * - **InstanceExpiration.Delete**: The subscription instance is released because its subscription expires.
   * 
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * 
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > The value of this parameter can only be an instance system event, not a disk system event.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The beginning of the time range to query tasks based on their start time. The tasks that started after this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data from the last 30 days. If the specified time is more than 30 days ago, the system automatically sets it to 30 days ago.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The resource ID. Use this parameter to query tasks for a specific resource. To query tasks for multiple resources, separate the resource IDs with commas (,). You can specify up to 30 resource IDs. If you leave this parameter empty, all resources are queried.
   * 
   * > Currently, only cluster IDs are supported.
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to query. The default value is 1.
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
   * 
   * - **Instance**: instance resource
   * 
   * - **Host**: host resource
   * 
   * - **User**: user resource
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the scheduled task that you want to cancel.
   * 
   * > - You can call the [DescribeScheduleTasks](https://help.aliyun.com/document_detail/199648.html) operation to view information about all scheduled tasks under the current account, including task IDs.
   * 
   * - Only tasks that are pending execution (the `Status` parameter returns `pending`) can be canceled.
   * 
   * @example
   * 32077515
   */
  taskId?: string;
  /**
   * @remarks
   * The end of the time range to query tasks based on their start time. The tasks that started before this time are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC`.
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

