// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BandwidthLimit } from "./BandwidthLimit";
import { ForwardInfo } from "./ForwardInfo";


export class CreateInstanceRequestUserVpc extends $dara.Model {
  bandwidthLimit?: BandwidthLimit;
  /**
   * @remarks
   * The default route. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s elastic network interface (ENI) is used to access the Internet through the private gateway. For more information about the configuration method, see [Enable Internet access for a DSW instance by using a private Internet NAT gateway](https://help.aliyun.com/document_detail/2525343.html).
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks.
   * 
   * *   If you leave the SwitchId and ExtendedCIDRs parameters empty, the system automatically obtains all CIDR blocks in a VPC.
   * *   If you configure the SwitchId and ExtendedCIDRs parameters, we recommend that you specify all CIDR blocks in a VPC.
   * 
   * @example
   * ["192.168.0.1/24", "192.168.1.1/24"]
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The forward information.
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

