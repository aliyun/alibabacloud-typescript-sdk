// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateRegistryNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group where the image repository resides.
   * 
   * @example
   * sg-bp1gx7yj8ud5mabcde
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch where the image repository resides.
   * 
   * @example
   * vsw-bp1s5fnlk4jl2abcde
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where the image repository resides.
   * 
   * @example
   * vpc-bp1mwrqm3wkq7abcde
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
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

