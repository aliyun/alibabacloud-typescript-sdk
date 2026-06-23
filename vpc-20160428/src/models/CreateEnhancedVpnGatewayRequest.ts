// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnhancedVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure request idempotence.
   * 
   * You can generate this token from your client. Make sure that the token is unique for each request. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. Each request may have a different **RequestId**.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the second vSwitch to associate with the enhanced VPN gateway for high availability.
   * 
   * -
   * 
   * - For zone-level disaster recovery, the two vSwitches must be in different availability zones within the same VPC.
   * 
   * - In regions with only one availability zone, zone-level disaster recovery is not supported. To ensure high availability, specify two different vSwitches from that zone. You can also specify the same vSwitch for both the **VSwitchId** and **DisasterRecoveryVSwitchId** parameters.
   * 
   * @example
   * vsw-p0wiz7obm0tbimu4r****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * The type of the enhanced VPN gateway. Valid value:
   * 
   * - **Enhanced.SiteToSite**: an enhanced site-to-site VPN gateway that supports only the IPsec feature.
   * 
   * This parameter is required.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name of the enhanced VPN gateway. If you do not specify this parameter, the gateway ID is used as the name.
   * 
   * The name must be 2 to 100 characters long, start with a letter, and not start with http\\:// or https\\://. It can contain only letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway. Valid value:
   * 
   * - **public** (default): a public VPN gateway.
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where you want to create the enhanced VPN gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to assign the enhanced VPN gateway.
   * 
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * 
   * - If you do not specify this parameter, the enhanced VPN gateway is added to the Default Resource Group.
   * 
   * - Associated IPsec connections are automatically added to the same resource group as the enhanced VPN gateway. You cannot directly change the resource group of an IPsec connection. If you change the resource group of the gateway, the resource group of its associated IPsec connections is also updated.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch to associate with the enhanced VPN gateway.
   * 
   * -
   * 
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where you want to create the enhanced VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoelj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The type of the enhanced VPN gateway. Valid value:
   * 
   * - **Normal** (default): standard type.
   * 
   * @example
   * Normal
   */
  vpnType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disasterRecoveryVSwitchId: 'DisasterRecoveryVSwitchId',
      gatewayType: 'GatewayType',
      name: 'Name',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpnType: 'VpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disasterRecoveryVSwitchId: 'string',
      gatewayType: 'string',
      name: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      vpnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

