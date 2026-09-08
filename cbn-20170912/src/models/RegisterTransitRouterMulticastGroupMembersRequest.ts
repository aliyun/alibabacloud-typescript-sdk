// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterTransitRouterMulticastGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the multicast member is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the multicast group to which the multicast member belongs. Valid values: **224.0.1.0** to **239.255.255.254**.
   * >Notice: 224.0.0.0 to 224.0.0.127 are system reserved IP addresses and cannot be used as multicast group IP addresses.
   * If the multicast group that you specify does not exist in the current multicast domain, the system automatically creates a new multicast group in the current multicast domain.
   * 
   * This parameter is required.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * The list of elastic network interfaces (ENIs) IDs.
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
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the elastic network interfaces (ENIs) belongs.
   * 
   * - If the network interface controller (NIC) belongs to the same Alibaba Cloud account that you use to logon to call this operation, you do not need to set this parameter.
   * - If the network interface controller (NIC) belongs to a different Alibaba Cloud account from the one you use to logon, you must set this parameter.
   * 
   * @example
   * vpc-wz9fusm6zq8uy7cfa****
   */
  vpcId?: string;
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
      vpcId: 'VpcId',
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
      vpcId: 'string',
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

