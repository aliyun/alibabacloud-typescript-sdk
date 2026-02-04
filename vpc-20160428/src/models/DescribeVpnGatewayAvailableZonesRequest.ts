// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewayAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
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
   * 
   * *   If an IPsec-VPN connection can be associated with the VPN gateway, this parameter specifies the bandwidth specification of the VPN gateway.
   * *   In scenarios where an IPsec-VPN connection can be associated with a transit router. This parameter specifies the bandwidth specification supported by an IPsec-VPN connection.
   * 
   * Different bandwidth specifications may affect returned zone information. Valid values:
   * 
   * *   **5M**
   * *   **10M**
   * *   **20M**
   * *   **50M**
   * *   **100M**
   * *   **200M**
   * *   **500M**
   * *   **1000M**
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

