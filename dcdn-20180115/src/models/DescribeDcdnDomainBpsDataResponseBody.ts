// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: bit/s.
   * 
   * @example
   * 11286
   */
  bps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed to deliver dynamic content over HTTP. Unit: bit/s.
   * 
   * @example
   * 11286111
   */
  dynamicHttpBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed to deliver dynamic content over HTTPS. Unit: bit/s.
   * 
   * @example
   * 12312
   */
  dynamicHttpsBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed to deliver static content over HTTP. Unit: bit/s.
   * 
   * @example
   * 123
   */
  staticHttpBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed to deliver static content over HTTPS. Unit: bit/s.
   * 
   * @example
   * 123
   */
  staticHttpsBps?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      dynamicHttpBps: 'DynamicHttpBps',
      dynamicHttpsBps: 'DynamicHttpsBps',
      staticHttpBps: 'StaticHttpBps',
      staticHttpsBps: 'StaticHttpsBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      dynamicHttpBps: 'number',
      dynamicHttpsBps: 'number',
      staticHttpBps: 'number',
      staticHttpsBps: 'number',
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

export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
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

export class DescribeDcdnDomainBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth data returned at each interval.
   */
  bpsDataPerInterval?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval;
  /**
   * @remarks
   * The time interval between the data entries returned.
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
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2017-12-10T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.bpsDataPerInterval && typeof (this.bpsDataPerInterval as any).validate === 'function') {
      (this.bpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

