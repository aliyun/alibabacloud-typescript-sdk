// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anchor branch. If you do not specify this parameter, the root branch of the project is used by default.
   * 
   * @example
   * br-7g8h9i0j1k2l
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
   * Specifies whether to include branches in the Destroying state. Default value: false.
   * 
   * @example
   * false
   */
  includeDestroying?: boolean;
  /**
   * @remarks
   * The maximum number of levels for the returned view, including the anchor branch itself. Valid values: 1 to 20. Default value: 3. The server automatically allocates the upward and downward budgets based on a downward bias.
   * 
   * @example
   * 3
   */
  maxViewDepth?: number;
  /**
   * @remarks
   * The ID of the project.
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
   * The ID of the tenant.
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
      includeDestroying: 'IncludeDestroying',
      maxViewDepth: 'MaxViewDepth',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      DBClusterId: 'string',
      includeDestroying: 'boolean',
      maxViewDepth: 'number',
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

