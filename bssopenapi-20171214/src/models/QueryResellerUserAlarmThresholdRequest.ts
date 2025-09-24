// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResellerUserAlarmThresholdRequest extends $dara.Model {
  /**
   * @example
   * quota_low_balance
   */
  alarmType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmType: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

