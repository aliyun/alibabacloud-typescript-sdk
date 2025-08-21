// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlarmRequestDeviceInfo extends $dara.Model {
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

export class UpdateAlarmRequestPayloadMusicInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  musicId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  musicName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  musicType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  musicTypeName?: string;
  /**
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
   * @example
   * 1
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  /**
   * @example
   * 8
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

export class UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay extends $dara.Model {
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
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
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
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
  once?: UpdateAlarmRequestPayloadScheduleInfoOnce;
  statutoryWorkingDay?: UpdateAlarmRequestPayloadScheduleInfoStatutoryWorkingDay;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WEEKLY
   */
  type?: string;
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
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  musicInfo?: UpdateAlarmRequestPayloadMusicInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfo?: UpdateAlarmRequestPayloadScheduleInfo;
  /**
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

export class UpdateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: UpdateAlarmRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: UpdateAlarmRequestPayload;
  /**
   * @remarks
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

