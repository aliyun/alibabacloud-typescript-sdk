// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHistoryEventsRequestEventPublishTime extends $dara.Model {
  /**
   * @remarks
   * The end time of the publication time of the system event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2017-12-01T06:32:31Z
   */
  end?: string;
  /**
   * @remarks
   * The start time of the publication time of the system event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
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
   * The end time of the scheduled execution time of the system event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2017-12-01T06:32:31Z
   */
  end?: string;
  /**
   * @remarks
   * The start time of the scheduled execution time of the system event. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
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
   * The lifecycle status of the system event. The EventCycleStatus parameter is valid only when the InstanceEventCycleStatus.N parameter is not specified. Valid values: 
   * 
   * - Scheduled: The event is waiting to be executed.
   * - Avoided: The event is avoided.
   * - Executing: The event is being executed.
   * - Executed: The event execution is completed.
   * - Canceled: The event is canceled.
   * - Failed: The event execution failed.
   * - Inquiring: The event is in the inquiring state.
   * 
   * @example
   * Executed
   */
  eventCycleStatus?: string;
  /**
   * @remarks
   * The IDs of one or more system events. Valid values of N: 1 to 100. Specify multiple values in a repeated list.
   * 
   * @example
   * e-uf64yvznlao4jl2c****
   */
  eventId?: string[];
  /**
   * @remarks
   * The type of the system event. The EventType parameter is valid only when the InstanceEventType.N parameter is not specified. Valid values: 
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system failure.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system failure.
   * - SystemFailure.Delete: The instance is released due to an instance creation failure.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance failure.
   * - InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
   * - InstanceExpiration.Delete: The subscription instance is released due to expiration.
   * - AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * - AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [Overview of system events](https://help.aliyun.com/document_detail/66574.html). The value of this parameter can only be an instance system event, not a disk system event.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  impactLevel?: string;
  /**
   * @remarks
   * The lifecycle statuses of one or more system events. Valid values of N: 1 to 7. Specify multiple values in a repeated list. Valid values:
   * 
   * - Scheduled: The event is waiting to be executed.
   * - Avoided: The event is avoided.
   * - Executing: The event is being executed.
   * - Executed: The event execution is completed.
   * - Canceled: The event is canceled.
   * - Failed: The event execution failed.
   * - Inquiring: The event is in the inquiring state.
   * 
   * @example
   * Executed
   */
  instanceEventCycleStatus?: string[];
  /**
   * @remarks
   * The types of one or more system events. Valid values of N: 1 to 30. Specify multiple values in a repeated list. Valid values:
   * 
   * - SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * - SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
   * - SystemFailure.Reboot: The instance is restarted due to a system failure.
   * - SystemFailure.Redeploy: The instance is redeployed due to a system failure.
   * - SystemFailure.Delete: The instance is released due to an instance creation failure.
   * - InstanceFailure.Reboot: The instance is restarted due to an instance failure.
   * - InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
   * - InstanceExpiration.Delete: The subscription instance is released due to expiration.
   * - AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * - AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * > For more information about event types, see [Overview of system events](https://help.aliyun.com/document_detail/66574.html). The value of this parameter can only be an instance system event, not a disk system event.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  instanceEventType?: string[];
  /**
   * @remarks
   * The instance ID. If you do not specify this parameter, the system events of all instances in the specified region are queried.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging. Valid values: 10 to 100.
   * 
   * Default value:
   * 
   * * If the specified value is greater than 0 and less than 10, the default value is 10.
   * * If the specified value is greater than 100, the default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * f1c9fa9de5752***
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. Use the MaxResults or NextToken parameter for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. Use the MaxResults or NextToken parameter for pagination.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The IDs of one or more resources. Valid values of N: 1 to 100. Specify multiple values in a repeated list. Valid values:
   * 
   * - When `ResourceType` is set to `instance`, the resource ID is the ECS instance ID.
   * - When `ResourceType` is set to `ddh`, the resource ID is the dedicated host ID.
   * - When `ResourceType` is set to `managedhost`, the resource ID is the physical machine ID in an intelligent fully managed resource pool.
   * 
   * If you do not specify this parameter, the system events of all resources of the specified resource type (`ResourceType`) in the specified region (`RegionId`) are queried.
   * 
   * > Use the `ResourceId.N` parameter to specify one or more resource IDs. If you specify both the `ResourceId.N` and `InstanceId` parameters, the `ResourceId.N` parameter takes precedence by default.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
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
   * The list of tags supported by the system event.
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

