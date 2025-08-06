// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 0
   */
  domesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS network traffic on points of presence (POPs) in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 0
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS network traffic on POPs outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 0
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The total amount of HTTPS network traffic on POPs. Unit: bytes.
   * 
   * @example
   * 0
   */
  httpsValue?: string;
  /**
   * @remarks
   * The amount of network traffic outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 0
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-15T19:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
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

export class DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVodDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
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

export class DescribeVodDomainTrafficDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval at which data is returned, which is the time granularity. Unit: seconds.
   * 
   * @example
   * 3600
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
   * The end of the time range.
   * 
   * @example
   * 2019-01-20T14:59:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D94E471F-1A27-442E-552D-D4D2000C****
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range.
   * 
   * @example
   * 2019-01-20T13:59:58Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total amount of network traffic.
   * 
   * @example
   * 5906662826
   */
  totalTraffic?: string;
  /**
   * @remarks
   * The amount of network traffic at each time interval.
   */
  trafficDataPerInterval?: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalTraffic: 'TotalTraffic',
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
      totalTraffic: 'string',
      trafficDataPerInterval: DescribeVodDomainTrafficDataResponseBodyTrafficDataPerInterval,
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

