// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance to which the VPC is attached.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the account to which the CEN instance belongs.
   * 
   * @example
   * 28311773240248****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The status of the CEN instance.
   * 
   * **Attached** is returned only when the VPC is attached to a CEN instance.
   * 
   * @example
   * Attached
   */
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cenStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyAssociatedCens extends $dara.Model {
  associatedCen?: DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen[];
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen },
    };
  }

  validate() {
    if(Array.isArray(this.associatedCen)) {
      $dara.Model.validateArray(this.associatedCen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether routes are advertised to the VPC.
   * 
   * @example
   * true
   */
  routePropagated?: boolean;
  /**
   * @remarks
   * The instance ID of the source.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The account ID of the source.
   * 
   * @example
   * 153980532164****
   */
  sourceOwnerId?: number;
  /**
   * @remarks
   * The source type.
   * 
   * *   **CEN**
   * *   **VPN**
   * *   **TR**
   * *   **ECR**
   * 
   * @example
   * CEN
   */
  sourceType?: string;
  /**
   * @remarks
   * The binding status.
   * 
   * *   **Attaching**
   * *   **Attached**
   * *   **Detaching**
   * 
   * @example
   * Attaching
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      routePropagated: 'RoutePropagated',
      sourceInstanceId: 'SourceInstanceId',
      sourceOwnerId: 'SourceOwnerId',
      sourceType: 'SourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routePropagated: 'boolean',
      sourceInstanceId: 'string',
      sourceOwnerId: 'number',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyAssociatedPropagationSources extends $dara.Model {
  associatedPropagationSources?: DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources[];
  static names(): { [key: string]: string } {
    return {
      associatedPropagationSources: 'AssociatedPropagationSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPropagationSources: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources },
    };
  }

  validate() {
    if(Array.isArray(this.associatedPropagationSources)) {
      $dara.Model.validateArray(this.associatedPropagationSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType extends $dara.Model {
  /**
   * @remarks
   * The number of resources in the VPC.
   * 
   * @example
   * 1
   */
  resourceCount?: number;
  /**
   * @remarks
   * The type of resource deployed in the VPC. Valid values: Valid values:
   * 
   * *   **VSwitch**
   * *   **VRouter**
   * *   **RouteTable**
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyCloudResources extends $dara.Model {
  cloudResourceSetType?: DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType },
    };
  }

  validate() {
    if(Array.isArray(this.cloudResourceSetType)) {
      $dara.Model.validateArray(this.cloudResourceSetType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock extends $dara.Model {
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:6a::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The IPv6 CIDR block type of the VPC. Valid values:
   * 
   * *   **BGP** (default)
   * *   **ChinaMobile**
   * *   **ChinaUnicom**
   * *   **ChinaTelecom**
   * 
   * >  If you are allowed to use single-ISP bandwidth, valid values are **ChinaTelecom**, **ChinaUnicom**, and **ChinaMobile**
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6Isp: 'Ipv6Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      ipv6Isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyIpv6CidrBlocks extends $dara.Model {
  ipv6CidrBlock?: DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock[];
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6CidrBlock)) {
      $dara.Model.validateArray(this.ipv6CidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodySecondaryCidrBlocks extends $dara.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.secondaryCidrBlock)) {
      $dara.Model.validateArray(this.secondaryCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeVpcAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyUserCidrs extends $dara.Model {
  userCidr?: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userCidr)) {
      $dara.Model.validateArray(this.userCidr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Cloud Enterprise Network (CEN) instances to which the VPC is attached.
   * 
   * If the VPC is not attached to a CEN instance, the parameter is not returned.
   */
  associatedCens?: DescribeVpcAttributeResponseBodyAssociatedCens;
  /**
   * @remarks
   * The route source associated with the VPC.
   */
  associatedPropagationSources?: DescribeVpcAttributeResponseBodyAssociatedPropagationSources;
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * Indicates whether the ClassicLink feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  classicLinkEnabled?: boolean;
  /**
   * @remarks
   * The list of resources deployed in the VPC.
   */
  cloudResources?: DescribeVpcAttributeResponseBodyCloudResources;
  /**
   * @remarks
   * The time when the VPC was created.
   * 
   * @example
   * 2021-10-16T07:31:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the VPC.
   * 
   * @example
   * VPC
   */
  description?: string;
  /**
   * @remarks
   * The ID of the DHCP options set.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string;
  /**
   * @remarks
   * The status of the DHCP options set. Valid values:
   * 
   * *   **Available**
   * *   **InUse**
   * *   **Deleted**
   * *   **Pending**
   * 
   * @example
   * Available
   */
  dhcpOptionsSetStatus?: string;
  dnsHostnameStatus?: string;
  /**
   * @remarks
   * Indicates whether the VPC enables IPv6 .
   * - true
   * - false
   * 
   * @example
   * false
   */
  enabledIpv6?: boolean;
  /**
   * @remarks
   * The ID of the IPv4 gateway.
   * 
   * @example
   * ipv4gw-5tsnc6s4ogsedtp3k****
   */
  ipv4GatewayId?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   * 
   * @example
   * 2408:XXXX:0:a600::/56
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC.
   */
  ipv6CidrBlocks?: DescribeVpcAttributeResponseBodyIpv6CidrBlocks;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 28311773240248****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the VPC belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7486AE4A-129D-43DB-A714-2432C074BA04
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazbvgb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary IPv4 CIDR block of the VPC.
   */
  secondaryCidrBlocks?: DescribeVpcAttributeResponseBodySecondaryCidrBlocks;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   **Available**
   * *   **Pending**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the VPC supports IPv4 gateways.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  supportIpv4Gateway?: boolean;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeVpcAttributeResponseBodyTags;
  /**
   * @remarks
   * The user CIDR block. Multiple CIDR blocks are separated by commas (,). At most three CIDR blocks are returned.
   */
  userCidrs?: DescribeVpcAttributeResponseBodyUserCidrs;
  /**
   * @remarks
   * The ID of the vRouter that belongs to the VPC.
   * 
   * @example
   * vrt-bp1jso6ng1at0ajsc****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The list of vSwitches deployed in the VPC.
   */
  vSwitchIds?: DescribeVpcAttributeResponseBodyVSwitchIds;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp18sth14qii3pnvo****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * doctest2
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCens: 'AssociatedCens',
      associatedPropagationSources: 'AssociatedPropagationSources',
      cidrBlock: 'CidrBlock',
      classicLinkEnabled: 'ClassicLinkEnabled',
      cloudResources: 'CloudResources',
      creationTime: 'CreationTime',
      description: 'Description',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetStatus: 'DhcpOptionsSetStatus',
      dnsHostnameStatus: 'DnsHostnameStatus',
      enabledIpv6: 'EnabledIpv6',
      ipv4GatewayId: 'Ipv4GatewayId',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrBlocks: 'Ipv6CidrBlocks',
      isDefault: 'IsDefault',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      status: 'Status',
      supportIpv4Gateway: 'SupportIpv4Gateway',
      tags: 'Tags',
      userCidrs: 'UserCidrs',
      VRouterId: 'VRouterId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCens: DescribeVpcAttributeResponseBodyAssociatedCens,
      associatedPropagationSources: DescribeVpcAttributeResponseBodyAssociatedPropagationSources,
      cidrBlock: 'string',
      classicLinkEnabled: 'boolean',
      cloudResources: DescribeVpcAttributeResponseBodyCloudResources,
      creationTime: 'string',
      description: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetStatus: 'string',
      dnsHostnameStatus: 'string',
      enabledIpv6: 'boolean',
      ipv4GatewayId: 'string',
      ipv6CidrBlock: 'string',
      ipv6CidrBlocks: DescribeVpcAttributeResponseBodyIpv6CidrBlocks,
      isDefault: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      secondaryCidrBlocks: DescribeVpcAttributeResponseBodySecondaryCidrBlocks,
      status: 'string',
      supportIpv4Gateway: 'boolean',
      tags: DescribeVpcAttributeResponseBodyTags,
      userCidrs: DescribeVpcAttributeResponseBodyUserCidrs,
      VRouterId: 'string',
      vSwitchIds: DescribeVpcAttributeResponseBodyVSwitchIds,
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(this.associatedCens && typeof (this.associatedCens as any).validate === 'function') {
      (this.associatedCens as any).validate();
    }
    if(this.associatedPropagationSources && typeof (this.associatedPropagationSources as any).validate === 'function') {
      (this.associatedPropagationSources as any).validate();
    }
    if(this.cloudResources && typeof (this.cloudResources as any).validate === 'function') {
      (this.cloudResources as any).validate();
    }
    if(this.ipv6CidrBlocks && typeof (this.ipv6CidrBlocks as any).validate === 'function') {
      (this.ipv6CidrBlocks as any).validate();
    }
    if(this.secondaryCidrBlocks && typeof (this.secondaryCidrBlocks as any).validate === 'function') {
      (this.secondaryCidrBlocks as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.userCidrs && typeof (this.userCidrs as any).validate === 'function') {
      (this.userCidrs as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

