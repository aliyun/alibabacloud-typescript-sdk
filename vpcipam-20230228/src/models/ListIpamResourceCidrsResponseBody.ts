// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 252
   */
  freeIpCount?: string;
  /**
   * @remarks
   * The total number of IP addresses.
   * 
   * @example
   * 256
   */
  totalIpCount?: string;
  /**
   * @remarks
   * The number of allocated IP addresses.
   * 
   * @example
   * 4
   */
  usedIpCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeIpCount: 'FreeIpCount',
      totalIpCount: 'TotalIpCount',
      usedIpCount: 'UsedIpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeIpCount: 'string',
      totalIpCount: 'string',
      usedIpCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the resource that overlaps with the current resource.
   * 
   * @example
   * 192.168.1.0/24
   */
  overlapResourceCidr?: string;
  /**
   * @remarks
   * The instance ID of the resource that overlaps with the current resource.
   * 
   * @example
   * vpc-aq3fjgnig5av6jb8d****
   */
  overlapResourceId?: string;
  /**
   * @remarks
   * The region of the instance that overlaps with the current resource.
   * 
   * @example
   * cn-hangzhou
   */
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
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 132193271328****
   */
  aliUid?: number;
  /**
   * @remarks
   * The CIDR block of the resource.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The compliance status of the resource.
   * 
   * - **Compliant**: The CIDR block of the managed resource complies with the allocation rules of the IPAM pool.
   * - **Noncompliant**: The CIDR block of the managed resource does not comply with one or more allocation rules of the IPAM pool.
   * - **Ignored**: The resource has been excluded from monitoring. Ignored resources are not evaluated for overlap or allocation rule compliance.
   * - **Unmanaged**: The resource does not have a CIDR block allocated from an IPAM pool. IPAM does not monitor whether the CIDR block of the resource complies with the allocation rules of the pool, but monitors the CIDR block for overlap.
   * 
   * @example
   * Compliant
   */
  complianceStatus?: string;
  /**
   * @remarks
   * The details of the resource IP address count.
   */
  ipCountDetail?: ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail;
  /**
   * @remarks
   * The IP utilization rate, expressed as a decimal.
   * 
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool CIDR allocation.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamAllocationId?: string;
  /**
   * @remarks
   * The instance ID of the IPAM.
   * 
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  ipamId?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t***
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The instance ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The management status of the resource.
   * 
   * - **Managed**: The resource has a CIDR block allocated from an IPAM pool. IPAM monitors the resource for potential CIDR overlap and compliance with pool allocation rules.
   * - **Unmanaged**: The resource does not have a CIDR block allocated from an IPAM pool. IPAM monitors the resource for potential CIDRs that comply with pool allocation rules and monitors CIDRs for overlap.
   * - **Ignored**: The resource has been excluded from monitoring. Ignored resources are not evaluated for overlap or allocation rule compliance. When a resource is ignored, any space allocated to it from an IPAM pool is returned to the pool, and the resource is not re-imported through automatic import (if an automatic import allocation rule is configured for the pool).
   * 
   * @example
   * Managed
   */
  managementStatus?: string;
  /**
   * @remarks
   * The list of resources that overlap with the current resource.
   */
  overlapDetail?: ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail[];
  /**
   * @remarks
   * The overlap status of the resource.
   * 
   * - **Nonoverlapping**: The CIDR block of the resource does not overlap with other CIDR blocks within the same scope.
   * - **Overlapping**: The CIDR block of the resource overlaps with another CIDR block within the same scope.
   * - **Ignored**: The resource has been excluded from monitoring. Ignored resources are not evaluated for overlap or allocation rule compliance.
   * 
   * @example
   * Nonoverlapping
   */
  overlapStatus?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   */
  resourceName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource ownership.
   * 
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the resource takes effect.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **VPC**: The resource type is VPC.
   * - **VSwitch**: The resource type is vSwitch.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The status of the resource in the IPAM pool. Valid values:
   * 
   * - **Created**: created.
   * - **Deleted**: deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the resource belongs.
   * 
   * @example
   * vpc-bp1fjfnrg3av6zb9e****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cidr: 'Cidr',
      complianceStatus: 'ComplianceStatus',
      ipCountDetail: 'IpCountDetail',
      ipUsage: 'IpUsage',
      ipamAllocationId: 'IpamAllocationId',
      ipamId: 'IpamId',
      ipamPoolId: 'IpamPoolId',
      ipamScopeId: 'IpamScopeId',
      managementStatus: 'ManagementStatus',
      overlapDetail: 'OverlapDetail',
      overlapStatus: 'OverlapStatus',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
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
      ipCountDetail: ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail,
      ipUsage: 'string',
      ipamAllocationId: 'string',
      ipamId: 'string',
      ipamPoolId: 'string',
      ipamScopeId: 'string',
      managementStatus: 'string',
      overlapDetail: { 'type': 'array', 'itemType': ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail },
      overlapStatus: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.ipCountDetail && typeof (this.ipCountDetail as any).validate === 'function') {
      (this.ipCountDetail as any).validate();
    }
    if(Array.isArray(this.overlapDetail)) {
      $dara.Model.validateArray(this.overlapDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceCidrsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of resource information.
   */
  ipamResourceCidrs?: ListIpamResourceCidrsResponseBodyIpamResourceCidrs[];
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no more results exist.
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
   * 49A9DE56-B68C-5FFC-BC06-509D086F287C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned under the current query conditions.
   * 
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

