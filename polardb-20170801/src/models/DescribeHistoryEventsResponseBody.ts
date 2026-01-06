// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @example
   * web
   */
  cmsProduct?: string;
  /**
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @example
   * 1
   */
  detailImpact?: string;
  /**
   * @example
   * xxxx
   */
  detailReason?: string;
  /**
   * @example
   * 2025-12-24T02:24:00Z
   */
  endTime?: string;
  /**
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @example
   * xxxx
   */
  eventDetail?: string;
  /**
   * @example
   * 600324
   */
  eventId?: string;
  /**
   * @example
   * xxxx
   */
  eventImpact?: string;
  /**
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @example
   * xxxxx
   */
  eventReason?: string;
  /**
   * @example
   * Inquiring
   */
  eventStatus?: string;
  /**
   * @example
   * SystemFailure.Delete
   */
  eventType?: string;
  /**
   * @example
   * 2025-07-15T14:53:06+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-01-07T15:10:32+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * done
   */
  handleStatus?: string;
  /**
   * @example
   * false
   */
  hasLifeCycle?: number;
  /**
   * @example
   * pc-2ze150h1p29t***
   */
  instanceId?: string;
  /**
   * @example
   * dhimgsearch
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  isClosed?: number;
  /**
   * @example
   * polardb
   */
  product?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * Host
   */
  resourceType?: string;
  /**
   * @example
   * loanBill
   */
  sourceType?: string;
  /**
   * @example
   * 2025-02-27T02:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 1540497309282125
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cmsProduct: 'CmsProduct',
      dbType: 'DbType',
      detailImpact: 'DetailImpact',
      detailReason: 'DetailReason',
      endTime: 'EndTime',
      eventCategory: 'EventCategory',
      eventCode: 'EventCode',
      eventDetail: 'EventDetail',
      eventId: 'EventId',
      eventImpact: 'EventImpact',
      eventLevel: 'EventLevel',
      eventReason: 'EventReason',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      handleStatus: 'HandleStatus',
      hasLifeCycle: 'HasLifeCycle',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isClosed: 'IsClosed',
      product: 'Product',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsProduct: 'string',
      dbType: 'string',
      detailImpact: 'string',
      detailReason: 'string',
      endTime: 'string',
      eventCategory: 'string',
      eventCode: 'string',
      eventDetail: 'string',
      eventId: 'string',
      eventImpact: 'string',
      eventLevel: 'string',
      eventReason: 'string',
      eventStatus: 'string',
      eventType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      handleStatus: 'string',
      hasLifeCycle: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isClosed: 'number',
      product: 'string',
      regionId: 'string',
      resourceType: 'string',
      sourceType: 'string',
      startTime: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryEventsResponseBodyItems extends $dara.Model {
  data?: DescribeHistoryEventsResponseBodyItemsData;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * loanBill
   */
  source?: string;
  /**
   * @example
   * 8.0
   */
  specversion?: string;
  /**
   * @example
   * QiTian
   */
  subject?: string;
  /**
   * @example
   * 1758680209206
   */
  time?: string;
  /**
   * @example
   * host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      id: 'Id',
      region: 'Region',
      source: 'Source',
      specversion: 'Specversion',
      subject: 'Subject',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHistoryEventsResponseBodyItemsData,
      id: 'string',
      region: 'string',
      source: 'string',
      specversion: 'string',
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

export class DescribeHistoryEventsResponseBody extends $dara.Model {
  items?: DescribeHistoryEventsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
   */
  requestId?: string;
  /**
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryEventsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

