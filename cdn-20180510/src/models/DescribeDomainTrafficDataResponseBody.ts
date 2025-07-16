// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic in the Chinese mainland.
   * 
   * @example
   * 0
   */
  domesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS traffic on points of presence (POPs) in the Chinese mainland.
   * 
   * @example
   * 0
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS traffic on POPs outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The total amount of HTTPS traffic on POPs.
   * 
   * @example
   * 423304182
   */
  httpsValue?: string;
  /**
   * @remarks
   * The amount of network traffic outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total volume of traffic.
   * 
   * @example
   * 423304182
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

export class DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
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

export class DescribeDomainTrafficDataResponseBody extends $dara.Model {
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
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The amount of network traffic at each time interval. Unit: bytes.
   */
  trafficDataPerInterval?: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval,
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

