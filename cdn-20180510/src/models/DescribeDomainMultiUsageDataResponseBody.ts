// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainMultiUsageDataResponseBodyRequestPerInterval } from "./DescribeDomainMultiUsageDataResponseBodyRequestPerInterval";
import { DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval } from "./DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval";


export class DescribeDomainMultiUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range that was queried.
   * 
   * @example
   * 2017-12-10T21:00:00Z
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
   * The information about requests collected every 5 minutes.
   */
  requestPerInterval?: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval;
  /**
   * @remarks
   * The start of the time range that was queried.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics of network traffic collected every 5 minutes.
   */
  trafficPerInterval?: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      requestPerInterval: 'RequestPerInterval',
      startTime: 'StartTime',
      trafficPerInterval: 'TrafficPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      requestPerInterval: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval,
      startTime: 'string',
      trafficPerInterval: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval,
    };
  }

  validate() {
    if(this.requestPerInterval && typeof (this.requestPerInterval as any).validate === 'function') {
      (this.requestPerInterval as any).validate();
    }
    if(this.trafficPerInterval && typeof (this.trafficPerInterval as any).validate === 'function') {
      (this.trafficPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

