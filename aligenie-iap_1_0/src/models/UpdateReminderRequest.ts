// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReminderRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type.
   * 
   * - When the encoding type is set to SKILL_ID, the value is the application\\"s Skill ID.
   * - When the encoding type is set to PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identity for Tmall Genie, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used in the Android application customer flow.  
   * - SKILL_ID: Skill ID, used in the cloud-based flow.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID, set to either deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of the device ID.  
   * - OPEN_ID: Default device ID.  
   * - UNION_ID: Organization-level device ID. This value is available only after an organization has been registered on the Tmall Genie skill application platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required when **IdType** is set to **UNION_ID**.
   * 
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
   * @remarks
   * The date on which the reminder is triggered.
   * 
   * @example
   * 25
   */
  day?: number;
  /**
   * @remarks
   * Configure monthly reminders, specifying on which day(s) of each month the reminder is triggered.
   */
  daysOfMonth?: number[];
  /**
   * @remarks
   * Configure weekly reminders, indicating on which days of the week the reminder is triggered.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * The expiration time when the reminder ends, in milliseconds as a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1635134700000
   */
  endDateTime?: number;
  /**
   * @remarks
   * Recurrence type:
   * 
   * - ONCE: One-time
   * - DAILY: Daily
   * - WEEKLY: Weekly
   * - MONTHLY: Monthly
   * 
   * This parameter is required.
   * 
   * @example
   * ONCE
   */
  freq?: string;
  /**
   * @remarks
   * The hour of the time when the reminder is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @remarks
   * The minute of the time when the reminder is triggered.
   * 
   * @example
   * 3
   */
  minute?: number;
  /**
   * @remarks
   * The month in which the reminder is triggered.
   * 
   * @example
   * 10
   */
  month?: number;
  /**
   * @remarks
   * The second of the time when the reminder is triggered.
   * 
   * @example
   * 3
   */
  second?: number;
  /**
   * @remarks
   * The effective start time of the reminder, in milliseconds as a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1635134400000
   */
  startDateTime?: number;
  /**
   * @remarks
   * The year of the time when the reminder is triggered.
   * 
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
   * The detailed content of the reminder message.
   * 
   * This parameter is required.
   * 
   * @example
   * 更新提醒内容
   */
  content?: string;
  /**
   * @remarks
   * The ID of the reminder to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 20***34
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether this invocation is for debugging.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDebug?: boolean;
  /**
   * @remarks
   * Scheduling information for the reminder.
   * 
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
   * Value corresponding to the encoding type.  
   * 
   * - When the encoding type is set to SKILL_ID, the value is the application\\"s Skill ID.  
   * - When the encoding type is set to PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used in the Android application customer link.  
   * - SKILL_ID: Skill ID, used in the cloud link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier, set to either userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID  
   * - OPEN_ID: The default User ID identifier.  
   * - UNION_ID: The organization-dimension User ID identifier. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required when **IdType** is set to **UNION_ID**.
   * 
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
   * Device identity information.
   * 
   * This parameter is required.
   */
  deviceInfo?: UpdateReminderRequestDeviceInfo;
  /**
   * @remarks
   * The input parameters for this service request.
   * 
   * This parameter is required.
   */
  payload?: UpdateReminderRequestPayload;
  /**
   * @remarks
   * User identifier information.
   * 
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

