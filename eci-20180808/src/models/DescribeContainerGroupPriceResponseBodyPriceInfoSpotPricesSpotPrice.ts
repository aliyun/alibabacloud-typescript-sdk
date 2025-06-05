// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice extends $dara.Model {
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 0.622
   */
  originPrice?: number;
  /**
   * @remarks
   * The prices of preemptible elastic container instances.
   * 
   * @example
   * 0.056
   */
  spotPrice?: number;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      originPrice: 'OriginPrice',
      spotPrice: 'SpotPrice',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      originPrice: 'number',
      spotPrice: 'number',
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

