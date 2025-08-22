// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval extends $dara.Model {
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 318
   */
  in?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 183
   */
  out?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
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

export class DescribeDcdnBgpTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The BGP traffic at each time interval.
   */
  bgpDataInterval?: DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval[];
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
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval },
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

