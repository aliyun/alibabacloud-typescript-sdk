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
   * The description.
   * 
   * @example
   * Feature branch for analytics
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parent branch. By default, the branch is derived from the main branch.
   * 
   * @example
   * br-1a2b3c4d5e6f
   */
  parentBranchId?: string;
  /**
   * @remarks
   * Creates the branch based on the data of the parent branch at the specified point in time. If you do not specify this parameter, the latest data is used. The value must be in RFC 3339 format with a time zone and support up to nine fractional digits for seconds. Empty strings and future times are not supported.
   * 
   * @example
   * 2026-10-15T07:32:00.123456Z
   */
  parentTimestamp?: string;
  /**
   * @remarks
   * The project ID.
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
      branchName: 'BranchName',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      parentBranchId: 'ParentBranchId',
      parentTimestamp: 'ParentTimestamp',
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
      parentTimestamp: 'string',
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

