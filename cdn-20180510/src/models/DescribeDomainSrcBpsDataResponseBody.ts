// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval } from "./DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval";


export class DescribeDomainSrcBpsDataResponseBody extends $dara.Model {
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
   * 2019-12-10T20:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The origin bandwidth data at each time interval. Unit: bit/s.
   */
  srcBpsDataPerInterval?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
  /**
   * @remarks
   * The start of the time range during which data was queried.
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
      requestId: 'RequestId',
      srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcBpsDataPerInterval: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
      startTime: 'string',
    };
  }

  validate() {
    if(this.srcBpsDataPerInterval && typeof (this.srcBpsDataPerInterval as any).validate === 'function') {
      (this.srcBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

