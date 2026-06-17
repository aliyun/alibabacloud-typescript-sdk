// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseAutoScalePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-scaling. Valid values:
   * 
   * - `true`: Enables auto-scaling. The Supabase instance automatically pauses and resumes based on traffic.
   * 
   * - `false`: Disables auto-scaling.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The ID of the Supabase project. To obtain the workspace ID, log in to the console and go to the Supabase page.
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
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

