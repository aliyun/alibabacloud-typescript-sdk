// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @example
   * 1
   */
  branchComputeNodeCount?: number;
  /**
   * @example
   * br-7g8h9i0j1k2l
   */
  branchId?: string;
  /**
   * @example
   * feature-analytics
   */
  branchName?: string;
  /**
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * Feature branch for analytics
   */
  description?: string;
  /**
   * @example
   * false
   */
  isDefaultBranch?: boolean;
  /**
   * @example
   * 2026-06-10T12:30:00Z
   */
  lastActivatedAt?: string;
  /**
   * @example
   * 2
   */
  maxCU?: string;
  /**
   * @example
   * 0.25
   */
  minCU?: string;
  /**
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @example
   * analytics-prod
   */
  projectName?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchComputeClusterId: 'BranchComputeClusterId',
      branchComputeNodeCount: 'BranchComputeNodeCount',
      branchId: 'BranchId',
      branchName: 'BranchName',
      createTime: 'CreateTime',
      description: 'Description',
      isDefaultBranch: 'IsDefaultBranch',
      lastActivatedAt: 'LastActivatedAt',
      maxCU: 'MaxCU',
      minCU: 'MinCU',
      parentBranchId: 'ParentBranchId',
      parentBranchName: 'ParentBranchName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchComputeClusterId: 'string',
      branchComputeNodeCount: 'number',
      branchId: 'string',
      branchName: 'string',
      createTime: 'string',
      description: 'string',
      isDefaultBranch: 'boolean',
      lastActivatedAt: 'string',
      maxCU: 'string',
      minCU: 'string',
      parentBranchId: 'string',
      parentBranchName: 'string',
      projectId: 'string',
      projectName: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBBranchesResponseBody extends $dara.Model {
  items?: DescribeAgenticDBBranchesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * B2C3D4E5-F6A7-8901-BCDE-2345678901BC
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAgenticDBBranchesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

