// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBranchSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The branch ID, which uniquely identifies a Supabase branch.
   * 
   * This parameter is required.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The database name. Schema queries are not supported for system databases such as postgres, template0, and template1.
   * 
   * This parameter is required.
   * 
   * @example
   * neondb
   */
  DBName?: string;
  /**
   * @remarks
   * The Supabase project ID corresponding to the primary branch.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when creating a primary branch. When creating a child branch, it inherits the region of the primary branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      DBName: 'DBName',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      DBName: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

