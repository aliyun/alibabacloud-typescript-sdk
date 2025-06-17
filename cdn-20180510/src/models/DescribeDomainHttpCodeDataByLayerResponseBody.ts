// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval } from "./DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval";


export class DescribeDomainHttpCodeDataByLayerResponseBody extends $dara.Model {
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
   * The statistics of HTTP status codes returned at each time interval.
   */
  httpCodeDataInterval?: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      httpCodeDataInterval: 'HttpCodeDataInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      httpCodeDataInterval: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.httpCodeDataInterval && typeof (this.httpCodeDataInterval as any).validate === 'function') {
      (this.httpCodeDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

