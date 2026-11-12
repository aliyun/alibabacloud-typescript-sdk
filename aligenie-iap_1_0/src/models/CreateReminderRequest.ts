// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReminderRequestDeviceInfo extends $dara.Model {
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
   * Encoding type. There are multiple ways to obtain the device ID for Tmall Genie, and each method corresponds to a different encoding type.  
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
   * Type of the device ID:  
   * - OPEN_ID: Default device ID identifier.  
   * - UNION_ID: Organization-level device ID identifier. This value is available only after an organization has been registered on the Tmall Genie Skill Application Open Platform.
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

export class CreateReminderRequestPayloadRecurrenceRule extends $dara.Model {
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
   * Configure monthly reminders, indicating the day of the month when the reminder is triggered.
   */
  daysOfMonth?: number[];
  /**
   * @remarks
   * Configure weekly reminders, indicating on which days of the week the reminder is triggered.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * The expiration time when the reminder ends, in milliseconds UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1635134700000
   */
  endDateTime?: number;
  /**
   * @remarks
   * Loop type:
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

export class CreateReminderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * The detailed content of the reminder message.
   * 
   * This parameter is required.
   * 
   * @example
   * 提醒内容
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether this invocation is for debug purposes.
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
  recurrenceRule?: CreateReminderRequestPayloadRecurrenceRule;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      isDebug: 'IsDebug',
      recurrenceRule: 'RecurrenceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isDebug: 'boolean',
      recurrenceRule: CreateReminderRequestPayloadRecurrenceRule,
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

export class CreateReminderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type:  
   * - When the encoding type is SKILL_ID, the value is the Skill ID of the application.  
   * - When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Tmall Genie, and each method corresponds to a different encoding type.  
   * - PACKAGE_NAME: APK package name, used in the Android application customer flow  
   * - SKILL_ID: Skill ID, used in the cloud-based flow
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
   * Type of the User ID:  
   * - OPEN_ID: The default User ID identity.  
   * - UNION_ID: The User ID identity at the organization dimension. This value is available only after an organization has been requested on the Tmall Genie Skills Application Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required when **IdType** is configured as **UNION_ID**.
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

export class CreateReminderRequest extends $dara.Model {
  /**
   * @remarks
   * Device identification information.
   * 
   * This parameter is required.
   */
  deviceInfo?: CreateReminderRequestDeviceInfo;
  /**
   * @remarks
   * The input parameters for this service request.
   * 
   * This parameter is required.
   */
  payload?: CreateReminderRequestPayload;
  /**
   * @remarks
   * User identifier information.
   * 
   * This parameter is required.
   */
  userInfo?: CreateReminderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateReminderRequestDeviceInfo,
      payload: CreateReminderRequestPayload,
      userInfo: CreateReminderRequestUserInfo,
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

