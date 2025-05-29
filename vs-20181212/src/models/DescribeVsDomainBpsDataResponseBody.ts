// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval } from "./DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval";


export class DescribeVsDomainBpsDataResponseBody extends $dara.Model {
  bpsDataPerInterval?: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval;
  /**
   * @example
   * 2100
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-01T07:10:48Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-09-18T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.bpsDataPerInterval && typeof (this.bpsDataPerInterval as any).validate === 'function') {
      (this.bpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

