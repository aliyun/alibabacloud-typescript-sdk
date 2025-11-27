// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCElasticScalingRequest extends $dara.Model {
  /**
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * rc-a0e466b01tif2pkrgg
   */
  instanceId?: string;
  /**
   * @example
   * mysql.x2.medium.9cm
   */
  instanceType?: string;
  /**
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @example
   * vnode
   */
  supportCase?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      supportCase: 'SupportCase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      supportCase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

