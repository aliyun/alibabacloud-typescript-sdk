// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestJobSettingsCycleScheduleSettings extends $dara.Model {
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
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

