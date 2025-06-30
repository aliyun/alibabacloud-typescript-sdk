// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestJobSettingsCycleScheduleSettings extends $dara.Model {
  cycleMigrationType?: string;
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

