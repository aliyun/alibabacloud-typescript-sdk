// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHitRateDataResponseBodyHitRateInterval } from "./DescribeDomainHitRateDataResponseBodyHitRateInterval";


export class DescribeDomainHitRateDataResponseBody extends $dara.Model {
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
   * 2019-12-30T08:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The byte hit ratio at each time interval. The byte hit ratio is measured in percentage.
   */
  hitRateInterval?: DescribeDomainHitRateDataResponseBodyHitRateInterval;
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
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-30T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRateInterval: 'HitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.hitRateInterval && typeof (this.hitRateInterval as any).validate === 'function') {
      (this.hitRateInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

