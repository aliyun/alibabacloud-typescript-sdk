// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAlarmConfigResponseBodyAlarmConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  alarmHour?: number;
  /**
   * @example
   * 1
   */
  alarmNotify?: number;
  /**
   * @example
   * 30
   */
  alarmPeriod?: number;
  /**
   * @example
   * bandwidth
   */
  alarmType?: string;
  /**
   * @example
   * 80
   */
  alarmValue?: string;
  /**
   * @example
   * 0
   */
  alarmWeekDay?: number;
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
      alarmHour: 'number',
      alarmNotify: 'number',
      alarmPeriod: 'number',
      alarmType: 'string',
      alarmValue: 'string',
      alarmWeekDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAlarmConfigResponseBodyContactConfig extends $dara.Model {
  /**
   * @example
   * 1530811****@qq.com
   */
  email?: string;
  mobilePhone?: string;
  /**
   * @example
   * 1531123****
   */
  name?: string;
  /**
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

export class DescribeUserAlarmConfigResponseBodyDefaultContact extends $dara.Model {
  /**
   * @example
   * 1530811****@qq.com
   */
  email?: string;
  /**
   * @example
   * 1531123****
   */
  mobilePhone?: string;
  name?: string;
  /**
   * @example
   * 0
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

export class DescribeUserAlarmConfigResponseBodyNotifyConfig extends $dara.Model {
  /**
   * @example
   * mail
   */
  notifyType?: string;
  /**
   * @example
   * 0
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

export class DescribeUserAlarmConfigResponseBody extends $dara.Model {
  alarmConfig?: DescribeUserAlarmConfigResponseBodyAlarmConfig[];
  /**
   * @example
   * zh
   */
  alarmLang?: string;
  contactConfig?: DescribeUserAlarmConfigResponseBodyContactConfig[];
  defaultContact?: DescribeUserAlarmConfigResponseBodyDefaultContact;
  notifyConfig?: DescribeUserAlarmConfigResponseBodyNotifyConfig[];
  /**
   * @example
   * 9D250177-4F11-58B8-9AFE-A4624FF1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      alarmLang: 'AlarmLang',
      contactConfig: 'ContactConfig',
      defaultContact: 'DefaultContact',
      notifyConfig: 'NotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: { 'type': 'array', 'itemType': DescribeUserAlarmConfigResponseBodyAlarmConfig },
      alarmLang: 'string',
      contactConfig: { 'type': 'array', 'itemType': DescribeUserAlarmConfigResponseBodyContactConfig },
      defaultContact: DescribeUserAlarmConfigResponseBodyDefaultContact,
      notifyConfig: { 'type': 'array', 'itemType': DescribeUserAlarmConfigResponseBodyNotifyConfig },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmConfig)) {
      $dara.Model.validateArray(this.alarmConfig);
    }
    if(Array.isArray(this.contactConfig)) {
      $dara.Model.validateArray(this.contactConfig);
    }
    if(this.defaultContact && typeof (this.defaultContact as any).validate === 'function') {
      (this.defaultContact as any).validate();
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

