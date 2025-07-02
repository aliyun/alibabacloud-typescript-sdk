// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryNetworkConfig extends $dara.Model {
  /**
   * @example
   * sg-xxxxxxxxxxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
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

