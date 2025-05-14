// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleConferenceRequestScheduleConfSettingModelMoziConfOpenRecordSetting extends $dara.Model {
  isFollowHost?: boolean;
  /**
   * @example
   * grid
   */
  mode?: string;
  /**
   * @example
   * 0
   */
  recordAutoStart?: number;
  /**
   * @example
   * 0
   */
  recordAutoStartType?: number;
  static names(): { [key: string]: string } {
    return {
      isFollowHost: 'IsFollowHost',
      mode: 'Mode',
      recordAutoStart: 'RecordAutoStart',
      recordAutoStartType: 'RecordAutoStartType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFollowHost: 'boolean',
      mode: 'string',
      recordAutoStart: 'number',
      recordAutoStartType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

