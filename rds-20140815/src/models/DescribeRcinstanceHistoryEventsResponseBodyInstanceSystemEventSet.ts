// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus";
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType";
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute";


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
  /**
   * @remarks
   * The lifecycle state of the system event.
   */
  eventCycleStatus?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus;
  /**
   * @remarks
   * The time when the system event ended. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-04-01T06:32:31Z
   */
  eventFinishTime?: string;
  /**
   * @remarks
   * The ID of the system event.
   * 
   * @example
   * e-uf64yvznlao4jl2c****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the system event was published. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType;
  /**
   * @remarks
   * The extended attribute of the system event.
   */
  extendedAttribute?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute;
  /**
   * @remarks
   * The impact level of the event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-yuf59nplc45t2tzn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the scheduled execution of the system event. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-04-01T06:32:31Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The reason why the system event occurred.
   * 
   * @example
   * System maintenance is scheduled due to ***.
   */
  reason?: string;
  /**
   * @remarks
   * The reason code category for the system event.
   * 
   * @example
   * VPCMigrationEcs
   */
  reasonCode?: string;
  /**
   * @remarks
   * The resource type. The value is fixed to INSTANCE.
   * 
   * @example
   * custom
   */
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

