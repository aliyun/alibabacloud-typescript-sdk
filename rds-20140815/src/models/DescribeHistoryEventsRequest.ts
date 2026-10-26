// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The archive status of the event. Valid values:
   * - **Archived**: archived
   * - **UnArchived**: unarchived
   * - **All**: all
   * 
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The system event categorization. Valid values:
   * - **Exception**: abnormal event
   * - **Optimize**: optimization events
   * - **Notification**: notification event
   * - **Maintenance**: scheduled maintenance event
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
   * - **INFO**: information
   * - **WARN**: warning
   * - **CRITICAL**: critical
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * - **Inquiring**: inquiring
   * - **Scheduled**: scheduled
   * - **Running**: running
   * - **Succeed**: succeeded
   * - **Failed**: failed
   * - **Canceled**: canceled
   * > To query events in multiple statuses, separate the statuses with commas (,).
   * 
   * @example
   * Scheduled
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. This parameter is valid only when InstanceEventType.N is not specified. Valid values: 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * - **SystemMaintenance.Redeploy**: The instance undergoes redeployment due to system maintenance.
   * - **SystemFailure.Reboot**: The instance is restarted due to a system fault.
   * - **SystemFailure.Redeploy**: The instance undergoes redeployment due to a system fault.
   * - **SystemFailure.Delete**: The instance is released because instance creation failed.
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance fault.
   * - **InstanceExpiration.Stop**: The subscription instance is stopped due to expiration.
   * - **InstanceExpiration.Delete**: The subscription instance is released due to expiration.
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * > You can specify only instance system events for this parameter. Disk system events are not supported.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The start time of the time range to query the task start time. This parameter specifies that the start time of the task must be later than the specified time. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC +0`. The earliest supported time is 30 days ago. If the specified time is more than 30 days before the current time, it is automatically converted to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The RDS instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of an integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **30**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - **Instance**: instance
   * - **Host**: host
   * - **User**: user
   * > If you do not specify this parameter, all resource types are queried.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the task. Specify this parameter to obtain the data of a specific task.
   * 
   * @example
   * 241535739
   */
  taskId?: string;
  /**
   * @remarks
   * The end time of the time range to query the task start time. This parameter specifies that the start time of the task must be earlier than the specified time. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC +0`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-12T07:06:19Z
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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

