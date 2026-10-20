// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak BPS of volumetric traffic attacks.
   * 
   * @example
   * 800
   */
  bps?: number;
  /**
   * @remarks
   * The attack region. Valid values:
   * 
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The peak CPS of the connection flood attack.
   * 
   * @example
   * 50
   */
  cps?: number;
  /**
   * @remarks
   * The end time of the DDoS attack event. The time is displayed in UTC and must be in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-02-12T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * web-cc_1
   */
  eventId?: string;
  /**
   * @remarks
   * The event result. Valid values:
   * 
   * - **clean**: traffic scrubbed.
   * - **ratelimit**: rate limited.
   * - **blackhole**: blackhole filtering.
   * 
   * @example
   * clean
   */
  eventResult?: string;
  /**
   * @remarks
   * The type of the DDoS attack event. Valid values:
   * - **web-cc**: web resource exhaustion attacks.
   * - **cc**: connection flood attacks.
   * - **traffic**: volumetric traffic attacks.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The peak PPS of volumetric traffic attacks.
   * 
   * @example
   * 12000
   */
  pps?: number;
  /**
   * @remarks
   * The peak QPS of the web resource exhaustion attack.
   * 
   * @example
   * 7692
   */
  qps?: number;
  /**
   * @remarks
   * The start time of the DDoS attack event. The time is displayed in UTC and must be in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-02-12T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The attack target.
   * 
   * @example
   * example.com
   */
  target?: string;
  /**
   * @remarks
   * The ID of the attack target for web resource exhaustion.
   * 
   * @example
   * 000000000155****
   */
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
  /**
   * @remarks
   * The list of DDoS attack events.
   */
  dataList?: DescribeDDoSAllEventListResponseBodyDataList[];
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
   * D73A4243-CFBD-5110-876F-09237E77ECBD
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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

