// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchRestoreWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source branch.
   * 
   * This parameter is required.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  branchId?: string;
  /**
   * @remarks
   * The ID of the AgenticDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the target project.
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
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      DBClusterId: 'DBClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      DBClusterId: 'string',
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

