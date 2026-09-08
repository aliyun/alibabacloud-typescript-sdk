// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterTransitRouterMulticastGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without removing the multicast member. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. After the check succeeds, the multicast member is removed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the multicast group to which the multicast member belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * The list of network interface controller (NIC) IDs.
   */
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of cross-region multicast domain IDs.
   */
  peerTransitRouterMulticastDomains?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the multicast domain to which the multicast member belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-mcast-domain-91wpg6wbhchjeq****
   */
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterMulticastDomains: 'PeerTransitRouterMulticastDomains',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterMulticastDomains: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    if(Array.isArray(this.peerTransitRouterMulticastDomains)) {
      $dara.Model.validateArray(this.peerTransitRouterMulticastDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

