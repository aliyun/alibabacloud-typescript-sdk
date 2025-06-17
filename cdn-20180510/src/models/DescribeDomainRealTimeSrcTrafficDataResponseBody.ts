// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval } from "./DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval";


export class DescribeDomainRealTimeSrcTrafficDataResponseBody extends $dara.Model {
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
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range for which the data was queried.
   * 
   * @example
   * 2019-12-10T20:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The amount of back-to-origin traffic returned at each interval.
   */
  realTimeSrcTrafficDataPerInterval?: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range for which the data was queried.
   * 
   * @example
   * 2019-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcTrafficDataPerInterval: 'RealTimeSrcTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcTrafficDataPerInterval: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeSrcTrafficDataPerInterval && typeof (this.realTimeSrcTrafficDataPerInterval as any).validate === 'function') {
      (this.realTimeSrcTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

