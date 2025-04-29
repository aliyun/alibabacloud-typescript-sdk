// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType";


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType extends $dara.Model {
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2018-05-06T02:48:52Z
   */
  eventEndTime?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * e-bp67acfmxazb4p****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2018-05-08T02:43:10Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The type of the event.
   */
  eventType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType;
  /**
   * @remarks
   * The impact level of the event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  static names(): { [key: string]: string } {
    return {
      eventEndTime: 'EventEndTime',
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      impactLevel: 'ImpactLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventEndTime: 'string',
      eventId: 'string',
      eventTime: 'string',
      eventType: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType,
      impactLevel: 'string',
    };
  }

  validate() {
    if(this.eventType && typeof (this.eventType as any).validate === 'function') {
      (this.eventType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

