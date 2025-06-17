// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval } from "./DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval";


export class DescribeDomainTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
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
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The amount of network traffic at each time interval. Unit: bytes.
   */
  trafficDataPerInterval?: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  validate() {
    if(this.trafficDataPerInterval && typeof (this.trafficDataPerInterval as any).validate === 'function') {
      (this.trafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

