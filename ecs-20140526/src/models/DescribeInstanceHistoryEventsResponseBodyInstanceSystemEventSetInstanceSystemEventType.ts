// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus";
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType";
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute";


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType extends $dara.Model {
  /**
   * @remarks
   * The lifecycle status of the system event.
   */
  eventCycleStatus?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus;
  /**
   * @remarks
   * The time when the system event ended. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-01T06:35:31Z
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
   * The time when the system event was published. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType;
  /**
   * @remarks
   * The extended attribute of the system event.
   */
  extendedAttribute?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute;
  /**
   * @remarks
   * The impact level of the system event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The scheduled start time of the system event. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-06T00:00:00Z
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
   * The type of the resource. Valid values:
   * 
   * *   instance: ECS instance
   * *   ddh: dedicated host
   * *   managehost: physical machine in a smart hosting pool
   * 
   * @example
   * instance
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
      eventCycleStatus: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus,
      eventFinishTime: 'string',
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType,
      extendedAttribute: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute,
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

