// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData } from "./DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData";


export class DescribeDomainRealTimeSrcHttpCodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
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
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of HTTP status codes at each time interval.
   */
  realTimeSrcHttpCodeData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
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
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcHttpCodeData: 'RealTimeSrcHttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcHttpCodeData: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeSrcHttpCodeData && typeof (this.realTimeSrcHttpCodeData as any).validate === 'function') {
      (this.realTimeSrcHttpCodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

