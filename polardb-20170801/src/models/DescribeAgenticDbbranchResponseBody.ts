// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute cluster for the branch.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @remarks
   * The number of compute nodes. The value is fixed to 1 in the first phase.
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
   * The name of the branch.
   * 
   * @example
   * feature-analytics
   */
  branchName?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the UTC time zone. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
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
   * The maximum number of compute units (CUs).
   * 
   * @example
   * 2
   */
  maxCU?: string;
  /**
   * @remarks
   * The minimum number of compute units (CUs).
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
   * The historical time of the parent branch specified when the branch is created. The time follows the RFC 3339 standard in the UTC time zone. If no historical time is specified or for old records, this value may be empty.
   * 
   * @example
   * 2026-10-15T07:32:00.123456Z
   */
  parentTimestamp?: string;
  /**
   * @remarks
   * The project ID.
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
   * The ID of the request.
   * 
   * @example
   * C3D4E5F6-A7B8-9012-CDEF-345678901CDE
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the branch. Valid values: Running, Pending, and Paused.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
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
      parentTimestamp: 'ParentTimestamp',
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
      parentTimestamp: 'string',
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

