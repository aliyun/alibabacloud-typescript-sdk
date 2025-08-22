// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The amount of back-to-origin traffic that was consumed to deliver dynamic content over HTTP.
   * 
   * @example
   * 1000
   */
  dynamicHttpOriginTraffic?: number;
  /**
   * @remarks
   * The amount of back-to-origin traffic that was consumed to deliver dynamic content over HTTPS.
   * 
   * @example
   * 500
   */
  dynamicHttpsOriginTraffic?: number;
  /**
   * @remarks
   * The amount of back-to-origin traffic.
   * 
   * @example
   * 100
   */
  originTraffic?: number;
  /**
   * @remarks
   * The amount of back-to-origin traffic that was consumed to deliver static content over HTTP.
   * 
   * @example
   * 0
   */
  staticHttpOriginTraffic?: number;
  /**
   * @remarks
   * The amount of back-to-origin traffic that was consumed to deliver static content over HTTPS.
   * 
   * @example
   * 100
   */
  staticHttpsOriginTraffic?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginTraffic: 'DynamicHttpOriginTraffic',
      dynamicHttpsOriginTraffic: 'DynamicHttpsOriginTraffic',
      originTraffic: 'OriginTraffic',
      staticHttpOriginTraffic: 'StaticHttpOriginTraffic',
      staticHttpsOriginTraffic: 'StaticHttpsOriginTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginTraffic: 'number',
      dynamicHttpsOriginTraffic: 'number',
      originTraffic: 'number',
      staticHttpOriginTraffic: 'number',
      staticHttpsOriginTraffic: 'number',
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

export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule },
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

export class DescribeDcdnDomainOriginTrafficDataResponseBody extends $dara.Model {
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
   * The amount of back-to-origin traffic returned at each time interval. Unit: bytes.
   */
  originTrafficDataPerInterval?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried.
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
      originTrafficDataPerInterval: 'OriginTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      originTrafficDataPerInterval: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.originTrafficDataPerInterval && typeof (this.originTrafficDataPerInterval as any).validate === 'function') {
      (this.originTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

