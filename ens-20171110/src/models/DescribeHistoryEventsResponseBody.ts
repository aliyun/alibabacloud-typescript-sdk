// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyEvents extends $dara.Model {
  /**
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @example
   * WARN
   */
  eventLevel?: string;
  /**
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @example
   * Instance:SystemFailure.Reboot
   */
  eventType?: string;
  /**
   * @example
   * {}
   */
  extendedAttribute?: string;
  /**
   * @example
   * 1715578245000
   */
  notBefore?: number;
  /**
   * @example
   * 1715578245000
   */
  publishTime?: number;
  reason?: string;
  /**
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      notBefore: 'NotBefore',
      publishTime: 'PublishTime',
      reason: 'Reason',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventLevel: 'string',
      eventStatus: 'string',
      eventType: 'string',
      extendedAttribute: 'string',
      notBefore: 'number',
      publishTime: 'number',
      reason: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryEventsResponseBody extends $dara.Model {
  events?: DescribeHistoryEventsResponseBodyEvents[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5359599C-F656-57BD-8A0D-329A2FD511A6
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeHistoryEventsResponseBodyEvents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

