// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The match method that is used to match routes based on the AS path. Valid values:
   * 
   * *   **Include**: fuzzy match. A route is a match if the AS path of the route overlaps with the AS path in the match conditions.
   * *   **Complete**: exact match. A route is a match only if the AS path of the route matches the AS path in the match conditions.
   * 
   * @example
   * Include
   */
  asPathMatchMode?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region in which the routing policy is applied.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  cenRegionId?: string;
  /**
   * @remarks
   * The match method that is used to match routes against the prefix list. Valid values:
   * 
   * *   **Include**: fuzzy match. A route is a match if the route prefix is included in the match conditions.
   * 
   * For example, if you set the match condition to 10.10.0.0/16 and fuzzy match is applied, the route whose prefix is 10.10.1.0/24 meets the match condition.
   * 
   * *   **Complete**: exact match. A route is a match only if the route prefix is the same as the prefix specified in the match condition.
   * 
   * For example, if you set the match condition to 10.10.0.0/16 and exact match is applied, only the route whose prefix is 10.10.0.0/16 meets the match condition.
   * 
   * @example
   * Include
   */
  cidrMatchMode?: string;
  /**
   * @remarks
   * The match method that is used to match routes based on the community. Valid values:
   * 
   * *   **Include**: fuzzy match. A route is a match if the community of the route overlaps with the community in the match conditions.
   * *   **Complete**: exact match. A route is a match only if the community of the route matches the community in the match conditions.
   * 
   * @example
   * Include
   */
  communityMatchMode?: string;
  /**
   * @remarks
   * The action to be performed on the community. Valid values:
   * 
   * *   **Additive**: adds the community to the route.
   * *   **Replace**: replaces the original community of the route.
   * 
   * This parameter specifies the action to be performed when a route meets the match condition.
   * 
   * @example
   * Additive
   */
  communityOperateMode?: string;
  /**
   * @remarks
   * The description of the routing policy.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The types of destination network instance to which the routes belong. The following types of network instances are supported:
   * 
   * *   **VPC**: VPC
   * 
   * *   **VBR**: VBR
   * 
   * *   **CCN**: CCN instance
   * 
   * *   **VPN**: IPsec connection
   * 
   *     > This parameter does not take effect if the IPsec-VPN connection or SSL client is associated with a transit router through a VPN gateway and a VPC. This parameter takes effect only if the IPsec connection is directly connected to the transit router.
   * 
   * The destination network instance types are valid only if the routing policy is applied to scenarios where routes are advertised from the gateway in the current region to network instances in the current region.
   * 
   * @example
   * VPC
   */
  destinationChildInstanceTypes?: string[];
  /**
   * @remarks
   * The prefix list against which routes are matched.
   * 
   * You must specify the IP addresses in CIDR notation. You can enter at most 32 CIDR blocks.
   * 
   * @example
   * 10.10.10.0/24
   */
  destinationCidrBlocks?: string[];
  /**
   * @remarks
   * The IDs of the destination network instances to which the routes belong. The following network instance types are supported:
   * 
   * *   VPC
   * *   VBR
   * *   CCN instance
   * *   SAG instance
   * *   The ID of the IPsec-VPN connection.
   * 
   * You can enter at most 32 IDs.
   * 
   * > The destination instance IDs take effect only when Direction is set to Export from Regional Gateway and the destination instances are deployed in the current region.
   * 
   * @example
   * vpc-avcdsg34ds****
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to exclude destination instance IDs. Valid values:
   * 
   * *   **false** (default): A route is a match if the destination instance ID is included in the list specified by **SourceInstanceIds.N**.
   * *   **true**: A route is a match if the destination network instance ID is not in the list specified by **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The destination region IDs of the route. You can specify at most 32 region IDs.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The IDs of the destination route tables to which the routes belong. You can enter at most 32 route table IDs.
   * 
   * > The destination route table IDs take effect only when Direction is set to Export from Regional Gateway and the destination route tables belong to network instances deployed in the current region.
   * 
   * @example
   * vtb-adfg53c322v****
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The action to be performed on a route that meets all the match conditions. Valid values:
   * 
   * *   **Permit**: the route is permitted.
   * *   **Deny**: the route is denied.
   * 
   * This parameter is required.
   * 
   * @example
   * Permit
   */
  mapResult?: string;
  /**
   * @remarks
   * The type of IP address in the match condition. Valid values:
   * 
   * *   **IPv4**: IPv4 address
   * *   **IPv6**: IPv6 address
   * 
   * This parameter can be empty. If no value is specified, all types of IP address are a match.
   * 
   * @example
   * IPv4
   */
  matchAddressType?: string;
  /**
   * @remarks
   * The AS paths against which routes are matched.
   * 
   * > Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. In other words, only the AS number list is supported. Sets and sub-lists are not supported.
   * 
   * @example
   * 65501
   */
  matchAsns?: number[];
  /**
   * @remarks
   * The community against which routes are matched.
   * 
   * Specify the community in the format of n:m. Valid values of n and m: **1** to **65535**. Each community must comply with the RFC 1997 standard. The RFC 8092 standard that defines BGP large communities is not supported.
   * 
   * You can specify at most 32 communities.
   * 
   * > If the configurations of the communities are incorrect, routes may fail to be advertised to your data center.
   * 
   * @example
   * 65501:1
   */
  matchCommunitySet?: string[];
  /**
   * @remarks
   * The priority of the routing policy that you want to associate with the current one.
   * 
   * *   This parameter takes effect only when the **MapResult** parameter is set to **Permit**. This way, the permitted route is matched against the next routing policy.
   * *   The region and direction of the routing policy to be associated must be the same as those of the current routing policy.
   * *   The priority of the routing policy to be associated must be lower than the priority of the current routing policy.
   * 
   * @example
   * 20
   */
  nextPriority?: number;
  /**
   * @remarks
   * The community set on which actions are performed.
   * 
   * Specify the community in the format of n:m. Valid values of n and m: **1** to **65535**. Each community must comply with RFC 1997. The RFC 8092 standard that defines BGP large communities is not supported.
   * 
   * You can specify at most 32 communities.
   * 
   * > If the configurations of the communities are incorrect, routes may fail to be advertised to your data center.
   * 
   * @example
   * 65501:1
   */
  operateCommunitySet?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new priority of the route.
   * 
   * Valid values: **1** to **100**. The default priority is **50**. A smaller value indicates a higher priority.
   * 
   * This parameter specifies the action to be performed when a route meets the match condition.
   * 
   * @example
   * 22
   */
  preference?: number;
  /**
   * @remarks
   * The AS paths that are prepended by using an action statement when regional gateways receive or advertise routes.
   * 
   * The AS paths vary based on the direction in which the routing policy is applied:
   * 
   * *   If AS paths are prepended to a routing policy that is applied in the inbound direction, you must specify source network instance IDs and the source region in the match condition. In addition, the source region must be the same as the region where the routing policy is applied.
   * *   If AS paths are prepended to a routing policy that is applied in the outbound direction, you must specify destination network instance IDs in the match condition.
   * 
   * This parameter specifies the action to be performed when a route meets the match condition.
   * 
   * @example
   * 65501
   */
  prependAsPath?: number[];
  /**
   * @remarks
   * The priority of the routing policy. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * > You cannot specify the same priority for routing policies that apply in the same region and direction. The system matches routes against the match conditions of routing policies in descending order of priority. A smaller value indicates a higher priority. You must set the priorities to proper values.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cenrmap-abcdedfghij****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The type of route to be matched against the match condition. The following route types are supported:
   * 
   * *   **System**: system routes that are automatically generated by the system.
   * *   **Custom**: custom routes that are manually added.
   * *   **BGP**: routes that are advertised over BGP.
   * 
   * @example
   * System
   */
  routeTypes?: string[];
  /**
   * @remarks
   * The types of source network instance to which the routes belong. The following types of network instances are supported:
   * 
   * *   **VPC**: VPC
   * 
   * *   **VBR**: VBR
   * 
   * *   **CCN**: CCN instance
   * 
   * *   **VPN** :VPN gateway or IPsec-VPN connection
   * 
   *     *   If the IPsec-VPN connection or SSL client is associated with a VPN gateway, the VPC associated with the VPN gateway must be connected to a transit router, and the VPN gateway must use Border Gateway Protocol (BGP) dynamic routing. Otherwise, this parameter cannot take effect.
   *     *   This parameter takes effect if the IPsec connection is directly connected to a transit router.
   * 
   * @example
   * VPC
   */
  sourceChildInstanceTypes?: string[];
  /**
   * @remarks
   * The IDs of the source network instances to which the routes belong. The following network instance types are supported:
   * 
   * *   Virtual private cloud (VPC)
   * *   Virtual border router (VBR)
   * *   Cloud Connect Network (CCN) instance
   * *   Smart Access Gateway (SAG) instance
   * *   The ID of the IPsec-VPN connection.
   * 
   * You can enter at most 32 IDs.
   * 
   * @example
   * vpc-afsfdf5435vcvc****
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to exclude source instance IDs. Valid values:
   * 
   * *   **false** (default): A route is a match if the source instance ID is included in the list specified by **SourceInstanceIds.N**.
   * *   **true**: A route is a match if the source network instance ID is not in the list specified by **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The IDs of the source regions to which the routes belong. You can enter at most 32 region IDs.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The IDs of the source route tables to which the routes belong. You can enter at most 32 route table IDs.
   * 
   * @example
   * vtb-acdbvtbr342cd****
   */
  sourceRouteTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      asPathMatchMode: 'AsPathMatchMode',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      cidrMatchMode: 'CidrMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      description: 'Description',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationRegionIds: 'DestinationRegionIds',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      mapResult: 'MapResult',
      matchAddressType: 'MatchAddressType',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      nextPriority: 'NextPriority',
      operateCommunitySet: 'OperateCommunitySet',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeMapId: 'RouteMapId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathMatchMode: 'string',
      cenId: 'string',
      cenRegionId: 'string',
      cidrMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      description: 'string',
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      preference: 'number',
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeMapId: 'string',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationChildInstanceTypes)) {
      $dara.Model.validateArray(this.destinationChildInstanceTypes);
    }
    if(Array.isArray(this.destinationCidrBlocks)) {
      $dara.Model.validateArray(this.destinationCidrBlocks);
    }
    if(Array.isArray(this.destinationInstanceIds)) {
      $dara.Model.validateArray(this.destinationInstanceIds);
    }
    if(Array.isArray(this.destinationRegionIds)) {
      $dara.Model.validateArray(this.destinationRegionIds);
    }
    if(Array.isArray(this.destinationRouteTableIds)) {
      $dara.Model.validateArray(this.destinationRouteTableIds);
    }
    if(Array.isArray(this.matchAsns)) {
      $dara.Model.validateArray(this.matchAsns);
    }
    if(Array.isArray(this.matchCommunitySet)) {
      $dara.Model.validateArray(this.matchCommunitySet);
    }
    if(Array.isArray(this.operateCommunitySet)) {
      $dara.Model.validateArray(this.operateCommunitySet);
    }
    if(Array.isArray(this.prependAsPath)) {
      $dara.Model.validateArray(this.prependAsPath);
    }
    if(Array.isArray(this.routeTypes)) {
      $dara.Model.validateArray(this.routeTypes);
    }
    if(Array.isArray(this.sourceChildInstanceTypes)) {
      $dara.Model.validateArray(this.sourceChildInstanceTypes);
    }
    if(Array.isArray(this.sourceInstanceIds)) {
      $dara.Model.validateArray(this.sourceInstanceIds);
    }
    if(Array.isArray(this.sourceRegionIds)) {
      $dara.Model.validateArray(this.sourceRegionIds);
    }
    if(Array.isArray(this.sourceRouteTableIds)) {
      $dara.Model.validateArray(this.sourceRouteTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

