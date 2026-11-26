// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserVpc extends $dara.Model {
  /**
   * @remarks
   * The default route configuration. Valid values: eth0 and eth1. Currently, this parameter is used only in general-purpose computing 1.0 scenarios.
   * 
   * @example
   * eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The secondary CIDR block (route configuration).
   * 
   * @example
   * [
   *   "192.168.0.0/24",
   *   "192.168.1.0/24"
   * ]
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The role chain configuration.
   * 
   * @example
   * [
   *   {
   *     "roleType":"service",
   *     "roleArn":"acs:ram::service account UID:role/roletoassumecustomerrole",
   *     "assumeRoleFor": "service account UID"
   *   },
   *   {
   *     "roleType":"service",
   *     "roleArn":"acs:ram::end user UID:role/user-role",
   *     "assumeRoleFor":"end user UID"
   *   }
   * ]
   */
  roleChain?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * vSwitch ID
   * 
   * @example
   * vsw-xxx
   */
  switchId?: string;
  /**
   * @remarks
   * Vpc ID
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      roleChain: 'RoleChain',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      roleChain: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

