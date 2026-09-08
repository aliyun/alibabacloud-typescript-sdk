// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastGroupsRequest extends $dara.Model {
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
   * Specifies whether to query multicast members. Valid values:
   * 
   * - **false**: no.
   * - **true**: yes.
   * 
   * > This parameter is used together with IsGroupSource.
   * > - If neither parameter is configured, both multicast sources and members are queried by default.
   * > - If only one parameter is configured or both are configured, the query is based on the configured parameters.
   * 
   * @example
   * false
   */
  isGroupMember?: boolean;
  /**
   * @remarks
   * Specifies whether to query multicast sources. Valid values:
   * 
   * - **false**: no.
   * - **true**: yes.
   * 
   * > This parameter is used together with IsGroupMember.
   * > - If neither parameter is configured, both multicast sources and members are queried by default.
   * > - If only one parameter is configured or both are configured, the query is based on the configured parameters.
   * 
   * @example
   * true
   */
  isGroupSource?: boolean;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of elastic network interface (ENI) IDs.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first request or if no next query exists.
   * - If a next query exists, set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of cross-region multicast domain IDs.
   */
  peerTransitRouterMulticastDomains?: string[];
  /**
   * @remarks
   * The resource ID associated with the multicast resource.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the multicast resource. Valid values:
   * 
   * - **VPC**: queries multicast resources in a virtual private cloud (VPC).
   * - **TR**: queries cross-region multicast resources.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The network instance connection ID.
   * 
   * You must specify at least one of TransitRouterMulticastDomainId and TransitRouterAttachmentId.
   * 
   * @example
   * tr-attach-g3kz2k3u76amsk****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The multicast domain ID.
   * 
   * You must specify at least one of TransitRouterMulticastDomainId and TransitRouterAttachmentId.
   * 
   * @example
   * tr-mcast-domain-5mjb5gjb6dgu98****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
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

