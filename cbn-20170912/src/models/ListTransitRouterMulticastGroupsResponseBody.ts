// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups extends $dara.Model {
  /**
   * @remarks
   * The IP address of the multicast group.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * Indicates whether the multicast resource is a multicast member.
   * 
   * - **true**: The resource is a multicast member.
   * 
   * - **false**: The resource is not a multicast member.
   * 
   * @example
   * true
   */
  groupMember?: boolean;
  /**
   * @remarks
   * Indicates whether the multicast resource is a multicast source.
   * 
   * - **true**: The resource is a multicast source.
   * 
   * - **false**: The resource is not a multicast source.
   * 
   * @example
   * false
   */
  groupSource?: boolean;
  /**
   * @remarks
   * The type of the multicast member.
   * 
   * - **Static**: The multicast member is manually specified.
   * 
   * - **IGMPv2**: The multicast member dynamically joins the multicast group based on Internet Group Management Protocol Version 2 (IGMPv2).
   * 
   * @example
   * Static
   */
  memberType?: string;
  /**
   * @remarks
   * The ID of the ENI. The ENI is the multicast resource.
   * 
   * @example
   * eni-p0weuda3lszwzjly****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the multicast domain that is associated with the cross-region multicast resource.
   * 
   * @example
   * tr-mcast-domain-91wpg6wbhchjeq****
   */
  peerTransitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The ID of the resource associated with the multicast resource.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the multicast resource.
   * 
   * @example
   * 11081188765****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the multicast resource.
   * 
   * - **VPC**: The multicast resource is in a VPC.
   * 
   * - **TR**: The multicast resource is a cross-region resource.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the multicast source.
   * 
   * - **Static**: The multicast source is manually specified.
   * 
   * - **IGMPv2**: The multicast source dynamically joins the multicast group based on IGMPv2.
   * 
   * @example
   * Static
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the multicast resource.
   * 
   * - **Registering**: The resource is being created.
   * 
   * - **Registered**: The resource is available.
   * 
   * - **Deregistering**: The resource is being deleted.
   * 
   * @example
   * Registered
   */
  status?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-g3kz2k3u76amsk****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * @example
   * tr-mcast-domain-kx0vk0v7fz8kx4****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
   * The token for the next page of results.
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If a value is returned for **NextToken**, the value is the token for the next page.
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
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of multicast groups.
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

