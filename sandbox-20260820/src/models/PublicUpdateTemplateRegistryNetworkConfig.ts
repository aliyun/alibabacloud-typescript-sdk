// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicUpdateTemplateRegistryNetworkConfig extends $dara.Model {
  /**
   * @example
   * sg-bp1abc123
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-bp1abc123
   */
  vSwitchId?: string;
  /**
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

