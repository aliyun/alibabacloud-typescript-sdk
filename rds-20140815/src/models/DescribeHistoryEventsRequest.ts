// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The resource status. Valid values: **importing**, failed, checksuccess, and deleted.
   * 
   * @example
   * deleted
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The system event category. For more information, see [View the event history of an ApsaraDB RDS instance](https://help.aliyun.com/document_detail/129759.html).
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
   * The event level. Valid values: ***high***, **medium**, and **low**.
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The status of the exception. Valid values:
   * 
   * *   1: pending
   * *   2: ignored
   * *   4: confirmed
   * *   8: marked as false positive
   * *   16: handling
   * *   32: handled
   * *   64: expired
   * 
   * @example
   * 1
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
   * >  For more information, see Overview. The values of this parameter are applicable only to instance system events, but not to disk system events.
   * 
   * @example
   * SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Only tasks that have a start time later than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The start time can be up to 30 days earlier than the current time. If you set this parameter to a time more than 30 days earlier than the current time, this time is automatically converted to a time that is exactly 30 days earlier than the current time.
   * 
   * This parameter is required.
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
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the most recent region list.
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
   * The resource type. Set the value to **INSTANCE**.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The task ID. This value is used to query the data of a specific task.
   * 
   * @example
   * 241535739
   */
  taskId?: string;
  /**
   * @remarks
   * The end of the time range to query. Only tasks that have a start time earlier than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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

