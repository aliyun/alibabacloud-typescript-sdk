// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotPriceHistoryResponseBodySpotPricesSpotPriceType extends $dara.Model {
  /**
   * @remarks
   * The instance type of the preemptible instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Details about the price history of the preemptible instance.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * Queries the price history of a preemptible instance within the last 30 days.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The price for a pay-as-you-go instance that has the same configuration as the specified preemptible instance.
   * 
   * @example
   * 0.354
   */
  originPrice?: number;
  /**
   * @remarks
   * The price for a pay-as-you-go instance that has the same configurations as the preemptible instance.
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

