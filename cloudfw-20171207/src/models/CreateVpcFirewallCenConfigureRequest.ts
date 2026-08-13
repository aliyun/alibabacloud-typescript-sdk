// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the CEN instance.
   * 
   * >  Prerequisite: The CEN instance must have been created by invoking the Cbn.CreateCen operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * Settings for the virtual private cloud (VPC) firewall status after you create a VPC. Valid values:
   * 
   * - **open** (default): The virtual private cloud (VPC) firewall is automatically enabled after it is created.
   * - **close**: The virtual private cloud (VPC) firewall is not automatically enabled after it is created. You can invoke the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to enable the firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch used by the firewall. Specify a CIDR block with a subnet mask of no more than 29 bits that does not conflict with your network planning. This CIDR block is allocated to the vSwitch that is required during the create a VPC firewall procedure and is used for automatic creation of a vSwitch (Cloud_Firewall_VSWITCH) within the security VPC for traffic redirection. The vSwitch CIDR block must be a subnet of the firewall VPC CIDR block.
   * 
   * If you leave this parameter empty, the CIDR block 10.219.219.216/29 is automatically allocated by default.
   * 
   * > This parameter takes effect only when a VPC firewall is created for the first time in the local region of the CEN instance.
   * 
   * @example
   * 10.219.219.216/29
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch used by the firewall.
   * 
   * @example
   * cn-hangzhou-i
   */
  firewallVSwitchZoneId?: string;
  /**
   * @remarks
   * The CIDR block of the VPC used by the firewall. Specify a CIDR block with a subnet mask of no more than 28 bits. This CIDR block is allocated to the VPC that is required during the create a VPC firewall procedure and is used for automatic creation of a security VPC (Cloud_Firewall_VPC) for traffic redirection.
   * 
   * If you leave this parameter empty, the CIDR block 10.0.0.0/8 is automatically allocated by default.
   * 
   * > This parameter takes effect only when a VPC firewall is created for the first time in the local region of the CEN instance.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The ID of the secondary active zone of the firewall. The firewall performs an automatic switchover to the secondary zone to continue running only when the primary zone becomes unavailable.
   * 
   * If you leave this parameter empty, a secondary zone is automatically allocated by default.
   * 
   * 
   * 
   * > This parameter takes effect only when you create a VPC firewall for the first time in the local region of the CEN instance.
   * 
   * @example
   * 10.219.219.216/29
   */
  firewallVpcStandbyZoneId?: string;
  /**
   * @remarks
   * The ID of the primary active zone of the firewall. If your business is latency-sensitive, you can set the firewall zone to the same zone as the vSwitch of the business VPC to reduce latency.
   * 
   * If you leave this parameter empty, a zone is automatically allocated by default.
   * 
   * 
   * 
   * > This parameter takes effect only when you create a VPC firewall for the first time in the local region of the CEN instance.
   * 
   * @example
   * cn-hangzhou-a
   */
  firewallVpcZoneId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The UID of the member account of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance for which you want to create a virtual private cloud (VPC) firewall.
   * 
   * >  Prerequisite: The VPC must have been attached to the CEN instance specified by CenId by invoking the Cbn.AttachCenChildInstance operation.
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
   * The instance name of the virtual private cloud (VPC) firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The region ID of the VPC for which you want to create a virtual private cloud (VPC) firewall.
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

