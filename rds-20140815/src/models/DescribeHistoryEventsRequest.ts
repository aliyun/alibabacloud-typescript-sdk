// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The event status. Valid values:
   * - **Archived**: archived.
   * - **UnArchived**: not archived.
   * - **All**: all.
   * 
   * @example
   * All
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The system event categorization. Valid values:
   * - **Exception**: abnormal event.
   * - **Optimize**: optimization events.
   * - **Notification**: notification event.
   * - **Maintenance**: scheduled maintenance event.
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
   * - **INFO**: notification.
   * - **WARN**: warning.
   * - **CRITICAL**: critical.
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **Inquiring**: inquiring.
   * - **Scheduled**: scheduled.
   * - **Running**: running.
   * - **Succeed**: completed.
   * - **Failed**: failed.
   * - **Canceled**: canceled.
   * > To query multiple statuses, separate them with commas (,).
   * 
   * @example
   * Scheduled
   */
  eventStatus?: string;
  /**
   * @remarks
   * The system event type. This parameter takes effect only when InstanceEventType.N is not specified. Valid values: 
   * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
   * - **SystemMaintenance.Redeploy**: The instance is redeployed due to system maintenance.
   * - **SystemFailure.Reboot**: The instance is restarted due to a system error.
   * - **SystemFailure.Redeploy**: The instance is redeployed due to a system error.
   * - **SystemFailure.Delete**: The instance is released due to an instance creation failure.
   * - **InstanceFailure.Reboot**: The instance is restarted due to an instance error.
   * - **InstanceExpiration.Stop**: The instance is stopped due to subscription expiration.
   * - **InstanceExpiration.Delete**: The instance is released due to subscription expiration.
   * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
   * > The value of this parameter can only be an instance system event, not a cloud disk system event.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The beginning of the time range for the task start time. Tasks whose start time is later than this time are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC +0`. The earliest supported time is 30 days before the current time. If the specified time is more than 30 days before the current time, it is automatically converted to 30 days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The ApsaraDB RDS instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the integer type. Default value: **1**.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to query the most recent region list.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - **Instance**: instance resource.
   * - **Host**: host resource.
   * - **User**: user resource.
   * > If this parameter is not specified, all resource types are queried.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The task ID. Specify this parameter to retrieve data for a specific task.
   * 
   * @example
   * 241535739
   */
  taskId?: string;
  /**
   * @remarks
   * The end of the time range for the task start time. Tasks whose start time is earlier than this time are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC +0`.
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

