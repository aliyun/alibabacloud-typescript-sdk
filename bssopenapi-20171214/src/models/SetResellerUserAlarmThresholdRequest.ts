// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetResellerUserAlarmThresholdRequest extends $dara.Model {
  /**
   * @example
   * [{\\"denominator\\":100,\\"numerator\\":30,\\"thresholdType\\":1}]
   */
  alarmThresholds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * quota_low_balance
   */
  alarmType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmThresholds: 'AlarmThresholds',
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmThresholds: 'string',
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

