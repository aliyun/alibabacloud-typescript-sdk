// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsForRegionResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * Started
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeEventsForRegionResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsForRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: DescribeEventsForRegionResponseBodyEvents[];
  /**
   * @remarks
   * The pagination details.
   */
  pageInfo?: DescribeEventsForRegionResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsForRegionResponseBodyEvents },
      pageInfo: DescribeEventsForRegionResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

