// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData } from "./DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData";


export class DescribeDomainRealTimeHttpCodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * Depending on the maximum time range per query, the value is 60 (1 minute), 300 (5 minutes), or 3600 (1 hour). For more information, see the "Time granularity" section in Usage notes.
   * 
   * @example
   * 60
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-11-29T05:42:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of HTTP status codes at each time interval.
   */
  realTimeHttpCodeData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-11-29T05:39:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeHttpCodeData: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeHttpCodeData && typeof (this.realTimeHttpCodeData as any).validate === 'function') {
      (this.realTimeHttpCodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

