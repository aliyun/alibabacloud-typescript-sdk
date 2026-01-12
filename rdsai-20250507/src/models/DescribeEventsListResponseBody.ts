// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsListResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * ExceptionEvent
   */
  eventCode?: string;
  /**
   * @remarks
   * The state of the event.
   * 
   * @example
   * None
   */
  eventStatus?: string;
  /**
   * @remarks
   * The event.
   */
  eventTimeList?: string[];
  /**
   * @remarks
   * The description of the instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2zecnb327gp36e7lh
   */
  instanceId?: string;
  /**
   * @remarks
   * The recovery time.
   * 
   * @example
   * 2025-07-23T02:11:07Z
   */
  recoveryTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventStatus: 'EventStatus',
      eventTimeList: 'EventTimeList',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      recoveryTime: 'RecoveryTime',
      regionId: 'RegionId',
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
      regionId: 'string',
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
   * @remarks
   * The total number of events.
   * 
   * @example
   * OtherException:3,MysqlIOException:1
   */
  eventCodeCounts?: string;
  /**
   * @remarks
   * The information about the events.
   */
  events?: DescribeEventsListResponseBodyEvents[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The page number of the returned page.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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

