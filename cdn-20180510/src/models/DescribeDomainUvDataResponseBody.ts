// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainUvDataResponseBodyUvDataInterval } from "./DescribeDomainUvDataResponseBodyUvDataInterval";


export class DescribeDomainUvDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval. Unit: seconds.
   * 
   * @example
   * 3600
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
   * The end of the time range that was queried.
   * 
   * @example
   * 2019-11-29T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2019-11-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The number of UVs at each interval.
   */
  uvDataInterval?: DescribeDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeDomainUvDataResponseBodyUvDataInterval,
    };
  }

  validate() {
    if(this.uvDataInterval && typeof (this.uvDataInterval as any).validate === 'function') {
      (this.uvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

