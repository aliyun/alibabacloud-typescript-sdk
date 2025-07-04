// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsRequestEventPublishTime } from "./DescribeRcinstanceHistoryEventsRequestEventPublishTime";
import { DescribeRCInstanceHistoryEventsRequestNotBefore } from "./DescribeRcinstanceHistoryEventsRequestNotBefore";
import { DescribeRCInstanceHistoryEventsRequestTag } from "./DescribeRcinstanceHistoryEventsRequestTag";


export class DescribeRCInstanceHistoryEventsRequest extends $dara.Model {
  eventPublishTime?: DescribeRCInstanceHistoryEventsRequestEventPublishTime;
  notBefore?: DescribeRCInstanceHistoryEventsRequestNotBefore;
  /**
   * @remarks
   * The lifecycle state of the system event. This parameter is valid only when the **InstanceEventCycleStatus.N** parameter is not specified. Valid values:
   * 
   * *   **Scheduled**
   * *   **Avoided**
   * *   **Executing**
   * *   **Executed**
   * *   **Canceled**
   * *   **Failed**
   * *   **Inquiring**
   * 
   * @example
   * Executed
   */
  eventCycleStatus?: string;
  /**
   * @remarks
   * The IDs of one or more system events.
   */
  eventId?: string[];
  /**
   * @remarks
   * The system event type. This parameter is valid only when the **InstanceEventType.N** parameter is not specified. Valid values:
   * 
   * *   **SystemMaintenance.Reboot**: The instance was restarted due to system maintenance.
   * *   **SystemMaintenance.Redeploy**: The instance was redeployed due to system maintenance.
   * *   **SystemFailure.Reboot**: The instance was restarted due to system failures.
   * *   **SystemFailure.Redeploy**: The instance was redeployed due to system failures.
   * *   **SystemFailure.Delete**: The instance was released due to an instance creation failure.
   * *   **InstanceFailure.Reboot**: The instance was restarted due to an instance error.
   * *   **InstanceExpiration.Stop**: The subscription instance was stopped due to expiration.
   * *   **InstanceExpiration.Delete**: The subscription instance was released due to expiration.
   * *   **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
   * *   **AccountUnbalanced.Delete**: The pay-as-you-go instance was released due to an overdue payment.
   * 
   * >  The values of this parameter are applicable only to instance system events, but not to disk system events.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
  eventType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  impactLevel?: string;
  /**
   * @remarks
   * The lifecycle states of system events.
   */
  instanceEventCycleStatus?: string[];
  /**
   * @remarks
   * The type of system event N.
   */
  instanceEventType?: string[];
  /**
   * @remarks
   * The instance ID. If you do not specify an instance ID, system events of all instances in the specified region are queried.
   * 
   * @example
   * rc-yuf59nplc45t2tzn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  maxResults?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group that you want to query.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of resource N.
   */
  resourceId?: string[];
  /**
   * @remarks
   * An array that consists of the tags that are supported by system events.
   */
  tag?: DescribeRCInstanceHistoryEventsRequestTag[];
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPublishTime: DescribeRCInstanceHistoryEventsRequestEventPublishTime,
      notBefore: DescribeRCInstanceHistoryEventsRequestNotBefore,
      eventCycleStatus: 'string',
      eventId: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      impactLevel: 'string',
      instanceEventCycleStatus: { 'type': 'array', 'itemType': 'string' },
      instanceEventType: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      maxResults: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsRequestTag },
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

