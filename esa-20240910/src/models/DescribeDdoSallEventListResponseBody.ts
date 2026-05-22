// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListResponseBodyDataList extends $dara.Model {
  bps?: number;
  coverage?: string;
  cps?: number;
  endTime?: string;
  eventId?: string;
  eventResult?: string;
  eventType?: string;
  pps?: number;
  qps?: number;
  startTime?: string;
  target?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      coverage: 'Coverage',
      cps: 'Cps',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventResult: 'EventResult',
      eventType: 'EventType',
      pps: 'Pps',
      qps: 'Qps',
      startTime: 'StartTime',
      target: 'Target',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      coverage: 'string',
      cps: 'number',
      endTime: 'string',
      eventId: 'string',
      eventResult: 'string',
      eventType: 'string',
      pps: 'number',
      qps: 'number',
      startTime: 'string',
      target: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSAllEventListResponseBody extends $dara.Model {
  dataList?: DescribeDDoSAllEventListResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  siteId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteId: 'SiteId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDDoSAllEventListResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

