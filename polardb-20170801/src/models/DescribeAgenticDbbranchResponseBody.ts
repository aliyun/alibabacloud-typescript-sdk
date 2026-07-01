// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchResponseBody extends $dara.Model {
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
   * C3D4E5F6-A7B8-9012-CDEF-345678901CDE
   */
  requestId?: string;
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

