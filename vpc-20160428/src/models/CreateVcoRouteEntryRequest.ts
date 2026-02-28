// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVcoRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the destination-based route.
   * 
   * Only **published** is returned, which indicates that the current route is published to the transit router.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The weight of the destination-based route. Valid values:
   * 
   * *   **0**: a low priority.
   * *   **100**: a high priority.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. After the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The next hop of the destination-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol.
   * 
   * The value is set to **Ipsec**, which indicates the IPsec tunneling protocol.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
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
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The response parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The destination CIDR block of the destination-based route.
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

