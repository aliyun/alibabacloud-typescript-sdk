// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsForRegionResponseBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The event level.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Start to upgrade NodePool nodePool/nodePool-A
   */
  message?: string;
  /**
   * @remarks
   * The reason for the event.
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
   * c82e6987e2961451182edacd74faf****
   */
  clusterId?: string;
  /**
   * @remarks
   * The event data.
   */
  data?: DescribeEventsForRegionResponseBodyEventsData;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * e-9ad04f72-8ee7-46bf-a02c-e4a06b39****
   */
  eventId?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * task
   */
  source?: string;
  /**
   * @remarks
   * The event subject.
   * 
   * @example
   * npdd89dc2b76c04f14b06774883b******
   */
  subject?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2025-05-14T10:00:56+08:00
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * A list of events.
   */
  events?: DescribeEventsForRegionResponseBodyEvents[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If this parameter is empty, all results have been returned.
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeEventsForRegionResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'next_token',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsForRegionResponseBodyEvents },
      nextToken: 'string',
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

