// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBComputeClustersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated branch.
   * 
   * @example
   * br-7g8h9i0j1k2l
   */
  branchId?: string;
  /**
   * @remarks
   * The name of the associated branch.
   * 
   * @example
   * feature-analytics
   */
  branchName?: string;
  /**
   * @remarks
   * The compute instance ID.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  computeClusterId?: string;
  /**
   * @remarks
   * The number of compute nodes. The value is fixed to 1 in the first phase.
   * 
   * @example
   * 1
   */
  computeNodeCount?: number;
  /**
   * @remarks
   * The time when the compute instance was created.
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the compute instance.
   * 
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
   * @remarks
   * The time when the compute instance was last activated.
   * 
   * @example
   * 2026-06-10T12:30:00Z
   */
  lastActivatedAt?: string;
  /**
   * @remarks
   * The maximum compute unit.
   * 
   * @example
   * 2
   */
  maxCU?: string;
  /**
   * @remarks
   * The minimum compute unit.
   * 
   * @example
   * 0.25
   */
  minCU?: string;
  /**
   * @remarks
   * The operator type.
   * 
   * @example
   * Neon
   */
  operatorType?: string;
  parentBranchId?: string;
  parentBranchName?: string;
  /**
   * @remarks
   * The ID of the associated project.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the associated project.
   * 
   * @example
   * analytics-prod
   */
  projectName?: string;
  /**
   * @remarks
   * The status of the compute instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The amount of used data, in bytes.
   * 
   * @example
   * 1073741824
   */
  storageSize?: number;
  /**
   * @remarks
   * The ID of the associated tenant.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the associated tenant.
   * 
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
  /**
   * @remarks
   * The list of compute instances.
   */
  items?: DescribeAgenticDBComputeClustersResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6A7B8C9-D0E1-2345-FABC-678901234FAB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

