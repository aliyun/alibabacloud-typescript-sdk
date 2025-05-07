// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsRequestEventPublishTime } from "./DescribeRcinstanceHistoryEventsRequestEventPublishTime";
import { DescribeRCInstanceHistoryEventsRequestNotBefore } from "./DescribeRcinstanceHistoryEventsRequestNotBefore";
import { DescribeRCInstanceHistoryEventsRequestTag } from "./DescribeRcinstanceHistoryEventsRequestTag";


export class DescribeRCInstanceHistoryEventsRequest extends $dara.Model {
  eventPublishTime?: DescribeRCInstanceHistoryEventsRequestEventPublishTime;
  notBefore?: DescribeRCInstanceHistoryEventsRequestNotBefore;
  eventCycleStatus?: string;
  eventId?: string[];
  eventType?: string;
  impactLevel?: string;
  instanceEventCycleStatus?: string[];
  instanceEventType?: string[];
  instanceId?: string;
  maxResults?: string;
  pageNumber?: string;
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
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

