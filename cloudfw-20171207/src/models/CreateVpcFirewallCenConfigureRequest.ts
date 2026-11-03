// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the CEN.
   * 
   * > Prerequisite: The CEN instance must be created by invoking the CreateCen operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The settings for the switch status of the virtual private cloud (VPC) firewalls at the border. Valid values:
   * 
   * - **open** (default): Automatically enables protection after you create a VPC and the virtual private cloud (VPC) firewalls at the border are created.
   * - **close**: Does not automatically enable protection after the virtual private cloud (VPC) firewalls at the border are created. You can invoke the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to enable protection.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The vSwitch CIDR block used by the firewall. You must configure a CIDR block with a subnet mask of no more than 29 bits that does not conflict with your network planning to allocate to the vSwitch CIDR block required for the procedure of creating the firewall, in order to perform automatic creation of the vSwitch (Cloud_Firewall_VSWITCH) in the firewall secure VPC for traffic diversion and processing. The vSwitch CIDR block must be a subnet of the firewall VPC CIDR block.
   * 
   * If you do not specify this parameter, the default is to automatically allocate the 10.219.219.216/29 CIDR block.
   * 
   * > This parameter takes effect only when you create a VPC firewall in the local region of the CEN for the first time.
   * 
   * @example
   * 10.219.219.216/29
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The ID of the zone to which the firewall vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-i
   */
  firewallVSwitchZoneId?: string;
  /**
   * @remarks
   * The VPC CIDR block used by the firewall. You must configure a CIDR block with a subnet mask of no more than 28 bits to allocate to the VPC CIDR block required for the procedure of creating the firewall, in order to perform automatic creation of the firewall secure VPC (Cloud_Firewall_VPC) for traffic diversion and processing.
   * 
   * If you do not specify this parameter, the default is to automatically allocate the 10.0.0.0/8 CIDR block.
   * 
   * > This parameter takes effect only when you create a VPC firewall in the local region of the CEN for the first time.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The ID of the secondary zone to which the firewall belongs. Only when the primary zone service is not active, the firewall will perform automatic switchover to the secondary zone to continue running.
   * 
   * If you do not specify this parameter, the default is to automatically allocate the secondary zone for the firewall.
   * 
   * 
   * 
   * > This parameter takes effect only when you create a VPC firewall in the local region of the CEN for the first time.
   * 
   * @example
   * 10.219.219.216/29
   */
  firewallVpcStandbyZoneId?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the firewall belongs.
   * If your business is sensitive to latency, you can set the zone of the firewall to be the same as the zone of the vSwitch in your business VPC to reduce latency.
   * 
   * If you do not specify this parameter, the system automatically assigns a zone for the firewall.
   * 
   * 
   * 
   * > This parameter takes effect only when you create a VPC firewall in the local region of the CEN for the first time.
   * 
   * @example
   * cn-hangzhou-a
   */
  firewallVpcZoneId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
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
   * The UID of the member accounts of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance for which you want to create virtual private cloud (VPC) firewalls at the border.
   * 
   * > Prerequisite: The VPC must be added to the CEN specified by the CenId parameter by invoking the AttachCenChildInstance operation.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp10zlifxh6j0232w****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the Cloud Firewall interface belongs.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) firewalls at the border.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The region ID of the VPC for which you want to create virtual private cloud (VPC) firewalls at the border.
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
      firewallVSwitchZoneId: 'FirewallVSwitchZoneId',
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
      firewallVSwitchZoneId: 'string',
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

