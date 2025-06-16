// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAttributeResponseBodyAssociatedCens } from "./DescribeVpcAttributeResponseBodyAssociatedCens";
import { DescribeVpcAttributeResponseBodyAssociatedPropagationSources } from "./DescribeVpcAttributeResponseBodyAssociatedPropagationSources";
import { DescribeVpcAttributeResponseBodyCloudResources } from "./DescribeVpcAttributeResponseBodyCloudResources";
import { DescribeVpcAttributeResponseBodyIpv6CidrBlocks } from "./DescribeVpcAttributeResponseBodyIpv6cidrBlocks";
import { DescribeVpcAttributeResponseBodySecondaryCidrBlocks } from "./DescribeVpcAttributeResponseBodySecondaryCidrBlocks";
import { DescribeVpcAttributeResponseBodyTags } from "./DescribeVpcAttributeResponseBodyTags";
import { DescribeVpcAttributeResponseBodyUserCidrs } from "./DescribeVpcAttributeResponseBodyUserCidrs";
import { DescribeVpcAttributeResponseBodyVSwitchIds } from "./DescribeVpcAttributeResponseBodyVswitchIds";


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

