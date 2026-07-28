// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnhancedVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The second vSwitch associated with the enhanced VPN VPC-connected instance.
   * 
   * - This parameter is required.
   * - You must specify two vSwitches in different zones within the VPC associated with the enhanced VPN VPC-connected instance to implement zone-level disaster recovery for IPsec-VPN connections.
   * - For regions that support only one zone, zone-level disaster recovery is not supported. Specify two different vSwitches in the same zone to achieve high availability for IPsec-VPN connections. You can also specify the same vSwitch.
   * 
   * @example
   * vsw-p0wiz7obm0tbimu4r****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * The type of the enhanced VPN gateway. Valid values:
   * - **Enhanced.SiteToSite**: enhanced site-to-cloud VPN that covers only IPsec functionality.
   * 
   * This parameter is required.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name of the enhanced VPN gateway. The default value is the ID of the enhanced VPN gateway.
   * 
   * The name must be 2 to 100 characters in length. It cannot start with http:// or https://. It must start with an uppercase or lowercase letter and can contain uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.). Other special characters are not supported.
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway. Valid values:
   * 
   * - **public** (default): public VPN gateway.
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the enhanced VPN gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the enhanced VPN gateway belongs.
   * 
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * - If you do not specify a resource group ID, the enhanced VPN gateway belongs to the default resource group after it is created.
   * - After the enhanced VPN gateway is created, if you create IPsec-VPN connections under the enhanced VPN gateway (IPsec-VPN connections that are associated with the enhanced VPN gateway), these resources belong to the same resource group as the enhanced VPN gateway and cannot be modified independently. If you change the resource group of the enhanced VPN gateway, the resource group of the preceding resources is also changed.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch associated with the enhanced VPN gateway instance.
   * 
   * - You must specify a vSwitch and also specify the **DisasterRecoveryVSwitchId** parameter.
   * 
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the enhanced VPN gateway belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoelj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The type of the enhanced VPN gateway. Valid values:
   * - **Normal** (default): standard.
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

