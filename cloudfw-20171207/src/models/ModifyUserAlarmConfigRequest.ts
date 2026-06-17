// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserAlarmConfigRequestAlarmConfig extends $dara.Model {
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

export class ModifyUserAlarmConfigRequestContactConfig extends $dara.Model {
  /**
   * @remarks
   * Mailbox.
   * 
   * @example
   * 91632****@qq.com
   */
  email?: string;
  /**
   * @remarks
   * Mobile number.
   * 
   * @example
   * 1351234****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * Alert notification recipient.
   * 
   * @example
   * Ben
   */
  name?: string;
  /**
   * @remarks
   * Alert status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobilePhone: 'string',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserAlarmConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Alert configuration.
   * 
   * This parameter is required.
   */
  alarmConfig?: ModifyUserAlarmConfigRequestAlarmConfig[];
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
  contactConfig?: ModifyUserAlarmConfigRequestContactConfig[];
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
      contactConfig: 'ContactConfig',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      useDefaultContact: 'UseDefaultContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: { 'type': 'array', 'itemType': ModifyUserAlarmConfigRequestAlarmConfig },
      alarmLang: 'string',
      contactConfig: { 'type': 'array', 'itemType': ModifyUserAlarmConfigRequestContactConfig },
      lang: 'string',
      sourceIp: 'string',
      useDefaultContact: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmConfig)) {
      $dara.Model.validateArray(this.alarmConfig);
    }
    if(Array.isArray(this.contactConfig)) {
      $dara.Model.validateArray(this.contactConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

