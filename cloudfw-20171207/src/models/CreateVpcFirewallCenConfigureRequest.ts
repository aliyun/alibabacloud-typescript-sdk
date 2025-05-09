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
   * Specifies whether to enable the VPC firewall. Valid values:
   * 
   * *   **open**: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
   * *   **close**: After you create the VPC firewall, the VPC firewall is disabled. You can call the [ModifyVpcFirewallCenSwitchStatus](https://help.aliyun.com/document_detail/345780.html) operation to manually enable the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.
   * 
   * If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.
   */
  firewallVSwitchCidrBlock?: string;
  /**
   * @remarks
   * The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.
   * 
   * If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region.
   * 
   * @example
   * 10.0.0.0/8
   */
  firewallVpcCidrBlock?: string;
  /**
   * @remarks
   * The ID of the backup availability zone to which the firewall belongs. The firewall will automatically switch to the backup availability zone to continue running only if the primary availability zone service is unavailable.
   * If this parameter is not filled, the backup availability zone for the firewall will be automatically assigned.
   * > This parameter is only effective when creating a VPC firewall for the first time in this CEN region.
   * 
   * @example
   * cn-hangzhou-b
   */
  firewallVpcStandbyZoneId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.
   * 
   * If you do not specify a value, a zone is automatically assigned for the vSwitch.
   * 
   * >  This parameter takes effect only when you create a VPC firewall for the first time in the current CEN instance and region. For more information about zones that are supported by each region, see [Query zones](https://help.aliyun.com/document_detail/36064.html).
   * 
   * @example
   * cn-hangzhou-a
   */
  firewallVpcZoneId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
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
   * The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The ID of the region to which the VPC belongs.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
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

