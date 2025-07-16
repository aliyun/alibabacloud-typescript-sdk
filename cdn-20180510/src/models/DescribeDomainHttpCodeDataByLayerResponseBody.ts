// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:35:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total number of times that HTTP status codes were returned.
   * 
   * @example
   * 110
   */
  totalValue?: string;
  /**
   * @remarks
   * The number of times that the HTTP status code was returned.
   * 
   * @example
   * { "200": 10, "206": 100}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      totalValue: 'TotalValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      totalValue: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataInterval extends $dara.Model {
  dataModule?: DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataByLayerResponseBodyHttpCodeDataIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

