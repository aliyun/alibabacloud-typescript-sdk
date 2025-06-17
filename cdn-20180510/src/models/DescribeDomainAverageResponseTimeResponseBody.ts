// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval } from "./DescribeDomainAverageResponseTimeResponseBodyAvgRtperInterval";


export class DescribeDomainAverageResponseTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average response time data for time intervals.
   */
  avgRTPerInterval?: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval;
  /**
   * @remarks
   * The time interval between the data entries returned.
   * 
   * @example
   * 300
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
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgRTPerInterval: 'AvgRTPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRTPerInterval: DescribeDomainAverageResponseTimeResponseBodyAvgRTPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.avgRTPerInterval && typeof (this.avgRTPerInterval as any).validate === 'function') {
      (this.avgRTPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

