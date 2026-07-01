// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBBranchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the branch.
   * 
   * This parameter is required.
   * 
   * @example
   * feature-analytics
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
   * The description of the branch.
   * 
   * @example
   * Feature branch for analytics
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parent branch. If this parameter is not specified, the branch is derived from the main branch by default.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @remarks
   * The ID of the project to which the branch belongs.
   * 
   * This parameter is required.
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
   * The ID of the tenant to which the branch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      parentBranchId: 'ParentBranchId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      DBClusterId: 'string',
      description: 'string',
      parentBranchId: 'string',
      projectId: 'string',
      regionId: 'string',
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

