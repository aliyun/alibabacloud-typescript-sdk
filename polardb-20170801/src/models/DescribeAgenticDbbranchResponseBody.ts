// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute cluster associated with the branch.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @remarks
   * The number of compute nodes. The value is fixed to 1 in the initial phase.
   * 
   * @example
   * 1
   */
  branchComputeNodeCount?: number;
  /**
   * @remarks
   * The branch ID.
   * 
   * @example
   * br-7g8h9i0j1k2l
   */
  branchId?: string;
  /**
   * @remarks
   * The branch name.
   * 
   * @example
   * feature-analytics
   */
  branchName?: string;
  /**
   * @remarks
   * The time when the branch was created.
   * 
   * The time is in the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the branch.
   * 
   * @example
   * Feature branch for analytics
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the branch is the default branch.
   * 
   * @example
   * false
   */
  isDefaultBranch?: boolean;
  /**
   * @remarks
   * The time when the branch was last activated.
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
   * The ID of the parent branch.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The name of the parent branch.
   * 
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @remarks
   * The ID of the project to which the branch belongs.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project to which the branch belongs.
   * 
   * @example
   * analytics-prod
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3D4E5F6-A7B8-9012-CDEF-345678901CDE
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the branch. Valid values:
   * 
   * - Running
   * - Pending
   * - Paused
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant to which the branch belongs.
   * 
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

