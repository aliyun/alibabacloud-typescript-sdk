// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventItemsEventItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who executed the event.
   * 
   * @example
   * 22973492**********
   */
  callerUid?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 11000053
   */
  eventId?: number;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * ModifySecurityIPList
   */
  eventName?: string;
  /**
   * @remarks
   * The request or context parameters of the event.
   * 
   * @example
   * {\\"Domain\\": \\"rds-inc-share.aliyuncs.com\\", \\"Api\\": \\"ReleaseInstancePublicConnection\\"}
   */
  eventPayload?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * FROM_USER
   */
  eventReason?: string;
  /**
   * @remarks
   * The time when the event was recorded. The time is slightly later than the time the event occurred.
   * 
   * @example
   * 2019-08-20T01:12:49Z
   */
  eventRecordTime?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2019-08-20T01:08:22Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * NetworkManagement
   */
  eventType?: string;
  /**
   * @remarks
   * The type of the user who executed the event.
   * 
   * @example
   * SYSTEM
   */
  eventUserType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource associated with the event. Only instance IDs are supported for this parameter.
   * 
   * @example
   * rm-bp1z3065m9976ix8a
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource associated with the event. Only instances are supported for this parameter.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
      eventId: 'EventId',
      eventName: 'EventName',
      eventPayload: 'EventPayload',
      eventReason: 'EventReason',
      eventRecordTime: 'EventRecordTime',
      eventTime: 'EventTime',
      eventType: 'EventType',
      eventUserType: 'EventUserType',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'number',
      eventId: 'number',
      eventName: 'string',
      eventPayload: 'string',
      eventReason: 'string',
      eventRecordTime: 'string',
      eventTime: 'string',
      eventType: 'string',
      eventUserType: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

