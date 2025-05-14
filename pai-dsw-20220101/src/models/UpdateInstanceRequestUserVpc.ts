// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BandwidthLimit } from "./BandwidthLimit";
import { ForwardInfo } from "./ForwardInfo";


export class UpdateInstanceRequestUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * The default route. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * 
   * *   If you leave VSwitchId empty, this parameter is not required and the system automatically obtains all CIDR blocks in the VPC.
   * *   If VSwitchId is not empty, this parameter is required. Specify all CIDR blocks in the VPC.
   * 
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The forward configuration of the instance.
   */
  forwardInfos?: ForwardInfo[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      forwardInfos: 'ForwardInfos',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: BandwidthLimit,
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      forwardInfos: { 'type': 'array', 'itemType': ForwardInfo },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.bandwidthLimit && typeof (this.bandwidthLimit as any).validate === 'function') {
      (this.bandwidthLimit as any).validate();
    }
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    if(Array.isArray(this.forwardInfos)) {
      $dara.Model.validateArray(this.forwardInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

