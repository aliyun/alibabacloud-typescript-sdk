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
   * The event status.
   * 
   * @example
   * None
   */
  eventStatus?: string;
  /**
   * @remarks
   * A list of event times.
   */
  eventTimeList?: string[];
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * 测试实例
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2zecnb327gp36****
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
  /**
   * @remarks
   * The region ID.
   */
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
   * The count for each event code.
   * 
   * @example
   * OtherException:3,MysqlIOException:1
   */
  eventCodeCounts?: string;
  /**
   * @remarks
   * A list of events.
   */
  events?: DescribeEventsListResponseBodyEvents[];
  /**
   * @remarks
   * The number of pages returned.
   * 
   * @example
   * 1
   */
  pageCount?: number;
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
   * The number of entries per page.
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
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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

