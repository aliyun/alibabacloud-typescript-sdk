// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlarmRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the Skill ID of the application. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device ID for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used in the Android application customer link; SKILL_ID: skill ID, used in the cloud link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * device ID (deviceOpenId or deviceUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID: OPEN_ID: default device ID; UNION_ID: organization-dimension device ID, available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * organization ID; required if IdType is UNION_ID
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

export class UpdateAlarmRequestPayloadMusicInfo extends $dara.Model {
  /**
   * @remarks
   * Ringtone ID
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  musicId?: number;
  /**
   * @remarks
   * Ringtone name
   * 
   * This parameter is required.
   * 
   * @example
   * xx铃声
   */
  musicName?: string;
  /**
   * @remarks
   * Ringtone category ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  musicType?: number;
  /**
   * @remarks
   * Ringtone category name
   * 
   * This parameter is required.
   * 
   * @example
   * xx音乐
   */
  musicTypeName?: string;
  /**
   * @remarks
   * Ringtone URL
   * 
   * @example
   * http://music-url.mp3
   */
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoOnce extends $dara.Model {
  /**
   * @remarks
   * Trigger time: day
   * 
   * @example
   * 1
   */
  day?: number;
  /**
   * @remarks
   * Trigger time: hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: minute
   * 
   * @example
   * 0
   */
  minute?: number;
  /**
   * @remarks
   * Trigger time: Month
   * 
   * @example
   * 8
   */
  month?: number;
  /**
   * @remarks
   * Trigger time: Year
   * 
   * @example
   * 2022
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay extends $dara.Model {
  /**
   * @remarks
   * Trigger Time: Hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger Time: Minute
   * 
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfoWeekly extends $dara.Model {
  /**
   * @remarks
   * Collection of days of the week to trigger: Numeric values between 1 and 7, where each number corresponds to a specific day of the week (1 for Monday, 2 for Tuesday, etc.). To trigger every day, include all values from 1 to 7.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * Trigger Time: Hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: minute
   * 
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayloadScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * One-time: This property is active when the loop type is ONCE.
   */
  once?: UpdateAlarmRequestPayloadScheduleInfoOnce;
  /**
   * @remarks
   * Statutory Working Day: This property is active when the loop Type is STATUTORY_WORKING_DAY.
   */
  statutoryWorkingDay?: UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay;
  /**
   * @remarks
   * Schedule Type / Loop Type:  
   * ONCE -> One-time, WEEKLY -> Weekly loop, STATUTORY_WORKING_DAY -> Statutory working day
   * 
   * This parameter is required.
   * 
   * @example
   * WEEKLY
   */
  type?: string;
  /**
   * @remarks
   * Weekly loop: This property is active when the loop Type is WEEKLY.
   */
  weekly?: UpdateAlarmRequestPayloadScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: UpdateAlarmRequestPayloadScheduleInfoOnce,
      statutoryWorkingDay: UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: UpdateAlarmRequestPayloadScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
    }
    if(this.statutoryWorkingDay && typeof (this.statutoryWorkingDay as any).validate === 'function') {
      (this.statutoryWorkingDay as any).validate();
    }
    if(this.weekly && typeof (this.weekly as any).validate === 'function') {
      (this.weekly as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Alarm ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  /**
   * @remarks
   * Ringtone information
   * 
   * This parameter is required.
   */
  musicInfo?: UpdateAlarmRequestPayloadMusicInfo;
  /**
   * @remarks
   * Schedule information
   * 
   * This parameter is required.
   */
  scheduleInfo?: UpdateAlarmRequestPayloadScheduleInfo;
  /**
   * @remarks
   * Ringtone volume
   * 
   * @example
   * 40
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      musicInfo: UpdateAlarmRequestPayloadMusicInfo,
      scheduleInfo: UpdateAlarmRequestPayloadScheduleInfo,
      volume: 'number',
    };
  }

  validate() {
    if(this.musicInfo && typeof (this.musicInfo as any).validate === 'function') {
      (this.musicInfo as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlarmRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. If the encoding type is SKILL_ID, the value is the application\\"s Skill ID. If the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type: There are multiple ways to obtain the User Identifier for Maojing, and each method corresponds to a different encoding Type:  
   * - PACKAGE_NAME: APK package name, used for the Android application Customer link  
   * - SKILL_ID: Skill ID, used for the cloud link
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of the User ID: - OPEN_ID: default User ID identifier - UNION_ID: organization-dimension User ID identifier, available only after an organization has been requested on the Maojing Skill Application Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
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

export class UpdateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: UpdateAlarmRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: UpdateAlarmRequestPayload;
  /**
   * @remarks
   * User Identifier Information
   * 
   * This parameter is required.
   */
  userInfo?: UpdateAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: UpdateAlarmRequestDeviceInfo,
      payload: UpdateAlarmRequestPayload,
      userInfo: UpdateAlarmRequestUserInfo,
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

