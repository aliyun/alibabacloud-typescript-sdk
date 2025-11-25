// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserAlarmConfigRequestAlarmConfig extends $dara.Model {
  /**
   * @example
   * 10
   */
  alarmHour?: string;
  /**
   * @example
   * 0
   */
  alarmNotify?: string;
  /**
   * @example
   * 0
   */
  alarmPeriod?: string;
  /**
   * @example
   * bandwidth
   */
  alarmType?: string;
  /**
   * @example
   * on
   */
  alarmValue?: string;
  /**
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
   * @example
   * 91632****@qq.com
   */
  email?: string;
  /**
   * @example
   * 1351234****
   */
  mobilePhone?: string;
  /**
   * @example
   * Ben
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: string;
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
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserAlarmConfigRequestNotifyConfig extends $dara.Model {
  /**
   * @example
   * mail
   */
  notifyType?: string;
  /**
   * @example
   * 1351234****
   */
  notifyValue?: string;
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      notifyValue: 'NotifyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'string',
      notifyValue: 'string',
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
   * This parameter is required.
   */
  alarmConfig?: ModifyUserAlarmConfigRequestAlarmConfig[];
  /**
   * @example
   * zh
   */
  alarmLang?: string;
  contactConfig?: ModifyUserAlarmConfigRequestContactConfig[];
  /**
   * @example
   * zh
   */
  lang?: string;
  notifyConfig?: ModifyUserAlarmConfigRequestNotifyConfig[];
  /**
   * @example
   * 117.129.64.XXX
   */
  sourceIp?: string;
  /**
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
      notifyConfig: 'NotifyConfig',
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
      notifyConfig: { 'type': 'array', 'itemType': ModifyUserAlarmConfigRequestNotifyConfig },
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
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

