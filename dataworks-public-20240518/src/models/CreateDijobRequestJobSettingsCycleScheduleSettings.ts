// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestJobSettingsCycleScheduleSettings extends $dara.Model {
  /**
   * @remarks
   * The synchronization type that requires periodic scheduling. Valid values:
   * 
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
   * 
   * @example
   * Full
   */
  cycleMigrationType?: string;
  /**
   * @remarks
   * The scheduling parameters.
   * 
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
      scheduleParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

