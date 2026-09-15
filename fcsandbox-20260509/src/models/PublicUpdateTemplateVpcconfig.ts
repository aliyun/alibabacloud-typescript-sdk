// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicUpdateTemplateVPCConfig extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role used to access VPC resources.
   * 
   * @example
   * acs:ram::123456789012:role/sandbox-vpc-role
   */
  role?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1abc123
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-bp1abc123
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

