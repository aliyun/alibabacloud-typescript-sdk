// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval extends $dara.Model {
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 318
   */
  in?: number;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 183
   */
  out?: number;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2018-11-29T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      in: 'In',
      out: 'Out',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: 'number',
      out: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The BGP bandwidth data that is collected for each interval.
   */
  bgpDataInterval?: DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval[];
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2018-11-30T00:00:00Z
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
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2018-11-29T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bgpDataInterval: 'BgpDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval },
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bgpDataInterval)) {
      $dara.Model.validateArray(this.bgpDataInterval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

