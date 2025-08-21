// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleTaskRequestDeviceInfo extends $dara.Model {
  /**
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
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

export class CreateScheduleTaskRequestPayloadActionDTOs extends $dara.Model {
  /**
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
   * @example
   * 26
   */
  day?: number;
  /**
   * @example
   * 12
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 7
   */
  month?: number;
  /**
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
  hours?: number[];
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
  daysOfWeek?: number[];
  hours?: number[];
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
  once?: CreateScheduleTaskRequestPayloadScheduleDTOOnce;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1661589255000
   */
  scheduleEndTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1656318855000
   */
  scheduleStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ONCE
   */
  scheduleType?: string;
  statutoryWorkingDay?: CreateScheduleTaskRequestPayloadScheduleDTOStatutoryWorkingDay;
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
   * This parameter is required.
   */
  actionDTOs?: CreateScheduleTaskRequestPayloadActionDTOs[];
  /**
   * @example
   * 1
   */
  idempotentId?: string;
  /**
   * @remarks
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
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
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

export class CreateScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CreateScheduleTaskRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: CreateScheduleTaskRequestPayload;
  /**
   * @remarks
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

