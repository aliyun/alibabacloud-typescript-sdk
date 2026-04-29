// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode extends $dara.Model {
  modeValue?: string;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds extends $dara.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableId)) {
      $dara.Model.validateArray(this.forwardTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds extends $dara.Model {
  fullNatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      fullNatTableId: 'FullNatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fullNatTableId)) {
      $dara.Model.validateArray(this.fullNatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList extends $dara.Model {
  allocationId?: string;
  ipAddress?: string;
  privateIpAddress?: string;
  snatEntryEnabled?: boolean;
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      privateIpAddress: 'PrivateIpAddress',
      snatEntryEnabled: 'SnatEntryEnabled',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      privateIpAddress: 'string',
      snatEntryEnabled: 'boolean',
      usingStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists extends $dara.Model {
  ipList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList[];
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList },
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixListIpPrefixList extends $dara.Model {
  ipPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      ipPrefix: 'IpPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixList extends $dara.Model {
  ipPrefixList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixListIpPrefixList[];
  static names(): { [key: string]: string } {
    return {
      ipPrefixList: 'IpPrefixList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPrefixList: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixListIpPrefixList },
    };
  }

  validate() {
    if(Array.isArray(this.ipPrefixList)) {
      $dara.Model.validateArray(this.ipPrefixList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo extends $dara.Model {
  eniInstanceId?: string;
  eniType?: string;
  izNo?: string;
  maxBandwidth?: number;
  maxSessionEstablishRate?: number;
  maxSessionQuota?: number;
  privateIpAddress?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
      eniType: 'EniType',
      izNo: 'IzNo',
      maxBandwidth: 'MaxBandwidth',
      maxSessionEstablishRate: 'MaxSessionEstablishRate',
      maxSessionQuota: 'MaxSessionQuota',
      privateIpAddress: 'PrivateIpAddress',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      eniType: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
      maxSessionEstablishRate: 'number',
      maxSessionQuota: 'number',
      privateIpAddress: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds extends $dara.Model {
  snatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableId)) {
      $dara.Model.validateArray(this.snatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags extends $dara.Model {
  tag?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTagsTag },
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

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGateway extends $dara.Model {
  accessMode?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode;
  autoPay?: boolean;
  availabilityMode?: string;
  businessStatus?: string;
  creationTime?: string;
  deletionProtection?: boolean;
  description?: string;
  ecsMetricEnabled?: boolean;
  /**
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  enableSessionLog?: string;
  expiredTime?: string;
  forwardTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds;
  fullNatTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds;
  icmpReplyEnabled?: boolean;
  instanceChargeType?: string;
  internetChargeType?: string;
  ipLists?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists;
  ipPrefixList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixList;
  name?: string;
  natGatewayId?: string;
  natGatewayPrivateInfo?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo;
  natType?: string;
  networkType?: string;
  privateLinkEnabled?: boolean;
  privateLinkMode?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityProtectionEnabled?: boolean;
  snatTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds;
  spec?: string;
  status?: string;
  tags?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      autoPay: 'AutoPay',
      availabilityMode: 'AvailabilityMode',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      ecsMetricEnabled: 'EcsMetricEnabled',
      eipBindMode: 'EipBindMode',
      enableSessionLog: 'EnableSessionLog',
      expiredTime: 'ExpiredTime',
      forwardTableIds: 'ForwardTableIds',
      fullNatTableIds: 'FullNatTableIds',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipLists: 'IpLists',
      ipPrefixList: 'IpPrefixList',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      natGatewayPrivateInfo: 'NatGatewayPrivateInfo',
      natType: 'NatType',
      networkType: 'NetworkType',
      privateLinkEnabled: 'PrivateLinkEnabled',
      privateLinkMode: 'PrivateLinkMode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      snatTableIds: 'SnatTableIds',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayAccessMode,
      autoPay: 'boolean',
      availabilityMode: 'string',
      businessStatus: 'string',
      creationTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      ecsMetricEnabled: 'boolean',
      eipBindMode: 'string',
      enableSessionLog: 'string',
      expiredTime: 'string',
      forwardTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds,
      fullNatTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayFullNatTableIds,
      icmpReplyEnabled: 'boolean',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipLists: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists,
      ipPrefixList: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpPrefixList,
      name: 'string',
      natGatewayId: 'string',
      natGatewayPrivateInfo: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo,
      natType: 'string',
      networkType: 'string',
      privateLinkEnabled: 'boolean',
      privateLinkMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityProtectionEnabled: 'boolean',
      snatTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds,
      spec: 'string',
      status: 'string',
      tags: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayTags,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.accessMode && typeof (this.accessMode as any).validate === 'function') {
      (this.accessMode as any).validate();
    }
    if(this.forwardTableIds && typeof (this.forwardTableIds as any).validate === 'function') {
      (this.forwardTableIds as any).validate();
    }
    if(this.fullNatTableIds && typeof (this.fullNatTableIds as any).validate === 'function') {
      (this.fullNatTableIds as any).validate();
    }
    if(this.ipLists && typeof (this.ipLists as any).validate === 'function') {
      (this.ipLists as any).validate();
    }
    if(this.ipPrefixList && typeof (this.ipPrefixList as any).validate === 'function') {
      (this.ipPrefixList as any).validate();
    }
    if(this.natGatewayPrivateInfo && typeof (this.natGatewayPrivateInfo as any).validate === 'function') {
      (this.natGatewayPrivateInfo as any).validate();
    }
    if(this.snatTableIds && typeof (this.snatTableIds as any).validate === 'function') {
      (this.snatTableIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGateways extends $dara.Model {
  natGateway?: DescribeNatGatewaysResponseBodyNatGatewaysNatGateway[];
  static names(): { [key: string]: string } {
    return {
      natGateway: 'NatGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateway: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGateway },
    };
  }

  validate() {
    if(Array.isArray(this.natGateway)) {
      $dara.Model.validateArray(this.natGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBody extends $dara.Model {
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of NAT gateway entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natGateways: 'NatGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateways: DescribeNatGatewaysResponseBodyNatGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.natGateways && typeof (this.natGateways as any).validate === 'function') {
      (this.natGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

