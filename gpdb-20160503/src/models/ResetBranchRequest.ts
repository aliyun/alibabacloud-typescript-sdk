// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetBranchRequest extends $dara.Model {
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
   * The Supabase project ID that corresponds to the main branch.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID. This parameter is required when you create a main branch. When you create a child branch, the region is inherited from the main branch by default.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
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

