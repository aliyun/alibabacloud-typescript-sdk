// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchesRequest extends $dara.Model {
  /**
   * @remarks
   * The branch name for fuzzy match.
   * 
   * @example
   * feature
   */
  branchName?: string;
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status filter. Valid values:
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
      branchName: 'BranchName',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
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

