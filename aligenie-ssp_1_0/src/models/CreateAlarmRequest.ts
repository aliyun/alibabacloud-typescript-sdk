// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the Skill ID of the application; when the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identity for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used in the Android application customer link; SKILL_ID: skill ID, used in the cloud link.
   * 
   * This parameter is required.
   * 
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID (deviceOpenId or deviceUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID: OPEN_ID: default device ID; UNION_ID: organization-dimension device ID, available only after applying for an organization on the Maojing Skill Application Open Platform.
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

export class CreateAlarmRequestPayloadMusicInfo extends $dara.Model {
  /**
   * @remarks
   * Ringtone ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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
   * 1
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
   * http://xx
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

export class CreateAlarmRequestPayloadScheduleInfoOnce extends $dara.Model {
  /**
   * @remarks
   * Trigger Time: Day
   * 
   * @example
   * 1
   */
  day?: number;
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
   * Trigger time: Minute
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

export class CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay extends $dara.Model {
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

export class CreateAlarmRequestPayloadScheduleInfoWeekly extends $dara.Model {
  /**
   * @remarks
   * Collection of Days of the Week to Trigger
   */
  daysOfWeek?: number[];
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
   * Trigger Time: Minute
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

export class CreateAlarmRequestPayloadScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * One-time: This property is active when the loop type is ONCE.
   */
  once?: CreateAlarmRequestPayloadScheduleInfoOnce;
  /**
   * @remarks
   * Statutory working day: This property is active when the loop Type is STATUTORY_WORKING_DAY.
   */
  statutoryWorkingDay?: CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay;
  /**
   * @remarks
   * Schedule Type / Loop Type:  
   * ONCE -> One-time, WEEKLY -> Weekly loop, STATUTORY_WORKING_DAY -> Statutory working day
   * 
   * This parameter is required.
   * 
   * @example
   * ONCE
   */
  type?: string;
  /**
   * @remarks
   * Weekly Loop: This property is active when the loop Type is WEEKLY.
   */
  weekly?: CreateAlarmRequestPayloadScheduleInfoWeekly;
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
      once: CreateAlarmRequestPayloadScheduleInfoOnce,
      statutoryWorkingDay: CreateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: CreateAlarmRequestPayloadScheduleInfoWeekly,
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

export class CreateAlarmRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Ringtone information
   * 
   * This parameter is required.
   */
  musicInfo?: CreateAlarmRequestPayloadMusicInfo;
  /**
   * @remarks
   * Schedule information
   * 
   * This parameter is required.
   */
  scheduleInfo?: CreateAlarmRequestPayloadScheduleInfo;
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
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicInfo: CreateAlarmRequestPayloadMusicInfo,
      scheduleInfo: CreateAlarmRequestPayloadScheduleInfo,
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

export class CreateAlarmRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the application\\"s Skill ID. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type. There are multiple ways to obtain the User Identifier for Maojing, and each way corresponds to a different encoding Type: PACKAGE_NAME: APK package name, used for the Android application Customer link; SKILL_ID: Skill ID, used for the cloud link.
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
   * Type of User ID: OPEN_ID: default User ID identifier; UNION_ID: organization-dimension User ID identifier, available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID.
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

export class CreateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: CreateAlarmRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: CreateAlarmRequestPayload;
  /**
   * @remarks
   * User Identifier information
   * 
   * This parameter is required.
   */
  userInfo?: CreateAlarmRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateAlarmRequestDeviceInfo,
      payload: CreateAlarmRequestPayload,
      userInfo: CreateAlarmRequestUserInfo,
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

