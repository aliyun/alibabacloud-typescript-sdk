// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The traffic over HTTP. Unit: bytes.
   * 
   * @example
   * 0
   */
  httpTrafficValue?: string;
  /**
   * @remarks
   * The traffic over HTTPS. Unit: bytes.
   * 
   * @example
   * 454680793
   */
  httpsTrafficValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2017-12-10T15:00:05Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 454680793
   */
  trafficValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpTrafficValue: 'HttpTrafficValue',
      httpsTrafficValue: 'HttpsTrafficValue',
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpTrafficValue: 'string',
      httpsTrafficValue: 'string',
      timeStamp: 'string',
      trafficValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
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

export class DescribeLiveDomainTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity of the query.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-10T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-10T14:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The network traffic data that was collected at each interval.
   */
  trafficDataPerInterval?: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeLiveDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  validate() {
    if(this.trafficDataPerInterval && typeof (this.trafficDataPerInterval as any).validate === 'function') {
      (this.trafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

