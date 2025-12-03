// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsListResponseBodyEvents extends $dara.Model {
  /**
   * @example
   * ExceptionEvent
   */
  eventCode?: string;
  /**
   * @example
   * None
   */
  eventStatus?: string;
  eventTimeList?: string[];
  instanceDescription?: string;
  /**
   * @example
   * rm-2zecnb327gp36e7lh
   */
  instanceId?: string;
  /**
   * @example
   * 2025-07-23T02:11:07Z
   */
  recoveryTime?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventStatus: 'EventStatus',
      eventTimeList: 'EventTimeList',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      recoveryTime: 'RecoveryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventStatus: 'string',
      eventTimeList: { 'type': 'array', 'itemType': 'string' },
      instanceDescription: 'string',
      instanceId: 'string',
      recoveryTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTimeList)) {
      $dara.Model.validateArray(this.eventTimeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsListResponseBody extends $dara.Model {
  /**
   * @example
   * OtherException:3,MysqlIOException:1
   */
  eventCodeCounts?: string;
  events?: DescribeEventsListResponseBodyEvents[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
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
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      eventCodeCounts: 'EventCodeCounts',
      events: 'Events',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCodeCounts: 'string',
      events: { 'type': 'array', 'itemType': DescribeEventsListResponseBodyEvents },
      pageCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPages: 'number',
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

