// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth that was consumed for fetching dynamic content from the origin over HTTP.
   * 
   * @example
   * 100
   */
  dynamicHttpOriginBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed for fetching dynamic content from the origin over HTTPS.
   * 
   * @example
   * 100
   */
  dynamicHttpsOriginBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed for fetching content from the origin.
   * 
   * @example
   * 100
   */
  originBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed for fetching static content from the origin over HTTP.
   * 
   * @example
   * 100
   */
  staticHttpOriginBps?: number;
  /**
   * @remarks
   * The bandwidth that was consumed for fetching static content from the origin over HTTPS.
   * 
   * @example
   * 100
   */
  staticHttpsOriginBps?: number;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2019-12-10T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginBps: 'DynamicHttpOriginBps',
      dynamicHttpsOriginBps: 'DynamicHttpsOriginBps',
      originBps: 'OriginBps',
      staticHttpOriginBps: 'StaticHttpOriginBps',
      staticHttpsOriginBps: 'StaticHttpsOriginBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginBps: 'number',
      dynamicHttpsOriginBps: 'number',
      originBps: 'number',
      staticHttpOriginBps: 'number',
      staticHttpsOriginBps: 'number',
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

export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule },
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

export class DescribeDcdnDomainOriginBpsDataResponseBody extends $dara.Model {
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
   * 2019-12-11T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The origin bandwidth data returned at each time interval. Unit: bit/s.
   */
  originBpsDataPerInterval?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CBCD6AD-B016-42E5-AE0B-B3731DE8F755
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-10T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      originBpsDataPerInterval: 'OriginBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      originBpsDataPerInterval: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.originBpsDataPerInterval && typeof (this.originBpsDataPerInterval as any).validate === 'function') {
      (this.originBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

