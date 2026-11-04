// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateVPCConfig extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role assumed by the sandboxed container instance when accessing the VPC. Format: acs:ram::{account ID}:role/{role name}.
   * 
   * @example
   * acs:ram::1234567890123456:role/aliyunfcdefaultrole
   */
  role?: string;
  /**
   * @remarks
   * The ID of the security group used by the sandboxed container instance.
   * 
   * @example
   * sg-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs that the sandboxed container instance connects to. Configure vSwitches in multiple zones to improve availability.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC that the sandboxed container instance connects to.
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

