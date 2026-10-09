// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSupabaseVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The target minor version. You can query the supported upgrade versions for the current project by calling GetSupabaseUpdateVersion.
   * 
   * @example
   * 20240731
   */
  minorVersion?: string;
  /**
   * @remarks
   * The ID of the Supabase project.
   * 
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      minorVersion: 'MinorVersion',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minorVersion: 'string',
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

