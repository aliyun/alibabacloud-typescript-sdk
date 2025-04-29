// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsRequestEventPublishTime } from "./DescribeInstanceHistoryEventsRequestEventPublishTime";
import { DescribeInstanceHistoryEventsRequestNotBefore } from "./DescribeInstanceHistoryEventsRequestNotBefore";
import { DescribeInstanceHistoryEventsRequestTag } from "./DescribeInstanceHistoryEventsRequestTag";


export class DescribeInstanceHistoryEventsRequest extends $dara.Model {
  eventPublishTime?: DescribeInstanceHistoryEventsRequestEventPublishTime;
  notBefore?: DescribeInstanceHistoryEventsRequestNotBefore;
  /**
   * @remarks
   * The lifecycle state of the system event. This parameter takes effect only when InstanceEventCycleStatus.N is not specified. Valid values:
   * 
   * *   Scheduled
   * *   Avoided
   * *   Executing
   * *   Executed
   * *   Canceled
   * *   Failed
   * *   Inquiring
   * 
   * @example
   * Executed
   */
  eventCycleStatus?: string;
  /**
   * @remarks
   * The ID of system event N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values.
   * 
   * @example
   * e-uf64yvznlao4jl2c****
   */
  eventId?: string[];
  /**
   * @remarks
   * The type of the system event. This parameter takes effect only when InstanceEventType.N is not specified. Valid values:
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
   * >  For more information, see [Overview](https://help.aliyun.com/document_detail/66574.html). The values of this parameter are applicable only to instance system events, but not to disk system events.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  impactLevel?: string;
  /**
   * @remarks
   * The lifecycle state of system event N. Valid values of N: 1 to 7. You can repeat this parameter to pass multiple values. Valid values:
   * 
   * *   Scheduled
   * *   Avoided
   * *   Executing
   * *   Executed
   * *   Canceled
   * *   Failed
   * *   Inquiring
   * 
   * @example
   * Executed
   */
  instanceEventCycleStatus?: string[];
  /**
   * @remarks
   * The type of system event N. Valid values of N: 1 to 30. You can repeat this parameter to pass multiple values. Valid values:
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
   * >  For more information, see [Overview](https://help.aliyun.com/document_detail/66574.html). The values of this parameter are applicable only to instance system events, but not to disk system events.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  instanceEventType?: string[];
  /**
   * @remarks
   * The ID of the instance. If this parameter is not specified, the system events of all instances in the specified region are queried.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100.
   * 
   * Default values:
   * 
   * *   If you set a value greater than 0 and less than 10, the default value is 10.
   * *   If you set this parameter to a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * f1c9fa9de5752***
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * >  This parameter is deprecated. We recommend that you specify MaxResults or NextToken for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter is deprecated. We recommend that you specify MaxResults or NextToken for a paged query.
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
   * The ID of resource N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values. Valid values:
   * 
   * *   When `ResourceType` is set to instance, ResourceId.N specifies the ID of instance N.
   * *   When `ResourceType` is set to ddh, ResourceId.N specifies the ID of dedicated host N.
   * *   When `ResourceType` is set to managedhost, ResourceId.N specifies the ID of physical machine N from a smart hosting pool.
   * 
   * If this parameter is not specified, the system events of all resources of the type specified by `ResourceType` in the region specified by `RegionId` are queried.
   * 
   * >  We recommend that you use `ResourceId.N` to specify one or more resource IDs. If you specify both `ResourceId.N` and `InstanceId`, `ResourceId.N` takes precedence by default.
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
   * *   instance: ECS instance
   * *   ddh: dedicated host
   * *   managehost: physical machine in a smart hosting pool
   * 
   * Default value: instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
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

