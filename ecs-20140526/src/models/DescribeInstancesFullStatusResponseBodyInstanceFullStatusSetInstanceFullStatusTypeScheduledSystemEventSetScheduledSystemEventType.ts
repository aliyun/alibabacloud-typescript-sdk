// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus";
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType";
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute";


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType extends $dara.Model {
  /**
   * @remarks
   * The state of the system event.
   */
  eventCycleStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus;
  /**
   * @remarks
   * The system event ID.
   * 
   * @example
   * e-bp1hygp5b04o56l0****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the system event was published. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType;
  /**
   * @remarks
   * The extended attributes of system events generated for instances that have local disks attached.
   * 
   * The return values vary based on the system event type.
   * 
   * If the system event type is not one of the following types, this parameter is empty:
   * 
   * *   SystemMaintenance.StopAndRepair
   * *   SystemMaintenance.CleanInactiveDisks
   * *   SecurityPunish.Locked
   * *   SecurityPunish.WebsiteBanned
   * *   SystemUpgrade.Migrate
   * *   SystemMaintenance.RebootAndIsolateErrorDisk
   * *   SystemMaintenance.RebootAndReInitErrorDisk
   * *   SystemMaintenance.ReInitErrorDisk
   * *   SystemMaintenance.IsolateErrorDisk
   */
  extendedAttribute?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute;
  /**
   * @remarks
   * The impact level of the system event.
   * 
   * >  If the user is not in a whitelist, this parameter is empty.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The scheduled time at which to execute the O\\&M task related to the system event. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The reason why the system event was scheduled.
   * 
   * >  If the exception cause is not detected, this parameter is empty.
   * 
   * @example
   * A simulated event.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      eventCycleStatus: 'EventCycleStatus',
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      impactLevel: 'ImpactLevel',
      notBefore: 'NotBefore',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCycleStatus: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus,
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType,
      extendedAttribute: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute,
      impactLevel: 'string',
      notBefore: 'string',
      reason: 'string',
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

