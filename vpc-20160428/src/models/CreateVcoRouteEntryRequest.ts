// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVcoRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the destination route entry.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The next hop of the destination route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
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
   * The region ID of the IPsec-VPN connection.
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
   * The destination CIDR block of the destination route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The weight of the destination route entry. Valid values:
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
      description: 'Description',
      dryRun: 'DryRun',
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
      description: 'string',
      dryRun: 'boolean',
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

