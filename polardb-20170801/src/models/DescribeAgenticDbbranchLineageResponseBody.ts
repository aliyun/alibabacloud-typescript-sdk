// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchLineageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The compute cluster ID of the branch.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  branchComputeClusterId?: string;
  /**
   * @remarks
   * The branch description.
   * 
   * @example
   * Feature branch for analytics
   */
  branchDescription?: string;
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
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The depth relative to the anchor branch. The anchor branch has a depth of 0. Ancestor branches have negative values. Descendant branches have positive values.
   * 
   * @example
   * 0
   */
  depth?: number;
  /**
   * @remarks
   * The total number of direct child branches.
   * 
   * @example
   * 3
   */
  directChildCount?: number;
  /**
   * @remarks
   * Indicates whether more ancestor nodes exist but are not returned.
   * 
   * @example
   * false
   */
  hasMoreAncestors?: boolean;
  /**
   * @remarks
   * Indicates whether more child nodes exist but are not returned.
   * 
   * @example
   * false
   */
  hasMoreChildren?: boolean;
  /**
   * @remarks
   * Indicates whether the branch is the anchor branch.
   * 
   * @example
   * true
   */
  isAnchor?: boolean;
  /**
   * @example
   * false
   */
  isDefaultBranch?: boolean;
  /**
   * @remarks
   * Indicates whether the branch is the primary branch.
   * 
   * @example
   * false
   */
  isRoot?: boolean;
  /**
   * @remarks
   * The parent branch ID.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The parent branch name.
   * 
   * @example
   * main
   */
  parentBranchName?: string;
  /**
   * @remarks
   * The branch status. Valid values:
   * - Active
   * - Destroying
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      branchComputeClusterId: 'BranchComputeClusterId',
      branchDescription: 'BranchDescription',
      branchId: 'BranchId',
      branchName: 'BranchName',
      createTime: 'CreateTime',
      depth: 'Depth',
      directChildCount: 'DirectChildCount',
      hasMoreAncestors: 'HasMoreAncestors',
      hasMoreChildren: 'HasMoreChildren',
      isAnchor: 'IsAnchor',
      isDefaultBranch: 'IsDefaultBranch',
      isRoot: 'IsRoot',
      parentBranchId: 'ParentBranchId',
      parentBranchName: 'ParentBranchName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchComputeClusterId: 'string',
      branchDescription: 'string',
      branchId: 'string',
      branchName: 'string',
      createTime: 'string',
      depth: 'number',
      directChildCount: 'number',
      hasMoreAncestors: 'boolean',
      hasMoreChildren: 'boolean',
      isAnchor: 'boolean',
      isDefaultBranch: 'boolean',
      isRoot: 'boolean',
      parentBranchId: 'string',
      parentBranchName: 'string',
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

export class DescribeAgenticDBBranchLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The anchor branch ID.
   * 
   * @example
   * br-7g8h9i0j1k2l
   */
  anchorBranchId?: string;
  /**
   * @remarks
   * The list of lineage nodes.
   */
  items?: DescribeAgenticDBBranchLineageResponseBodyItems[];
  /**
   * @remarks
   * The total number of returned nodes.
   * 
   * @example
   * 6
   */
  nodeCount?: number;
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
   * The project name.
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
   * B2C3D4E5-F6A7-8901-BCDE-2345678901BC
   */
  requestId?: string;
  /**
   * @remarks
   * The primary branch ID.
   * 
   * @example
   * br-root
   */
  rootBranchId?: string;
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
      anchorBranchId: 'AnchorBranchId',
      items: 'Items',
      nodeCount: 'NodeCount',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      rootBranchId: 'RootBranchId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorBranchId: 'string',
      items: { 'type': 'array', 'itemType': DescribeAgenticDBBranchLineageResponseBodyItems },
      nodeCount: 'number',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      rootBranchId: 'string',
      tenantId: 'string',
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

