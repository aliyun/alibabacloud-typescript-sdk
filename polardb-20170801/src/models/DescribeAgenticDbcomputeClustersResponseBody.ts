// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBComputeClustersResponseBodyItems extends $dara.Model {
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
   * pc-g0lsayq8c5qe
   */
  computeClusterId?: string;
  /**
   * @example
   * 1
   */
  computeNodeCount?: number;
  /**
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * Compute cluster for analytics
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
   * Neon
   */
  operatorType?: string;
  parentBranchId?: string;
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
   * Running
   */
  status?: string;
  /**
   * @example
   * 1073741824
   */
  storageSize?: number;
  /**
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @example
   * my-saas-app
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      branchName: 'BranchName',
      computeClusterId: 'ComputeClusterId',
      computeNodeCount: 'ComputeNodeCount',
      createTime: 'CreateTime',
      description: 'Description',
      isDefaultBranch: 'IsDefaultBranch',
      lastActivatedAt: 'LastActivatedAt',
      maxCU: 'MaxCU',
      minCU: 'MinCU',
      operatorType: 'OperatorType',
      parentBranchId: 'ParentBranchId',
      parentBranchName: 'ParentBranchName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      storageSize: 'StorageSize',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      branchName: 'string',
      computeClusterId: 'string',
      computeNodeCount: 'number',
      createTime: 'string',
      description: 'string',
      isDefaultBranch: 'boolean',
      lastActivatedAt: 'string',
      maxCU: 'string',
      minCU: 'string',
      operatorType: 'string',
      parentBranchId: 'string',
      parentBranchName: 'string',
      projectId: 'string',
      projectName: 'string',
      status: 'string',
      storageSize: 'number',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBComputeClustersResponseBody extends $dara.Model {
  items?: DescribeAgenticDBComputeClustersResponseBodyItems[];
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
   * F6A7B8C9-D0E1-2345-FABC-678901234FAB
   */
  requestId?: string;
  /**
   * @example
   * 3
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
      items: { 'type': 'array', 'itemType': DescribeAgenticDBComputeClustersResponseBodyItems },
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

