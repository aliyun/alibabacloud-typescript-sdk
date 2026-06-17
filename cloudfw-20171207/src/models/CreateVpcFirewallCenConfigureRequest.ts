// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * - **open** (default): The VPC firewall is enabled after it is created.
   * 
   * - **close**: The VPC firewall is disabled after it is created. Call the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to enable the firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch that is used by the firewall. Specify a CIDR block with a subnet mask of 29 bits or less that does not conflict with your network plan. This CIDR block is allocated to the vSwitch that is automatically created in the firewall VPC (Cloud_Firewall_VSWITCH) for traffic redirection. The vSwitch CIDR block must be a subnet of the firewall VPC CIDR block. If you do not specify this parameter, the system automatically allocates the 10.219.219.216/29 CIDR block.
   * 
   * If you leave this parameter empty, the CIDR block 10.219.219.216/29 is automatically allocated.
   * 
   * > This parameter is valid only when you create a VPC firewall for the first time in the current region of the CEN.
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The CIDR block of the VPC that is used by the firewall. Specify a CIDR block with a subnet mask of 28 bits or less. This CIDR block is allocated to the VPC that is automatically created for the firewall for traffic redirection. If you do not specify this parameter, the system automatically allocates the 10.0.0.0/8 CIDR block.
   * 
   * If you leave this property empty, the CIDR block 10.0.0.0/8 is automatically allocated.
   * 
   * > This parameter is valid only when you create a VPC firewall for the first time in the current region of the CEN.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The ID of the secondary zone for the firewall. If the service in the primary zone becomes unavailable, the firewall automatically switches to the secondary zone. If you do not specify this parameter, the system automatically assigns a secondary zone for the firewall.
   * 
   * If you do not specify a value, a zone is automatically allocated to the VPC firewall.
   * 
   * > This parameter is valid only when you create a VPC firewall for the first time in the current region of the CEN.
   * 
   * @example
   * cn-hangzhou-b
   */
  firewallVpcStandbyZoneId?: string;
  /**
   * @remarks
   * The ID of the primary zone for the firewall. If your business is sensitive to latency, specify the same zone for the firewall and the vSwitch of your business VPC to reduce latency. If you do not specify this parameter, the system automatically assigns a zone for the firewall.
   * 
   * If you do not specify a value, a zone is automatically allocated to the VPC firewall.
   * 
   * > This parameter is valid only when you create a VPC firewall for the first time in the current region of the CEN.
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
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the VPC for which you want to create the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp10zlifxh6j0232w****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is used by the Cloud Firewall interface.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the VPC firewall instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The region ID of the VPC for which you want to create the VPC firewall.
   * 
   * > For more information about the regions that Cloud Firewall supports, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
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

