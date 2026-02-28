// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocksIpv6CidrBlock extends $dara.Model {
  ipv6CidrBlock?: string;
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

export class DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocks extends $dara.Model {
  ipv6CidrBlock?: DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocksIpv6CidrBlock[];
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocksIpv6CidrBlock },
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

export class DescribeVpcsResponseBodyVpcsVpcNatGatewayIds extends $dara.Model {
  natGatewayIds?: string[];
  static names(): { [key: string]: string } {
    return {
      natGatewayIds: 'NatGatewayIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.natGatewayIds)) {
      $dara.Model.validateArray(this.natGatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcRouterTableIds extends $dara.Model {
  routerTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      routerTableIds: 'RouterTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routerTableIds)) {
      $dara.Model.validateArray(this.routerTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks extends $dara.Model {
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

export class DescribeVpcsResponseBodyVpcsVpcTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeVpcsResponseBodyVpcsVpcTags extends $dara.Model {
  tag?: DescribeVpcsResponseBodyVpcsVpcTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpcTagsTag },
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

export class DescribeVpcsResponseBodyVpcsVpcUserCidrs extends $dara.Model {
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

export class DescribeVpcsResponseBodyVpcsVpcVSwitchIds extends $dara.Model {
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

export class DescribeVpcsResponseBodyVpcsVpc extends $dara.Model {
  cenStatus?: string;
  cidrBlock?: string;
  creationTime?: string;
  description?: string;
  dhcpOptionsSetId?: string;
  dhcpOptionsSetStatus?: string;
  dnsHostnameStatus?: string;
  enabledIpv6?: boolean;
  ipv6CidrBlock?: string;
  ipv6CidrBlocks?: DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocks;
  isDefault?: boolean;
  natGatewayIds?: DescribeVpcsResponseBodyVpcsVpcNatGatewayIds;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  routerTableIds?: DescribeVpcsResponseBodyVpcsVpcRouterTableIds;
  secondaryCidrBlocks?: DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks;
  status?: string;
  tags?: DescribeVpcsResponseBodyVpcsVpcTags;
  userCidrs?: DescribeVpcsResponseBodyVpcsVpcUserCidrs;
  VRouterId?: string;
  vSwitchIds?: DescribeVpcsResponseBodyVpcsVpcVSwitchIds;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cenStatus: 'CenStatus',
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      description: 'Description',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetStatus: 'DhcpOptionsSetStatus',
      dnsHostnameStatus: 'DnsHostnameStatus',
      enabledIpv6: 'EnabledIpv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ipv6CidrBlocks: 'Ipv6CidrBlocks',
      isDefault: 'IsDefault',
      natGatewayIds: 'NatGatewayIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routerTableIds: 'RouterTableIds',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      status: 'Status',
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
      cenStatus: 'string',
      cidrBlock: 'string',
      creationTime: 'string',
      description: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetStatus: 'string',
      dnsHostnameStatus: 'string',
      enabledIpv6: 'boolean',
      ipv6CidrBlock: 'string',
      ipv6CidrBlocks: DescribeVpcsResponseBodyVpcsVpcIpv6CidrBlocks,
      isDefault: 'boolean',
      natGatewayIds: DescribeVpcsResponseBodyVpcsVpcNatGatewayIds,
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routerTableIds: DescribeVpcsResponseBodyVpcsVpcRouterTableIds,
      secondaryCidrBlocks: DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks,
      status: 'string',
      tags: DescribeVpcsResponseBodyVpcsVpcTags,
      userCidrs: DescribeVpcsResponseBodyVpcsVpcUserCidrs,
      VRouterId: 'string',
      vSwitchIds: DescribeVpcsResponseBodyVpcsVpcVSwitchIds,
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(this.ipv6CidrBlocks && typeof (this.ipv6CidrBlocks as any).validate === 'function') {
      (this.ipv6CidrBlocks as any).validate();
    }
    if(this.natGatewayIds && typeof (this.natGatewayIds as any).validate === 'function') {
      (this.natGatewayIds as any).validate();
    }
    if(this.routerTableIds && typeof (this.routerTableIds as any).validate === 'function') {
      (this.routerTableIds as any).validate();
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

export class DescribeVpcsResponseBodyVpcs extends $dara.Model {
  vpc?: DescribeVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6532AA8-D0F7-497F-A8EE-094126D441F5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcs: DescribeVpcsResponseBodyVpcs,
    };
  }

  validate() {
    if(this.vpcs && typeof (this.vpcs as any).validate === 'function') {
      (this.vpcs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

