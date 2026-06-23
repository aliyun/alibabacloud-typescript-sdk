// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVcoRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The next hop of the destination route entry to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w5112fgnl2ihlmf****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol. Set the value to **Ipsec** (default), which specifies the IPsec tunneling protocol.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  /**
   * @remarks
   * The region ID of the IPsec connection.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
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
   * The destination CIDR block of the destination route entry to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The ID of the IPsec connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w5112fgnl2ihlmf****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The weight of the destination route entry to be deleted. Valid values:
   * 
   * - **0**: low priority.
   * - **100**: high priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextHop: 'NextHop',
      overlayMode: 'OverlayMode',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDest: 'RouteDest',
      vpnConnectionId: 'VpnConnectionId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextHop: 'string',
      overlayMode: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDest: 'string',
      vpnConnectionId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

