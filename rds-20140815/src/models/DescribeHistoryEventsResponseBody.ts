// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
  cmsProduct?: string;
  dbType?: string;
  detailImpact?: string;
  detailReason?: string;
  endTime?: string;
  eventCategory?: string;
  eventCode?: string;
  eventDetail?: string;
  eventId?: string;
  eventImpact?: string;
  eventLevel?: string;
  eventReason?: string;
  eventStatus?: string;
  eventType?: string;
  gmtCreated?: string;
  gmtModified?: string;
  handleStatus?: string;
  hasLifeCycle?: number;
  instanceId?: string;
  instanceName?: string;
  isClosed?: number;
  product?: string;
  regionId?: string;
  resourceType?: string;
  sourceType?: string;
  startTime?: string;
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
  id?: string;
  region?: string;
  source?: string;
  specversion?: string;
  subject?: string;
  time?: string;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

