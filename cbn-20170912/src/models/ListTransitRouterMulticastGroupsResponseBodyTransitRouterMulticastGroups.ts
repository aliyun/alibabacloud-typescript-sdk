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
   * Indicates whether the multicast resource is a multicast member. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  groupMember?: boolean;
  /**
   * @remarks
   * Indicates whether the multicast resource is a multicast source. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  groupSource?: boolean;
  /**
   * @remarks
   * The type of the multicast source.
   * 
   * If the value is **Static**, the multicast source is manually specified.
   * 
   * @example
   * Static
   */
  memberType?: string;
  /**
   * @remarks
   * The ID of the ENI, which is a multicast resource.
   * 
   * @example
   * eni-p0weuda3lszwzjly****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the multicast domain associated with the multicast resource that is deployed across regions.
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
   * The ID of the Alibaba Cloud account to which the multicast resource belongs.
   * 
   * @example
   * 253460731706911258
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the multicast resource. Valid values:
   * 
   * *   **VPC**: The multicast resource is in a VPC.
   * *   **TR**: The multicast resource is deployed across regions.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the multicast member.
   * 
   * If the value is **Static**, the multicast member is manually specified.
   * 
   * @example
   * Static
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the multicast resource. Valid values:
   * 
   * *   **Registering**: being created
   * *   **Registered**: available
   * *   **Deregistering**: being deleted
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

