// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBranchSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The branch ID that uniquely identifies a Supabase branch.
   * 
   * This parameter is required.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The database name. The system databases postgres, template0, and template1 do not support schema queries.
   * 
   * This parameter is required.
   * 
   * @example
   * neondb
   */
  DBName?: string;
  /**
   * @remarks
   * The Supabase project ID that corresponds to the primary branch.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a primary branch. When you create a sub-branch, the region of the primary branch is inherited by default.
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

