// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleTaskRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the SkillID of the application. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client application.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the device identity for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used for Android application customer linkage; SKILL_ID: skill ID, used for cloud linkage.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID (deviceOpenId or deviceUnionId)
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of device ID: OPEN_ID: default device ID; UNION_ID: organization-level device ID, available only after applying for an organization in the Maojing Skill Application Open Platform.
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

export class CreateScheduleTaskRequestPayloadActionDTOs extends $dara.Model {
  /**
   * @remarks
   * Vendor-defined command
   * 
   * @example
   * {"k1":"v1","k2":{"key":1}}
   */
  customAction?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customAction: 'customAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAction: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.customAction) {
      $dara.Model.validateMap(this.customAction);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTOOnce extends $dara.Model {
  /**
   * @remarks
   * Trigger day
   * 
   * @example
   * 26
   */
  day?: number;
  /**
   * @remarks
   * Trigger Hour
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @remarks
   * Trigger Minute
   * 
   * @example
   * 30
   */
  minute?: number;
  /**
   * @remarks
   * Trigger Month
   * 
   * @example
   * 7
   */
  month?: number;
  /**
   * @remarks
   * Trigger Year
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

export class CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay extends $dara.Model {
  /**
   * @remarks
   * Trigger hour; Multiple Choice
   */
  hours?: number[];
  /**
   * @remarks
   * Trigger minute; Multiple Choice
   */
  minutes?: number[];
  static names(): { [key: string]: string } {
    return {
      hours: 'Hours',
      minutes: 'Minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hours: { 'type': 'array', 'itemType': 'number' },
      minutes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.hours)) {
      $dara.Model.validateArray(this.hours);
    }
    if(Array.isArray(this.minutes)) {
      $dara.Model.validateArray(this.minutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTOWeekly extends $dara.Model {
  /**
   * @remarks
   * Trigger days of the week, where 1–7 represent Monday through Sunday, respectively
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * Trigger hour
   */
  hours?: number[];
  /**
   * @remarks
   * Trigger minute
   */
  minutes?: number[];
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hours: 'Hours',
      minutes: 'Minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hours: { 'type': 'array', 'itemType': 'number' },
      minutes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    if(Array.isArray(this.hours)) {
      $dara.Model.validateArray(this.hours);
    }
    if(Array.isArray(this.minutes)) {
      $dara.Model.validateArray(this.minutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestPayloadScheduleDTO extends $dara.Model {
  /**
   * @remarks
   * One-time Scan Configuration
   */
  once?: CreateScheduleTaskRequestPayloadScheduleDTOOnce;
  /**
   * @remarks
   * Schedule end time
   * 
   * This parameter is required.
   * 
   * @example
   * 1661589255000
   */
  scheduleEndTime?: number;
  /**
   * @remarks
   * Schedule Start Time
   * 
   * This parameter is required.
   * 
   * @example
   * 1656318855000
   */
  scheduleStartTime?: number;
  /**
   * @remarks
   * Schedule Type
   * 
   * This parameter is required.
   * 
   * @example
   * ONCE
   */
  scheduleType?: string;
  /**
   * @remarks
   * Statutory working day schedule configuration
   */
  statutoryWorkingDay?: CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay;
  /**
   * @remarks
   * Loop schedule configuration
   */
  weekly?: CreateScheduleTaskRequestPayloadScheduleDTOWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      scheduleEndTime: 'ScheduleEndTime',
      scheduleStartTime: 'ScheduleStartTime',
      scheduleType: 'ScheduleType',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateScheduleTaskRequestPayloadScheduleDTOOnce,
      scheduleEndTime: 'number',
      scheduleStartTime: 'number',
      scheduleType: 'string',
      statutoryWorkingDay: CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay,
      weekly: CreateScheduleTaskRequestPayloadScheduleDTOWeekly,
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

export class CreateScheduleTaskRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Scheduling action parameters
   * 
   * This parameter is required.
   */
  actionDTOs?: CreateScheduleTaskRequestPayloadActionDTOs[];
  /**
   * @remarks
   * Idempotent ID
   * 
   * @example
   * 1
   */
  idempotentId?: string;
  /**
   * @remarks
   * Scheduling information
   * 
   * This parameter is required.
   */
  scheduleDTO?: CreateScheduleTaskRequestPayloadScheduleDTO;
  static names(): { [key: string]: string } {
    return {
      actionDTOs: 'ActionDTOs',
      idempotentId: 'IdempotentId',
      scheduleDTO: 'ScheduleDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDTOs: { 'type': 'array', 'itemType': CreateScheduleTaskRequestPayloadActionDTOs },
      idempotentId: 'string',
      scheduleDTO: CreateScheduleTaskRequestPayloadScheduleDTO,
    };
  }

  validate() {
    if(Array.isArray(this.actionDTOs)) {
      $dara.Model.validateArray(this.actionDTOs);
    }
    if(this.scheduleDTO && typeof (this.scheduleDTO as any).validate === 'function') {
      (this.scheduleDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTaskRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. When the encoding type is SKILL_ID, the value is the application\\"s SkillID. When the encoding type is PACKAGE_NAME, the value is the packageName of the corresponding client app.
   * 
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type: PACKAGE_NAME: APK package name, used for Android application customer links; SKILL_ID: Skill ID, used for cloud-based links.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID:  
   * - OPEN_ID: The default User ID identity.  
   * - UNION_ID: The User ID identity at the organization dimension. This is available only after an organization has been requested on the Maojing Skill Application Open Platform.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID; Required if IdType is UNION_ID
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

export class CreateScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Device identity information
   * 
   * This parameter is required.
   */
  deviceInfo?: CreateScheduleTaskRequestDeviceInfo;
  /**
   * @remarks
   * Input parameters for the service request
   * 
   * This parameter is required.
   */
  payload?: CreateScheduleTaskRequestPayload;
  /**
   * @remarks
   * User Identifier Information
   * 
   * This parameter is required.
   */
  userInfo?: CreateScheduleTaskRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: CreateScheduleTaskRequestDeviceInfo,
      payload: CreateScheduleTaskRequestPayload,
      userInfo: CreateScheduleTaskRequestUserInfo,
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

