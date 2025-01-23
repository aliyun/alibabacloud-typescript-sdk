// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateIpamRequestTag extends $dara.Model {
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

export class CreateIpamPoolRequestTag extends $dara.Model {
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

export class CreateIpamScopeRequestTag extends $dara.Model {
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

export class ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources extends $dara.Model {
  /**
   * @example
   * 132193271328****
   */
  aliUid?: number;
  /**
   * @example
   * 192.168.1.0/32
   */
  cidr?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  discoveryTime?: string;
  /**
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @example
   * vpc-uf611fp465c7dyb4z****
   */
  resourceId?: string;
  /**
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @example
   * 192.168.1.0/24
   */
  sourceCidr?: string;
  /**
   * @example
   * vpc-uf611fp465c7dyb4z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cidr: 'Cidr',
      discoveryTime: 'DiscoveryTime',
      ipUsage: 'IpUsage',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cidr: 'string',
      discoveryTime: 'string',
      ipUsage: 'string',
      ipamResourceDiscoveryId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolAllocationsResponseBodyIpamPoolAllocations extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * 2023-05-19T08:59:18Z
   */
  creationTime?: string;
  ipamPoolAllocationDescription?: string;
  /**
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  ipamPoolAllocationName?: string;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * Custom
   */
  resourceType?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  sourceCidr?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      creationTime: 'CreationTime',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      creationTime: 'string',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationId: 'string',
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
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

export class ListIpamPoolCidrsResponseBodyIpamPoolCidrs extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolId: 'IpamPoolId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolId: 'string',
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

export class ListIpamPoolsRequestTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamPoolsResponseBodyIpamPoolsTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamPoolsResponseBodyIpamPools extends $dara.Model {
  /**
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  autoImport?: boolean;
  /**
   * @example
   * 2023-04-19T16:49:01Z
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  hasSubPool?: boolean;
  /**
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @example
   * ipam-b5mtlx3q7xcnyr****
   */
  ipamId?: string;
  /**
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * test
   */
  ipamPoolName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  ipamRegionId?: string;
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * private
   */
  ipamScopeType?: string;
  isShared?: boolean;
  /**
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @example
   * 2
   */
  poolDepth?: number;
  /**
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * ipam-pool-lfnwi4jok1ss0g****
   */
  sourceIpamPoolId?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  tags?: ListIpamPoolsResponseBodyIpamPoolsTags[];
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      createTime: 'CreateTime',
      hasSubPool: 'HasSubPool',
      ipVersion: 'IpVersion',
      ipamId: 'IpamId',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolId: 'IpamPoolId',
      ipamPoolName: 'IpamPoolName',
      ipamRegionId: 'IpamRegionId',
      ipamScopeId: 'IpamScopeId',
      ipamScopeType: 'IpamScopeType',
      isShared: 'IsShared',
      ownerId: 'OwnerId',
      poolDepth: 'PoolDepth',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      createTime: 'string',
      hasSubPool: 'boolean',
      ipVersion: 'string',
      ipamId: 'string',
      ipamPoolDescription: 'string',
      ipamPoolId: 'string',
      ipamPoolName: 'string',
      ipamRegionId: 'string',
      ipamScopeId: 'string',
      ipamScopeType: 'string',
      isShared: 'boolean',
      ownerId: 'number',
      poolDepth: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceIpamPoolId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamPoolsResponseBodyIpamPoolsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail extends $dara.Model {
  overlapResourceCidr?: string;
  overlapResourceId?: string;
  overlapResourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      overlapResourceCidr: 'OverlapResourceCidr',
      overlapResourceId: 'OverlapResourceId',
      overlapResourceRegion: 'OverlapResourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overlapResourceCidr: 'string',
      overlapResourceId: 'string',
      overlapResourceRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponseBodyIpamResourceCidrs extends $dara.Model {
  /**
   * @example
   * 132193271328****
   */
  aliUid?: number;
  /**
   * @example
   * 192.168.1.0/32
   */
  cidr?: string;
  /**
   * @example
   * Compliant
   */
  complianceStatus?: string;
  /**
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamAllocationId?: string;
  /**
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  ipamId?: string;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t***
   */
  ipamPoolId?: string;
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * Managed
   */
  managementStatus?: string;
  overlapDetail?: ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail[];
  /**
   * @example
   * Nonoverlapping
   */
  overlapStatus?: string;
  /**
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @example
   * 192.168.1.0/24
   */
  sourceCidr?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cidr: 'Cidr',
      complianceStatus: 'ComplianceStatus',
      ipUsage: 'IpUsage',
      ipamAllocationId: 'IpamAllocationId',
      ipamId: 'IpamId',
      ipamPoolId: 'IpamPoolId',
      ipamScopeId: 'IpamScopeId',
      managementStatus: 'ManagementStatus',
      overlapDetail: 'OverlapDetail',
      overlapStatus: 'OverlapStatus',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cidr: 'string',
      complianceStatus: 'string',
      ipUsage: 'string',
      ipamAllocationId: 'string',
      ipamId: 'string',
      ipamPoolId: 'string',
      ipamScopeId: 'string',
      managementStatus: 'string',
      overlapDetail: { 'type': 'array', 'itemType': ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail },
      overlapStatus: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.overlapDetail)) {
      $dara.Model.validateArray(this.overlapDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceDiscoveriesRequestTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries extends $dara.Model {
  /**
   * @example
   * 2022-07-01T02:05:23Z
   */
  createTime?: string;
  /**
   * @example
   * test description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  operatingRegionList?: string[];
  /**
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  tags?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags[];
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      ipamResourceDiscoveryStatus: 'IpamResourceDiscoveryStatus',
      operatingRegionList: 'OperatingRegionList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryName: 'string',
      ipamResourceDiscoveryStatus: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamScopesRequestTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamScopesResponseBodyIpamScopesTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @example
   * FinanceDept
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

export class ListIpamScopesResponseBodyIpamScopes extends $dara.Model {
  /**
   * @example
   * 2022-04-18T03:12:37Z
   */
  createTime?: string;
  /**
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * test
   */
  ipamScopeName?: string;
  /**
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @example
   * 2
   */
  poolCount?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  tags?: ListIpamScopesResponseBodyIpamScopesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipamId: 'IpamId',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeId: 'IpamScopeId',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      isDefault: 'IsDefault',
      ownerId: 'OwnerId',
      poolCount: 'PoolCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipamId: 'string',
      ipamScopeDescription: 'string',
      ipamScopeId: 'string',
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      isDefault: 'boolean',
      ownerId: 'number',
      poolCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamScopesResponseBodyIpamScopesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamsRequestTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamsResponseBodyIpamsTags extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListIpamsResponseBodyIpams extends $dara.Model {
  /**
   * @example
   * 2022-07-01T02:05:23Z
   */
  createTime?: string;
  defaultResourceDiscoveryAssociationId?: string;
  defaultResourceDiscoveryId?: string;
  /**
   * @example
   * test description
   */
  ipamDescription?: string;
  /**
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @example
   * test
   */
  ipamName?: string;
  /**
   * @example
   * Created
   */
  ipamStatus?: string;
  operatingRegionList?: string[];
  /**
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @example
   * ipam-scope-okoerbco6unqfr****
   */
  privateDefaultScopeId?: string;
  /**
   * @example
   * ipam-scope-ovb76p1g1m19dr****
   */
  publicDefaultScopeId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceDiscoveryAssociationCount?: number;
  /**
   * @example
   * rg-aek2dbprgpt****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2
   */
  scopeCount?: number;
  tags?: ListIpamsResponseBodyIpamsTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultResourceDiscoveryAssociationId: 'DefaultResourceDiscoveryAssociationId',
      defaultResourceDiscoveryId: 'DefaultResourceDiscoveryId',
      ipamDescription: 'IpamDescription',
      ipamId: 'IpamId',
      ipamName: 'IpamName',
      ipamStatus: 'IpamStatus',
      operatingRegionList: 'OperatingRegionList',
      ownerId: 'OwnerId',
      privateDefaultScopeId: 'PrivateDefaultScopeId',
      publicDefaultScopeId: 'PublicDefaultScopeId',
      regionId: 'RegionId',
      resourceDiscoveryAssociationCount: 'ResourceDiscoveryAssociationCount',
      resourceGroupId: 'ResourceGroupId',
      scopeCount: 'ScopeCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultResourceDiscoveryAssociationId: 'string',
      defaultResourceDiscoveryId: 'string',
      ipamDescription: 'string',
      ipamId: 'string',
      ipamName: 'string',
      ipamStatus: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      privateDefaultScopeId: 'string',
      publicDefaultScopeId: 'string',
      regionId: 'string',
      resourceDiscoveryAssociationCount: 'number',
      resourceGroupId: 'string',
      scopeCount: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamsResponseBodyIpamsTags },
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  resourceId?: string;
  /**
   * @example
   * IPAM
   */
  resourceType?: string;
  /**
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * FinanceDept
   */
  key?: string;
  /**
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

export class AddIpamPoolCidrRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpamPoolCidrResponseBody extends $dara.Model {
  /**
   * @example
   * 558BC336-8B88-53B0-B4AD-980EE900AB01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpamPoolCidrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddIpamPoolCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddIpamPoolCidrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aek3ctkufaw****
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * BB2C39DE-CEB8-595A-981A-F2EFCBE7324E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * This is my first Ipam
   */
  ipamDescription?: string;
  /**
   * @example
   * abc
   */
  ipamName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operatingRegionList?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateIpamRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamDescription: 'IpamDescription',
      ipamName: 'IpamName',
      operatingRegionList: 'OperatingRegionList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamDescription: 'string',
      ipamName: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateIpamRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamResponseBody extends $dara.Model {
  defaultResourceDiscoveryAssociationId?: string;
  defaultResourceDiscoveryId?: string;
  /**
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @example
   * ipam-scope-8wiontzmiy6cg0****
   */
  privateDefaultScopeId?: string;
  /**
   * @example
   * ipam-scope-r5c5c7bmym1brc****
   */
  publicDefaultScopeId?: string;
  /**
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED39DCAC0
   */
  requestId?: string;
  resourceDiscoveryAssociationCount?: number;
  static names(): { [key: string]: string } {
    return {
      defaultResourceDiscoveryAssociationId: 'DefaultResourceDiscoveryAssociationId',
      defaultResourceDiscoveryId: 'DefaultResourceDiscoveryId',
      ipamId: 'IpamId',
      privateDefaultScopeId: 'PrivateDefaultScopeId',
      publicDefaultScopeId: 'PublicDefaultScopeId',
      requestId: 'RequestId',
      resourceDiscoveryAssociationCount: 'ResourceDiscoveryAssociationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResourceDiscoveryAssociationId: 'string',
      defaultResourceDiscoveryId: 'string',
      ipamId: 'string',
      privateDefaultScopeId: 'string',
      publicDefaultScopeId: 'string',
      requestId: 'string',
      resourceDiscoveryAssociationCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIpamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIpamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamPoolRequest extends $dara.Model {
  /**
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  autoImport?: boolean;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @example
   * abc
   */
  ipamPoolName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  sourceIpamPoolId?: string;
  tag?: CreateIpamPoolRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipVersion: 'IpVersion',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolName: 'IpamPoolName',
      ipamScopeId: 'IpamScopeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ipVersion: 'string',
      ipamPoolDescription: 'string',
      ipamPoolName: 'string',
      ipamScopeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceIpamPoolId: 'string',
      tag: { 'type': 'array', 'itemType': CreateIpamPoolRequestTag },
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

export class CreateIpamPoolResponseBody extends $dara.Model {
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * BB2C39DE-CEB8-595A-981A-F2EFCBE7324E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolId: 'IpamPoolId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamPoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIpamPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIpamPoolResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * 24
   */
  cidrMask?: number;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  ipamPoolAllocationDescription?: string;
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      cidrMask: 'CidrMask',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      cidrMask: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamPoolAllocationResponseBody extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @example
   * CE9CDAE5-341E-5D0B-AC8A-2BAC707D3EB2
   */
  requestId?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  sourceCidr?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolAllocationId: 'string',
      requestId: 'string',
      sourceCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamPoolAllocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIpamPoolAllocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIpamPoolAllocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamScopeRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @example
   * test
   */
  ipamScopeName?: string;
  /**
   * @example
   * private
   */
  ipamScopeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateIpamScopeRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamId: 'IpamId',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamId: 'string',
      ipamScopeDescription: 'string',
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateIpamScopeRequestTag },
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

export class CreateIpamScopeResponseBody extends $dara.Model {
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * E897D16A-50EB-543F-B002-C5A26AB818FF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamScopeId: 'IpamScopeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamScopeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIpamScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIpamScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamId: 'IpamId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamResponseBody extends $dara.Model {
  /**
   * @example
   * 30A20EE2-6223-5D0F-BF49-D7C78F206063
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolId: 'IpamPoolId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolResponseBody extends $dara.Model {
  /**
   * @example
   * 57B7DCCA-F192-5528-8AF3-2FE1413228C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpamPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpamPoolResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-alloc-c4vhvr3b22mmc6****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolAllocationId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolAllocationResponseBody extends $dara.Model {
  /**
   * @example
   * B90776C8-F703-51D5-893A-AD1CA699D535
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolAllocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpamPoolAllocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpamPoolAllocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolCidrRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolCidrResponseBody extends $dara.Model {
  /**
   * @example
   * F28A239E-F88D-500E-ADE7-FA5E8CA3A170
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamPoolCidrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpamPoolCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpamPoolCidrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamScopeRequest extends $dara.Model {
  /**
   * @example
   * 88144bdb-b190-4813-a3f5-66cc86694162
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamScopeId: 'IpamScopeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamScopeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamScopeResponseBody extends $dara.Model {
  /**
   * @example
   * 9F8315CB-560E-5F1E-B069-6E44B440CAF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpamScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpamScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpamScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolAllocationId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpamPoolAllocationResponseBody extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * 2024-10-15T10:24:19+08:00
   */
  creationTime?: string;
  /**
   * @example
   * ipam pool allocation description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @example
   * ipam pool allocation name
   */
  ipamPoolAllocationName?: string;
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
   */
  requestId?: string;
  /**
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @example
   * 1616080591216318
   */
  resourceOwnerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  sourceCidr?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      creationTime: 'CreationTime',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      creationTime: 'string',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationId: 'string',
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
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

export class GetIpamPoolAllocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIpamPoolAllocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIpamPoolAllocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcIpamServiceStatusRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcIpamServiceStatusResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 2FEE9FFF-57EE-5832-BE88-9308352F3B68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcIpamServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpcIpamServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpcIpamServiceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamDiscoveredResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamResourceDiscoveryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceRegionId: 'string',
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

export class ListIpamDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  ipamDiscoveredResources?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamDiscoveredResources: 'IpamDiscoveredResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamDiscoveredResources: { 'type': 'array', 'itemType': ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamDiscoveredResources)) {
      $dara.Model.validateArray(this.ipamDiscoveredResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamDiscoveredResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamDiscoveredResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamDiscoveredResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolAllocationsRequest extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  ipamPoolAllocationIds?: string[];
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolAllocationIds: 'IpamPoolAllocationIds',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolAllocationIds: { 'type': 'array', 'itemType': 'string' },
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolAllocationIds)) {
      $dara.Model.validateArray(this.ipamPoolAllocationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolAllocationsResponseBody extends $dara.Model {
  count?: number;
  ipamPoolAllocations?: ListIpamPoolAllocationsResponseBodyIpamPoolAllocations[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPoolAllocations: 'IpamPoolAllocations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPoolAllocations: { 'type': 'array', 'itemType': ListIpamPoolAllocationsResponseBodyIpamPoolAllocations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolAllocations)) {
      $dara.Model.validateArray(this.ipamPoolAllocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolAllocationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamPoolAllocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamPoolAllocationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolCidrsRequest extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolId: 'IpamPoolId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolCidrsResponseBody extends $dara.Model {
  count?: number;
  ipamPoolCidrs?: ListIpamPoolCidrsResponseBodyIpamPoolCidrs[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 9E7CCB95-62E0-534D-9B9A-71F27E8B71B1
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPoolCidrs: 'IpamPoolCidrs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPoolCidrs: { 'type': 'array', 'itemType': ListIpamPoolCidrsResponseBodyIpamPoolCidrs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolCidrs)) {
      $dara.Model.validateArray(this.ipamPoolCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolCidrsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamPoolCidrsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamPoolCidrsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolsRequest extends $dara.Model {
  ipamPoolIds?: string[];
  /**
   * @example
   * test
   */
  ipamPoolName?: string;
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  isShared?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * ipam-pool-lfnwi4jok1ss0g****
   */
  sourceIpamPoolId?: string;
  tags?: ListIpamPoolsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipamPoolIds: 'IpamPoolIds',
      ipamPoolName: 'IpamPoolName',
      ipamScopeId: 'IpamScopeId',
      isShared: 'IsShared',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolIds: { 'type': 'array', 'itemType': 'string' },
      ipamPoolName: 'string',
      ipamScopeId: 'string',
      isShared: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceIpamPoolId: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamPoolsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolIds)) {
      $dara.Model.validateArray(this.ipamPoolIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolsResponseBody extends $dara.Model {
  count?: number;
  ipamPools?: ListIpamPoolsResponseBodyIpamPools[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * B54867DE-83DC-56B4-A57E-69A03119D0B1
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPools: 'IpamPools',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPools: { 'type': 'array', 'itemType': ListIpamPoolsResponseBodyIpamPools },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPools)) {
      $dara.Model.validateArray(this.ipamPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamPoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamPoolsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsRequest extends $dara.Model {
  /**
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * VPC
   */
  resourceType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolId: 'IpamPoolId',
      ipamScopeId: 'IpamScopeId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolId: 'string',
      ipamScopeId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponseBody extends $dara.Model {
  count?: number;
  ipamResourceCidrs?: ListIpamResourceCidrsResponseBodyIpamResourceCidrs[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 49A9DE56-B68C-5FFC-BC06-509D086F287C
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamResourceCidrs: 'IpamResourceCidrs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceCidrs: { 'type': 'array', 'itemType': ListIpamResourceCidrsResponseBodyIpamResourceCidrs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceCidrs)) {
      $dara.Model.validateArray(this.ipamResourceCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamResourceCidrsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamResourceCidrsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceDiscoveriesRequest extends $dara.Model {
  ipamResourceDiscoveryIds?: string[];
  /**
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: ListIpamResourceDiscoveriesRequestTags[];
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ipamResourceDiscoveryIds: 'IpamResourceDiscoveryIds',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamResourceDiscoveryIds: { 'type': 'array', 'itemType': 'string' },
      ipamResourceDiscoveryName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveryIds)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveryIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceDiscoveriesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  ipamResourceDiscoveries?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 86137597-443F-5B66-B9B6-8514E0C50B8F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamResourceDiscoveries: 'IpamResourceDiscoveries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceDiscoveries: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveries)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceDiscoveriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamResourceDiscoveriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamResourceDiscoveriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamScopesRequest extends $dara.Model {
  /**
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  ipamScopeIds?: string[];
  /**
   * @example
   * test
   */
  ipamScopeName?: string;
  /**
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: ListIpamScopesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipamId: 'IpamId',
      ipamScopeIds: 'IpamScopeIds',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamId: 'string',
      ipamScopeIds: { 'type': 'array', 'itemType': 'string' },
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamScopesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamScopeIds)) {
      $dara.Model.validateArray(this.ipamScopeIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamScopesResponseBody extends $dara.Model {
  count?: number;
  ipamScopes?: ListIpamScopesResponseBodyIpamScopes[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 8859C501-97E7-53D4-B94B-2A9E16003B22
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamScopes: 'IpamScopes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamScopes: { 'type': 'array', 'itemType': ListIpamScopesResponseBodyIpamScopes },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamScopes)) {
      $dara.Model.validateArray(this.ipamScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamScopesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamScopesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamScopesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamsRequest extends $dara.Model {
  ipamIds?: string[];
  /**
   * @example
   * test
   */
  ipamName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: ListIpamsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipamIds: 'IpamIds',
      ipamName: 'IpamName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamIds: { 'type': 'array', 'itemType': 'string' },
      ipamName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamIds)) {
      $dara.Model.validateArray(this.ipamIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamsResponseBody extends $dara.Model {
  count?: number;
  ipams?: ListIpamsResponseBodyIpams[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 23CA0A0B-B0F5-5495-B355-7D9A9203A46B
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipams: 'Ipams',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipams: { 'type': 'array', 'itemType': ListIpamsResponseBodyIpams },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipams)) {
      $dara.Model.validateArray(this.ipams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpamsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IPAM
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 672053AB-90C9-5693-AB96-458F137A5ED6
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVpcIpamServiceRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVpcIpamServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3F814C37-B032-5477-AF5A-2925D0593CD4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVpcIpamServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenVpcIpamServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenVpcIpamServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IPAM
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * BF872550-9700-52FD-839C-4D3F05543FA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IPAM
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 44C884BD-2D56-5637-A523-1FA920A01E7D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamRequest extends $dara.Model {
  addOperatingRegion?: string[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * test description
   */
  ipamDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @example
   * test
   */
  ipamName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  removeOperatingRegion?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addOperatingRegion: 'AddOperatingRegion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamDescription: 'IpamDescription',
      ipamId: 'IpamId',
      ipamName: 'IpamName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeOperatingRegion: 'RemoveOperatingRegion',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      ipamDescription: 'string',
      ipamId: 'string',
      ipamName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addOperatingRegion)) {
      $dara.Model.validateArray(this.addOperatingRegion);
    }
    if(Array.isArray(this.removeOperatingRegion)) {
      $dara.Model.validateArray(this.removeOperatingRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamResponseBody extends $dara.Model {
  /**
   * @example
   * F4650E33-895C-53F0-9CD5-D1338F322DE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpamResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolRequest extends $dara.Model {
  /**
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  autoImport?: boolean;
  /**
   * @example
   * true
   */
  clearAllocationDefaultCidrMask?: boolean;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @example
   * test
   */
  ipamPoolName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      clearAllocationDefaultCidrMask: 'ClearAllocationDefaultCidrMask',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolId: 'IpamPoolId',
      ipamPoolName: 'IpamPoolName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      clearAllocationDefaultCidrMask: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolDescription: 'string',
      ipamPoolId: 'string',
      ipamPoolName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolResponseBody extends $dara.Model {
  /**
   * @example
   * 9DED57B9-7654-5B6D-93F7-BCA5839FEE38
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpamPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpamPoolResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolAllocationRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationId: 'string',
      ipamPoolAllocationName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolAllocationResponseBody extends $dara.Model {
  /**
   * @example
   * F4650E33-895C-53F0-9CD5-D1338F322DE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamPoolAllocationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpamPoolAllocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpamPoolAllocationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamScopeRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @example
   * test
   */
  ipamScopeName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeId: 'IpamScopeId',
      ipamScopeName: 'IpamScopeName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamScopeDescription: 'string',
      ipamScopeId: 'string',
      ipamScopeName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamScopeResponseBody extends $dara.Model {
  /**
   * @example
   * BA8054F5-852A-570A-ACFF-BCA63E0B02D5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpamScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpamScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpamScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vpcipam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - AddIpamPoolCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpamPoolCidrResponse
   */
  async addIpamPoolCidrWithOptions(request: AddIpamPoolCidrRequest, runtime: $dara.RuntimeOptions): Promise<AddIpamPoolCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpamPoolCidr",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddIpamPoolCidrResponse>(await this.callApi(params, req, runtime), new AddIpamPoolCidrResponse({}));
    } else {
      return $dara.cast<AddIpamPoolCidrResponse>(await this.execute(params, req, runtime), new AddIpamPoolCidrResponse({}));
    }

  }

  /**
   * @param request - AddIpamPoolCidrRequest
   * @returns AddIpamPoolCidrResponse
   */
  async addIpamPoolCidr(request: AddIpamPoolCidrRequest): Promise<AddIpamPoolCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpamPoolCidrWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建IPAM实例。
   * 
   * @param request - CreateIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamResponse
   */
  async createIpamWithOptions(request: CreateIpamRequest, runtime: $dara.RuntimeOptions): Promise<CreateIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamDescription)) {
      query["IpamDescription"] = request.ipamDescription;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.operatingRegionList)) {
      query["OperatingRegionList"] = request.operatingRegionList;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIpamResponse>(await this.callApi(params, req, runtime), new CreateIpamResponse({}));
    } else {
      return $dara.cast<CreateIpamResponse>(await this.execute(params, req, runtime), new CreateIpamResponse({}));
    }

  }

  /**
   * 创建IPAM实例。
   * 
   * @param request - CreateIpamRequest
   * @returns CreateIpamResponse
   */
  async createIpam(request: CreateIpamRequest): Promise<CreateIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamWithOptions(request, runtime);
  }

  /**
   * @param request - CreateIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamPoolResponse
   */
  async createIpamPoolWithOptions(request: CreateIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<CreateIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationDefaultCidrMask)) {
      query["AllocationDefaultCidrMask"] = request.allocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.allocationMaxCidrMask)) {
      query["AllocationMaxCidrMask"] = request.allocationMaxCidrMask;
    }

    if (!$dara.isNull(request.allocationMinCidrMask)) {
      query["AllocationMinCidrMask"] = request.allocationMinCidrMask;
    }

    if (!$dara.isNull(request.autoImport)) {
      query["AutoImport"] = request.autoImport;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.ipamPoolDescription)) {
      query["IpamPoolDescription"] = request.ipamPoolDescription;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolRegionId)) {
      query["PoolRegionId"] = request.poolRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceIpamPoolId)) {
      query["SourceIpamPoolId"] = request.sourceIpamPoolId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIpamPoolResponse>(await this.callApi(params, req, runtime), new CreateIpamPoolResponse({}));
    } else {
      return $dara.cast<CreateIpamPoolResponse>(await this.execute(params, req, runtime), new CreateIpamPoolResponse({}));
    }

  }

  /**
   * @param request - CreateIpamPoolRequest
   * @returns CreateIpamPoolResponse
   */
  async createIpamPool(request: CreateIpamPoolRequest): Promise<CreateIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamPoolWithOptions(request, runtime);
  }

  /**
   * @param request - CreateIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamPoolAllocationResponse
   */
  async createIpamPoolAllocationWithOptions(request: CreateIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<CreateIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.cidrMask)) {
      query["CidrMask"] = request.cidrMask;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationDescription)) {
      query["IpamPoolAllocationDescription"] = request.ipamPoolAllocationDescription;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new CreateIpamPoolAllocationResponse({}));
    } else {
      return $dara.cast<CreateIpamPoolAllocationResponse>(await this.execute(params, req, runtime), new CreateIpamPoolAllocationResponse({}));
    }

  }

  /**
   * @param request - CreateIpamPoolAllocationRequest
   * @returns CreateIpamPoolAllocationResponse
   */
  async createIpamPoolAllocation(request: CreateIpamPoolAllocationRequest): Promise<CreateIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * @param request - CreateIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpamScopeResponse
   */
  async createIpamScopeWithOptions(request: CreateIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<CreateIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamScopeDescription)) {
      query["IpamScopeDescription"] = request.ipamScopeDescription;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ipamScopeType)) {
      query["IpamScopeType"] = request.ipamScopeType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateIpamScopeResponse>(await this.callApi(params, req, runtime), new CreateIpamScopeResponse({}));
    } else {
      return $dara.cast<CreateIpamScopeResponse>(await this.execute(params, req, runtime), new CreateIpamScopeResponse({}));
    }

  }

  /**
   * @param request - CreateIpamScopeRequest
   * @returns CreateIpamScopeResponse
   */
  async createIpamScope(request: CreateIpamScopeRequest): Promise<CreateIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpamScopeWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamResponse
   */
  async deleteIpamWithOptions(request: DeleteIpamRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIpamResponse>(await this.callApi(params, req, runtime), new DeleteIpamResponse({}));
    } else {
      return $dara.cast<DeleteIpamResponse>(await this.execute(params, req, runtime), new DeleteIpamResponse({}));
    }

  }

  /**
   * @param request - DeleteIpamRequest
   * @returns DeleteIpamResponse
   */
  async deleteIpam(request: DeleteIpamRequest): Promise<DeleteIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolResponse
   */
  async deleteIpamPoolWithOptions(request: DeleteIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIpamPoolResponse>(await this.callApi(params, req, runtime), new DeleteIpamPoolResponse({}));
    } else {
      return $dara.cast<DeleteIpamPoolResponse>(await this.execute(params, req, runtime), new DeleteIpamPoolResponse({}));
    }

  }

  /**
   * @param request - DeleteIpamPoolRequest
   * @returns DeleteIpamPoolResponse
   */
  async deleteIpamPool(request: DeleteIpamPoolRequest): Promise<DeleteIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolAllocationResponse
   */
  async deleteIpamPoolAllocationWithOptions(request: DeleteIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationId)) {
      query["IpamPoolAllocationId"] = request.ipamPoolAllocationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new DeleteIpamPoolAllocationResponse({}));
    } else {
      return $dara.cast<DeleteIpamPoolAllocationResponse>(await this.execute(params, req, runtime), new DeleteIpamPoolAllocationResponse({}));
    }

  }

  /**
   * @param request - DeleteIpamPoolAllocationRequest
   * @returns DeleteIpamPoolAllocationResponse
   */
  async deleteIpamPoolAllocation(request: DeleteIpamPoolAllocationRequest): Promise<DeleteIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIpamPoolCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamPoolCidrResponse
   */
  async deleteIpamPoolCidrWithOptions(request: DeleteIpamPoolCidrRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpamPoolCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamPoolCidr",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIpamPoolCidrResponse>(await this.callApi(params, req, runtime), new DeleteIpamPoolCidrResponse({}));
    } else {
      return $dara.cast<DeleteIpamPoolCidrResponse>(await this.execute(params, req, runtime), new DeleteIpamPoolCidrResponse({}));
    }

  }

  /**
   * @param request - DeleteIpamPoolCidrRequest
   * @returns DeleteIpamPoolCidrResponse
   */
  async deleteIpamPoolCidr(request: DeleteIpamPoolCidrRequest): Promise<DeleteIpamPoolCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamPoolCidrWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpamScopeResponse
   */
  async deleteIpamScopeWithOptions(request: DeleteIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteIpamScopeResponse>(await this.callApi(params, req, runtime), new DeleteIpamScopeResponse({}));
    } else {
      return $dara.cast<DeleteIpamScopeResponse>(await this.execute(params, req, runtime), new DeleteIpamScopeResponse({}));
    }

  }

  /**
   * @param request - DeleteIpamScopeRequest
   * @returns DeleteIpamScopeResponse
   */
  async deleteIpamScope(request: DeleteIpamScopeRequest): Promise<DeleteIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpamScopeWithOptions(request, runtime);
  }

  /**
   * 查询指定IPAM地址池CIDR分配的信息
   * 
   * @param request - GetIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpamPoolAllocationResponse
   */
  async getIpamPoolAllocationWithOptions(request: GetIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<GetIpamPoolAllocationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new GetIpamPoolAllocationResponse({}));
    } else {
      return $dara.cast<GetIpamPoolAllocationResponse>(await this.execute(params, req, runtime), new GetIpamPoolAllocationResponse({}));
    }

  }

