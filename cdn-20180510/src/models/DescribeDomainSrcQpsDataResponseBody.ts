// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval } from "./DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval";


export class DescribeDomainSrcQpsDataResponseBody extends $dara.Model {
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
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CBCD6AD-B016-42E5-AE0B-B3731DE8F755
   */
  requestId?: string;
  /**
   * @remarks
   * The back-to-origin bandwidth information at each interval.
   */
  srcQpsDataPerInterval?: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval;
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
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcQpsDataPerInterval: 'SrcQpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcQpsDataPerInterval: DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerInterval,
      startTime: 'string',
    };
  }

  validate() {
    if(this.srcQpsDataPerInterval && typeof (this.srcQpsDataPerInterval as any).validate === 'function') {
      (this.srcQpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

