// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-10T15:01:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The traffic. Unit: bytes.
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

export class DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
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

export class DescribeLiveDomainRealTimeTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the entries returned. Unit: seconds
   * 
   * @example
   * 60
   */
  dataInterval?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com,example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-10T15:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The traffic that was collected at each interval.
   */
  realTimeTrafficDataPerInterval?: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A666D44F-19D6-490E-97CF-1A64AB962C57
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-10T15:00:00Z
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
      realTimeTrafficDataPerInterval: DescribeLiveDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
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

