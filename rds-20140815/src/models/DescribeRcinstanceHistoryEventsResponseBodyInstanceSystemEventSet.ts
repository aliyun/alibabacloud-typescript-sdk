// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus";
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType";
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute";


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
  eventCycleStatus?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus;
  eventFinishTime?: string;
  eventId?: string;
  eventPublishTime?: string;
  eventType?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType;
  extendedAttribute?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute;
  impactLevel?: string;
  instanceId?: string;
  notBefore?: string;
  reason?: string;
  reasonCode?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCycleStatus: 'EventCycleStatus',
      eventFinishTime: 'EventFinishTime',
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      impactLevel: 'ImpactLevel',
      instanceId: 'InstanceId',
      notBefore: 'NotBefore',
      reason: 'Reason',
      reasonCode: 'ReasonCode',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCycleStatus: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus,
      eventFinishTime: 'string',
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType,
      extendedAttribute: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute,
      impactLevel: 'string',
      instanceId: 'string',
      notBefore: 'string',
      reason: 'string',
      reasonCode: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.eventCycleStatus && typeof (this.eventCycleStatus as any).validate === 'function') {
      (this.eventCycleStatus as any).validate();
    }
    if(this.eventType && typeof (this.eventType as any).validate === 'function') {
      (this.eventType as any).validate();
    }
    if(this.extendedAttribute && typeof (this.extendedAttribute as any).validate === 'function') {
      (this.extendedAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

