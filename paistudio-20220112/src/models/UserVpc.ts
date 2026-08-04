// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ForwardInfo } from "./ForwardInfo";


export class UserVpc extends $dara.Model {
  /**
   * @remarks
   * The default public gateway information.
   */
  defaultForwardInfo?: ForwardInfo;
  /**
   * @remarks
   * The default routing. Valid values:
   * - eth0: uses the default network interface controller (NIC) to access external networks through the public gateway.
   * - eth1: uses the user\\"s elastic network interfaces (ENIs) to access external networks through the private gateway.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The secondary CIDR blocks.
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The OSS access authorization information.
   * 
   * @example
   * acs:ram::25xxxx:role/AliyunPAIDLCDefaultRole
   */
  roleArn?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-abcdef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultForwardInfo: 'DefaultForwardInfo',
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      roleArn: 'RoleArn',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardInfo: ForwardInfo,
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      roleArn: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.defaultForwardInfo && typeof (this.defaultForwardInfo as any).validate === 'function') {
      (this.defaultForwardInfo as any).validate();
    }
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

