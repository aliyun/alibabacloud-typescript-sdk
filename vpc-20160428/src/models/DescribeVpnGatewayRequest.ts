// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include pending order data. Valid values:
   * 
   * - **false** (default): does not include pending order data.
   * 
   * - **true**: includes pending order data.
   * 
   * @example
   * true
   */
  includeReservationData?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The instance ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1r3v1xqkl0w519g****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      includeReservationData: 'IncludeReservationData',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeReservationData: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

