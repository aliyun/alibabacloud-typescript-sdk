// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRegistryNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group used to access the image repository.
   * 
   * @example
   * sg-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch used to access the image repository.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC used to access the image repository.
   * 
   * @example
   * vpc-****
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

