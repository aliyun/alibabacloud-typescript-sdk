// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosAllEventListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The peak attack traffic of volumetric attacks. Unit: bit/s.
   * 
   * @example
   * 800
   */
  bps?: number;
  /**
   * @remarks
   * The peak of connection flood attacks. Unit: connections per seconds (CPS).
   * 
   * @example
   * 50
   */
  cps?: number;
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-26T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 28069
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the DDoS attack event that was queried. Valid values:
   * 
   * *   **web-cc**: web resource exhaustion attacks
   * *   **cc**: connection flood attacks
   * *   **traffic**: volumetric attacks
   * *   If you do not configure this parameter, DDoS attack events of all types are queried.
   * 
   * @example
   * web-cc
   */
  eventType?: string;
  /**
   * @remarks
   * The peak attack traffic of volumetric attacks. Unit: packets per second (PPS).
   * 
   * @example
   * 12000
   */
  pps?: number;
  /**
   * @remarks
   * The peak of web resource exhaustion attacks. Unit: queries per second (QPS).
   * 
   * @example
   * 7692
   */
  qps?: number;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-09T10:03:31Z
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
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventType: 'EventType',
      pps: 'Pps',
      qps: 'Qps',
      startTime: 'StartTime',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      endTime: 'string',
      eventId: 'string',
      eventType: 'string',
      pps: 'number',
      qps: 'number',
      startTime: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAllEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  dataList?: DescribeDdosAllEventListResponseBodyDataList[];
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Default value: **10**. Valid values: 5, 10, and 20.
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
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDdosAllEventListResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

