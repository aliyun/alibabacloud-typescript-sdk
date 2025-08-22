// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 100
   */
  acc?: number;
  /**
   * @remarks
   * The number of requests for dynamic content delivery over HTTP.
   * 
   * @example
   * 0
   */
  dynamicHttpAcc?: number;
  /**
   * @remarks
   * The QPS for dynamic content delivery over HTTP.
   * 
   * @example
   * 0
   */
  dynamicHttpQps?: number;
  /**
   * @remarks
   * The number of requests for dynamic content delivery over HTTPS.
   * 
   * @example
   * 0
   */
  dynamicHttpsAcc?: number;
  /**
   * @remarks
   * The QPS for dynamic content delivery over HTTPS.
   * 
   * @example
   * 0
   */
  dynamicHttpsQps?: number;
  /**
   * @remarks
   * The total QPS.
   * 
   * @example
   * 0.56
   */
  qps?: number;
  /**
   * @remarks
   * The number of requests for static content delivery over HTTP.
   * 
   * @example
   * 0
   */
  staticHttpAcc?: number;
  /**
   * @remarks
   * The QPS for static content delivery over HTTP.
   * 
   * @example
   * 0
   */
  staticHttpQps?: number;
  /**
   * @remarks
   * The number of requests for static content delivery over HTTPS.
   * 
   * @example
   * 0
   */
  staticHttpsAcc?: number;
  /**
   * @remarks
   * The QPS for static content delivery over HTTPS.
   * 
   * @example
   * 0
   */
  staticHttpsQps?: number;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      dynamicHttpAcc: 'DynamicHttpAcc',
      dynamicHttpQps: 'DynamicHttpQps',
      dynamicHttpsAcc: 'DynamicHttpsAcc',
      dynamicHttpsQps: 'DynamicHttpsQps',
      qps: 'Qps',
      staticHttpAcc: 'StaticHttpAcc',
      staticHttpQps: 'StaticHttpQps',
      staticHttpsAcc: 'StaticHttpsAcc',
      staticHttpsQps: 'StaticHttpsQps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      dynamicHttpAcc: 'number',
      dynamicHttpQps: 'number',
      dynamicHttpsAcc: 'number',
      dynamicHttpsQps: 'number',
      qps: 'number',
      staticHttpAcc: 'number',
      staticHttpQps: 'number',
      staticHttpsAcc: 'number',
      staticHttpsQps: 'number',
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

export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule },
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

export class DescribeDcdnDomainQpsDataResponseBody extends $dara.Model {
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
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The QPS returned at each time interval.
   */
  qpsDataPerInterval?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval;
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
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      qpsDataPerInterval: 'QpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      qpsDataPerInterval: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.qpsDataPerInterval && typeof (this.qpsDataPerInterval as any).validate === 'function') {
      (this.qpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

