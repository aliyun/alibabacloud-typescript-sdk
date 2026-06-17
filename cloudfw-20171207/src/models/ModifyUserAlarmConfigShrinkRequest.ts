// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserAlarmConfigShrinkRequestAlarmConfig extends $dara.Model {
  /**
   * @remarks
   * Hour for alert notifications.
   * 
   * @example
   * 10
   */
  alarmHour?: string;
  /**
   * @remarks
   * Notification method.
   * 
   * @example
   * 0
   */
  alarmNotify?: string;
  /**
   * @remarks
   * Alert period.
   * 
   * @example
   * 0
   */
  alarmPeriod?: string;
  /**
   * @remarks
   * Alarm metric.
   * 
   * @example
   * bandwidth
   */
  alarmType?: string;
  /**
   * @remarks
   * Alert notification message.
   * 
   * @example
   * on
   */
  alarmValue?: string;
  /**
   * @remarks
   * Day of the week for alert notifications.
   * 
   * @example
   * 2
   */
  alarmWeekDay?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHour: 'AlarmHour',
      alarmNotify: 'AlarmNotify',
      alarmPeriod: 'AlarmPeriod',
      alarmType: 'AlarmType',
      alarmValue: 'AlarmValue',
      alarmWeekDay: 'AlarmWeekDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHour: 'string',
      alarmNotify: 'string',
      alarmPeriod: 'string',
      alarmType: 'string',
      alarmValue: 'string',
      alarmWeekDay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserAlarmConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Alert configuration.
   * 
   * This parameter is required.
   */
  alarmConfig?: ModifyUserAlarmConfigShrinkRequestAlarmConfig[];
  /**
   * @remarks
   * Language for message notifications.
   * 
   * @example
   * zh
   */
  alarmLang?: string;
  /**
   * @remarks
   * Contact configuration.
   * 
   * **if can be null:**
   * false
   */
  contactConfigShrink?: string;
  /**
   * @remarks
   * Language used for requests and responses.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Source IP address of the requester.
   * 
   * @example
   * 117.129.64.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * Use default contact method.
   * 
   * @example
   * 1
   */
  useDefaultContact?: number;
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      alarmLang: 'AlarmLang',
      contactConfigShrink: 'ContactConfig',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      useDefaultContact: 'UseDefaultContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: { 'type': 'array', 'itemType': ModifyUserAlarmConfigShrinkRequestAlarmConfig },
      alarmLang: 'string',
      contactConfigShrink: 'string',
      lang: 'string',
      sourceIp: 'string',
      useDefaultContact: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmConfig)) {
      $dara.Model.validateArray(this.alarmConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

