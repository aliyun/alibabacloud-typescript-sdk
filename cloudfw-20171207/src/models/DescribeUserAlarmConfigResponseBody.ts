// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAlarmConfigResponseBodyAlarmConfig extends $dara.Model {
  /**
   * @remarks
   * The alarm threshold.
   * 
   * @example
   * 0
   */
  alarmHour?: number;
  /**
   * @remarks
   * The notification method.
   * 
   * @example
   * 1
   */
  alarmNotify?: number;
  /**
   * @remarks
   * The alarm period.
   * 
   * @example
   * 30
   */
  alarmPeriod?: number;
  /**
   * @remarks
   * The alarm type.
   * 
   * @example
   * bandwidth
   */
  alarmType?: string;
  /**
   * @remarks
   * The value that triggers the alarm.
   * 
   * @example
   * 80
   */
  alarmValue?: string;
  /**
   * @remarks
   * The alarm retry count.
   * 
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
   * @remarks
   * The email address.
   * 
   * @example
   * 1530811****@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * zhangsan
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 1531123****
   */
  name?: string;
  /**
   * @remarks
   * The status of the contact. Valid values: **0** (Disabled) and **1** (Enabled).
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

export class DescribeUserAlarmConfigResponseBodyDefaultContact extends $dara.Model {
  /**
   * @remarks
   * The email address of the default contact.
   * 
   * @example
   * 1530811****@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number of the default contact.
   * 
   * @example
   * 1531123****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The name of the default contact.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @remarks
   * The status. Valid values: **normal** (Normal) and **disable** (Disabled).
   * 
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

export class DescribeUserAlarmConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alarm configuration.
   */
  alarmConfig?: DescribeUserAlarmConfigResponseBodyAlarmConfig[];
  /**
   * @remarks
   * The language of the alarm notifications.
   * 
   * @example
   * zh
   */
  alarmLang?: string;
  /**
   * @remarks
   * The contact information.
   */
  contactConfig?: DescribeUserAlarmConfigResponseBodyContactConfig[];
  /**
   * @remarks
   * Information about the default alarm contact.
   */
  defaultContact?: DescribeUserAlarmConfigResponseBodyDefaultContact;
  /**
   * @remarks
   * The request ID.
   * 
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: { 'type': 'array', 'itemType': DescribeUserAlarmConfigResponseBodyAlarmConfig },
      alarmLang: 'string',
      contactConfig: { 'type': 'array', 'itemType': DescribeUserAlarmConfigResponseBodyContactConfig },
      defaultContact: DescribeUserAlarmConfigResponseBodyDefaultContact,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

