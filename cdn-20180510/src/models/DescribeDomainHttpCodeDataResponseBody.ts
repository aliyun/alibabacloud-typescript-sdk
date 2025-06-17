// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHttpCodeDataResponseBodyHttpCodeData } from "./DescribeDomainHttpCodeDataResponseBodyHttpCodeData";


export class DescribeDomainHttpCodeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval.
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
   * 2021-06-29T05:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of HTTP status codes at each time interval.
   */
  httpCodeData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
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
   * The beginning of the time range during which data was queried.
   * 
   * @example
   * 2021-06-29T05:30:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeData: 'HttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.httpCodeData && typeof (this.httpCodeData as any).validate === 'function') {
      (this.httpCodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

