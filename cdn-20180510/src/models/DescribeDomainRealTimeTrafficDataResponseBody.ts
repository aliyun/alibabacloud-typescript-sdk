// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $dara.Model {
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
   * The traffic value at each time interval.
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

export class DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
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

export class DescribeDomainRealTimeTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * Depending on the maximum time range per query, the value is 60 (1 minute), 300 (5 minutes), or 3600 (1 hour). For more information, see the "Time granularity" section in Usage notes.
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
   * The network traffic returned at each time interval. Unit: bytes.
   */
  realTimeTrafficDataPerInterval?: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
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
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeTrafficDataPerInterval: DescribeDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.realTimeTrafficDataPerInterval && typeof (this.realTimeTrafficDataPerInterval as any).validate === 'function') {
      (this.realTimeTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

