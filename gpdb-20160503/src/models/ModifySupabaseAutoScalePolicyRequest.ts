// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseAutoScalePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable **automatic start and stop**. Valid values:
   * - true: Enabled. After this feature is enabled, Supabase automatically pauses and resumes based on traffic.
   * - false: Disabled. After this feature is disabled, the automatic start and stop feature for Supabase is turned off.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The idle time for automatic start and stop, in hours.
   * 
   * @example
   * 0.5
   */
  idleTimeHours?: string;
  /**
   * @remarks
   * The ID of the Supabase project. You can log on to the Supabase page in the console to obtain the workspace ID.
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

