// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval } from "./DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval";


export class DescribeVsDomainTrafficDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-20T07:10:42Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-10-25T16:00:00Z
   */
  startTime?: string;
  trafficDataPerInterval?: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval,
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

