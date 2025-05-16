// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyManagerManagerNode extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the management node.
   * 
   * @example
   * 2099-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The instance billing method of the management node. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the management node.
   * 
   * @example
   * i-bp1a170jgea1vl******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the management node.
   * 
   * @example
   * ecs.g6.4xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

