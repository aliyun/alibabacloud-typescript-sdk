// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 1128
   */
  request?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type of the requests. Valid values: StaticHttps, DynamicHttps, DynamicHttp, StaticQuic, and DynamicQuic.
   * 
   * @example
   * DynamicHttp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      request: 'Request',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      request: 'number',
      timeStamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval extends $dara.Model {
  requestDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.requestDataModule)) {
      $dara.Model.validateArray(this.requestDataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The number of bits per second.
   * 
   * @example
   * 11288111.1
   */
  bps?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type of the network traffic. Valid values: Simple, IPA, and WebSocket.
   * 
   * @example
   * Simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bps: 'Bps',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bps: 'number',
      domain: 'string',
      timeStamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval extends $dara.Model {
  trafficDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.trafficDataModule)) {
      $dara.Model.validateArray(this.trafficDataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range that was queried.
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
   * The information about requests collected every 5 minutes.
   */
  requestPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval;
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics of network traffic collected every 5 minutes.
   */
  trafficPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      requestPerInterval: 'RequestPerInterval',
      startTime: 'StartTime',
      trafficPerInterval: 'TrafficPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      requestPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval,
      startTime: 'string',
      trafficPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval,
    };
  }

  validate() {
    if(this.requestPerInterval && typeof (this.requestPerInterval as any).validate === 'function') {
      (this.requestPerInterval as any).validate();
    }
    if(this.trafficPerInterval && typeof (this.trafficPerInterval as any).validate === 'function') {
      (this.trafficPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

