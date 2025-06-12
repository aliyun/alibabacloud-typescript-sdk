// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType } from "./DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType";
import { DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones } from "./DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones";


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the instance type.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The billing method of the instances.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The details of the instance type.
   */
  instanceType?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType;
  /**
   * @remarks
   * The network type of the ECS instances.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The priority based on which the system sorts the instance types.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region in which the instance type is available.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario in which the instance type is recommended.
   * 
   * @example
   * CREATE
   */
  scene?: string;
  /**
   * @remarks
   * The bidding policy for the spot instances.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance type is available.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The details of the zones in which the instance type is available.
   */
  zones?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      priority: 'Priority',
      regionId: 'RegionId',
      scene: 'Scene',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      instanceChargeType: 'string',
      instanceType: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType,
      networkType: 'string',
      priority: 'number',
      regionId: 'string',
      scene: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
      zones: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones,
    };
  }

  validate() {
    if(this.instanceType && typeof (this.instanceType as any).validate === 'function') {
      (this.instanceType as any).validate();
    }
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

