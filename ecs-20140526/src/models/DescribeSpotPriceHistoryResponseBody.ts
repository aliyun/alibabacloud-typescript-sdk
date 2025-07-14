// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Details about the price history of the spot instance.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * Queries the price history of a spot instance within the last 30 days.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The price for a pay-as-you-go instance that has the same configuration as the specified spot instance.
   * 
   * @example
   * 0.354
   */
  originPrice?: number;
  /**
   * @remarks
   * The price for a pay-as-you-go instance that has the same configurations as the spot instance.
   * 
   * @example
   * 0.036
   */
  spotPrice?: number;
  /**
   * @remarks
   * The currency unit of the price.
   * 
   * Alibaba Cloud China site (aliyun.com): CNY.
   * 
   * Alibaba Cloud International site (alibabacloud.com): USD.
   * 
   * @example
   * 2019-11-19T06:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      networkType: 'NetworkType',
      originPrice: 'OriginPrice',
      spotPrice: 'SpotPrice',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ioOptimized: 'string',
      networkType: 'string',
      originPrice: 'number',
      spotPrice: 'number',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryResponseBodySpotPrices extends $dara.Model {
  spotPriceType?: DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType[];
  static names(): { [key: string]: string } {
    return {
      spotPriceType: 'SpotPriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceType: { 'type': 'array', 'itemType': DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType },
    };
  }

  validate() {
    if(Array.isArray(this.spotPriceType)) {
      $dara.Model.validateArray(this.spotPriceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotPriceHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance type of the spot instance.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The network type of the spot instance.
   * 
   * @example
   * 1000
   */
  nextOffset?: number;
  /**
   * @remarks
   * The instance type of the spot instance.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID of the spot instance.
   */
  spotPrices?: DescribeSpotPriceHistoryResponseBodySpotPrices;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      nextOffset: 'NextOffset',
      requestId: 'RequestId',
      spotPrices: 'SpotPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      nextOffset: 'number',
      requestId: 'string',
      spotPrices: DescribeSpotPriceHistoryResponseBodySpotPrices,
    };
  }

  validate() {
    if(this.spotPrices && typeof (this.spotPrices as any).validate === 'function') {
      (this.spotPrices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

