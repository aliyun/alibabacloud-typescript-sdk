// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * 镜像仓库的安全组ID
   * 
   * @example
   * sg-xxxxxxxxxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 镜像仓库所在的交换机ID
   * 
   * @example
   * vsw-xxxxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * 镜像仓库所在的VPC ID
   * 
   * @example
   * vpc-xxxxxxxxxxxxx
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

