// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsForRegionResponseBodyEventsData } from "./DescribeEventsForRegionResponseBodyEventsData";


export class DescribeEventsForRegionResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-id
   */
  clusterId?: string;
  /**
   * @remarks
   * The description of the event.
   */
  data?: DescribeEventsForRegionResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * A234-1234-1234
   */
  eventId?: string;
  /**
   * @remarks
   * The event source.
   */
  source?: string;
  /**
   * @remarks
   * The object associated with the event.
   * 
   * @example
   * nodePool-id
   */
  subject?: string;
  /**
   * @remarks
   * The time when the event was generated.
   * 
   * @example
   * 2020-12-01T17:31:00Z
   */
  time?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * nodePool_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      data: 'data',
      eventId: 'event_id',
      source: 'source',
      subject: 'subject',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: DescribeEventsForRegionResponseBodyEventsData,
      eventId: 'string',
      source: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

