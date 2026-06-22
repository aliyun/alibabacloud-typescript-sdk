// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The switch status of the VPC border firewall. Valid values:
   * 
   * - **open** (default): Protection is automatically enabled after the VPC border firewall is created.
   * - **close**: Protection is not automatically enabled after the VPC border firewall is created. You can call the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to enable protection.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The vSwitch CIDR block used by the firewall. You must configure a CIDR block with a subnet mask no larger than 29 bits that does not conflict with the network plan to allocate a vSwitch CIDR block for the firewall creation process. This is used to automatically create a vSwitch (Cloud_Firewall_VSWITCH) within the firewall security VPC for traffic redirection. The vSwitch CIDR block must be a subnet of the firewall VPC CIDR block.
   * 
   * If this parameter is not specified, the CIDR block 10.219.219.216/29 is automatically allocated by default.
   * 
   * > This parameter is only valid when a VPC firewall is created for the first time in this CEN region.
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The VPC CIDR block used by the firewall. You must configure a CIDR block with a subnet mask no larger than 28 bits to allocate a VPC CIDR block for the firewall creation process. This is used to automatically create a firewall security VPC (Cloud_Firewall_VPC) for traffic redirection.
   * 
   * If this parameter is not specified, the CIDR block 10.0.0.0/8 is automatically allocated by default.
   * 
   * > This parameter is only valid when a VPC firewall is created for the first time in this CEN region.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The standby availability zone ID of the firewall. The firewall automatically switches to the standby availability zone and continues to run only when the primary availability zone service is unavailable.
   * 
   * If this parameter is not specified, the firewall standby availability zone is automatically allocated by default.
   * 
   * 
   * 
   * > This parameter is only valid when a VPC firewall is created for the first time in this CEN region.
   * 
   * @example
   * cn-hangzhou-b
   */
  firewallVpcStandbyZoneId?: string;
  /**
   * @remarks
   * The primary availability zone ID of the firewall.
   * If your business is latency-sensitive, you can customize the firewall availability zone to be the same as your business VPC vSwitch availability zone to reduce latency.
   * 
   * If this parameter is not specified, the firewall availability zone is automatically allocated by default.
   * 
   * 
   * 
   * > This parameter is only valid when a VPC firewall is created for the first time in this CEN region.
   * 
   * @example
   * cn-hangzhou-a
   */
  firewallVpcZoneId?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The member account UID of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The VPC instance ID for which the VPC border firewall is created.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp10zlifxh6j0232w****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID to which the Cloud Firewall interface belongs.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance name of the VPC border firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The region ID of the VPC for which the VPC border firewall is created.
   * 
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallSwitch: 'FirewallSwitch',
      firewallVSwitchCidrBlock: 'FirewallVSwitchCidrBlock',
      firewallVpcCidrBlock: 'FirewallVpcCidrBlock',
      firewallVpcStandbyZoneId: 'FirewallVpcStandbyZoneId',
      firewallVpcZoneId: 'FirewallVpcZoneId',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      vSwitchId: 'VSwitchId',
      vpcFirewallName: 'VpcFirewallName',
      vpcRegion: 'VpcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallSwitch: 'string',
      firewallVSwitchCidrBlock: 'string',
      firewallVpcCidrBlock: 'string',
      firewallVpcStandbyZoneId: 'string',
      firewallVpcZoneId: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      vSwitchId: 'string',
      vpcFirewallName: 'string',
      vpcRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

