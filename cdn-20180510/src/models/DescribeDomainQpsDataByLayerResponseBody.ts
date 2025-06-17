// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval } from "./DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval";


export class DescribeDomainQpsDataByLayerResponseBody extends $dara.Model {
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
   * The layer at which the data was collected.
   * 
   * @example
   * all
   */
  layer?: string;
  /**
   * @remarks
   * The number of queries per second at each interval.
   */
  qpsDataInterval?: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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
      layer: 'Layer',
      qpsDataInterval: 'QpsDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      layer: 'string',
      qpsDataInterval: DescribeDomainQpsDataByLayerResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.qpsDataInterval && typeof (this.qpsDataInterval as any).validate === 'function') {
      (this.qpsDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

