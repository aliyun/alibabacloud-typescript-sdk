// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSAllEventListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak bits per second (Bps) of a volumetric attack.
   * 
   * @example
   * 800
   */
  bps?: number;
  /**
   * @remarks
   * The attack region. Valid values:
   * 
   * - **domestic**: Chinese mainland.
   * 
   * - **global**: Global.
   * 
   * - **overseas**: global (excluding Chinese mainland).
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The peak connections per second (Cps) of a connection-based attack.
   * 
   * @example
   * 50
   */
  cps?: number;
  /**
   * @remarks
   * The end time of the DDoS attack event.
   * 
   * The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is in UTC.
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
   * - **clean**: The attack was successfully cleaned.
   * 
   * - **ratelimit**: Rate limiting was applied.
   * 
   * - **blackhole**: Blackhole filtering was triggered.
   * 
   * @example
   * clean
   */
  eventResult?: string;
  /**
   * @remarks
   * The type of the DDoS attack event. Valid values:
   * 
   * - **web-cc**: A web resource exhaustion attack.
   * 
   * - **cc**: A connection-based attack.
   * 
   * - **traffic**: A volumetric attack.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The peak packets per second (Pps) of a volumetric attack.
   * 
   * @example
   * 12000
   */
  pps?: number;
  /**
   * @remarks
   * The peak queries per second (Qps) of a web resource exhaustion attack.
   * 
   * @example
   * 7692
   */
  qps?: number;
  /**
   * @remarks
   * The start time of the DDoS attack event.
   * 
   * The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is in UTC.
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
   * The ID of the attack target.
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
   * A list of DDoS attack event details.
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
   * The page size.
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

