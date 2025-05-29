// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP address of the multicast group.
   * 
   * Each multicast group is identified by its IP address.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * Specified whether to query the multicast members. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * >- This parameter must be specified together with the IsGroupMember parameter.
   * >- If you do not set IsGroupMember or IsGroupSource, both the multicast sources and members are queried.
   * >- If you set only one of them or both of them, the specified values prevail.
   * 
   * @example
   * false
   */
  isGroupMember?: boolean;
  /**
   * @remarks
   * Specifies whether to query the multicast sources. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * > - This parameter must be specified together with the IsGroupMember parameter.
   * > *   If you do not specify IsGroupMember or IsGroupSource, both the multicast sources and members are queried.
   * > *   If you specify only one of them or both of them, the specified values prevail.
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
   * The IDs of ENIs.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query and no next queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the inter-region multicast domain.
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
   * The type of the multicast resource. Valid values:
   * 
   * *   **VPC**: queries multicast resources by VPC.
   * *   **TR**: queries multicast resources that are also deployed in a different region.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the network instance connection
   * 
   * You must configure one of the TransitRouterMulticastDomainId and TransitRouterAttachmentId parameters.
   * 
   * @example
   * tr-attach-g3kz2k3u76amsk****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * You must configure one of the TransitRouterMulticastDomainId and TransitRouterAttachmentId parameters.
   * 
   * @example
   * tr-mcast-domain-5mjb5gjb6dgu98****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
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

