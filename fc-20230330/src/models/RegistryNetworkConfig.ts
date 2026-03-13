// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group that can be used to connect to the image repository.
   * 
   * @example
   * sg-xxxxxxxxxxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that can be used to connect to the image repository.
   * 
   * @example
   * vsw-xxxxxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that can be used to connect to the image repository.
   * 
   * @example
   * vpc-xxxxxxxxxxxxxx
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

