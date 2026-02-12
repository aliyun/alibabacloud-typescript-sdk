// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TensorboardSpec extends $dara.Model {
  /**
   * @remarks
   * The specifications of the ECS instance configured for the pay-as-you-go Tensorboard task.
   * 
   * @example
   * ecs.g6.large
   */
  ecsType?: string;
  /**
   * @remarks
   * The ID of the security group configured for the pay-as-you-go Tensorboard task.
   * 
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch configured for the pay-as-you-go Tensorboard task.
   * 
   * @example
   * vsw-xxxx
   */
  switchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) configured for the pay-as-you-go Tensorboard task.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsType: 'EcsType',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsType: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

