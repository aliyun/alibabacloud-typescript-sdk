// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicUpdateTemplateRegistryNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group for repository access.
   * 
   * @example
   * sg-bp1abc123
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch where the repository resides.
   * 
   * @example
   * vsw-bp1abc123
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where the repository resides.
   * 
   * @example
   * vpc-bp1abc123
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

