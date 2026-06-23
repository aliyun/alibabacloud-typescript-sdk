// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewayAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values:
   * 
   * - **zh-CN**: Chinese.
   * - **en-US** (default): English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The VPN gateway type. Valid values:
   * - **Traditional**: Returns zone information for creating traditional VPN gateways.
   * - **Enhanced.SiteToSite**: Returns zone information for creating enhanced site-to-cloud VPN gateways.
   * - **Default value**: Returns zone information for creating all types of VPN gateways.
   * 
   * @example
   * Traditional
   */
  gatewayType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bandwidth specification.
   * - If the IPsec-VPN connection is associated with a VPN gateway instance, this parameter specifies the bandwidth specification of the VPN gateway instance.
   * - If the IPsec-VPN connection is associated with a transit router, this parameter specifies the expected bandwidth specification that the IPsec-VPN connection can support.
   * 
   * Different bandwidth specifications may affect the zone information returned. Valid values:
   * 
   * - **5M**
   * - **10M**
   * - **20M**
   * - **50M**
   * - **100M**
   * - **200M**
   * - **500M**
   * - **1000M**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5M
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayType: 'GatewayType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

