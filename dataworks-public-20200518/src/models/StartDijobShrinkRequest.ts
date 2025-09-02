// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11743
   */
  DIJobId?: number;
  /**
   * @remarks
   * Specifies whether to forcefully rerun all synchronization steps. If you do not configure this parameter, the system does not forcefully rerun the task.
   * 
   * @example
   * true
   */
  forceToRerun?: boolean;
  /**
   * @remarks
   * The settings for the start.
   */
  realtimeStartSettingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettingsShrink: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      forceToRerun: 'boolean',
      realtimeStartSettingsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

