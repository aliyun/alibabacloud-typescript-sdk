// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateVPCConfig extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role assumed by the sandbox instance when accessing the VPC. The format is acs:ram::{account ID}:role/{role name}.
   * 
   * @example
   * acs:ram::1234567890123456:role/aliyunfcdefaultrole
   */
  role?: string;
  /**
   * @remarks
   * The ID of the security group used by the sandbox instance.
   * 
   * @example
   * sg-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs to which the sandbox instance is connected.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the sandbox instance is connected.
   * 
   * @example
   * vpc-****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

