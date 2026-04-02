// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnhancedVpnGatewayRequest extends $dara.Model {
  /**
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @example
   * vsw-p0wiz7obm0tbimu4r****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoelj****
   */
  vpcId?: string;
  /**
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

