// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for each request. The \\`ClientToken\\` parameter can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP address of the multicast group.
   * 
   * Each multicast group is identified by a multicast IP address.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * Specifies whether to query multicast members.
   * 
   * - **false**: No.
   * 
   * - **true**: Yes.
   * 
   * > This parameter works with \\`IsGroupSource\\`.
   * >
   * > - If you do not specify \\`IsGroupMember\\` or \\`IsGroupSource\\`, the system queries both multicast members and sources.
   * >
   * > - If you specify one or both parameters, the system queries resources based on the specified parameters.
   * 
   * @example
   * false
   */
  isGroupMember?: boolean;
  /**
   * @remarks
   * Specifies whether to query multicast sources.
   * 
   * - **false**: No.
   * 
   * - **true**: Yes.
   * 
   * > This parameter works with \\`IsGroupMember\\`.
   * >
   * > - If you do not specify \\`IsGroupSource\\` or \\`IsGroupMember\\`, the system queries both multicast sources and members.
   * >
   * > - If you specify one or both parameters, the system queries resources based on the specified parameters.
   * 
   * @example
   * true
   */
  isGroupSource?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A list of Elastic Network Interface (ENI) IDs.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * - If this is your first query or if no next page exists, do not specify this parameter.
   * 
   * - If a next page exists, set this parameter to the \\`NextToken\\` value that is returned from the previous call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * A list of IDs of cross-region multicast domains.
   */
  peerTransitRouterMulticastDomains?: string[];
  /**
   * @remarks
   * The ID of the resource associated with the multicast resource.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the multicast resource.
   * 
   * - **VPC**: queries information about multicast resources in a VPC.
   * 
   * - **TR**: queries information about cross-region multicast resources.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * You must specify \\`TransitRouterMulticastDomainId\\` or \\`TransitRouterAttachmentId\\`.
   * 
   * @example
   * tr-attach-g3kz2k3u76amsk****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * You must specify \\`TransitRouterMulticastDomainId\\` or \\`TransitRouterAttachmentId\\`.
   * 
   * @example
   * tr-mcast-domain-5mjb5gjb6dgu98****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * A list of vSwitch IDs.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupIpAddress: 'GroupIpAddress',
      isGroupMember: 'IsGroupMember',
      isGroupSource: 'IsGroupSource',
      maxResults: 'MaxResults',
      networkInterfaceIds: 'NetworkInterfaceIds',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterMulticastDomains: 'PeerTransitRouterMulticastDomains',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupIpAddress: 'string',
      isGroupMember: 'boolean',
      isGroupSource: 'boolean',
      maxResults: 'number',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterMulticastDomains: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    if(Array.isArray(this.peerTransitRouterMulticastDomains)) {
      $dara.Model.validateArray(this.peerTransitRouterMulticastDomains);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

