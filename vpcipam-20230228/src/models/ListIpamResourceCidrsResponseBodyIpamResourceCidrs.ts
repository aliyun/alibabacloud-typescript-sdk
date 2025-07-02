// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail } from "./ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail";
import { ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail } from "./ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail";


export class ListIpamResourceCidrsResponseBodyIpamResourceCidrs extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
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
   * 192.168.1.0/32
   */
  cidr?: string;
  /**
   * @remarks
   * The compliance status of the resource.
   * 
   * *   **Compliant**
   * *   **Noncompliant**
   * *   **Ignored** Ignored resources are not monitored.
   * *   **Unmanaged**: The resource does not have a CIDR block allocated from the IPAM pool. IPAM does not monitor whether the CIDR block of the resource meets the allocation rules of the IP address pool.
   * 
   * @example
   * Compliant
   */
  complianceStatus?: string;
  ipCountDetail?: ListIpamResourceCidrsResponseBodyIpamResourceCidrsIpCountDetail;
  /**
   * @remarks
   * The IP usage that is displayed in decimal form.
   * 
   * @example
   * 0
   */
  ipUsage?: string;
  /**
   * @remarks
   * The ID of the instance to which CIDR blocks are allocated from the IPAM pool.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamAllocationId?: string;
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  ipamId?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t***
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The management status of the resource.
   * 
   * *   **Managed**: The resource has a CIDR block allocated from an IPAM pool. IPAM is monitoring whether the allocated CIDR block overlaps with other CIDR blocks and whether the allocated CIDR block meets the allocation rules.
   * *   **Unmanaged**: The resource does not have a CIDR block allocated from the IPAM pool. IPAM is monitoring whether the resource has CIDR blocks that meet the allocation rules. Monitor whether CIDR blocks overlap with each other.
   * *   **Ignored**: The resource is not monitored. Ignored resources are not monitored. If you ignore a resource, CIDR blocks allocated to the resource are returned to the IPAM pool and will not be automatically allocated to the resource (if automatic allocation rules are specified).
   * 
   * @example
   * Managed
   */
  managementStatus?: string;
  /**
   * @remarks
   * List of resources that overlap with the current resource.
   */
  overlapDetail?: ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail[];
  /**
   * @remarks
   * The overlapping status of the resource.
   * 
   * *   **Nonoverlapping**
   * *   **Overlapping**
   * *   **Ignored** Ignored resources are not monitored.
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
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The effective region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **VPC**
   * *   **VSwitch**
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
   * *   **Created**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The VPC ID.
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

