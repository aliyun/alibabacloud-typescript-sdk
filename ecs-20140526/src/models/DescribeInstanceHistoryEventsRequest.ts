// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHistoryEventsRequestEventPublishTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the system event is published. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-01T06:32:31Z
   */
  end?: string;
  /**
   * @remarks
   * The start of the time range during which the system event is published. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequestNotBefore extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the system event is scheduled to execute. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-01T06:32:31Z
   */
  end?: string;
  /**
   * @remarks
   * The start of the time range during which the system event is scheduled to execute. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsRequest extends $dara.Model {
  eventPublishTime?: DescribeInstanceHistoryEventsRequestEventPublishTime;
  notBefore?: DescribeInstanceHistoryEventsRequestNotBefore;
  /**
   * @remarks
   * The lifecycle status of the system event. EventCycleStatus takes effect only when InstanceEventCycleStatus.N is not specified. Valid values: 
   * 
   * - Scheduled: The event is waiting to be executed.
   * - Avoided: The event has been avoided.
   * - Executing: The event is being executed.
   * - Executed: The event has been executed.
   * - Canceled: The event has been canceled.
   * - Failed: The event execution failed.
   * - Inquiring: The event is being inquired.
   * 
   * @example
   * Executed
   */
  eventCycleStatus?: string;
  /**
   * @remarks
   * One or more system event IDs. Valid values of N: 1 to 100. Specify multiple values in a repeated list format.
   * 
   * @example
   * e-uf64yvznlao4jl2c****
   */
  eventId?: string[];
  /**
   * @remarks
   * The type of the system event. EventType takes effect only when InstanceEventType.N is not specified. Valid values: 
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system error.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system error.
   * - SystemFailure.Delete: The instance is released due to an instance creation failure.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance error.
   * - InstanceExpiration.Stop: The instance is stopped due to subscription expiration.
   * - InstanceExpiration.Delete: The instance is released due to subscription expiration.
   * - AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * - AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [System event overview](https://help.aliyun.com/document_detail/66574.html). The value of this parameter must be an instance system event, not a disk system event.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * null
   */
  impactLevel?: string;
  /**
   * @remarks
   * One or more lifecycle statuses of the system event. Valid values of N: 1 to 7. Specify multiple values in a repeated list format. Valid values:
   * 
   * - Scheduled: The event is waiting to be executed.
   * - Avoided: The event has been avoided.
   * - Executing: The event is being executed.
   * - Executed: The event has been executed.
   * - Canceled: The event has been canceled.
   * - Failed: The event execution failed.
   * - Inquiring: The event is being inquired.
   * 
   * @example
   * Executed
   */
  instanceEventCycleStatus?: string[];
  /**
   * @remarks
   * One or more types of the system event. Valid values of N: 1 to 30. Specify multiple values in a repeated list format. Valid values:
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system error.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system error.
   * - SystemFailure.Delete: The instance is released due to an instance creation failure.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance error.
   * - InstanceExpiration.Stop: The instance is stopped due to subscription expiration.
   * - InstanceExpiration.Delete: The instance is released due to subscription expiration.
   * - AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * - AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [System event overview](https://help.aliyun.com/document_detail/66574.html). The value of this parameter must be an instance system event, not a disk system event.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  instanceEventType?: string[];
  /**
   * @remarks
   * The instance ID. If you do not specify an instance ID, the system events of all instances in the specified region are queried.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Valid values: 10 to 100.
   * 
   * Default value:
   * 
   * * When the settings value is greater than 0 but less than 10, the default value is 10.
   * * When the settings value is greater than 100, the default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * f1c9fa9de5752***
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be deprecated. Use MaxResults or NextToken for paginated queries instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated. Use MaxResults or NextToken for paginated queries instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * One or more resource IDs. Valid values of N: 1 to 100. Specify multiple values in a repeated list format. Valid values:
   * 
   * - When `ResourceType=instance`, the resource ID is the ECS instance ID.
   * - When `ResourceType=ddh`, the resource ID is the dedicated host ID.
   * - When `ResourceType=managedhost`, the resource ID is the physical machine ID in an intelligent fully managed resource pool.
   * 
   * If you do not specify this parameter, the system events of all resources of the specified resource type (`ResourceType`) in the specified region (`RegionId`) are queried.
   * 
   * > Use `ResourceId.N` to specify one or more resource IDs. If you specify both `ResourceId.N` and `InstanceId`, `ResourceId.N` takes precedence by default.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * - instance: ECS instance.
   * - ddh: dedicated host.
   * - managedhost: physical machine in an intelligent fully managed resource pool.
   * 
   * Default value: instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags supported by system events.
   */
  tag?: DescribeInstanceHistoryEventsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      eventPublishTime: 'EventPublishTime',
      notBefore: 'NotBefore',
      eventCycleStatus: 'EventCycleStatus',
      eventId: 'EventId',
      eventType: 'EventType',
      impactLevel: 'ImpactLevel',
      instanceEventCycleStatus: 'InstanceEventCycleStatus',
      instanceEventType: 'InstanceEventType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPublishTime: DescribeInstanceHistoryEventsRequestEventPublishTime,
      notBefore: DescribeInstanceHistoryEventsRequestNotBefore,
      eventCycleStatus: 'string',
      eventId: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      impactLevel: 'string',
      instanceEventCycleStatus: { 'type': 'array', 'itemType': 'string' },
      instanceEventType: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsRequestTag },
    };
  }

  validate() {
    if(this.eventPublishTime && typeof (this.eventPublishTime as any).validate === 'function') {
      (this.eventPublishTime as any).validate();
    }
    if(this.notBefore && typeof (this.notBefore as any).validate === 'function') {
      (this.notBefore as any).validate();
    }
    if(Array.isArray(this.eventId)) {
      $dara.Model.validateArray(this.eventId);
    }
    if(Array.isArray(this.instanceEventCycleStatus)) {
      $dara.Model.validateArray(this.instanceEventCycleStatus);
    }
    if(Array.isArray(this.instanceEventType)) {
      $dara.Model.validateArray(this.instanceEventType);
    }
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

