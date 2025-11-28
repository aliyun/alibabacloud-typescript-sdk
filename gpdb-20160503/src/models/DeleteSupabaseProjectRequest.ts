// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The Supabase project ID. You can go to the Supabase page in the AnalyticDB for PostgreSQL console to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-1****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

