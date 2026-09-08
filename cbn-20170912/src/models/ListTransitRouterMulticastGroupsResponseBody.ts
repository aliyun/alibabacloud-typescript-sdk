// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups extends $dara.Model {
  /**
   * @remarks
   * The IP address of the multicast group to which the multicast resource belongs.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * Indicates whether the current multicast resource is a multicast member. Valid values:
   * 
   * - **true**: The multicast resource is a multicast member.
   * - **false**: The multicast resource is not a multicast member.
   * 
   * @example
   * true
   */
  groupMember?: boolean;
  /**
   * @remarks
   * Indicates whether the current multicast resource is a multicast source. Valid values:
   * 
   * - **true**: The multicast resource is a multicast source.
   * - **false**: The multicast resource is not a multicast source.
   * 
   * @example
   * false
   */
  groupSource?: boolean;
  /**
   * @remarks
   * The type of the multicast member. Valid values:
   * 
   * - **Static**: The multicast member is manually specified.
   * 
   * - **IGMPv2**: The multicast member dynamically joined the multicast group through the IGMP protocol.
   * 
   * @example
   * Static
   */
  memberType?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID, which is the multicast resource ID.
   * 
   * @example
   * eni-p0weuda3lszwzjly****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the multicast domain associated with the cross-region multicast resource.
   * 
   * @example
   * tr-mcast-domain-91wpg6wbhchjeq****
   */
  peerTransitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The resource ID associated with the multicast resource.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the multicast resource belongs.
   * 
   * @example
   * 11081188765****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the multicast resource. Valid values:
   * 
   * - **VPC**: The multicast resource is a resource in a VPC.
   * - **TR**: The multicast resource is a cross-region resource.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the multicast source. Valid values:
   * 
   * - **Static**: The multicast source is manually specified.
   * 
   * - **IGMPv2**: The multicast source dynamically joined the multicast group through the IGMP protocol.
   * 
   * @example
   * Static
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the multicast resource. Valid values:
   * 
   * - **Registering**: being created.
   * - **Registered**: available.
   * - **Deregistering**: being deleted.
   * 
   * @example
   * Registered
   */
  status?: string;
  /**
   * @remarks
   * The network instance connection ID.
   * 
   * @example
   * tr-attach-g3kz2k3u76amsk****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The multicast domain ID.
   * 
   * @example
   * tr-mcast-domain-kx0vk0v7fz8kx4****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the multicast resource belongs.
   * 
   * @example
   * vsw-p0w9s2ig1jnwgrbzl****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIpAddress: 'GroupIpAddress',
      groupMember: 'GroupMember',
      groupSource: 'GroupSource',
      memberType: 'MemberType',
      networkInterfaceId: 'NetworkInterfaceId',
      peerTransitRouterMulticastDomainId: 'PeerTransitRouterMulticastDomainId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      sourceType: 'SourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIpAddress: 'string',
      groupMember: 'boolean',
      groupSource: 'boolean',
      memberType: 'string',
      networkInterfaceId: 'string',
      peerTransitRouterMulticastDomainId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      sourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB3C4A16-0933-5850-9D43-0C3EA37BCBFB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of multicast group information.
   */
  transitRouterMulticastGroups?: ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastGroups: 'TransitRouterMulticastGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastGroups: { 'type': 'array', 'itemType': ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterMulticastGroups)) {
      $dara.Model.validateArray(this.transitRouterMulticastGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

