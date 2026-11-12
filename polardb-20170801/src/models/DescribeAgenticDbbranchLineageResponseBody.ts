// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchLineageResponseBodyItems extends $dara.Model {
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
   * The description of the branch.
   * 
   * @example
   * Feature branch for analytics
   */
  branchDescription?: string;
  /**
   * @remarks
   * The ID of the branch.
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
   * The time when the branch was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-06-10T11:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The depth relative to the anchor branch. The depth of the anchor branch is 0. Ancestors have negative values, and descendants have positive values.
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
   * Indicates whether there are more ancestor nodes that are not returned.
   * 
   * @example
   * false
   */
  hasMoreAncestors?: boolean;
  /**
   * @remarks
   * Indicates whether there are more child nodes that are not returned.
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
   * @remarks
   * Indicates whether the branch is the default branch.
   * 
   * @example
   * false
   */
  isDefaultBranch?: boolean;
  /**
   * @remarks
   * Indicates whether the branch is the root branch.
   * 
   * @example
   * false
   */
  isRoot?: boolean;
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
   * The status of the branch. Valid values: Active and Destroying.
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
   * The ID of the anchor branch.
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
   * The ID of the project.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project.
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
   * B2C3D4E5-F6A7-8901-BCDE-2345678901BC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the root branch.
   * 
   * @example
   * br-root
   */
  rootBranchId?: string;
  /**
   * @remarks
   * The ID of the tenant.
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