  /**
   * 查询指定IPAM地址池CIDR分配的信息
   * 
   * @param request - GetIpamPoolAllocationRequest
   * @returns GetIpamPoolAllocationResponse
   */
  async getIpamPoolAllocation(request: GetIpamPoolAllocationRequest): Promise<GetIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * 查询IPAM功能的开通状态。
   * 
   * @param request - GetVpcIpamServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpcIpamServiceStatusResponse
   */
  async getVpcIpamServiceStatusWithOptions(request: GetVpcIpamServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetVpcIpamServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpcIpamServiceStatus",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpcIpamServiceStatusResponse>(await this.callApi(params, req, runtime), new GetVpcIpamServiceStatusResponse({}));
    } else {
      return $dara.cast<GetVpcIpamServiceStatusResponse>(await this.execute(params, req, runtime), new GetVpcIpamServiceStatusResponse({}));
    }

  }

  /**
   * 查询IPAM功能的开通状态。
   * 
   * @param request - GetVpcIpamServiceStatusRequest
   * @returns GetVpcIpamServiceStatusResponse
   */
  async getVpcIpamServiceStatus(request: GetVpcIpamServiceStatusRequest): Promise<GetVpcIpamServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpcIpamServiceStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamDiscoveredResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamDiscoveredResourceResponse
   */
  async listIpamDiscoveredResourceWithOptions(request: ListIpamDiscoveredResourceRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamDiscoveredResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamResourceDiscoveryId)) {
      query["IpamResourceDiscoveryId"] = request.ipamResourceDiscoveryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamDiscoveredResource",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new ListIpamDiscoveredResourceResponse({}));
    } else {
      return $dara.cast<ListIpamDiscoveredResourceResponse>(await this.execute(params, req, runtime), new ListIpamDiscoveredResourceResponse({}));
    }

  }

  /**
   * @param request - ListIpamDiscoveredResourceRequest
   * @returns ListIpamDiscoveredResourceResponse
   */
  async listIpamDiscoveredResource(request: ListIpamDiscoveredResourceRequest): Promise<ListIpamDiscoveredResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamPoolAllocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolAllocationsResponse
   */
  async listIpamPoolAllocationsWithOptions(request: ListIpamPoolAllocationsRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamPoolAllocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.ipamPoolAllocationIds)) {
      query["IpamPoolAllocationIds"] = request.ipamPoolAllocationIds;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamPoolAllocations",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamPoolAllocationsResponse>(await this.callApi(params, req, runtime), new ListIpamPoolAllocationsResponse({}));
    } else {
      return $dara.cast<ListIpamPoolAllocationsResponse>(await this.execute(params, req, runtime), new ListIpamPoolAllocationsResponse({}));
    }

  }

  /**
   * @param request - ListIpamPoolAllocationsRequest
   * @returns ListIpamPoolAllocationsResponse
   */
  async listIpamPoolAllocations(request: ListIpamPoolAllocationsRequest): Promise<ListIpamPoolAllocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolAllocationsWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamPoolCidrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolCidrsResponse
   */
  async listIpamPoolCidrsWithOptions(request: ListIpamPoolCidrsRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamPoolCidrsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidr)) {
      query["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamPoolCidrs",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamPoolCidrsResponse>(await this.callApi(params, req, runtime), new ListIpamPoolCidrsResponse({}));
    } else {
      return $dara.cast<ListIpamPoolCidrsResponse>(await this.execute(params, req, runtime), new ListIpamPoolCidrsResponse({}));
    }

  }

  /**
   * @param request - ListIpamPoolCidrsRequest
   * @returns ListIpamPoolCidrsResponse
   */
  async listIpamPoolCidrs(request: ListIpamPoolCidrsRequest): Promise<ListIpamPoolCidrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolCidrsWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamPoolsResponse
   */
  async listIpamPoolsWithOptions(request: ListIpamPoolsRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamPoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamPoolIds)) {
      query["IpamPoolIds"] = request.ipamPoolIds;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.isShared)) {
      query["IsShared"] = request.isShared;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolRegionId)) {
      query["PoolRegionId"] = request.poolRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceIpamPoolId)) {
      query["SourceIpamPoolId"] = request.sourceIpamPoolId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamPools",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamPoolsResponse>(await this.callApi(params, req, runtime), new ListIpamPoolsResponse({}));
    } else {
      return $dara.cast<ListIpamPoolsResponse>(await this.execute(params, req, runtime), new ListIpamPoolsResponse({}));
    }

  }

  /**
   * @param request - ListIpamPoolsRequest
   * @returns ListIpamPoolsResponse
   */
  async listIpamPools(request: ListIpamPoolsRequest): Promise<ListIpamPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamPoolsWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamResourceCidrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamResourceCidrsResponse
   */
  async listIpamResourceCidrsWithOptions(request: ListIpamResourceCidrsRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamResourceCidrsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamResourceCidrs",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamResourceCidrsResponse>(await this.callApi(params, req, runtime), new ListIpamResourceCidrsResponse({}));
    } else {
      return $dara.cast<ListIpamResourceCidrsResponse>(await this.execute(params, req, runtime), new ListIpamResourceCidrsResponse({}));
    }

  }

  /**
   * @param request - ListIpamResourceCidrsRequest
   * @returns ListIpamResourceCidrsResponse
   */
  async listIpamResourceCidrs(request: ListIpamResourceCidrsRequest): Promise<ListIpamResourceCidrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamResourceCidrsWithOptions(request, runtime);
  }

  /**
   * 查询ipam资源发现实例
   * 
   * @param request - ListIpamResourceDiscoveriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamResourceDiscoveriesResponse
   */
  async listIpamResourceDiscoveriesWithOptions(request: ListIpamResourceDiscoveriesRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamResourceDiscoveriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamResourceDiscoveryIds)) {
      query["IpamResourceDiscoveryIds"] = request.ipamResourceDiscoveryIds;
    }

    if (!$dara.isNull(request.ipamResourceDiscoveryName)) {
      query["IpamResourceDiscoveryName"] = request.ipamResourceDiscoveryName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamResourceDiscoveries",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamResourceDiscoveriesResponse>(await this.callApi(params, req, runtime), new ListIpamResourceDiscoveriesResponse({}));
    } else {
      return $dara.cast<ListIpamResourceDiscoveriesResponse>(await this.execute(params, req, runtime), new ListIpamResourceDiscoveriesResponse({}));
    }

  }

  /**
   * 查询ipam资源发现实例
   * 
   * @param request - ListIpamResourceDiscoveriesRequest
   * @returns ListIpamResourceDiscoveriesResponse
   */
  async listIpamResourceDiscoveries(request: ListIpamResourceDiscoveriesRequest): Promise<ListIpamResourceDiscoveriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamResourceDiscoveriesWithOptions(request, runtime);
  }

  /**
   * @param request - ListIpamScopesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamScopesResponse
   */
  async listIpamScopesWithOptions(request: ListIpamScopesRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamScopesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamScopeIds)) {
      query["IpamScopeIds"] = request.ipamScopeIds;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ipamScopeType)) {
      query["IpamScopeType"] = request.ipamScopeType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpamScopes",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamScopesResponse>(await this.callApi(params, req, runtime), new ListIpamScopesResponse({}));
    } else {
      return $dara.cast<ListIpamScopesResponse>(await this.execute(params, req, runtime), new ListIpamScopesResponse({}));
    }

  }

  /**
   * @param request - ListIpamScopesRequest
   * @returns ListIpamScopesResponse
   */
  async listIpamScopes(request: ListIpamScopesRequest): Promise<ListIpamScopesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamScopesWithOptions(request, runtime);
  }

  /**
   * 查询ipam
   * 
   * @param request - ListIpamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIpamsResponse
   */
  async listIpamsWithOptions(request: ListIpamsRequest, runtime: $dara.RuntimeOptions): Promise<ListIpamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipamIds)) {
      query["IpamIds"] = request.ipamIds;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIpams",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIpamsResponse>(await this.callApi(params, req, runtime), new ListIpamsResponse({}));
    } else {
      return $dara.cast<ListIpamsResponse>(await this.execute(params, req, runtime), new ListIpamsResponse({}));
    }

  }

  /**
   * 查询ipam
   * 
   * @param request - ListIpamsRequest
   * @returns ListIpamsResponse
   */
  async listIpams(request: ListIpamsRequest): Promise<ListIpamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIpamsWithOptions(request, runtime);
  }

  /**
   * 查询资源标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * 查询资源标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 开通IPAM功能。
   * 
   * @param request - OpenVpcIpamServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVpcIpamServiceResponse
   */
  async openVpcIpamServiceWithOptions(request: OpenVpcIpamServiceRequest, runtime: $dara.RuntimeOptions): Promise<OpenVpcIpamServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenVpcIpamService",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenVpcIpamServiceResponse>(await this.callApi(params, req, runtime), new OpenVpcIpamServiceResponse({}));
    } else {
      return $dara.cast<OpenVpcIpamServiceResponse>(await this.execute(params, req, runtime), new OpenVpcIpamServiceResponse({}));
    }

  }

  /**
   * 开通IPAM功能。
   * 
   * @param request - OpenVpcIpamServiceRequest
   * @returns OpenVpcIpamServiceResponse
   */
  async openVpcIpamService(request: OpenVpcIpamServiceRequest): Promise<OpenVpcIpamServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVpcIpamServiceWithOptions(request, runtime);
  }

  /**
   * 为资源实例绑定资源标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * 为资源实例绑定资源标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 为资源解绑资源标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * 为资源解绑资源标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 更新ipam
   * 
   * @param request - UpdateIpamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamResponse
   */
  async updateIpamWithOptions(request: UpdateIpamRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIpamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addOperatingRegion)) {
      query["AddOperatingRegion"] = request.addOperatingRegion;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamDescription)) {
      query["IpamDescription"] = request.ipamDescription;
    }

    if (!$dara.isNull(request.ipamId)) {
      query["IpamId"] = request.ipamId;
    }

    if (!$dara.isNull(request.ipamName)) {
      query["IpamName"] = request.ipamName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeOperatingRegion)) {
      query["RemoveOperatingRegion"] = request.removeOperatingRegion;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpam",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateIpamResponse>(await this.callApi(params, req, runtime), new UpdateIpamResponse({}));
    } else {
      return $dara.cast<UpdateIpamResponse>(await this.execute(params, req, runtime), new UpdateIpamResponse({}));
    }

  }

  /**
   * 更新ipam
   * 
   * @param request - UpdateIpamRequest
   * @returns UpdateIpamResponse
   */
  async updateIpam(request: UpdateIpamRequest): Promise<UpdateIpamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateIpamPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamPoolResponse
   */
  async updateIpamPoolWithOptions(request: UpdateIpamPoolRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIpamPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allocationDefaultCidrMask)) {
      query["AllocationDefaultCidrMask"] = request.allocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.allocationMaxCidrMask)) {
      query["AllocationMaxCidrMask"] = request.allocationMaxCidrMask;
    }

    if (!$dara.isNull(request.allocationMinCidrMask)) {
      query["AllocationMinCidrMask"] = request.allocationMinCidrMask;
    }

    if (!$dara.isNull(request.autoImport)) {
      query["AutoImport"] = request.autoImport;
    }

    if (!$dara.isNull(request.clearAllocationDefaultCidrMask)) {
      query["ClearAllocationDefaultCidrMask"] = request.clearAllocationDefaultCidrMask;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolDescription)) {
      query["IpamPoolDescription"] = request.ipamPoolDescription;
    }

    if (!$dara.isNull(request.ipamPoolId)) {
      query["IpamPoolId"] = request.ipamPoolId;
    }

    if (!$dara.isNull(request.ipamPoolName)) {
      query["IpamPoolName"] = request.ipamPoolName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamPool",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateIpamPoolResponse>(await this.callApi(params, req, runtime), new UpdateIpamPoolResponse({}));
    } else {
      return $dara.cast<UpdateIpamPoolResponse>(await this.execute(params, req, runtime), new UpdateIpamPoolResponse({}));
    }

  }

  /**
   * @param request - UpdateIpamPoolRequest
   * @returns UpdateIpamPoolResponse
   */
  async updateIpamPool(request: UpdateIpamPoolRequest): Promise<UpdateIpamPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamPoolWithOptions(request, runtime);
  }

  /**
   * 更新IPAM地址池分配信息
   * 
   * @param request - UpdateIpamPoolAllocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamPoolAllocationResponse
   */
  async updateIpamPoolAllocationWithOptions(request: UpdateIpamPoolAllocationRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIpamPoolAllocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamPoolAllocationDescription)) {
      query["IpamPoolAllocationDescription"] = request.ipamPoolAllocationDescription;
    }

    if (!$dara.isNull(request.ipamPoolAllocationId)) {
      query["IpamPoolAllocationId"] = request.ipamPoolAllocationId;
    }

    if (!$dara.isNull(request.ipamPoolAllocationName)) {
      query["IpamPoolAllocationName"] = request.ipamPoolAllocationName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamPoolAllocation",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateIpamPoolAllocationResponse>(await this.callApi(params, req, runtime), new UpdateIpamPoolAllocationResponse({}));
    } else {
      return $dara.cast<UpdateIpamPoolAllocationResponse>(await this.execute(params, req, runtime), new UpdateIpamPoolAllocationResponse({}));
    }

  }

  /**
   * 更新IPAM地址池分配信息
   * 
   * @param request - UpdateIpamPoolAllocationRequest
   * @returns UpdateIpamPoolAllocationResponse
   */
  async updateIpamPoolAllocation(request: UpdateIpamPoolAllocationRequest): Promise<UpdateIpamPoolAllocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamPoolAllocationWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateIpamScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpamScopeResponse
   */
  async updateIpamScopeWithOptions(request: UpdateIpamScopeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIpamScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ipamScopeDescription)) {
      query["IpamScopeDescription"] = request.ipamScopeDescription;
    }

    if (!$dara.isNull(request.ipamScopeId)) {
      query["IpamScopeId"] = request.ipamScopeId;
    }

    if (!$dara.isNull(request.ipamScopeName)) {
      query["IpamScopeName"] = request.ipamScopeName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpamScope",
      version: "2023-02-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateIpamScopeResponse>(await this.callApi(params, req, runtime), new UpdateIpamScopeResponse({}));
    } else {
      return $dara.cast<UpdateIpamScopeResponse>(await this.execute(params, req, runtime), new UpdateIpamScopeResponse({}));
    }

  }

  /**
   * @param request - UpdateIpamScopeRequest
   * @returns UpdateIpamScopeResponse
   */
  async updateIpamScope(request: UpdateIpamScopeRequest): Promise<UpdateIpamScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpamScopeWithOptions(request, runtime);
  }

}
