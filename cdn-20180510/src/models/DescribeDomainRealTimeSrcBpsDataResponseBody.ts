// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2019-12-10T20:01:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The bandwidth during back-to-origin routing. Unit: bit/s.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
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

export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
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

export class DescribeDomainRealTimeSrcBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 60 (1 minute), 300 (5 minutes), and 3600(1 hour). For more information, see **Usage notes**.
   * 
   * @example
   * 60
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
   * 2019-12-10T20:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The origin bandwidth data at each interval.
   */
  realTimeSrcBpsDataPerInterval?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
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
   * 2019-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeSrcBpsDataPerInterval: 'RealTimeSrcBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeSrcBpsDataPerInterval: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeSrcBpsDataPerInterval && typeof (this.realTimeSrcBpsDataPerInterval as any).validate === 'function') {
      (this.realTimeSrcBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

