// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReminderRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequestPayloadRecurrenceRule extends $dara.Model {
  /**
   * @example
   * 25
   */
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1635134700000
   */
  endDateTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ONCE
   */
  freq?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @example
   * 3
   */
  minute?: number;
  /**
   * @example
   * 10
   */
  month?: number;
  /**
   * @example
   * 3
   */
  second?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1635134400000
   */
  startDateTime?: number;
  /**
   * @example
   * 2021
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'number',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'number',
      year: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.daysOfMonth)) {
      $dara.Model.validateArray(this.daysOfMonth);
    }
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 更新提醒内容
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20***34
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  recurrenceRule?: UpdateReminderRequestPayloadRecurrenceRule;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      isDebug: 'IsDebug',
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      isDebug: 'boolean',
      recurrenceRule: UpdateReminderRequestPayloadRecurrenceRule,
    };
  }

  validate() {
    if(this.recurrenceRule && typeof (this.recurrenceRule as any).validate === 'function') {
      (this.recurrenceRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReminderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: UpdateReminderRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: UpdateReminderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: UpdateReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UpdateReminderRequestDeviceInfo,
      payload: UpdateReminderRequestPayload,
      userInfo: UpdateReminderRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

