// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval } from "./DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval";


export class DescribeDomainSrcTrafficDataResponseBody extends $dara.Model {
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
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  /**
   * @remarks
   * The amount of origin traffic returned at each time interval. Unit: bytes.
   */
  srcTrafficDataPerInterval?: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcTrafficDataPerInterval: 'SrcTrafficDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcTrafficDataPerInterval: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval,
      startTime: 'string',
    };
  }

  validate() {
    if(this.srcTrafficDataPerInterval && typeof (this.srcTrafficDataPerInterval as any).validate === 'function') {
      (this.srcTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

