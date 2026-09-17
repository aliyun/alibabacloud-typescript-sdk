// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseAutoScalePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable **auto start/stop**.
   * 
   * Valid values:
   * - true: Enabled. After this feature is enabled, Supabase automatically pauses and resumes based on traffic conditions.
   * - false: Disabled. After this feature is disabled, the auto start/stop feature of Supabase is turned off.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The idle time before auto stop, in hours.
   * 
   * @example
   * 0.5
   */
  idleTimeHours?: string;
  /**
   * @remarks
   * The ID of the Supabase project. You can obtain the workspace ID from the Supabase page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-tyarplz****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      idleTimeHours: 'IdleTimeHours',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      idleTimeHours: 'string',
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

