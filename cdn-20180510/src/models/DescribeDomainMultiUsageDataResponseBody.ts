// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
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
   * 11288111
   */
  request?: number;
  /**
   * @remarks
   * The timestamp of the returned number of requests.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type.
   * 
   * >  The value is Simple for Alibaba Cloud CDN.
   * 
   * @example
   * Simple
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

export class DescribeDomainMultiUsageDataResponseBodyRequestPerInterval extends $dara.Model {
  requestDataModule?: DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
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

export class DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $dara.Model {
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
   * The bandwidth. Unit: bit/s.
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
   * The startstamp of the returned usage data.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type of requests. Valid values:
   * 
   * *   **StaticHttps**: static HTTPS requests
   * *   **DynamicHttps**: dynamic HTTPS requests
   * *   **DynamicHttp**: dynamic HTTP requests
   * *   **StaticQuic**: static QUIC requests
   * *   **DynamicQuic**: dynamic QUIC requests
   * 
   * @example
   * DynamicHttp
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

export class DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval extends $dara.Model {
  trafficDataModule?: DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
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

export class DescribeDomainMultiUsageDataResponseBody extends $dara.Model {
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
  requestPerInterval?: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval;
  /**
   * @remarks
   * The start of the time range that was queried.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics of network traffic collected every 5 minutes.
   */
  trafficPerInterval?: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval;
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
      requestPerInterval: DescribeDomainMultiUsageDataResponseBodyRequestPerInterval,
      startTime: 'string',
      trafficPerInterval: DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval,
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

