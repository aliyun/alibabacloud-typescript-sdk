// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TensorboardSpec extends $dara.Model {
  /**
   * @example
   * ecs.g6.large
   */
  ecsType?: string;
  /**
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxx
   */
  switchId?: string;
  /**
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

