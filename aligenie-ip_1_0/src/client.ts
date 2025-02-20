// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddCustomQAV2ResponseBodyResult extends $dara.Model {
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  keyWords?: string;
  /**
   * @example
   * 8xxx9
   */
  lastOperator?: string;
  majorQuestion?: string;
  /**
   * @remarks
   * qaID
   * 
   * @example
   * 1
   */
  qaId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      lastOperator: 'LastOperator',
      majorQuestion: 'MajorQuestion',
      qaId: 'QaId',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      hotelId: 'string',
      keyWords: 'string',
      lastOperator: 'string',
      majorQuestion: 'string',
      qaId: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequestHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * https://a****jpg
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequestNightMode extends $dara.Model {
  defaultBright?: string;
  defaultVolume?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 22:00
   */
  end?: string;
  /**
   * @example
   * screenoff
   */
  standbyAction?: string;
  /**
   * @example
   * 7:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      defaultBright: 'DefaultBright',
      defaultVolume: 'DefaultVolume',
      enable: 'Enable',
      end: 'End',
      standbyAction: 'StandbyAction',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBright: 'string',
      defaultVolume: 'string',
      enable: 'boolean',
      end: 'string',
      standbyAction: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverRequestHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * xxx.png
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelRequestAuditHotelReq extends $dara.Model {
  /**
   * @example
   * 同意
   */
  auditOpinion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      auditOpinion: 'AuditOpinion',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditOpinion: 'string',
      hotelId: 'string',
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

export class ControlRoomDeviceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class CreateHotelAlarmRequestScheduleInfoOnce extends $dara.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 19
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 9
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

export class CreateHotelAlarmRequestScheduleInfoWeekly extends $dara.Model {
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 30
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

export class CreateHotelAlarmRequestScheduleInfo extends $dara.Model {
  once?: CreateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * This parameter is required.
   */
  type?: string;
  weekly?: CreateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: CreateHotelAlarmRequestScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
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

export class CreateHotelAlarmResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 94
   */
  alarmId?: number;
  /**
   * @example
   * Pvk***TA==
   */
  deviceOpenId?: string;
  failMsg?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @example
   * mg***Qd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      failMsg: 'FailMsg',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      failMsg: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneRequestSceneRelationExtDTO extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpusList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmRequestAlarms extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5029
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PvkB***TA==
   */
  deviceOpenId?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgw/k***HQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aircondition
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * open
   */
  cmd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * air_condition
   */
  deviceNumber?: string;
  /**
   * @example
   * {}
   */
  extendInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cmd: 'Cmd',
      deviceNumber: 'DeviceNumber',
      extendInfo: 'ExtendInfo',
      location: 'Location',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cmd: 'string',
      deviceNumber: 'string',
      extendInfo: 'string',
      location: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
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

export class DeviceControlResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetBasicInfoQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @example
   * 11:11
   */
  checkOutTime?: string;
  hotelAddress?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  parkingExpenses?: string;
  parkingPosition?: string;
  /**
   * @example
   * 123***
   */
  phoneNumber?: string;
  wifiName?: string;
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
      hotelIntroduction: 'HotelIntroduction',
      hotelMember: 'HotelMember',
      hotelService: 'HotelService',
      parkingExpenses: 'ParkingExpenses',
      parkingPosition: 'ParkingPosition',
      phoneNumber: 'PhoneNumber',
      wifiName: 'WifiName',
      wifiPassword: 'WifiPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInTime: 'string',
      checkOutTime: 'string',
      hotelAddress: 'string',
      hotelIntroduction: 'string',
      hotelMember: 'string',
      hotelService: 'string',
      parkingExpenses: 'string',
      parkingPosition: 'string',
      phoneNumber: 'string',
      wifiName: 'string',
      wifiPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ai***.mp4
   */
  startVideoMd5?: string;
  /**
   * @example
   * 40c8***97
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceRequestDeviceInfo extends $dara.Model {
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
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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

export class GetHotelContactByGenieDeviceRequestUserInfo extends $dara.Model {
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
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 1***2
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

export class GetHotelContactByGenieDeviceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * 2022-07-21 20:02:12
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 2E57***D45F9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hotelId: 'HotelId',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotelId: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class GetHotelContactByNumberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649316479098
   */
  expireAt?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 2E57***D45F9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      hotelId: 'HotelId',
      icon: 'Icon',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      hotelId: 'string',
      icon: 'string',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class GetHotelContactsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * cf24***96e7
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 0862***A809
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      hotelId: 'HotelId',
      icon: 'Icon',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      hotelId: 'string',
      icon: 'string',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
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

export class GetHotelHomeBackImageAndModesResponseBodyResultModeList extends $dara.Model {
  /**
   * @example
   * 浪漫模式
   */
  cnName?: string;
  /**
   * @example
   * romantic
   */
  code?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/langman.png
   */
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      icon: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhn.jpg
   */
  backgroundImage?: string;
  /**
   * @example
   * 宣雍测试橙蜂酒店
   */
  hotelName?: string;
  modeList?: GetHotelHomeBackImageAndModesResponseBodyResultModeList[];
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      hotelName: 'HotelName',
      modeList: 'ModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      hotelName: 'string',
      modeList: { 'type': 'array', 'itemType': GetHotelHomeBackImageAndModesResponseBodyResultModeList },
    };
  }

  validate() {
    if(Array.isArray(this.modeList)) {
      $dara.Model.validateArray(this.modeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeRequestUserInfo extends $dara.Model {
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
   * 1
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

export class GetHotelNoticeV2RequestUserInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 123
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

export class GetHotelNoticeV2ResponseBodyResult extends $dara.Model {
  content?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      hotelId: 'HotelId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hotelId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20220714150702000168270112410630
   */
  orderNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  applyAmt?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/weixiu/dianqilei/chuanglian.png
   */
  itemUrl?: string;
  /**
   * @example
   * 窗帘
   */
  name?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      itemUrl: 'ItemUrl',
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      itemUrl: 'string',
      name: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1.0.0-release
   */
  firmwareVersion?: string;
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * aa:aa:aa:aa:aa:aa
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * dsfdsfrgreg
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  idType?: string;
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

export class GetHotelSceneItemDetailResponseBodyResultDialogueList extends $dara.Model {
  /**
   * @example
   * 1666164774
   */
  createTime?: number;
  /**
   * @example
   * 336
   */
  dialogueId?: string;
  noAnswer?: string;
  /**
   * @example
   * 4
   */
  noAnswerTemplate?: string;
  /**
   * @example
   * 0
   */
  process?: number;
  question?: string;
  /**
   * @example
   * 10336
   */
  serviceId?: string;
  /**
   * @example
   * 1666164774
   */
  updateTime?: number;
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      updateTime: 'UpdateTime',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
      updateTime: 'number',
      yesAnswer: 'string',
      yesAnswerTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  dialogueList?: GetHotelSceneItemDetailResponseBodyResultDialogueList[];
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/zhijin.png
   */
  icon?: string;
  /**
   * @example
   * 10336
   */
  id?: number;
  /**
   * @example
   * 擦鞋布
   */
  name?: string;
  /**
   * @example
   * 170
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  /**
   * @example
   * 1666168828
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dialogueList: { 'type': 'array', 'itemType': GetHotelSceneItemDetailResponseBodyResultDialogueList },
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
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

export class GetHotelScreenSaverResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/3d4fe6d66ec49d9789635f66627f0339/welcome_audios/976210a6532150f49c2677a8b7dbc105/l6fspbhd.jpg
   */
  picUrl?: string;
  /**
   * @example
   * common-weather
   */
  styleCode?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      styleCode: 'StyleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      styleCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponseBodyResult extends $dara.Model {
  cnName?: string;
  /**
   * @example
   * common-weather
   */
  code?: string;
  /**
   * @example
   * common-weather
   */
  enName?: string;
  /**
   * @example
   * https://img.***.png
   */
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      enName: 'EnName',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      enName: 'string',
      picUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResultHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * https://a***png
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResultNightMode extends $dara.Model {
  /**
   * @remarks
   * 夜间模式下的默认亮度
   */
  defaultBright?: string;
  /**
   * @remarks
   * 夜间模式下的默认音量
   */
  defaultVolume?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 22:00
   */
  end?: string;
  /**
   * @example
   * screenoff
   */
  standbyAction?: string;
  /**
   * @example
   * 07:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      defaultBright: 'DefaultBright',
      defaultVolume: 'DefaultVolume',
      enable: 'Enable',
      end: 'End',
      standbyAction: 'StandbyAction',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBright: 'string',
      defaultVolume: 'string',
      enable: 'boolean',
      end: 'string',
      standbyAction: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  deleteToken?: number;
  /**
   * @example
   * {}
   */
  extInfo?: string;
  hotelDeviceModeList?: string[];
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelScreenSaver?: GetHotelSettingResponseBodyResultHotelScreenSaver;
  nightMode?: GetHotelSettingResponseBodyResultNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deleteToken: 'DeleteToken',
      extInfo: 'ExtInfo',
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
      nightMode: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteToken: 'number',
      extInfo: 'string',
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: GetHotelSettingResponseBodyResultHotelScreenSaver,
      nightMode: GetHotelSettingResponseBodyResultNightMode,
      settingType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelDeviceModeList)) {
      $dara.Model.validateArray(this.hotelDeviceModeList);
    }
    if(this.hotelScreenSaver && typeof (this.hotelScreenSaver as any).validate === 'function') {
      (this.hotelScreenSaver as any).validate();
    }
    if(this.nightMode && typeof (this.nightMode as any).validate === 'function') {
      (this.nightMode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponseBodyResult extends $dara.Model {
  name?: string;
  /**
   * @example
   * jTOSl***l1odxImRw
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 4325***765
   */
  organizationId?: string;
  /**
   * @example
   * 8bh2****8s8
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponseBodyResult extends $dara.Model {
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBodyResultOpenDeviceInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
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

export class HotelQrBindResponseBodyResultOpenUserInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @example
   * xxxxxx
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * aaaaaaaa
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

export class HotelQrBindResponseBodyResult extends $dara.Model {
  openDeviceInfo?: HotelQrBindResponseBodyResultOpenDeviceInfo;
  openUserInfo?: HotelQrBindResponseBodyResultOpenUserInfo;
  static names(): { [key: string]: string } {
    return {
      openDeviceInfo: 'OpenDeviceInfo',
      openUserInfo: 'OpenUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openDeviceInfo: HotelQrBindResponseBodyResultOpenDeviceInfo,
      openUserInfo: HotelQrBindResponseBodyResultOpenUserInfo,
    };
  }

  validate() {
    if(this.openDeviceInfo && typeof (this.openDeviceInfo as any).validate === 'function') {
      (this.openDeviceInfo as any).validate();
    }
    if(this.openUserInfo && typeof (this.openUserInfo as any).validate === 'function') {
      (this.openUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequestImportHotelConfigRcuCustomScenes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpusList?: string[];
  description?: string;
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequestImportHotelConfig extends $dara.Model {
  rcuCustomScenes?: ImportHotelConfigRequestImportHotelConfigRcuCustomScenes[];
  static names(): { [key: string]: string } {
    return {
      rcuCustomScenes: 'RcuCustomScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcuCustomScenes: { 'type': 'array', 'itemType': ImportHotelConfigRequestImportHotelConfigRcuCustomScenes },
    };
  }

  validate() {
    if(Array.isArray(this.rcuCustomScenes)) {
      $dara.Model.validateArray(this.rcuCustomScenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      location: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExtSwitchList },
    };
  }

  validate() {
    if(Array.isArray(this.switchList)) {
      $dara.Model.validateArray(this.switchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevicesDevices extends $dara.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  connectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceName?: string;
  dn?: string;
  infraredId?: string;
  infraredIndex?: string;
  infraredVersion?: string;
  multiKeySwitchExt?: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  pk?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
      dn: 'Dn',
      infraredId: 'InfraredId',
      infraredIndex: 'InfraredIndex',
      infraredVersion: 'InfraredVersion',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      pk: 'Pk',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: ImportRoomControlDevicesRequestLocationDevicesDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.multiKeySwitchExt && typeof (this.multiKeySwitchExt as any).validate === 'function') {
      (this.multiKeySwitchExt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequestLocationDevices extends $dara.Model {
  devices?: ImportRoomControlDevicesRequestLocationDevicesDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevicesDevices },
      location: 'string',
      locationName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActionsAttributeValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * powerstate
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActionsDevice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 0
   */
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3c5d2ab8f9ec
   */
  deviceNumber?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActions extends $dara.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListActionsAttributeValues[];
  device?: ImportRoomGenieScenesRequestSceneListActionsDevice;
  reply?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      device: 'Device',
      reply: 'Reply',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActionsAttributeValues },
      device: ImportRoomGenieScenesRequestSceneListActionsDevice,
      reply: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeValues)) {
      $dara.Model.validateArray(this.attributeValues);
    }
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersAttributeValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersDevice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  deviceIndex?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceNumber?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'string',
      deviceNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggers extends $dara.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListTriggersAttributeValues[];
  corpusList?: string[];
  device?: ImportRoomGenieScenesRequestSceneListTriggersDevice;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      corpusList: 'CorpusList',
      device: 'Device',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggersAttributeValues },
      corpusList: { 'type': 'array', 'itemType': 'string' },
      device: ImportRoomGenieScenesRequestSceneListTriggersDevice,
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeValues)) {
      $dara.Model.validateArray(this.attributeValues);
    }
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actions?: ImportRoomGenieScenesRequestSceneListActions[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  display?: boolean;
  /**
   * @example
   * http://xxx.com/yyy.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  triggerLogical?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  triggers?: ImportRoomGenieScenesRequestSceneListTriggers[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      description: 'Description',
      display: 'Display',
      icon: 'Icon',
      sceneName: 'SceneName',
      triggerLogical: 'TriggerLogical',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActions },
      description: 'string',
      display: 'boolean',
      icon: 'string',
      sceneName: 'string',
      triggerLogical: 'number',
      triggers: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemRequestAddHotelSceneItemReq extends $dara.Model {
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1250
   */
  price?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      name: 'Name',
      price: 'Price',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      name: 'string',
      price: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQARequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 21
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 22;11
   */
  answers?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  createTime?: string;
  /**
   * @example
   * 111
   */
  customQAId?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * 22;11
   */
  keyWords?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 22;11
   */
  supplementaryQuestion?: string;
  /**
   * @example
   * 2023-01-10 10:01:59
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      createTime: 'CreateTime',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      status: 'Status',
      supplementaryQuestion: 'SupplementaryQuestion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      createTime: 'string',
      customQAId: 'string',
      hotelId: 'string',
      keyWords: 'string',
      majorQuestion: 'string',
      status: 'number',
      supplementaryQuestion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate extends $dara.Model {
  /**
   * @example
   * ${goodsName}${price}元，请问需要服务员送来吗？
   */
  nonzeroPriceYesAnswer?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品。
   */
  zeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来。
   */
  zeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
      zeroPriceNoAnswer: 'ZeroPriceNoAnswer',
      zeroPriceYesAnswer: 'ZeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceYesAnswer: 'string',
      zeroPriceNoAnswer: 'string',
      zeroPriceYesAnswer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate extends $dara.Model {
  /**
   * @example
   * 好的，已取消。
   */
  nonzeroPriceNoAnswer?: string;
  /**
   * @example
   * 好的，服务员会尽快送来${goodsName}
   */
  nonzeroPriceYesAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      nonzeroPriceNoAnswer: 'NonzeroPriceNoAnswer',
      nonzeroPriceYesAnswer: 'NonzeroPriceYesAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonzeroPriceNoAnswer: 'string',
      nonzeroPriceYesAnswer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResultTemplateDetail extends $dara.Model {
  firstDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate;
  secondDialogueTemplate?: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate;
  static names(): { [key: string]: string } {
    return {
      firstDialogueTemplate: 'FirstDialogueTemplate',
      secondDialogueTemplate: 'SecondDialogueTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailFirstDialogueTemplate,
      secondDialogueTemplate: ListDialogueTemplateResponseBodyResultTemplateDetailSecondDialogueTemplate,
    };
  }

  validate() {
    if(this.firstDialogueTemplate && typeof (this.firstDialogueTemplate as any).validate === 'function') {
      (this.firstDialogueTemplate as any).validate();
    }
    if(this.secondDialogueTemplate && typeof (this.secondDialogueTemplate as any).validate === 'function') {
      (this.secondDialogueTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBodyResult extends $dara.Model {
  templateDetail?: ListDialogueTemplateResponseBodyResultTemplateDetail;
  /**
   * @example
   * 4
   */
  templateId?: number;
  /**
   * @example
   * 物品多轮模板
   */
  templateName?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: ListDialogueTemplateResponseBodyResultTemplateDetail,
      templateId: 'number',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.templateDetail && typeof (this.templateDetail as any).validate === 'function') {
      (this.templateDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBodyResultScheduleInfoOnce extends $dara.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 9
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

export class ListHotelAlarmResponseBodyResultScheduleInfoWeekly extends $dara.Model {
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

export class ListHotelAlarmResponseBodyResultScheduleInfo extends $dara.Model {
  once?: ListHotelAlarmResponseBodyResultScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: ListHotelAlarmResponseBodyResultScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: ListHotelAlarmResponseBodyResultScheduleInfoOnce,
      type: 'string',
      weekly: ListHotelAlarmResponseBodyResultScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
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

export class ListHotelAlarmResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 5039
   */
  alarmId?: number;
  /**
   * @example
   * PvkB****VVTA==
   */
  deviceOpenId?: string;
  scheduleInfo?: ListHotelAlarmResponseBodyResultScheduleInfo;
  /**
   * @example
   * mgw/k***HQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      scheduleInfo: 'ScheduleInfo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      scheduleInfo: ListHotelAlarmResponseBodyResultScheduleInfo,
      userOpenId: 'string',
    };
  }

  validate() {
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  idType?: string;
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

export class ListHotelInfoResponseBodyResultAuthAccount extends $dara.Model {
  /**
   * @example
   * leetest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBodyResult extends $dara.Model {
  authAccount?: ListHotelInfoResponseBodyResultAuthAccount[];
  hotelAddress?: string;
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  hotelName?: string;
  static names(): { [key: string]: string } {
    return {
      authAccount: 'AuthAccount',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccount: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResultAuthAccount },
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authAccount)) {
      $dara.Model.validateArray(this.authAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 不通过
   */
  auditMark?: string;
  /**
   * @example
   * COMMIT
   */
  auditStatus?: string;
  /**
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditMark: 'AuditMark',
      auditStatus: 'AuditStatus',
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMark: 'string',
      auditStatus: 'string',
      templateDetail: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestPayloadPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelOrderRequestPayloadPage;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelOrderRequestPayloadPage,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
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

export class ListHotelOrderResponseBodyPage extends $dara.Model {
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 21
   */
  total?: number;
  /**
   * @example
   * 7
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 21.5
   */
  applyAmt?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  /**
   * @example
   * 20220808180132000114508555527711
   */
  orderNo?: string;
  /**
   * @example
   * 12
   */
  quantity?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * REPAIR
   */
  type?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/shebeiweixiu.png
   */
  typeIconUrl?: string;
  /**
   * @example
   * 设备维修
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      orderNo: 'OrderNo',
      quantity: 'Quantity',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
      typeIconUrl: 'TypeIconUrl',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      orderNo: 'string',
      quantity: 'number',
      roomNo: 'string',
      status: 'string',
      type: 'string',
      typeIconUrl: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsRequestHotelAdminRoom extends $dara.Model {
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @example
   * 102
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBodyResultPage extends $dara.Model {
  /**
   * @example
   * True
   */
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBodyResultSceneItemList extends $dara.Model {
  /**
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 11824
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @example
   * 1850
   */
  price?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * FOOD
   */
  type?: string;
  /**
   * @example
   * 1666161803
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBodyResult extends $dara.Model {
  page?: ListHotelSceneBookItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneBookItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneBookItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneBookItemsResponseBodyResultSceneItemList },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.sceneItemList)) {
      $dara.Model.validateArray(this.sceneItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
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

export class ListHotelSceneItemResponseBodyPage extends $dara.Model {
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12
   */
  total?: number;
  /**
   * @example
   * 6
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryListItemList extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @example
   * 152860
   */
  id?: string;
  /**
   * @example
   * 棉签
   */
  name?: string;
  /**
   * @example
   * 1
   */
  price?: number;
  residueLimit?: number;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
      residueLimit: 'ResidueLimit',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      icon: 'string',
      id: 'string',
      name: 'string',
      price: 'number',
      residueLimit: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResultSecondCategoryList extends $dara.Model {
  itemList?: ListHotelSceneItemResponseBodyResultSecondCategoryListItemList[];
  /**
   * @example
   * 客用品类
   */
  secondCategoryName?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      secondCategoryName: 'SecondCategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryListItemList },
      secondCategoryName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBodyResult extends $dara.Model {
  secondCategoryList?: ListHotelSceneItemResponseBodyResultSecondCategoryList[];
  static names(): { [key: string]: string } {
    return {
      secondCategoryList: 'SecondCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondCategoryList: { 'type': 'array', 'itemType': ListHotelSceneItemResponseBodyResultSecondCategoryList },
    };
  }

  validate() {
    if(Array.isArray(this.secondCategoryList)) {
      $dara.Model.validateArray(this.secondCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequestListHotelSceneReqPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequestListHotelSceneReq extends $dara.Model {
  /**
   * @example
   * 客用品类
   */
  category?: string;
  /**
   * @example
   * 棉签
   */
  keywords?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelSceneItemsRequestListHotelSceneReqPage;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keywords: 'Keywords',
      page: 'Page',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keywords: 'string',
      page: ListHotelSceneItemsRequestListHotelSceneReqPage,
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResultPage extends $dara.Model {
  /**
   * @example
   * False
   */
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResultSceneItemList extends $dara.Model {
  beyondLimitReply?: string;
  /**
   * @example
   * 客用品类
   */
  category?: string;
  deliveryMethod?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 10336
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  /**
   * @example
   * 棉签
   */
  name?: string;
  paymentMethod?: string;
  /**
   * @example
   * 160
   */
  price?: number;
  robotName?: string;
  /**
   * @example
   * 已添加
   */
  status?: string;
  /**
   * @example
   * GOODS
   */
  type?: string;
  /**
   * @example
   * 1666163226
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      category: 'Category',
      deliveryMethod: 'DeliveryMethod',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      category: 'string',
      deliveryMethod: 'string',
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBodyResult extends $dara.Model {
  page?: ListHotelSceneItemsResponseBodyResultPage;
  sceneItemList?: ListHotelSceneItemsResponseBodyResultSceneItemList[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      sceneItemList: 'SceneItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListHotelSceneItemsResponseBodyResultPage,
      sceneItemList: { 'type': 'array', 'itemType': ListHotelSceneItemsResponseBodyResultSceneItemList },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.sceneItemList)) {
      $dara.Model.validateArray(this.sceneItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * GOODS
   */
  code?: string;
  /**
   * @example
   * 生活及洗漱用品
   */
  desc?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingfenlei/wupintianjia.png
   */
  icon?: string;
  /**
   * @example
   * 物品添加
   */
  name?: string;
  /**
   * @example
   * HOTEL_SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      icon: 'Icon',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      icon: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequestHotelRequest extends $dara.Model {
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResultHotelInfoList extends $dara.Model {
  accountNames?: string[];
  /**
   * @example
   * 1654568802000
   */
  createTime?: number;
  /**
   * @example
   * 酒店地址
   */
  hotelAddress?: string;
  /**
   * @example
   * 73ab1b03018d4da69b5bef17095f569b
   */
  hotelId?: string;
  /**
   * @example
   * 酒店名称
   */
  hotelName?: string;
  /**
   * @example
   * 酒店
   */
  industryType?: string;
  /**
   * @example
   * 13312340987
   */
  phoneNumber?: string;
  /**
   * @example
   * 测试产品
   */
  relatedProductName?: string;
  /**
   * @example
   * 12
   */
  roomNum?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      createTime: 'CreateTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      industryType: 'IndustryType',
      phoneNumber: 'PhoneNumber',
      relatedProductName: 'RelatedProductName',
      roomNum: 'RoomNum',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
      industryType: 'string',
      phoneNumber: 'string',
      relatedProductName: 'string',
      roomNum: 'number',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountNames)) {
      $dara.Model.validateArray(this.accountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResultPage extends $dara.Model {
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 23
   */
  total?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponseBodyResult extends $dara.Model {
  hotelInfoList?: ListHotelsResponseBodyResultHotelInfoList[];
  page?: ListHotelsResponseBodyResultPage;
  static names(): { [key: string]: string } {
    return {
      hotelInfoList: 'HotelInfoList',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfoList: { 'type': 'array', 'itemType': ListHotelsResponseBodyResultHotelInfoList },
      page: ListHotelsResponseBodyResultPage,
    };
  }

  validate() {
    if(Array.isArray(this.hotelInfoList)) {
      $dara.Model.validateArray(this.hotelInfoList);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * 3747
   */
  rid?: number;
  /**
   * @example
   * 4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      rid: 'Rid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      rid: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQARequestPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @example
   * ***
   */
  answer?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
  question?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      answer: 'Answer',
      gmtModified: 'GmtModified',
      question: 'Question',
      serviceQAId: 'ServiceQAId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      answer: 'string',
      gmtModified: 'string',
      question: 'string',
      serviceQAId: 'number',
      templates: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequestPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResultDialogs extends $dara.Model {
  answer?: string;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  action?: boolean;
  /**
   * @example
   * ***
   */
  assignedHandler?: string;
  /**
   * @example
   * ***
   */
  chargesRemark?: string;
  /**
   * @example
   * ***
   */
  completeRemark?: string;
  dialogs?: ListTicketsResponseBodyResultDialogs[];
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCalled?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtDelayed?: string;
  /**
   * @example
   * 2023-01-09 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @example
   * 45
   */
  id?: number;
  /**
   * @example
   * false
   */
  isAcceptedCharges?: boolean;
  /**
   * @example
   * true
   */
  isDelayed?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  operations?: { [key: string]: any }[];
  /**
   * @example
   * ***
   */
  remark?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      assignedHandler: 'AssignedHandler',
      chargesRemark: 'ChargesRemark',
      completeRemark: 'CompleteRemark',
      dialogs: 'Dialogs',
      gmtCalled: 'GmtCalled',
      gmtCreate: 'GmtCreate',
      gmtDelayed: 'GmtDelayed',
      gmtModified: 'GmtModified',
      groupKey: 'GroupKey',
      id: 'Id',
      isAcceptedCharges: 'IsAcceptedCharges',
      isDelayed: 'IsDelayed',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      operations: 'Operations',
      remark: 'Remark',
      roomNo: 'RoomNo',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'boolean',
      assignedHandler: 'string',
      chargesRemark: 'string',
      completeRemark: 'string',
      dialogs: { 'type': 'array', 'itemType': ListTicketsResponseBodyResultDialogs },
      gmtCalled: 'string',
      gmtCreate: 'string',
      gmtDelayed: 'string',
      gmtModified: 'string',
      groupKey: 'string',
      id: 'number',
      isAcceptedCharges: 'boolean',
      isDelayed: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      operations: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      remark: 'string',
      roomNo: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogs)) {
      $dara.Model.validateArray(this.dialogs);
    }
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 4
   */
  end?: number;
  /**
   * @example
   * False
   */
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * V21.10.00.313
   */
  firmwareVersion?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * b4:xx:xx:xx:65:2b
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  /**
   * @example
   * 1200xxx048
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageRequestPushHotelMessageReq extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  paramMap?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      paramMap: 'ParamMap',
      roomNo: 'RoomNo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      paramMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
      templateId: 'number',
    };
  }

  validate() {
    if(this.paramMap) {
      $dara.Model.validateMap(this.paramMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsRequestCommands extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commandName?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      commandDomain: 'CommandDomain',
      commandName: 'CommandName',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDomain: 'string',
      commandName: 'string',
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayloadLocationDevices extends $dara.Model {
  /**
   * @example
   * night_light
   */
  deviceNumber?: string;
  /**
   * @example
   * light
   */
  deviceType?: string;
  /**
   * @example
   * room
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      deviceType: 'DeviceType',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      deviceType: 'string',
      location: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestPayload extends $dara.Model {
  locationDevices?: QueryDeviceStatusRequestPayloadLocationDevices[];
  properties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      locationDevices: 'LocationDevices',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDevices: { 'type': 'array', 'itemType': QueryDeviceStatusRequestPayloadLocationDevices },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationDevices)) {
      $dara.Model.validateArray(this.locationDevices);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class QueryHotelRoomDetailResponseBodyResultAuthAccounts extends $dara.Model {
  accountName?: string;
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  authTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      authTime: 'AuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      authTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultDeviceInfos extends $dara.Model {
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  activeTime?: string;
  deviceName?: string;
  /**
   * @example
   * 6.1.8-RS-20230425.1806
   */
  firmwareVersion?: string;
  /**
   * @example
   * fa:03:23:58:c3:00
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * sag42dlz4qf
   */
  sn?: string;
  /**
   * @example
   * 41c95c18a0a643bcb58edf438877def5
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      deviceName: 'DeviceName',
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      deviceName: 'string',
      firmwareVersion: 'string',
      mac: 'string',
      onlineStatus: 'number',
      sn: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultOtherService extends $dara.Model {
  /**
   * @example
   * false
   */
  openCall?: boolean;
  /**
   * @example
   * 0
   */
  unhandleTickets?: number;
  static names(): { [key: string]: string } {
    return {
      openCall: 'OpenCall',
      unhandleTickets: 'UnhandleTickets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openCall: 'boolean',
      unhandleTickets: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos extends $dara.Model {
  /**
   * @example
   * light
   */
  categoryEnName?: string;
  /**
   * @example
   * 3
   */
  categoryId?: number;
  categoryName?: string;
  /**
   * @example
   * rcu
   */
  deviceConnectType?: string;
  /**
   * @example
   * 4
   */
  deviceCount?: number;
  /**
   * @example
   * readLight
   */
  deviceId?: string;
  deviceName?: string;
  /**
   * @example
   * room
   */
  locationEnName?: string;
  /**
   * @example
   * 1
   */
  locationId?: number;
  locationName?: string;
  /**
   * @example
   * a1ueWGP6W2L
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      categoryEnName: 'CategoryEnName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      deviceConnectType: 'DeviceConnectType',
      deviceCount: 'DeviceCount',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      locationEnName: 'LocationEnName',
      locationId: 'LocationId',
      locationName: 'LocationName',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryEnName: 'string',
      categoryId: 'number',
      categoryName: 'string',
      deviceConnectType: 'string',
      deviceCount: 'number',
      deviceId: 'string',
      deviceName: 'string',
      locationEnName: 'string',
      locationId: 'number',
      locationName: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfo extends $dara.Model {
  /**
   * @example
   * 78
   */
  appId?: number;
  /**
   * @example
   * app
   */
  appName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos[];
  /**
   * @example
   * http://www.xxx.com
   */
  rcuUrl?: string;
  /**
   * @example
   * 1170
   */
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      deviceInfos: 'DeviceInfos',
      rcuUrl: 'RcuUrl',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos },
      rcuUrl: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomServiceInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bookServiceCnt?: number;
  /**
   * @example
   * 10
   */
  goodsServiceCnt?: number;
  /**
   * @example
   * 10
   */
  repairServiceCnt?: number;
  /**
   * @example
   * 12
   */
  roomServiceCnt?: number;
  static names(): { [key: string]: string } {
    return {
      bookServiceCnt: 'BookServiceCnt',
      goodsServiceCnt: 'GoodsServiceCnt',
      repairServiceCnt: 'RepairServiceCnt',
      roomServiceCnt: 'RoomServiceCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookServiceCnt: 'number',
      goodsServiceCnt: 'number',
      repairServiceCnt: 'number',
      roomServiceCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResult extends $dara.Model {
  authAccounts?: QueryHotelRoomDetailResponseBodyResultAuthAccounts[];
  /**
   * @example
   * rcu
   */
  connectType?: string;
  creatorAccountName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultDeviceInfos[];
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  hotelName?: string;
  otherService?: QueryHotelRoomDetailResponseBodyResultOtherService;
  roomControlInfo?: QueryHotelRoomDetailResponseBodyResultRoomControlInfo;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  roomServiceInfo?: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo;
  static names(): { [key: string]: string } {
    return {
      authAccounts: 'AuthAccounts',
      connectType: 'ConnectType',
      creatorAccountName: 'CreatorAccountName',
      deviceInfos: 'DeviceInfos',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      otherService: 'OtherService',
      roomControlInfo: 'RoomControlInfo',
      roomNo: 'RoomNo',
      roomServiceInfo: 'RoomServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccounts: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultAuthAccounts },
      connectType: 'string',
      creatorAccountName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultDeviceInfos },
      hotelId: 'string',
      hotelName: 'string',
      otherService: QueryHotelRoomDetailResponseBodyResultOtherService,
      roomControlInfo: QueryHotelRoomDetailResponseBodyResultRoomControlInfo,
      roomNo: 'string',
      roomServiceInfo: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo,
    };
  }

  validate() {
    if(Array.isArray(this.authAccounts)) {
      $dara.Model.validateArray(this.authAccounts);
    }
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    if(this.otherService && typeof (this.otherService as any).validate === 'function') {
      (this.otherService as any).validate();
    }
    if(this.roomControlInfo && typeof (this.roomControlInfo as any).validate === 'function') {
      (this.roomControlInfo as any).validate();
    }
    if(this.roomServiceInfo && typeof (this.roomServiceInfo as any).validate === 'function') {
      (this.roomServiceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  category?: string;
  deviceIndex?: number;
  deviceName?: string;
  deviceStatus?: string;
  elementCode?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      deviceStatus: 'string',
      elementCode: 'string',
      location: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
    };
  }

  validate() {
    if(Array.isArray(this.switchList)) {
      $dara.Model.validateArray(this.switchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResultDevices extends $dara.Model {
  aliasList?: string[];
  connectType?: string;
  DN?: string;
  deviceName?: string;
  deviceStatus?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt;
  /**
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      connectType: 'ConnectType',
      DN: 'DN',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      connectType: 'string',
      DN: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      PK: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.multiKeySwitchExt && typeof (this.multiKeySwitchExt as any).validate === 'function') {
      (this.multiKeySwitchExt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBodyResult extends $dara.Model {
  devices?: QueryRoomControlDevicesResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList extends $dara.Model {
  aliasList?: string[];
  /**
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 1
   */
  deviceIndex?: number;
  deviceName?: string;
  /**
   * @example
   * {
   *       "powerstate": "0"
   * }
   */
  deviceStatus?: string;
  /**
   * @example
   * e2
   */
  elementCode?: string;
  /**
   * @example
   * room
   */
  location?: string;
  status?: { [key: string]: string };
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      elementCode: 'ElementCode',
      location: 'Location',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deviceIndex: 'number',
      deviceName: 'string',
      deviceStatus: 'string',
      elementCode: 'string',
      location: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.status) {
      $dara.Model.validateMap(this.status);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt extends $dara.Model {
  switchList?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList[];
  static names(): { [key: string]: string } {
    return {
      switchList: 'SwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchList: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExtSwitchList },
    };
  }

  validate() {
    if(Array.isArray(this.switchList)) {
      $dara.Model.validateArray(this.switchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResultDevices extends $dara.Model {
  aliasList?: string[];
  brand?: string;
  city?: string;
  /**
   * @example
   * rcu
   */
  connectType?: string;
  deviceName?: string;
  /**
   * @example
   * {"powerstate": "1"}
   */
  deviceStatus?: string;
  /**
   * @example
   * 3c5d***9ec
   */
  dn?: string;
  /**
   * @example
   * 9**7
   */
  infraredId?: string;
  /**
   * @example
   * 2
   */
  infraredIndex?: string;
  /**
   * @example
   * 3.0
   */
  infraredVersion?: string;
  multiKeySwitchExt?: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt;
  /**
   * @example
   * light
   */
  name?: string;
  /**
   * @example
   * night_light
   */
  number?: string;
  /**
   * @example
   * 50255129
   */
  pk?: string;
  province?: string;
  serviceProvider?: string;
  status?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      aliasList: 'AliasList',
      brand: 'Brand',
      city: 'City',
      connectType: 'ConnectType',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      dn: 'Dn',
      infraredId: 'InfraredId',
      infraredIndex: 'InfraredIndex',
      infraredVersion: 'InfraredVersion',
      multiKeySwitchExt: 'MultiKeySwitchExt',
      name: 'Name',
      number: 'Number',
      pk: 'Pk',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasList: { 'type': 'array', 'itemType': 'string' },
      brand: 'string',
      city: 'string',
      connectType: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      dn: 'string',
      infraredId: 'string',
      infraredIndex: 'string',
      infraredVersion: 'string',
      multiKeySwitchExt: QueryRoomControlDevicesAndStatusResponseBodyResultDevicesMultiKeySwitchExt,
      name: 'string',
      number: 'string',
      pk: 'string',
      province: 'string',
      serviceProvider: 'string',
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aliasList)) {
      $dara.Model.validateArray(this.aliasList);
    }
    if(this.multiKeySwitchExt && typeof (this.multiKeySwitchExt as any).validate === 'function') {
      (this.multiKeySwitchExt as any).validate();
    }
    if(this.status) {
      $dara.Model.validateMap(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBodyResult extends $dara.Model {
  devices?: QueryRoomControlDevicesAndStatusResponseBodyResultDevices[];
  /**
   * @example
   * room
   */
  location?: string;
  locationName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      location: 'Location',
      locationName: 'LocationName',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResultDevices },
      location: 'string',
      locationName: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResultSceneList extends $dara.Model {
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResultStatusList extends $dara.Model {
  statusName?: string;
  statusValue?: string;
  /**
   * @example
   * Thu Jan 09 13:56:51 CST 2025
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      statusName: 'StatusName',
      statusValue: 'StatusValue',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusName: 'string',
      statusValue: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResult extends $dara.Model {
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: QueryRoomStatusResponseBodyResultSceneList[];
  statusList?: QueryRoomStatusResponseBodyResultStatusList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultSceneList },
      statusList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBodyResultsTemplateInfoDTOList extends $dara.Model {
  description?: string;
  /**
   * @example
   * 6962
   */
  id?: number;
  /**
   * @example
   * 101
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBodyResults extends $dara.Model {
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  /**
   * @example
   * 73
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * external
   */
  sceneSource?: string;
  /**
   * @example
   * 1
   */
  sceneState?: number;
  /**
   * @example
   * common
   */
  sceneType?: string;
  templateInfoDTOList?: QuerySceneListResponseBodyResultsTemplateInfoDTOList[];
  unavailableReason?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      sceneSource: 'SceneSource',
      sceneState: 'SceneState',
      sceneType: 'SceneType',
      templateInfoDTOList: 'TemplateInfoDTOList',
      unavailableReason: 'UnavailableReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      sceneId: 'string',
      sceneName: 'string',
      sceneSource: 'string',
      sceneState: 'number',
      sceneType: 'string',
      templateInfoDTOList: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResultsTemplateInfoDTOList },
      unavailableReason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateInfoDTOList)) {
      $dara.Model.validateArray(this.templateInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class RoomCheckOutRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rV/XSgPuxZjx/hN3iw8U+e8ou***lk1r43LWcVW6fvY1Rr4sEPFodpnA==
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
   * 123
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

export class SubmitHotelOrderRequestPayloadItemList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 152860
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  itemList?: SubmitHotelOrderRequestPayloadItemList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GOODS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': SubmitHotelOrderRequestPayloadItemList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1248494721591392955
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mFU6VtVU+pgA8lx6rYMo7SPl11t+8b+8ALrn10MIPEdpK/HI9wELAEppYhPI1cYRDa4og8AMjAEBZKbLUwFjFA==
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

export class UpdateHotelAlarmRequestAlarms extends $dara.Model {
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
   * 
   * @example
   * Pvk***VTA==
   */
  deviceOpenId?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgw/***dHQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestScheduleInfoOnce extends $dara.Model {
  /**
   * @example
   * 20
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
   * 9
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

export class UpdateHotelAlarmRequestScheduleInfoWeekly extends $dara.Model {
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

export class UpdateHotelAlarmRequestScheduleInfo extends $dara.Model {
  once?: UpdateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: UpdateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: UpdateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: UpdateHotelAlarmRequestScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
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

export class UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq extends $dara.Model {
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabs.alibabausercontent.com/platform/28d7a91e3c05db3855725fc39e0387e7/welcome_audios/aa918294b6ca3aa115c51135bf9b80cb/l9f996sq.png
   */
  icon?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 青椒肉丝
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1250
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      id: 'number',
      name: 'string',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isUseTemplateAnswer?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      isUseTemplateAnswer: 'IsUseTemplateAnswer',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isUseTemplateAnswer: 'boolean',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList extends $dara.Model {
  /**
   * @example
   * 335
   */
  dialogueId?: string;
  /**
   * @example
   * 对不起，暂时不提供此物品
   */
  noAnswer?: string;
  /**
   * @example
   * 4
   */
  noAnswerTemplate?: string;
  /**
   * @example
   * 0
   */
  process?: number;
  question?: string;
  /**
   * @remarks
   * itemId
   * 
   * @example
   * 10337
   */
  serviceId?: string;
  /**
   * @example
   * 纸巾1.5元，请问需要么？
   */
  yesAnswer?: string;
  /**
   * @example
   * 4
   */
  yesAnswerTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueId: 'DialogueId',
      noAnswer: 'NoAnswer',
      noAnswerTemplate: 'NoAnswerTemplate',
      process: 'Process',
      question: 'Question',
      serviceId: 'ServiceId',
      yesAnswer: 'YesAnswer',
      yesAnswerTemplate: 'YesAnswerTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueId: 'string',
      noAnswer: 'string',
      noAnswerTemplate: 'string',
      process: 'number',
      question: 'string',
      serviceId: 'string',
      yesAnswer: 'string',
      yesAnswerTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequestUpdateHotelSceneReq extends $dara.Model {
  beyondLimitReply?: string;
  deliveryMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueList?: UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList[];
  /**
   * @remarks
   * icon
   * 
   * This parameter is required.
   * 
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/wupin/keyongpinlei/mianqian.png
   */
  icon?: string;
  /**
   * @remarks
   * itemID
   * 
   * @example
   * 10337
   */
  id?: number;
  limitNumber?: number;
  limitSwitch?: number;
  name?: string;
  paymentMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 165
   */
  price?: number;
  robotName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 已添加
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beyondLimitReply: 'BeyondLimitReply',
      deliveryMethod: 'DeliveryMethod',
      dialogueList: 'DialogueList',
      icon: 'Icon',
      id: 'Id',
      limitNumber: 'LimitNumber',
      limitSwitch: 'LimitSwitch',
      name: 'Name',
      paymentMethod: 'PaymentMethod',
      price: 'Price',
      robotName: 'RobotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beyondLimitReply: 'string',
      deliveryMethod: 'string',
      dialogueList: { 'type': 'array', 'itemType': UpdateHotelSceneItemRequestUpdateHotelSceneReqDialogueList },
      icon: 'string',
      id: 'number',
      limitNumber: 'number',
      limitSwitch: 'number',
      name: 'string',
      paymentMethod: 'string',
      price: 'number',
      robotName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneRequestSceneRelationExtDTO extends $dara.Model {
  corpusList?: string[];
  description?: string;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/changjingmoshi/shuimian.png
   */
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0***eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40c804***697
   */
  startVideoMd5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://***.mp4
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCartoonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCartoonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCartoonResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQARequest extends $dara.Model {
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  keyWords?: string[];
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    if(Array.isArray(this.supplementaryQuestions)) {
      $dara.Model.validateArray(this.supplementaryQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAShrinkRequest extends $dara.Model {
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  keyWordsShrink?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Headers extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  keyWords?: string[];
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    if(Array.isArray(this.supplementaryQuestions)) {
      $dara.Model.validateArray(this.supplementaryQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  keyWordsShrink?: string;
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2ResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: AddCustomQAV2ResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: AddCustomQAV2ResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomQAV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomQAV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomQAV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * 11
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMessageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMessageTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelDeviceModeList)) {
      $dara.Model.validateArray(this.hotelDeviceModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotelDeviceModeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateDisPlayModesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateDisPlayModesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOrUpdateDisPlayModesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequest extends $dara.Model {
  hotelDeviceModeList?: string[];
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaver?: AddOrUpdateHotelSettingRequestHotelScreenSaver;
  nightMode?: AddOrUpdateHotelSettingRequestNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
      nightMode: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateHotelSettingRequestHotelScreenSaver,
      nightMode: AddOrUpdateHotelSettingRequestNightMode,
      settingType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelDeviceModeList)) {
      $dara.Model.validateArray(this.hotelDeviceModeList);
    }
    if(this.hotelScreenSaver && typeof (this.hotelScreenSaver as any).validate === 'function') {
      (this.hotelScreenSaver as any).validate();
    }
    if(this.nightMode && typeof (this.nightMode as any).validate === 'function') {
      (this.nightMode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingShrinkRequest extends $dara.Model {
  hotelDeviceModeListShrink?: string;
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaverShrink?: string;
  nightModeShrink?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
      nightModeShrink: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
      nightModeShrink: 'string',
      settingType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateHotelSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOrUpdateHotelSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaver?: AddOrUpdateScreenSaverRequestHotelScreenSaver;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateScreenSaverRequestHotelScreenSaver,
    };
  }

  validate() {
    if(this.hotelScreenSaver && typeof (this.hotelScreenSaver as any).validate === 'function') {
      (this.hotelScreenSaver as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaverShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4EED***9661
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateScreenSaverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOrUpdateScreenSaverResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
      welcomeText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateWelcomeTextResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddOrUpdateWelcomeTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddOrUpdateWelcomeTextResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReq?: AuditHotelRequestAuditHotelReq;
  static names(): { [key: string]: string } {
    return {
      auditHotelReq: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReq: AuditHotelRequestAuditHotelReq,
    };
  }

  validate() {
    if(this.auditHotelReq && typeof (this.auditHotelReq as any).validate === 'function') {
      (this.auditHotelReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      auditHotelReqShrink: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @remarks
   * RequestId
   */
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditHotelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuditHotelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoList: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roomNoList)) {
      $dara.Model.validateArray(this.roomNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoListShrink: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddHotelRoomResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddHotelRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddHotelRoomResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoList: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roomNoList)) {
      $dara.Model.validateArray(this.roomNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoListShrink: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteHotelRoomResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteHotelRoomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteHotelRoomResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckoutWithAKResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckoutWithAKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckoutWithAKResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lee
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30471753
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appKey: 'AppKey',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      appKey: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3DB51A10-327C-58D3-91DF-3A5A471C51E7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChildAccountAuthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChildAccountAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChildAccountAuthResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thing.attribute.set
   * thing.attribute.adjust
   */
  cmd?: string;
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INFRARED49122575595
   */
  deviceNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  properties?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      hotelId: 'HotelId',
      properties: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thing.attribute.set
   * thing.attribute.adjust
   */
  cmd?: string;
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INFRARED49122575595
   */
  deviceNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      hotelId: 'HotelId',
      propertiesShrink: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      propertiesShrink: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceResponseBody extends $dara.Model {
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ControlRoomDeviceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ControlRoomDeviceResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ControlRoomDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ControlRoomDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ControlRoomDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333566791
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-1 00:00:00
   */
  estOpenTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13xxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jTO****Rw
   */
  relatedPk?: string;
  /**
   * @remarks
   * 酒店关联产品列表
   */
  relatedPks?: string[];
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPk: 'RelatedPk',
      relatedPks: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPk: 'string',
      relatedPks: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedPks)) {
      $dara.Model.validateArray(this.relatedPks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333566791
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-1 00:00:00
   */
  estOpenTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13xxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jTO****Rw
   */
  relatedPk?: string;
  /**
   * @remarks
   * 酒店关联产品列表
   */
  relatedPksShrink?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPk: 'RelatedPk',
      relatedPksShrink: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPk: 'string',
      relatedPksShrink: 'string',
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * 5abfd9***2c38661
   */
  result?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHotelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHotelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * DOU_YIN
   */
  musicType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rooms?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfo?: CreateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      rooms: 'Rooms',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
      scheduleInfo: CreateHotelAlarmRequestScheduleInfo,
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
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

export class CreateHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * DOU_YIN
   */
  musicType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      roomsShrink: 'Rooms',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      roomsShrink: 'string',
      scheduleInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***86881
   */
  requestId?: string;
  result?: CreateHotelAlarmResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': CreateHotelAlarmResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHotelAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHotelAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHotelAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTO?: CreateRcuSceneRequestSceneRelationExtDTO;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTO: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTO: CreateRcuSceneRequestSceneRelationExtDTO,
    };
  }

  validate() {
    if(this.sceneRelationExtDTO && typeof (this.sceneRelationExtDTO as any).validate === 'function') {
      (this.sceneRelationExtDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTOShrink: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTOShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 844BA5CE-E30A-53CB-8A11-DE1F344C846D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRcuSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRcuSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRcuSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonRequest extends $dara.Model {
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCartoonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCartoonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCartoonResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQARequest extends $dara.Model {
  customQAIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      customQAIds: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIds: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customQAIds)) {
      $dara.Model.validateArray(this.customQAIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAShrinkRequest extends $dara.Model {
  customQAIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      customQAIdsShrink: 'CustomQAIds',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customQAIdsShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: DeleteHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': DeleteHotelAlarmRequestAlarms },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHotelAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @example
   * 11823
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSceneBookItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelSceneBookItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHotelSceneBookItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      settingType: 'SettingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      settingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67****BB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHotelSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHotelSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHotelSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateRequest extends $dara.Model {
  /**
   * @example
   * 234
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMessageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMessageTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4F61A7B7-409C-525D-AFDB-238A4E88925A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRcuSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRcuSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRcuSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlRequest extends $dara.Model {
  payload?: DeviceControlRequestPayload;
  userInfo?: DeviceControlRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: DeviceControlRequestPayload,
      userInfo: DeviceControlRequestUserInfo,
    };
  }

  validate() {
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

export class DeviceControlShrinkRequest extends $dara.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  result?: DeviceControlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: DeviceControlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceControlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeviceControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeviceControlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 191C79AD-F9F9-531E-B8C1-73DF6433B920
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: GetBasicInfoQAResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetBasicInfoQAResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicInfoQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicInfoQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicInfoQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetCartoonResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetCartoonResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCartoonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCartoonResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceRequest extends $dara.Model {
  deviceInfo?: GetHotelContactByGenieDeviceRequestDeviceInfo;
  userInfo?: GetHotelContactByGenieDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: GetHotelContactByGenieDeviceRequestDeviceInfo,
      userInfo: GetHotelContactByGenieDeviceRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
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

export class GetHotelContactByGenieDeviceShrinkRequest extends $dara.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  result?: GetHotelContactByGenieDeviceResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelContactByGenieDeviceResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByGenieDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactByGenieDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelContactByGenieDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  number?: string;
  userInfo?: GetHotelContactByNumberRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      userInfo: GetHotelContactByNumberRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  number?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelContactByNumberResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelContactByNumberResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactByNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelContactByNumberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsRequest extends $dara.Model {
  userInfo?: GetHotelContactsRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelContactsRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsShrinkRequest extends $dara.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelContactsResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelContactsResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelContactsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelHomeBackImageAndModesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelHomeBackImageAndModesRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 394450FC-9035-1B7C-8829-BC88832473FC
   */
  requestId?: string;
  result?: GetHotelHomeBackImageAndModesResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelHomeBackImageAndModesResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelHomeBackImageAndModesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelHomeBackImageAndModesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelHomeBackImageAndModesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelNoticeRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelNoticeRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * test notice...
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelNoticeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Headers extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelNoticeV2RequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelNoticeV2RequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2ResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C***67DB
   */
  requestId?: string;
  result?: GetHotelNoticeV2ResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelNoticeV2ResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelNoticeV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelNoticeV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelNoticeV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: GetHotelOrderDetailRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: GetHotelOrderDetailRequestPayload,
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 6F579407-13C4-1708-AFA2-B657BE5FE8F5
   */
  requestId?: string;
  result?: GetHotelOrderDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelOrderDetailResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelOrderDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * vrehvuifdsgrts
   */
  requestId?: string;
  result?: GetHotelRoomDeviceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelRoomDeviceResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelRoomDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelRoomDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesRequest extends $dara.Model {
  userInfo?: GetHotelSampleUtterancesRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelSampleUtterancesRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesShrinkRequest extends $dara.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSampleUtterancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSampleUtterancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelSampleUtterancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @example
   * 10336
   */
  itemId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      itemId: 'ItemId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      itemId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelSceneItemDetailResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelSceneItemDetailResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSceneItemDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSceneItemDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelSceneItemDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: GetHotelScreenSaverRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: GetHotelScreenSaverRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5F0467E1-19F2-1757-B6D0-B79917BA2E81
   */
  requestId?: string;
  result?: GetHotelScreenSaverResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetHotelScreenSaverResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelScreenSaverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelScreenSaverResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67**6FA
   */
  requestId?: string;
  result?: GetHotelScreenSaverStyleResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelScreenSaverStyleResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelScreenSaverStyleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelScreenSaverStyleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      settingType: 'SettingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      settingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  result?: GetHotelSettingResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelSettingResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotelSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHotelSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetRelationProductListResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetRelationProductListResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationProductListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRelationProductListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRelationProductListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOTEL
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62a319****abdc
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE_ID
   */
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetUnionIdResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetUnionIdResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUnionIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUnionIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUnionIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetWelcomeTextAndMusicResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: GetWelcomeTextAndMusicResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWelcomeTextAndMusicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWelcomeTextAndMusicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWelcomeTextAndMusicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * freuisghrtiesnvfkdsvbfuidslnvfs
   */
  code?: string;
  extInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      code: 'Code',
      extInfo: 'ExtInfo',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      code: 'string',
      extInfo: 'string',
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73****9-175A-1324-8202-9FAAB*****A
   */
  requestId?: string;
  result?: HotelQrBindResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: HotelQrBindResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelQrBindResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HotelQrBindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HotelQrBindResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfig?: ImportHotelConfigRequestImportHotelConfig;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfig: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfig: ImportHotelConfigRequestImportHotelConfig,
    };
  }

  validate() {
    if(this.importHotelConfig && typeof (this.importHotelConfig as any).validate === 'function') {
      (this.importHotelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfigShrink: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportHotelConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportHotelConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesRequest extends $dara.Model {
  enableInfraredDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevices?: ImportRoomControlDevicesRequestLocationDevices[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      hotelId: 'HotelId',
      locationDevices: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      hotelId: 'string',
      locationDevices: { 'type': 'array', 'itemType': ImportRoomControlDevicesRequestLocationDevices },
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locationDevices)) {
      $dara.Model.validateArray(this.locationDevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesShrinkRequest extends $dara.Model {
  enableInfraredDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevicesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      hotelId: 'HotelId',
      locationDevicesShrink: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      hotelId: 'string',
      locationDevicesShrink: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsfregtre
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomControlDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportRoomControlDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportRoomControlDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: ImportRoomGenieScenesRequestSceneList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  sceneListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneListShrink: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportRoomGenieScenesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportRoomGenieScenesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemRequest extends $dara.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReq?: InsertHotelSceneBookItemRequestAddHotelSceneItemReq;
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      addHotelSceneItemReq: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReq: InsertHotelSceneBookItemRequestAddHotelSceneItemReq,
      hotelId: 'string',
    };
  }

  validate() {
    if(this.addHotelSceneItemReq && typeof (this.addHotelSceneItemReq as any).validate === 'function') {
      (this.addHotelSceneItemReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * addHotelSceneItemReq
   * 
   * This parameter is required.
   */
  addHotelSceneItemReqShrink?: string;
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      addHotelSceneItemReqShrink: 'AddHotelSceneItemReq',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addHotelSceneItemReqShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 36FB***80C2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertHotelSceneBookItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertHotelSceneBookItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertHotelSceneBookItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  pushType?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pushType: 'PushType',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pushType: 'string',
      roomName: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeRobotPushResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeRobotPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvokeRobotPushResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 00534880-4397-5134-B212-1030B7A37C27
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllProvincesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllProvincesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAllProvincesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 860194F7-9593-50EA-8E53-BCEC0D325A00
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCitiesByProvinceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCitiesByProvinceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCitiesByProvinceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListCustomQARequestPage;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      page: ListCustomQARequestPage,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      keyword: 'string',
      pageShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListCustomQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListCustomQAResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListCustomQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCustomQAResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * hotelId
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListDialogueTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDialogueTemplateResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDialogueTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDialogueTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmRequest extends $dara.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  rooms?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      rooms: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  roomsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomsShrink: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  result?: ListHotelAlarmResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelAlarmResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceRequest extends $dara.Model {
  userInfo?: ListHotelControlDeviceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: ListHotelControlDeviceRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceShrinkRequest extends $dara.Model {
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelControlDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelControlDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelControlDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  requestId?: string;
  result?: ListHotelInfoResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: ListHotelMessageTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelMessageTemplateResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelMessageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelMessageTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelOrderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelOrderRequestPayload,
      userInfo: ListHotelOrderRequestUserInfo,
    };
  }

  validate() {
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

export class ListHotelOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListHotelOrderResponseBodyPage;
  /**
   * @example
   * 07F61FDA-606F-10A0-8ED0-C6CE62710A48
   */
  requestId?: string;
  result?: ListHotelOrderResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelOrderResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelOrderResponseBodyResult },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoom?: ListHotelRoomsRequestHotelAdminRoom;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelAdminRoom: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoom: ListHotelRoomsRequestHotelAdminRoom,
      hotelId: 'string',
    };
  }

  validate() {
    if(this.hotelAdminRoom && typeof (this.hotelAdminRoom as any).validate === 'function') {
      (this.hotelAdminRoom as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsShrinkRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoomShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelAdminRoomShrink: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoomShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: ListHotelRoomsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelRoomsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelRoomsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelRoomsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelSceneBookItemsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      page: 'Page',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      page: ListHotelSceneBookItemsRequestPage,
      type: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FOOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pageShrink: 'Page',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pageShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListHotelSceneBookItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelSceneBookItemsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneBookItemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneBookItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelSceneBookItemsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelSceneItemRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListHotelSceneItemRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelSceneItemRequestPayload,
      userInfo: ListHotelSceneItemRequestUserInfo,
    };
  }

  validate() {
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

export class ListHotelSceneItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListHotelSceneItemResponseBodyPage;
  /**
   * @example
   * CEADB586-51CB-1B6B-95BD-AB85A7A08E97
   */
  requestId?: string;
  result?: ListHotelSceneItemResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      page: ListHotelSceneItemResponseBodyPage,
      requestId: 'string',
      result: ListHotelSceneItemResponseBodyResult,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelSceneItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReq?: ListHotelSceneItemsRequestListHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReq: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReq: ListHotelSceneItemsRequestListHotelSceneReq,
    };
  }

  validate() {
    if(this.listHotelSceneReq && typeof (this.listHotelSceneReq as any).validate === 'function') {
      (this.listHotelSceneReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * ListHotelSceneReq
   * 
   * This parameter is required.
   */
  listHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      listHotelSceneReqShrink: 'ListHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      listHotelSceneReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: ListHotelSceneItemsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelSceneItemsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelSceneItemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelSceneItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelSceneItemsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: ListHotelServiceCategoryRequestPayload;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: ListHotelServiceCategoryRequestPayload,
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5373C821-65D2-1764-B9F9-951914937FF5
   */
  requestId?: string;
  result?: ListHotelServiceCategoryResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelServiceCategoryResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelServiceCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelServiceCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelServiceCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequest?: ListHotelsRequestHotelRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListHotelsRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequest: 'HotelRequest',
      page: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequest: ListHotelsRequestHotelRequest,
      page: ListHotelsRequestPage,
      status: 'number',
    };
  }

  validate() {
    if(this.hotelRequest && typeof (this.hotelRequest as any).validate === 'function') {
      (this.hotelRequest as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsShrinkRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelRequestShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      hotelRequestShrink: 'HotelRequest',
      pageShrink: 'Page',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelRequestShrink: 'string',
      pageShrink: 'string',
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

export class ListHotelsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   */
  requestId?: string;
  result?: ListHotelsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListHotelsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 860194F7-9593-50EA-8E53-BCEC0D325A00
   */
  requestId?: string;
  result?: { [key: string]: string[] };
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredDeviceBrandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInfraredDeviceBrandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInfraredDeviceBrandsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersRequest extends $dara.Model {
  brand?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  province?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      category: 'Category',
      city: 'City',
      hotelId: 'HotelId',
      province: 'Province',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      category: 'string',
      city: 'string',
      hotelId: 'string',
      province: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0C90A059-3653-5356-A78E-8A6BDA606155
   */
  requestId?: string;
  result?: ListInfraredRemoteControllersResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInfraredRemoteControllersResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInfraredRemoteControllersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInfraredRemoteControllersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInfraredRemoteControllersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1036C376-7A37-5A73-BE8B-C6DB40107EC1
   */
  requestId?: string;
  result?: { [key: string]: string[] };
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSTBServiceProvidersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSTBServiceProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSTBServiceProvidersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * hotelId
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSceneCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSceneCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQARequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  page?: ListServiceQARequestPage;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      hotelId: 'string',
      keyword: 'string',
      page: ListServiceQARequestPage,
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * ***
   */
  keyword?: string;
  pageShrink?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      hotelId: 'HotelId',
      keyword: 'Keyword',
      pageShrink: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      hotelId: 'string',
      keyword: 'string',
      pageShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListServiceQAResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListServiceQAResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListServiceQAResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListServiceQAResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $dara.Model {
  /**
   * @example
   * 2022-09-14 14:23:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * true
   */
  isDesc?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  page?: ListTicketsRequestPage;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * gmtCalled
   */
  sortField?: string;
  /**
   * @example
   * 2022-04-08 09:39:00
   */
  startTime?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hotelId: 'HotelId',
      isDesc: 'IsDesc',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      page: 'Page',
      roomNo: 'RoomNo',
      sortField: 'SortField',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hotelId: 'string',
      isDesc: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      page: ListTicketsRequestPage,
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2022-09-14 14:23:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * true
   */
  isDesc?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  pageShrink?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * gmtCalled
   */
  sortField?: string;
  /**
   * @example
   * 2022-04-08 09:39:00
   */
  startTime?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hotelId: 'HotelId',
      isDesc: 'IsDesc',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      pageShrink: 'Page',
      roomNo: 'RoomNo',
      sortField: 'SortField',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hotelId: 'string',
      isDesc: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      pageShrink: 'string',
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  page?: ListTicketsResponseBodyPage;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: ListTicketsResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListTicketsResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTicketsResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTicketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTicketsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  page?: PageGetHotelRoomDevicesResponseBodyPage;
  /**
   * @example
   * 4EFBDDF4-B19D-526C-8C3D-CD8AB51974EE
   */
  requestId?: string;
  result?: PageGetHotelRoomDevicesResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      page: PageGetHotelRoomDevicesResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PageGetHotelRoomDevicesResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageGetHotelRoomDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PageGetHotelRoomDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PmsEventReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PmsEventReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PmsEventReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageRequest extends $dara.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReq?: PushHotelMessageRequestPushHotelMessageReq;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReq: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReq: PushHotelMessageRequestPushHotelMessageReq,
    };
  }

  validate() {
    if(this.pushHotelMessageReq && typeof (this.pushHotelMessageReq as any).validate === 'function') {
      (this.pushHotelMessageReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * pushHotelMessageReq
   * 
   * This parameter is required.
   */
  pushHotelMessageReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pushHotelMessageReqShrink: 'PushHotelMessageReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushHotelMessageReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushHotelMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushHotelMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushHotelMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commands?: PushVoiceBoxCommandsRequestCommands[];
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': PushVoiceBoxCommandsRequestCommands },
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commandsShrink: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandsShrink: 'string',
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushVoiceBoxCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushVoiceBoxCommandsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  welcomeMusicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      welcomeMusicUrl: 'WelcomeMusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      welcomeMusicUrl: 'string',
      welcomeText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushWelcomeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushWelcomeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  templateVariable?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      templateVariable: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      templateVariable: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.templateVariable) {
      $dara.Model.validateMap(this.templateVariable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  templateVariableShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      templateVariableShrink: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      templateVariableShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushWelcomeTextAndMusicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushWelcomeTextAndMusicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushWelcomeTextAndMusicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusRequest extends $dara.Model {
  payload?: QueryDeviceStatusRequestPayload;
  userInfo?: QueryDeviceStatusRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: QueryDeviceStatusRequestPayload,
      userInfo: QueryDeviceStatusRequestUserInfo,
    };
  }

  validate() {
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

export class QueryDeviceStatusShrinkRequest extends $dara.Model {
  payloadShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsgrefds
   */
  requestId?: string;
  result?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailRequest extends $dara.Model {
  /**
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @example
   * 38:c8:**:**:f5:22
   */
  mac?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * 设备sn信息
   * 注：若在mac uuid sn全都输入的情况下 按照输入正确的内容查询 若全输入都是正确的 则 按照 uuid > mac > sn 优先级查询
   * 传入mac uuid sn其中一个 则酒店id和房间号可不传
   * 
   * @example
   * 280**28
   */
  sn?: string;
  /**
   * @example
   * 588***96j5WU
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      mac: 'Mac',
      roomNo: 'RoomNo',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      mac: 'string',
      roomNo: 'string',
      sn: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: QueryHotelRoomDetailResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: QueryHotelRoomDetailResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotelRoomDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHotelRoomDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsgfdscvre
   */
  requestId?: string;
  result?: QueryRoomControlDevicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomControlDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRoomControlDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67***6FA
   */
  requestId?: string;
  result?: QueryRoomControlDevicesAndStatusResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryRoomControlDevicesAndStatusResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomControlDevicesAndStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomControlDevicesAndStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRoomControlDevicesAndStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusRequest extends $dara.Model {
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: QueryRoomStatusResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: QueryRoomStatusResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRoomStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRoomStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStates?: number[];
  sceneTypes?: string[];
  templateInfoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStates: 'SceneStates',
      sceneTypes: 'SceneTypes',
      templateInfoIds: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStates: { 'type': 'array', 'itemType': 'number' },
      sceneTypes: { 'type': 'array', 'itemType': 'string' },
      templateInfoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sceneStates)) {
      $dara.Model.validateArray(this.sceneStates);
    }
    if(Array.isArray(this.sceneTypes)) {
      $dara.Model.validateArray(this.sceneTypes);
    }
    if(Array.isArray(this.templateInfoIds)) {
      $dara.Model.validateArray(this.templateInfoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  sceneStatesShrink?: string;
  sceneTypesShrink?: string;
  templateInfoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneStatesShrink: 'SceneStates',
      sceneTypesShrink: 'SceneTypes',
      templateInfoIdsShrink: 'TemplateInfoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneStatesShrink: 'string',
      sceneTypesShrink: 'string',
      templateInfoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  results?: QuerySceneListResponseBodyResults[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': QuerySceneListResponseBodyResults },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySceneListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySceneListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30**53
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tbxxxx
   */
  childAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEV***E3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      childAccountName: 'ChildAccountName',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      childAccountName: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F12B***F34E
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveChildAccountAuthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveChildAccountAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveChildAccountAuthResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelRequest extends $dara.Model {
  /**
   * @remarks
   * appkey
   * 
   * This parameter is required.
   * 
   * @example
   * 30193305
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      hotelId: 'HotelId',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      hotelId: 'string',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHotelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveHotelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveHotelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetWelcomeTextAndMusicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetWelcomeTextAndMusicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetWelcomeTextAndMusicResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutRequest extends $dara.Model {
  deviceInfo?: RoomCheckOutRequestDeviceInfo;
  userInfo?: RoomCheckOutRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: RoomCheckOutRequestDeviceInfo,
      userInfo: RoomCheckOutRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
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

export class RoomCheckOutShrinkRequest extends $dara.Model {
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * dsvrevd
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoomCheckOutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RoomCheckOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RoomCheckOutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: SubmitHotelOrderRequestPayload;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: SubmitHotelOrderRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: SubmitHotelOrderRequestPayload,
      userInfo: SubmitHotelOrderRequestUserInfo,
    };
  }

  validate() {
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

export class SubmitHotelOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payloadShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      payloadShrink: 'Payload',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CCCF2E86-D9B5-12A6-AD25-8A06933D2B0F
   */
  requestId?: string;
  /**
   * @example
   * 20220809104752000114671478353329
   */
  result?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotelOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitHotelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitHotelOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkRequest extends $dara.Model {
  categoryCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  categoryEnName?: string;
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * room
   */
  location?: string;
  locationCnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bedLight
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  switch?: number;
  fanSpeed?: string;
  mode?: string;
  roomTemperature?: string;
  temperature?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCnName: 'CategoryCnName',
      categoryEnName: 'CategoryEnName',
      deviceName: 'DeviceName',
      hotelId: 'HotelId',
      location: 'Location',
      locationCnName: 'LocationCnName',
      number: 'Number',
      roomNo: 'RoomNo',
      switch: 'Switch',
      fanSpeed: 'fanSpeed',
      mode: 'mode',
      roomTemperature: 'roomTemperature',
      temperature: 'temperature',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCnName: 'string',
      categoryEnName: 'string',
      deviceName: 'string',
      hotelId: 'string',
      location: 'string',
      locationCnName: 'string',
      number: 'string',
      roomNo: 'string',
      switch: 'number',
      fanSpeed: 'string',
      mode: 'string',
      roomTemperature: 'string',
      temperature: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
      statusCode: 'StatusCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: 'boolean',
      statusCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceStatusWithAkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncDeviceStatusWithAkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncDeviceStatusWithAkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkOutTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingExpenses?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingPosition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelIntroduction: 'HotelIntroduction',
      hotelMember: 'HotelMember',
      hotelService: 'HotelService',
      parkingExpenses: 'ParkingExpenses',
      parkingPosition: 'ParkingPosition',
      phoneNumber: 'PhoneNumber',
      wifiName: 'WifiName',
      wifiPassword: 'WifiPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInTime: 'string',
      checkOutTime: 'string',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelIntroduction: 'string',
      hotelMember: 'string',
      hotelService: 'string',
      parkingExpenses: 'string',
      parkingPosition: 'string',
      phoneNumber: 'string',
      wifiName: 'string',
      wifiPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicInfoQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicInfoQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBasicInfoQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQARequest extends $dara.Model {
  answers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customQAId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  keyWords?: string[];
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestions?: string[];
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWords: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestions: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': 'string' },
      customQAId: 'string',
      hotelId: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      majorQuestion: 'string',
      supplementaryQuestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    if(Array.isArray(this.supplementaryQuestions)) {
      $dara.Model.validateArray(this.supplementaryQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAShrinkRequest extends $dara.Model {
  answersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customQAId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  keyWordsShrink?: string;
  /**
   * @example
   * ***
   */
  majorQuestion?: string;
  supplementaryQuestionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      answersShrink: 'Answers',
      customQAId: 'CustomQAId',
      hotelId: 'HotelId',
      keyWordsShrink: 'KeyWords',
      majorQuestion: 'MajorQuestion',
      supplementaryQuestionsShrink: 'SupplementaryQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      customQAId: 'string',
      hotelId: 'string',
      keyWordsShrink: 'string',
      majorQuestion: 'string',
      supplementaryQuestionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***BB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31342884
   */
  appKey?: string;
  /**
   * @example
   * 2022-02-22 00:00:00
   */
  estOpenTime?: string;
  hotelAddress?: string;
  /**
   * @example
   * a*****@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 130***
   */
  phoneNumber?: string;
  relatedPks?: string[];
  remark?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPks: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelId: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPks: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedPks)) {
      $dara.Model.validateArray(this.relatedPks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31342884
   */
  appKey?: string;
  /**
   * @example
   * 2022-02-22 00:00:00
   */
  estOpenTime?: string;
  hotelAddress?: string;
  /**
   * @example
   * a*****@hotel.com
   */
  hotelEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 130***
   */
  phoneNumber?: string;
  relatedPksShrink?: string;
  remark?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAEVK***UE3d3Z2ETwh
   */
  tbOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      estOpenTime: 'EstOpenTime',
      hotelAddress: 'HotelAddress',
      hotelEmail: 'HotelEmail',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      phoneNumber: 'PhoneNumber',
      relatedPksShrink: 'RelatedPks',
      remark: 'Remark',
      roomNum: 'RoomNum',
      tbOpenId: 'TbOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      estOpenTime: 'string',
      hotelAddress: 'string',
      hotelEmail: 'string',
      hotelId: 'string',
      hotelName: 'string',
      phoneNumber: 'string',
      relatedPksShrink: 'string',
      remark: 'string',
      roomNum: 'number',
      tbOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46C53AEB-B19C-5C42-B32E-A726979C126F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHotelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: UpdateHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfo?: UpdateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': UpdateHotelAlarmRequestAlarms },
      hotelId: 'string',
      scheduleInfo: UpdateHotelAlarmRequestScheduleInfo,
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
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

export class UpdateHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
      scheduleInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHotelAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneBookReq
   * 
   * This parameter is required.
   */
  updateHotelSceneBookReq?: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReq: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReq: UpdateHotelSceneBookItemRequestUpdateHotelSceneBookReq,
    };
  }

  validate() {
    if(this.updateHotelSceneBookReq && typeof (this.updateHotelSceneBookReq as any).validate === 'function') {
      (this.updateHotelSceneBookReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneBookReq
   * 
   * This parameter is required.
   */
  updateHotelSceneBookReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneBookReqShrink: 'UpdateHotelSceneBookReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneBookReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneBookItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelSceneBookItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHotelSceneBookItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReq?: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReq?: UpdateHotelSceneItemRequestUpdateHotelSceneReq;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReq: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReq: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReq: UpdateHotelSceneItemRequestUpdateHotelSceneOperateReq,
      updateHotelSceneReq: UpdateHotelSceneItemRequestUpdateHotelSceneReq,
    };
  }

  validate() {
    if(this.updateHotelSceneOperateReq && typeof (this.updateHotelSceneOperateReq as any).validate === 'function') {
      (this.updateHotelSceneOperateReq as any).validate();
    }
    if(this.updateHotelSceneReq && typeof (this.updateHotelSceneReq as any).validate === 'function') {
      (this.updateHotelSceneReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * hotelID
   * 
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * updateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneOperateReqShrink?: string;
  /**
   * @remarks
   * UpdateHotelSceneReq
   * 
   * This parameter is required.
   */
  updateHotelSceneReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      updateHotelSceneOperateReqShrink: 'UpdateHotelSceneOperateReq',
      updateHotelSceneReqShrink: 'UpdateHotelSceneReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      updateHotelSceneOperateReqShrink: 'string',
      updateHotelSceneReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C***67DB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelSceneItemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHotelSceneItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHotelSceneItemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateRequest extends $dara.Model {
  templateDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDetail: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMessageTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMessageTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTO?: UpdateRcuSceneRequestSceneRelationExtDTO;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTO: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTO: UpdateRcuSceneRequestSceneRelationExtDTO,
    };
  }

  validate() {
    if(this.sceneRelationExtDTO && typeof (this.sceneRelationExtDTO as any).validate === 'function') {
      (this.sceneRelationExtDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yoga
   */
  sceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneRelationExtDTOShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      sceneId: 'SceneId',
      sceneRelationExtDTOShrink: 'SceneRelationExtDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      sceneId: 'string',
      sceneRelationExtDTOShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3A680F3A-6672-5A47-AB28-12BBCD80C679
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRcuSceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRcuSceneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRcuSceneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQARequest extends $dara.Model {
  answer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * 1
   */
  serviceQAId?: number;
  /**
   * @example
   * true
   */
  isActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hotelId: 'HotelId',
      serviceQAId: 'ServiceQAId',
      isActive: 'isActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hotelId: 'string',
      serviceQAId: 'number',
      isActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67***6FA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceQAResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceQAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceQAResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waiting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupKey: 'GroupKey',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupKey: 'string',
      hotelId: 'string',
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

export class UpdateTicketResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @param headers - AddCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCartoonResponse
   */
  async addCartoonWithOptions(request: AddCartoonRequest, headers: AddCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<AddCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.startVideoMd5)) {
      body["StartVideoMd5"] = request.startVideoMd5;
    }

    if (!$dara.isNull(request.startVideoUrl)) {
      body["StartVideoUrl"] = request.startVideoUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCartoonResponse>(await this.callApi(params, req, runtime), new AddCartoonResponse({}));
    } else {
      return $dara.cast<AddCartoonResponse>(await this.execute(params, req, runtime), new AddCartoonResponse({}));
    }

  }

  /**
   * 添加动画
   * 
   * @param request - AddCartoonRequest
   * @returns AddCartoonResponse
   */
  async addCartoon(request: AddCartoonRequest): Promise<AddCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddCartoonHeaders({ });
    return await this.addCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 新增自定义问答
   * 
   * @param tmpReq - AddCustomQARequest
   * @param headers - AddCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAResponse
   */
  async addCustomQAWithOptions(tmpReq: AddCustomQARequest, headers: AddCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<AddCustomQAResponse> {
    tmpReq.validate();
    let request = new AddCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomQAResponse>(await this.callApi(params, req, runtime), new AddCustomQAResponse({}));
    } else {
      return $dara.cast<AddCustomQAResponse>(await this.execute(params, req, runtime), new AddCustomQAResponse({}));
    }

  }

  /**
   * 新增自定义问答
   * 
   * @param request - AddCustomQARequest
   * @returns AddCustomQAResponse
   */
  async addCustomQA(request: AddCustomQARequest): Promise<AddCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddCustomQAHeaders({ });
    return await this.addCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 添加问答V2
   * 
   * @param tmpReq - AddCustomQAV2Request
   * @param headers - AddCustomQAV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2WithOptions(tmpReq: AddCustomQAV2Request, headers: AddCustomQAV2Headers, runtime: $dara.RuntimeOptions): Promise<AddCustomQAV2Response> {
    tmpReq.validate();
    let request = new AddCustomQAV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomQAV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addQAV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomQAV2Response>(await this.callApi(params, req, runtime), new AddCustomQAV2Response({}));
    } else {
      return $dara.cast<AddCustomQAV2Response>(await this.execute(params, req, runtime), new AddCustomQAV2Response({}));
    }

  }

  /**
   * 添加问答V2
   * 
   * @param request - AddCustomQAV2Request
   * @returns AddCustomQAV2Response
   */
  async addCustomQAV2(request: AddCustomQAV2Request): Promise<AddCustomQAV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddCustomQAV2Headers({ });
    return await this.addCustomQAV2WithOptions(request, headers, runtime);
  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @param headers - AddMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplateWithOptions(request: AddMessageTemplateRequest, headers: AddMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<AddMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddMessageTemplateResponse>(await this.callApi(params, req, runtime), new AddMessageTemplateResponse({}));
    } else {
      return $dara.cast<AddMessageTemplateResponse>(await this.execute(params, req, runtime), new AddMessageTemplateResponse({}));
    }

  }

  /**
   * 添加消息模板
   * 
   * @param request - AddMessageTemplateRequest
   * @returns AddMessageTemplateResponse
   */
  async addMessageTemplate(request: AddMessageTemplateRequest): Promise<AddMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddMessageTemplateHeaders({ });
    return await this.addMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param tmpReq - AddOrUpdateDisPlayModesRequest
   * @param headers - AddOrUpdateDisPlayModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModesWithOptions(tmpReq: AddOrUpdateDisPlayModesRequest, headers: AddOrUpdateDisPlayModesHeaders, runtime: $dara.RuntimeOptions): Promise<AddOrUpdateDisPlayModesResponse> {
    tmpReq.validate();
    let request = new AddOrUpdateDisPlayModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateDisPlayModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateDisPlayModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddOrUpdateDisPlayModesResponse>(await this.callApi(params, req, runtime), new AddOrUpdateDisPlayModesResponse({}));
    } else {
      return $dara.cast<AddOrUpdateDisPlayModesResponse>(await this.execute(params, req, runtime), new AddOrUpdateDisPlayModesResponse({}));
    }

  }

  /**
   * 新增或者编辑带屏展示模式
   * 
   * @param request - AddOrUpdateDisPlayModesRequest
   * @returns AddOrUpdateDisPlayModesResponse
   */
  async addOrUpdateDisPlayModes(request: AddOrUpdateDisPlayModesRequest): Promise<AddOrUpdateDisPlayModesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddOrUpdateDisPlayModesHeaders({ });
    return await this.addOrUpdateDisPlayModesWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param tmpReq - AddOrUpdateHotelSettingRequest
   * @param headers - AddOrUpdateHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSettingWithOptions(tmpReq: AddOrUpdateHotelSettingRequest, headers: AddOrUpdateHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<AddOrUpdateHotelSettingResponse> {
    tmpReq.validate();
    let request = new AddOrUpdateHotelSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelDeviceModeList)) {
      request.hotelDeviceModeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelDeviceModeList, "HotelDeviceModeList", "json");
    }

    if (!$dara.isNull(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    if (!$dara.isNull(tmpReq.nightMode)) {
      request.nightModeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nightMode, "NightMode", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelDeviceModeListShrink)) {
      body["HotelDeviceModeList"] = request.hotelDeviceModeListShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    if (!$dara.isNull(request.nightModeShrink)) {
      body["NightMode"] = request.nightModeShrink;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddOrUpdateHotelSettingResponse>(await this.callApi(params, req, runtime), new AddOrUpdateHotelSettingResponse({}));
    } else {
      return $dara.cast<AddOrUpdateHotelSettingResponse>(await this.execute(params, req, runtime), new AddOrUpdateHotelSettingResponse({}));
    }

  }

  /**
   * 新增或者编辑定制配置
   * 
   * @param request - AddOrUpdateHotelSettingRequest
   * @returns AddOrUpdateHotelSettingResponse
   */
  async addOrUpdateHotelSetting(request: AddOrUpdateHotelSettingRequest): Promise<AddOrUpdateHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddOrUpdateHotelSettingHeaders({ });
    return await this.addOrUpdateHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param tmpReq - AddOrUpdateScreenSaverRequest
   * @param headers - AddOrUpdateScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaverWithOptions(tmpReq: AddOrUpdateScreenSaverRequest, headers: AddOrUpdateScreenSaverHeaders, runtime: $dara.RuntimeOptions): Promise<AddOrUpdateScreenSaverResponse> {
    tmpReq.validate();
    let request = new AddOrUpdateScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelScreenSaver)) {
      request.hotelScreenSaverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelScreenSaver, "HotelScreenSaver", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelScreenSaverShrink)) {
      body["HotelScreenSaver"] = request.hotelScreenSaverShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddOrUpdateScreenSaverResponse>(await this.callApi(params, req, runtime), new AddOrUpdateScreenSaverResponse({}));
    } else {
      return $dara.cast<AddOrUpdateScreenSaverResponse>(await this.execute(params, req, runtime), new AddOrUpdateScreenSaverResponse({}));
    }

  }

  /**
   * 新增或者编辑带屏屏保
   * 
   * @param request - AddOrUpdateScreenSaverRequest
   * @returns AddOrUpdateScreenSaverResponse
   */
  async addOrUpdateScreenSaver(request: AddOrUpdateScreenSaverRequest): Promise<AddOrUpdateScreenSaverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddOrUpdateScreenSaverHeaders({ });
    return await this.addOrUpdateScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @param headers - AddOrUpdateWelcomeTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeTextWithOptions(request: AddOrUpdateWelcomeTextRequest, headers: AddOrUpdateWelcomeTextHeaders, runtime: $dara.RuntimeOptions): Promise<AddOrUpdateWelcomeTextResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.musicUrl)) {
      body["MusicUrl"] = request.musicUrl;
    }

    if (!$dara.isNull(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateWelcomeText",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/addOrUpdateWelcomeText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddOrUpdateWelcomeTextResponse>(await this.callApi(params, req, runtime), new AddOrUpdateWelcomeTextResponse({}));
    } else {
      return $dara.cast<AddOrUpdateWelcomeTextResponse>(await this.execute(params, req, runtime), new AddOrUpdateWelcomeTextResponse({}));
    }

  }

  /**
   * 添加/更新欢迎语信息
   * 
   * @param request - AddOrUpdateWelcomeTextRequest
   * @returns AddOrUpdateWelcomeTextResponse
   */
  async addOrUpdateWelcomeText(request: AddOrUpdateWelcomeTextRequest): Promise<AddOrUpdateWelcomeTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AddOrUpdateWelcomeTextHeaders({ });
    return await this.addOrUpdateWelcomeTextWithOptions(request, headers, runtime);
  }

  /**
   * 审批酒店
   * 
   * @param tmpReq - AuditHotelRequest
   * @param headers - AuditHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditHotelResponse
   */
  async auditHotelWithOptions(tmpReq: AuditHotelRequest, headers: AuditHotelHeaders, runtime: $dara.RuntimeOptions): Promise<AuditHotelResponse> {
    tmpReq.validate();
    let request = new AuditHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.auditHotelReq)) {
      request.auditHotelReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditHotelReq, "AuditHotelReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auditHotelReqShrink)) {
      query["AuditHotelReq"] = request.auditHotelReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/auditHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AuditHotelResponse>(await this.callApi(params, req, runtime), new AuditHotelResponse({}));
    } else {
      return $dara.cast<AuditHotelResponse>(await this.execute(params, req, runtime), new AuditHotelResponse({}));
    }

  }

  /**
   * 审批酒店
   * 
   * @param request - AuditHotelRequest
   * @returns AuditHotelResponse
   */
  async auditHotel(request: AuditHotelRequest): Promise<AuditHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new AuditHotelHeaders({ });
    return await this.auditHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建房间
   * 
   * @param tmpReq - BatchAddHotelRoomRequest
   * @param headers - BatchAddHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoomWithOptions(tmpReq: BatchAddHotelRoomRequest, headers: BatchAddHotelRoomHeaders, runtime: $dara.RuntimeOptions): Promise<BatchAddHotelRoomResponse> {
    tmpReq.validate();
    let request = new BatchAddHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchAddHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchAddHotelRoomResponse>(await this.callApi(params, req, runtime), new BatchAddHotelRoomResponse({}));
    } else {
      return $dara.cast<BatchAddHotelRoomResponse>(await this.execute(params, req, runtime), new BatchAddHotelRoomResponse({}));
    }

  }

  /**
   * 批量创建房间
   * 
   * @param request - BatchAddHotelRoomRequest
   * @returns BatchAddHotelRoomResponse
   */
  async batchAddHotelRoom(request: BatchAddHotelRoomRequest): Promise<BatchAddHotelRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new BatchAddHotelRoomHeaders({ });
    return await this.batchAddHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除房间
   * 
   * @param tmpReq - BatchDeleteHotelRoomRequest
   * @param headers - BatchDeleteHotelRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoomWithOptions(tmpReq: BatchDeleteHotelRoomRequest, headers: BatchDeleteHotelRoomHeaders, runtime: $dara.RuntimeOptions): Promise<BatchDeleteHotelRoomResponse> {
    tmpReq.validate();
    let request = new BatchDeleteHotelRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roomNoList)) {
      request.roomNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomNoList, "RoomNoList", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNoListShrink)) {
      body["RoomNoList"] = request.roomNoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteHotelRoom",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/batchDeleteHotelRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchDeleteHotelRoomResponse>(await this.callApi(params, req, runtime), new BatchDeleteHotelRoomResponse({}));
    } else {
      return $dara.cast<BatchDeleteHotelRoomResponse>(await this.execute(params, req, runtime), new BatchDeleteHotelRoomResponse({}));
    }

  }

  /**
   * 批量删除房间
   * 
   * @param request - BatchDeleteHotelRoomRequest
   * @returns BatchDeleteHotelRoomResponse
   */
  async batchDeleteHotelRoom(request: BatchDeleteHotelRoomRequest): Promise<BatchDeleteHotelRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new BatchDeleteHotelRoomHeaders({ });
    return await this.batchDeleteHotelRoomWithOptions(request, headers, runtime);
  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @param headers - CheckoutWithAKHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAKWithOptions(request: CheckoutWithAKRequest, headers: CheckoutWithAKHeaders, runtime: $dara.RuntimeOptions): Promise<CheckoutWithAKResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckoutWithAK",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/checkoutWithAK`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckoutWithAKResponse>(await this.callApi(params, req, runtime), new CheckoutWithAKResponse({}));
    } else {
      return $dara.cast<CheckoutWithAKResponse>(await this.execute(params, req, runtime), new CheckoutWithAKResponse({}));
    }

  }

  /**
   * 酒店退房，清楚例如闹钟等定时信息
   * 
   * @param request - CheckoutWithAKRequest
   * @returns CheckoutWithAKResponse
   */
  async checkoutWithAK(request: CheckoutWithAKRequest): Promise<CheckoutWithAKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CheckoutWithAKHeaders({ });
    return await this.checkoutWithAKWithOptions(request, headers, runtime);
  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @param headers - ChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuthWithOptions(request: ChildAccountAuthRequest, headers: ChildAccountAuthHeaders, runtime: $dara.RuntimeOptions): Promise<ChildAccountAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["Account"] = request.account;
    }

    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/childAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChildAccountAuthResponse>(await this.callApi(params, req, runtime), new ChildAccountAuthResponse({}));
    } else {
      return $dara.cast<ChildAccountAuthResponse>(await this.execute(params, req, runtime), new ChildAccountAuthResponse({}));
    }

  }

  /**
   * 子账号授权
   * 
   * @param request - ChildAccountAuthRequest
   * @returns ChildAccountAuthResponse
   */
  async childAccountAuth(request: ChildAccountAuthRequest): Promise<ChildAccountAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ChildAccountAuthHeaders({ });
    return await this.childAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间内设备
   * 
   * @param tmpReq - ControlRoomDeviceRequest
   * @param headers - ControlRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDeviceWithOptions(tmpReq: ControlRoomDeviceRequest, headers: ControlRoomDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<ControlRoomDeviceResponse> {
    tmpReq.validate();
    let request = new ControlRoomDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cmd)) {
      body["Cmd"] = request.cmd;
    }

    if (!$dara.isNull(request.deviceIndex)) {
      body["DeviceIndex"] = request.deviceIndex;
    }

    if (!$dara.isNull(request.deviceNumber)) {
      body["DeviceNumber"] = request.deviceNumber;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      body["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ControlRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/controlRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ControlRoomDeviceResponse>(await this.callApi(params, req, runtime), new ControlRoomDeviceResponse({}));
    } else {
      return $dara.cast<ControlRoomDeviceResponse>(await this.execute(params, req, runtime), new ControlRoomDeviceResponse({}));
    }

  }

  /**
   * 控制房间内设备
   * 
   * @param request - ControlRoomDeviceRequest
   * @returns ControlRoomDeviceResponse
   */
  async controlRoomDevice(request: ControlRoomDeviceRequest): Promise<ControlRoomDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ControlRoomDeviceHeaders({ });
    return await this.controlRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 创建酒店项目
   * 
   * @param tmpReq - CreateHotelRequest
   * @param headers - CreateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelResponse
   */
  async createHotelWithOptions(tmpReq: CreateHotelRequest, headers: CreateHotelHeaders, runtime: $dara.RuntimeOptions): Promise<CreateHotelResponse> {
    tmpReq.validate();
    let request = new CreateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!$dara.isNull(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.relatedPk)) {
      body["RelatedPk"] = request.relatedPk;
    }

    if (!$dara.isNull(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHotelResponse>(await this.callApi(params, req, runtime), new CreateHotelResponse({}));
    } else {
      return $dara.cast<CreateHotelResponse>(await this.execute(params, req, runtime), new CreateHotelResponse({}));
    }

  }

  /**
   * 创建酒店项目
   * 
   * @param request - CreateHotelRequest
   * @returns CreateHotelResponse
   */
  async createHotel(request: CreateHotelRequest): Promise<CreateHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateHotelHeaders({ });
    return await this.createHotelWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建闹钟
   * 
   * @param tmpReq - CreateHotelAlarmRequest
   * @param headers - CreateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarmWithOptions(tmpReq: CreateHotelAlarmRequest, headers: CreateHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<CreateHotelAlarmResponse> {
    tmpReq.validate();
    let request = new CreateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.musicType)) {
      body["MusicType"] = request.musicType;
    }

    if (!$dara.isNull(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    if (!$dara.isNull(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHotelAlarmResponse>(await this.callApi(params, req, runtime), new CreateHotelAlarmResponse({}));
    } else {
      return $dara.cast<CreateHotelAlarmResponse>(await this.execute(params, req, runtime), new CreateHotelAlarmResponse({}));
    }

  }

  /**
   * 批量创建闹钟
   * 
   * @param request - CreateHotelAlarmRequest
   * @returns CreateHotelAlarmResponse
   */
  async createHotelAlarm(request: CreateHotelAlarmRequest): Promise<CreateHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateHotelAlarmHeaders({ });
    return await this.createHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param tmpReq - CreateRcuSceneRequest
   * @param headers - CreateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRcuSceneResponse
   */
  async createRcuSceneWithOptions(tmpReq: CreateRcuSceneRequest, headers: CreateRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<CreateRcuSceneResponse> {
    tmpReq.validate();
    let request = new CreateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/createRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRcuSceneResponse>(await this.callApi(params, req, runtime), new CreateRcuSceneResponse({}));
    } else {
      return $dara.cast<CreateRcuSceneResponse>(await this.execute(params, req, runtime), new CreateRcuSceneResponse({}));
    }

  }

  /**
   * 酒店rcu自定义场景创建
   * 
   * @param request - CreateRcuSceneRequest
   * @returns CreateRcuSceneResponse
   */
  async createRcuScene(request: CreateRcuSceneRequest): Promise<CreateRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new CreateRcuSceneHeaders({ });
    return await this.createRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @param headers - DeleteCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCartoonResponse
   */
  async deleteCartoonWithOptions(request: DeleteCartoonRequest, headers: DeleteCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCartoonResponse>(await this.callApi(params, req, runtime), new DeleteCartoonResponse({}));
    } else {
      return $dara.cast<DeleteCartoonResponse>(await this.execute(params, req, runtime), new DeleteCartoonResponse({}));
    }

  }

  /**
   * 删除动画
   * 
   * @param request - DeleteCartoonRequest
   * @returns DeleteCartoonResponse
   */
  async deleteCartoon(request: DeleteCartoonRequest): Promise<DeleteCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteCartoonHeaders({ });
    return await this.deleteCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 删除自定义问答
   * 
   * @param tmpReq - DeleteCustomQARequest
   * @param headers - DeleteCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQAWithOptions(tmpReq: DeleteCustomQARequest, headers: DeleteCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteCustomQAResponse> {
    tmpReq.validate();
    let request = new DeleteCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customQAIds)) {
      request.customQAIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customQAIds, "CustomQAIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customQAIdsShrink)) {
      body["CustomQAIds"] = request.customQAIdsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomQAResponse>(await this.callApi(params, req, runtime), new DeleteCustomQAResponse({}));
    } else {
      return $dara.cast<DeleteCustomQAResponse>(await this.execute(params, req, runtime), new DeleteCustomQAResponse({}));
    }

  }

  /**
   * 删除自定义问答
   * 
   * @param request - DeleteCustomQARequest
   * @returns DeleteCustomQAResponse
   */
  async deleteCustomQA(request: DeleteCustomQARequest): Promise<DeleteCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteCustomQAHeaders({ });
    return await this.deleteCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店闹钟
   * 
   * @param tmpReq - DeleteHotelAlarmRequest
   * @param headers - DeleteHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarmWithOptions(tmpReq: DeleteHotelAlarmRequest, headers: DeleteHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteHotelAlarmResponse> {
    tmpReq.validate();
    let request = new DeleteHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHotelAlarmResponse>(await this.callApi(params, req, runtime), new DeleteHotelAlarmResponse({}));
    } else {
      return $dara.cast<DeleteHotelAlarmResponse>(await this.execute(params, req, runtime), new DeleteHotelAlarmResponse({}));
    }

  }

  /**
   * 删除酒店闹钟
   * 
   * @param request - DeleteHotelAlarmRequest
   * @returns DeleteHotelAlarmResponse
   */
  async deleteHotelAlarm(request: DeleteHotelAlarmRequest): Promise<DeleteHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteHotelAlarmHeaders({ });
    return await this.deleteHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @param headers - DeleteHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItemWithOptions(request: DeleteHotelSceneBookItemRequest, headers: DeleteHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteHotelSceneBookItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new DeleteHotelSceneBookItemResponse({}));
    } else {
      return $dara.cast<DeleteHotelSceneBookItemResponse>(await this.execute(params, req, runtime), new DeleteHotelSceneBookItemResponse({}));
    }

  }

  /**
   * 酒店场景预订删除
   * 
   * @param request - DeleteHotelSceneBookItemRequest
   * @returns DeleteHotelSceneBookItemResponse
   */
  async deleteHotelSceneBookItem(request: DeleteHotelSceneBookItemRequest): Promise<DeleteHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteHotelSceneBookItemHeaders({ });
    return await this.deleteHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @param headers - DeleteHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSettingWithOptions(request: DeleteHotelSettingRequest, headers: DeleteHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteHotelSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHotelSettingResponse>(await this.callApi(params, req, runtime), new DeleteHotelSettingResponse({}));
    } else {
      return $dara.cast<DeleteHotelSettingResponse>(await this.execute(params, req, runtime), new DeleteHotelSettingResponse({}));
    }

  }

  /**
   * 删除定制配置
   * 
   * @param request - DeleteHotelSettingRequest
   * @returns DeleteHotelSettingResponse
   */
  async deleteHotelSetting(request: DeleteHotelSettingRequest): Promise<DeleteHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteHotelSettingHeaders({ });
    return await this.deleteHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @param headers - DeleteMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplateWithOptions(request: DeleteMessageTemplateRequest, headers: DeleteMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMessageTemplateResponse>(await this.callApi(params, req, runtime), new DeleteMessageTemplateResponse({}));
    } else {
      return $dara.cast<DeleteMessageTemplateResponse>(await this.execute(params, req, runtime), new DeleteMessageTemplateResponse({}));
    }

  }

  /**
   * 删除消息通知模板
   * 
   * @param request - DeleteMessageTemplateRequest
   * @returns DeleteMessageTemplateResponse
   */
  async deleteMessageTemplate(request: DeleteMessageTemplateRequest): Promise<DeleteMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteMessageTemplateHeaders({ });
    return await this.deleteMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @param headers - DeleteRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuSceneWithOptions(request: DeleteRcuSceneRequest, headers: DeleteRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<DeleteRcuSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deleteRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRcuSceneResponse>(await this.callApi(params, req, runtime), new DeleteRcuSceneResponse({}));
    } else {
      return $dara.cast<DeleteRcuSceneResponse>(await this.execute(params, req, runtime), new DeleteRcuSceneResponse({}));
    }

  }

  /**
   * 删除酒店自定义rcu场景
   * 
   * @param request - DeleteRcuSceneRequest
   * @returns DeleteRcuSceneResponse
   */
  async deleteRcuScene(request: DeleteRcuSceneRequest): Promise<DeleteRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeleteRcuSceneHeaders({ });
    return await this.deleteRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 设备控制
   * 
   * @param tmpReq - DeviceControlRequest
   * @param headers - DeviceControlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceControlResponse
   */
  async deviceControlWithOptions(tmpReq: DeviceControlRequest, headers: DeviceControlHeaders, runtime: $dara.RuntimeOptions): Promise<DeviceControlResponse> {
    tmpReq.validate();
    let request = new DeviceControlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeviceControl",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/deviceControl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeviceControlResponse>(await this.callApi(params, req, runtime), new DeviceControlResponse({}));
    } else {
      return $dara.cast<DeviceControlResponse>(await this.execute(params, req, runtime), new DeviceControlResponse({}));
    }

  }

  /**
   * 设备控制
   * 
   * @param request - DeviceControlRequest
   * @returns DeviceControlResponse
   */
  async deviceControl(request: DeviceControlRequest): Promise<DeviceControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new DeviceControlHeaders({ });
    return await this.deviceControlWithOptions(request, headers, runtime);
  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @param headers - ExecuteSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSceneResponse
   */
  async executeSceneWithOptions(request: ExecuteSceneRequest, headers: ExecuteSceneHeaders, runtime: $dara.RuntimeOptions): Promise<ExecuteSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/executeScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExecuteSceneResponse>(await this.callApi(params, req, runtime), new ExecuteSceneResponse({}));
    } else {
      return $dara.cast<ExecuteSceneResponse>(await this.execute(params, req, runtime), new ExecuteSceneResponse({}));
    }

  }

  /**
   * 控制房间场景
   * 
   * @param request - ExecuteSceneRequest
   * @returns ExecuteSceneResponse
   */
  async executeScene(request: ExecuteSceneRequest): Promise<ExecuteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ExecuteSceneHeaders({ });
    return await this.executeSceneWithOptions(request, headers, runtime);
  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @param headers - GetBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQAWithOptions(request: GetBasicInfoQARequest, headers: GetBasicInfoQAHeaders, runtime: $dara.RuntimeOptions): Promise<GetBasicInfoQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBasicInfoQAResponse>(await this.callApi(params, req, runtime), new GetBasicInfoQAResponse({}));
    } else {
      return $dara.cast<GetBasicInfoQAResponse>(await this.execute(params, req, runtime), new GetBasicInfoQAResponse({}));
    }

  }

  /**
   * 获取基础信息问答
   * 
   * @param request - GetBasicInfoQARequest
   * @returns GetBasicInfoQAResponse
   */
  async getBasicInfoQA(request: GetBasicInfoQARequest): Promise<GetBasicInfoQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetBasicInfoQAHeaders({ });
    return await this.getBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @param headers - GetCartoonHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCartoonResponse
   */
  async getCartoonWithOptions(request: GetCartoonRequest, headers: GetCartoonHeaders, runtime: $dara.RuntimeOptions): Promise<GetCartoonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCartoon",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getCartoon`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCartoonResponse>(await this.callApi(params, req, runtime), new GetCartoonResponse({}));
    } else {
      return $dara.cast<GetCartoonResponse>(await this.execute(params, req, runtime), new GetCartoonResponse({}));
    }

  }

  /**
   * 查询动画
   * 
   * @param request - GetCartoonRequest
   * @returns GetCartoonResponse
   */
  async getCartoon(request: GetCartoonRequest): Promise<GetCartoonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetCartoonHeaders({ });
    return await this.getCartoonWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param tmpReq - GetHotelContactByGenieDeviceRequest
   * @param headers - GetHotelContactByGenieDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDeviceWithOptions(tmpReq: GetHotelContactByGenieDeviceRequest, headers: GetHotelContactByGenieDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelContactByGenieDeviceResponse> {
    tmpReq.validate();
    let request = new GetHotelContactByGenieDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContactByGenieDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByGenieDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelContactByGenieDeviceResponse>(await this.callApi(params, req, runtime), new GetHotelContactByGenieDeviceResponse({}));
    } else {
      return $dara.cast<GetHotelContactByGenieDeviceResponse>(await this.execute(params, req, runtime), new GetHotelContactByGenieDeviceResponse({}));
    }

  }

  /**
   * 获取当前设备的通话信息
   * 
   * @param request - GetHotelContactByGenieDeviceRequest
   * @returns GetHotelContactByGenieDeviceResponse
   */
  async getHotelContactByGenieDevice(request: GetHotelContactByGenieDeviceRequest): Promise<GetHotelContactByGenieDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelContactByGenieDeviceHeaders({ });
    return await this.getHotelContactByGenieDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactByNumberRequest
   * @param headers - GetHotelContactByNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumberWithOptions(tmpReq: GetHotelContactByNumberRequest, headers: GetHotelContactByNumberHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelContactByNumberResponse> {
    tmpReq.validate();
    let request = new GetHotelContactByNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContactByNumber",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContactByNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelContactByNumberResponse>(await this.callApi(params, req, runtime), new GetHotelContactByNumberResponse({}));
    } else {
      return $dara.cast<GetHotelContactByNumberResponse>(await this.execute(params, req, runtime), new GetHotelContactByNumberResponse({}));
    }

  }

  /**
   * 根据号码获取酒店联系人
   * 
   * @param request - GetHotelContactByNumberRequest
   * @returns GetHotelContactByNumberResponse
   */
  async getHotelContactByNumber(request: GetHotelContactByNumberRequest): Promise<GetHotelContactByNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelContactByNumberHeaders({ });
    return await this.getHotelContactByNumberWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店联系人
   * 
   * @param tmpReq - GetHotelContactsRequest
   * @param headers - GetHotelContactsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelContactsResponse
   */
  async getHotelContactsWithOptions(tmpReq: GetHotelContactsRequest, headers: GetHotelContactsHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelContactsResponse> {
    tmpReq.validate();
    let request = new GetHotelContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelContacts",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelContacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelContactsResponse>(await this.callApi(params, req, runtime), new GetHotelContactsResponse({}));
    } else {
      return $dara.cast<GetHotelContactsResponse>(await this.execute(params, req, runtime), new GetHotelContactsResponse({}));
    }

  }

  /**
   * 获取酒店联系人
   * 
   * @param request - GetHotelContactsRequest
   * @returns GetHotelContactsResponse
   */
  async getHotelContacts(request: GetHotelContactsRequest): Promise<GetHotelContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelContactsHeaders({ });
    return await this.getHotelContactsWithOptions(request, headers, runtime);
  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param tmpReq - GetHotelHomeBackImageAndModesRequest
   * @param headers - GetHotelHomeBackImageAndModesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModesWithOptions(tmpReq: GetHotelHomeBackImageAndModesRequest, headers: GetHotelHomeBackImageAndModesHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelHomeBackImageAndModesResponse> {
    tmpReq.validate();
    let request = new GetHotelHomeBackImageAndModesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelHomeBackImageAndModes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelHomeBackImageAndModes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelHomeBackImageAndModesResponse>(await this.callApi(params, req, runtime), new GetHotelHomeBackImageAndModesResponse({}));
    } else {
      return $dara.cast<GetHotelHomeBackImageAndModesResponse>(await this.execute(params, req, runtime), new GetHotelHomeBackImageAndModesResponse({}));
    }

  }

  /**
   * 获取首页背景图和场景模式
   * 
   * @param request - GetHotelHomeBackImageAndModesRequest
   * @returns GetHotelHomeBackImageAndModesResponse
   */
  async getHotelHomeBackImageAndModes(request: GetHotelHomeBackImageAndModesRequest): Promise<GetHotelHomeBackImageAndModesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelHomeBackImageAndModesHeaders({ });
    return await this.getHotelHomeBackImageAndModesWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeRequest
   * @param headers - GetHotelNoticeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeResponse
   */
  async getHotelNoticeWithOptions(tmpReq: GetHotelNoticeRequest, headers: GetHotelNoticeHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelNoticeResponse> {
    tmpReq.validate();
    let request = new GetHotelNoticeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelNotice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNotice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelNoticeResponse>(await this.callApi(params, req, runtime), new GetHotelNoticeResponse({}));
    } else {
      return $dara.cast<GetHotelNoticeResponse>(await this.execute(params, req, runtime), new GetHotelNoticeResponse({}));
    }

  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeRequest
   * @returns GetHotelNoticeResponse
   */
  async getHotelNotice(request: GetHotelNoticeRequest): Promise<GetHotelNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelNoticeHeaders({ });
    return await this.getHotelNoticeWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店通知
   * 
   * @param tmpReq - GetHotelNoticeV2Request
   * @param headers - GetHotelNoticeV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2WithOptions(tmpReq: GetHotelNoticeV2Request, headers: GetHotelNoticeV2Headers, runtime: $dara.RuntimeOptions): Promise<GetHotelNoticeV2Response> {
    tmpReq.validate();
    let request = new GetHotelNoticeV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelNoticeV2",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelNoticeV2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelNoticeV2Response>(await this.callApi(params, req, runtime), new GetHotelNoticeV2Response({}));
    } else {
      return $dara.cast<GetHotelNoticeV2Response>(await this.execute(params, req, runtime), new GetHotelNoticeV2Response({}));
    }

  }

  /**
   * 获取酒店通知
   * 
   * @param request - GetHotelNoticeV2Request
   * @returns GetHotelNoticeV2Response
   */
  async getHotelNoticeV2(request: GetHotelNoticeV2Request): Promise<GetHotelNoticeV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelNoticeV2Headers({ });
    return await this.getHotelNoticeV2WithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店订单详情
   * 
   * @param tmpReq - GetHotelOrderDetailRequest
   * @param headers - GetHotelOrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetailWithOptions(tmpReq: GetHotelOrderDetailRequest, headers: GetHotelOrderDetailHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelOrderDetailResponse> {
    tmpReq.validate();
    let request = new GetHotelOrderDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelOrderDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelOrderDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelOrderDetailResponse>(await this.callApi(params, req, runtime), new GetHotelOrderDetailResponse({}));
    } else {
      return $dara.cast<GetHotelOrderDetailResponse>(await this.execute(params, req, runtime), new GetHotelOrderDetailResponse({}));
    }

  }

  /**
   * 获取酒店订单详情
   * 
   * @param request - GetHotelOrderDetailRequest
   * @returns GetHotelOrderDetailResponse
   */
  async getHotelOrderDetail(request: GetHotelOrderDetailRequest): Promise<GetHotelOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelOrderDetailHeaders({ });
    return await this.getHotelOrderDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @param headers - GetHotelRoomDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDeviceWithOptions(request: GetHotelRoomDeviceRequest, headers: GetHotelRoomDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelRoomDeviceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelRoomDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelRoomDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelRoomDeviceResponse>(await this.callApi(params, req, runtime), new GetHotelRoomDeviceResponse({}));
    } else {
      return $dara.cast<GetHotelRoomDeviceResponse>(await this.execute(params, req, runtime), new GetHotelRoomDeviceResponse({}));
    }

  }

  /**
   * 获取酒店房间猫精设备信息
   * 
   * @param request - GetHotelRoomDeviceRequest
   * @returns GetHotelRoomDeviceResponse
   */
  async getHotelRoomDevice(request: GetHotelRoomDeviceRequest): Promise<GetHotelRoomDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelRoomDeviceHeaders({ });
    return await this.getHotelRoomDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取推荐语料
   * 
   * @param tmpReq - GetHotelSampleUtterancesRequest
   * @param headers - GetHotelSampleUtterancesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterancesWithOptions(tmpReq: GetHotelSampleUtterancesRequest, headers: GetHotelSampleUtterancesHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelSampleUtterancesResponse> {
    tmpReq.validate();
    let request = new GetHotelSampleUtterancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSampleUtterances",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSampleUtterances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelSampleUtterancesResponse>(await this.callApi(params, req, runtime), new GetHotelSampleUtterancesResponse({}));
    } else {
      return $dara.cast<GetHotelSampleUtterancesResponse>(await this.execute(params, req, runtime), new GetHotelSampleUtterancesResponse({}));
    }

  }

  /**
   * 获取推荐语料
   * 
   * @param request - GetHotelSampleUtterancesRequest
   * @returns GetHotelSampleUtterancesResponse
   */
  async getHotelSampleUtterances(request: GetHotelSampleUtterancesRequest): Promise<GetHotelSampleUtterancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelSampleUtterancesHeaders({ });
    return await this.getHotelSampleUtterancesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @param headers - GetHotelSceneItemDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetailWithOptions(request: GetHotelSceneItemDetailRequest, headers: GetHotelSceneItemDetailHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelSceneItemDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSceneItemDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSceneItemDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelSceneItemDetailResponse>(await this.callApi(params, req, runtime), new GetHotelSceneItemDetailResponse({}));
    } else {
      return $dara.cast<GetHotelSceneItemDetailResponse>(await this.execute(params, req, runtime), new GetHotelSceneItemDetailResponse({}));
    }

  }

  /**
   * 酒店场景详情
   * 
   * @param request - GetHotelSceneItemDetailRequest
   * @returns GetHotelSceneItemDetailResponse
   */
  async getHotelSceneItemDetail(request: GetHotelSceneItemDetailRequest): Promise<GetHotelSceneItemDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelSceneItemDetailHeaders({ });
    return await this.getHotelSceneItemDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店屏保
   * 
   * @param tmpReq - GetHotelScreenSaverRequest
   * @param headers - GetHotelScreenSaverHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaverWithOptions(tmpReq: GetHotelScreenSaverRequest, headers: GetHotelScreenSaverHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelScreenSaverResponse> {
    tmpReq.validate();
    let request = new GetHotelScreenSaverShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelScreenSaver",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaver`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelScreenSaverResponse>(await this.callApi(params, req, runtime), new GetHotelScreenSaverResponse({}));
    } else {
      return $dara.cast<GetHotelScreenSaverResponse>(await this.execute(params, req, runtime), new GetHotelScreenSaverResponse({}));
    }

  }

  /**
   * 获取酒店屏保
   * 
   * @param request - GetHotelScreenSaverRequest
   * @returns GetHotelScreenSaverResponse
   */
  async getHotelScreenSaver(request: GetHotelScreenSaverRequest): Promise<GetHotelScreenSaverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelScreenSaverHeaders({ });
    return await this.getHotelScreenSaverWithOptions(request, headers, runtime);
  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @param headers - GetHotelScreenSaverStyleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyleWithOptions(request: GetHotelScreenSaverStyleRequest, headers: GetHotelScreenSaverStyleHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelScreenSaverStyleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelScreenSaverStyle",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelScreenSaverStyle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelScreenSaverStyleResponse>(await this.callApi(params, req, runtime), new GetHotelScreenSaverStyleResponse({}));
    } else {
      return $dara.cast<GetHotelScreenSaverStyleResponse>(await this.execute(params, req, runtime), new GetHotelScreenSaverStyleResponse({}));
    }

  }

  /**
   * 获取屏保列表
   * 
   * @param request - GetHotelScreenSaverStyleRequest
   * @returns GetHotelScreenSaverStyleResponse
   */
  async getHotelScreenSaverStyle(request: GetHotelScreenSaverStyleRequest): Promise<GetHotelScreenSaverStyleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelScreenSaverStyleHeaders({ });
    return await this.getHotelScreenSaverStyleWithOptions(request, headers, runtime);
  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @param headers - GetHotelSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotelSettingResponse
   */
  async getHotelSettingWithOptions(request: GetHotelSettingRequest, headers: GetHotelSettingHeaders, runtime: $dara.RuntimeOptions): Promise<GetHotelSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.settingType)) {
      body["SettingType"] = request.settingType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotelSetting",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotelSettingResponse>(await this.callApi(params, req, runtime), new GetHotelSettingResponse({}));
    } else {
      return $dara.cast<GetHotelSettingResponse>(await this.execute(params, req, runtime), new GetHotelSettingResponse({}));
    }

  }

  /**
   * 查询定制配置
   * 
   * @param request - GetHotelSettingRequest
   * @returns GetHotelSettingResponse
   */
  async getHotelSetting(request: GetHotelSettingRequest): Promise<GetHotelSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetHotelSettingHeaders({ });
    return await this.getHotelSettingWithOptions(request, headers, runtime);
  }

  /**
   * 关联产品列表查看
   * 
   * @param headers - GetRelationProductListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRelationProductListResponse
   */
  async getRelationProductListWithOptions(headers: GetRelationProductListHeaders, runtime: $dara.RuntimeOptions): Promise<GetRelationProductListResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRelationProductList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getRelationProductList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRelationProductListResponse>(await this.callApi(params, req, runtime), new GetRelationProductListResponse({}));
    } else {
      return $dara.cast<GetRelationProductListResponse>(await this.execute(params, req, runtime), new GetRelationProductListResponse({}));
    }

  }

  /**
   * 关联产品列表查看
   * @returns GetRelationProductListResponse
   */
  async getRelationProductList(): Promise<GetRelationProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetRelationProductListHeaders({ });
    return await this.getRelationProductListWithOptions(headers, runtime);
  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @param headers - GetUnionIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnionIdResponse
   */
  async getUnionIdWithOptions(request: GetUnionIdRequest, headers: GetUnionIdHeaders, runtime: $dara.RuntimeOptions): Promise<GetUnionIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encodeKey)) {
      body["EncodeKey"] = request.encodeKey;
    }

    if (!$dara.isNull(request.encodeType)) {
      body["EncodeType"] = request.encodeType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.idType)) {
      body["IdType"] = request.idType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUnionId",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getUnionId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetUnionIdResponse>(await this.callApi(params, req, runtime), new GetUnionIdResponse({}));
    } else {
      return $dara.cast<GetUnionIdResponse>(await this.execute(params, req, runtime), new GetUnionIdResponse({}));
    }

  }

  /**
   * 获取组织下unionId列表
   * 
   * @param request - GetUnionIdRequest
   * @returns GetUnionIdResponse
   */
  async getUnionId(request: GetUnionIdRequest): Promise<GetUnionIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetUnionIdHeaders({ });
    return await this.getUnionIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @param headers - GetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusicWithOptions(request: GetWelcomeTextAndMusicRequest, headers: GetWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<GetWelcomeTextAndMusicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new GetWelcomeTextAndMusicResponse({}));
    } else {
      return $dara.cast<GetWelcomeTextAndMusicResponse>(await this.execute(params, req, runtime), new GetWelcomeTextAndMusicResponse({}));
    }

  }

  /**
   * 查询欢迎语信息
   * 
   * @param request - GetWelcomeTextAndMusicRequest
   * @returns GetWelcomeTextAndMusicResponse
   */
  async getWelcomeTextAndMusic(request: GetWelcomeTextAndMusicRequest): Promise<GetWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetWelcomeTextAndMusicHeaders({ });
    return await this.getWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @param headers - HotelQrBindHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotelQrBindResponse
   */
  async hotelQrBindWithOptions(request: HotelQrBindRequest, headers: HotelQrBindHeaders, runtime: $dara.RuntimeOptions): Promise<HotelQrBindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotelQrBind",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/hotelQrBind`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<HotelQrBindResponse>(await this.callApi(params, req, runtime), new HotelQrBindResponse({}));
    } else {
      return $dara.cast<HotelQrBindResponse>(await this.execute(params, req, runtime), new HotelQrBindResponse({}));
    }

  }

  /**
   * 酒店带屏设备扫码绑定
   * 
   * @param request - HotelQrBindRequest
   * @returns HotelQrBindResponse
   */
  async hotelQrBind(request: HotelQrBindRequest): Promise<HotelQrBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new HotelQrBindHeaders({ });
    return await this.hotelQrBindWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入酒店配置
   * 
   * @param tmpReq - ImportHotelConfigRequest
   * @param headers - ImportHotelConfigHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfigWithOptions(tmpReq: ImportHotelConfigRequest, headers: ImportHotelConfigHeaders, runtime: $dara.RuntimeOptions): Promise<ImportHotelConfigResponse> {
    tmpReq.validate();
    let request = new ImportHotelConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.importHotelConfig)) {
      request.importHotelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importHotelConfig, "ImportHotelConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.importHotelConfigShrink)) {
      body["ImportHotelConfig"] = request.importHotelConfigShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportHotelConfig",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importHotelConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportHotelConfigResponse>(await this.callApi(params, req, runtime), new ImportHotelConfigResponse({}));
    } else {
      return $dara.cast<ImportHotelConfigResponse>(await this.execute(params, req, runtime), new ImportHotelConfigResponse({}));
    }

  }

  /**
   * 批量导入酒店配置
   * 
   * @param request - ImportHotelConfigRequest
   * @returns ImportHotelConfigResponse
   */
  async importHotelConfig(request: ImportHotelConfigRequest): Promise<ImportHotelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ImportHotelConfigHeaders({ });
    return await this.importHotelConfigWithOptions(request, headers, runtime);
  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param tmpReq - ImportRoomControlDevicesRequest
   * @param headers - ImportRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevicesWithOptions(tmpReq: ImportRoomControlDevicesRequest, headers: ImportRoomControlDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<ImportRoomControlDevicesResponse> {
    tmpReq.validate();
    let request = new ImportRoomControlDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.locationDevices)) {
      request.locationDevicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDevices, "LocationDevices", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableInfraredDeviceImport)) {
      body["EnableInfraredDeviceImport"] = request.enableInfraredDeviceImport;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.locationDevicesShrink)) {
      body["LocationDevices"] = request.locationDevicesShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new ImportRoomControlDevicesResponse({}));
    } else {
      return $dara.cast<ImportRoomControlDevicesResponse>(await this.execute(params, req, runtime), new ImportRoomControlDevicesResponse({}));
    }

  }

  /**
   * 批量导入设备（同时补充房型）
   * 
   * @param request - ImportRoomControlDevicesRequest
   * @returns ImportRoomControlDevicesResponse
   */
  async importRoomControlDevices(request: ImportRoomControlDevicesRequest): Promise<ImportRoomControlDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ImportRoomControlDevicesHeaders({ });
    return await this.importRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 导入房间内精灵场景
   * 
   * @param tmpReq - ImportRoomGenieScenesRequest
   * @param headers - ImportRoomGenieScenesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenesWithOptions(tmpReq: ImportRoomGenieScenesRequest, headers: ImportRoomGenieScenesHeaders, runtime: $dara.RuntimeOptions): Promise<ImportRoomGenieScenesResponse> {
    tmpReq.validate();
    let request = new ImportRoomGenieScenesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneList)) {
      request.sceneListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneList, "SceneList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sceneListShrink)) {
      body["SceneList"] = request.sceneListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportRoomGenieScenes",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/importRoomGenieScenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportRoomGenieScenesResponse>(await this.callApi(params, req, runtime), new ImportRoomGenieScenesResponse({}));
    } else {
      return $dara.cast<ImportRoomGenieScenesResponse>(await this.execute(params, req, runtime), new ImportRoomGenieScenesResponse({}));
    }

  }

  /**
   * 导入房间内精灵场景
   * 
   * @param request - ImportRoomGenieScenesRequest
   * @returns ImportRoomGenieScenesResponse
   */
  async importRoomGenieScenes(request: ImportRoomGenieScenesRequest): Promise<ImportRoomGenieScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ImportRoomGenieScenesHeaders({ });
    return await this.importRoomGenieScenesWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订新增
   * 
   * @param tmpReq - InsertHotelSceneBookItemRequest
   * @param headers - InsertHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItemWithOptions(tmpReq: InsertHotelSceneBookItemRequest, headers: InsertHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<InsertHotelSceneBookItemResponse> {
    tmpReq.validate();
    let request = new InsertHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addHotelSceneItemReq)) {
      request.addHotelSceneItemReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addHotelSceneItemReq, "AddHotelSceneItemReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addHotelSceneItemReqShrink)) {
      query["AddHotelSceneItemReq"] = request.addHotelSceneItemReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/insertHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InsertHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new InsertHotelSceneBookItemResponse({}));
    } else {
      return $dara.cast<InsertHotelSceneBookItemResponse>(await this.execute(params, req, runtime), new InsertHotelSceneBookItemResponse({}));
    }

  }

  /**
   * 酒店场景预订新增
   * 
   * @param request - InsertHotelSceneBookItemRequest
   * @returns InsertHotelSceneBookItemResponse
   */
  async insertHotelSceneBookItem(request: InsertHotelSceneBookItemRequest): Promise<InsertHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new InsertHotelSceneBookItemHeaders({ });
    return await this.insertHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @param headers - InvokeRobotPushHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPushWithOptions(request: InvokeRobotPushRequest, headers: InvokeRobotPushHeaders, runtime: $dara.RuntimeOptions): Promise<InvokeRobotPushResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.pushType)) {
      body["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeRobotPush",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/invokeRobotPush`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvokeRobotPushResponse>(await this.callApi(params, req, runtime), new InvokeRobotPushResponse({}));
    } else {
      return $dara.cast<InvokeRobotPushResponse>(await this.execute(params, req, runtime), new InvokeRobotPushResponse({}));
    }

  }

  /**
   * 机器人服务，消息推送
   * 
   * @param request - InvokeRobotPushRequest
   * @returns InvokeRobotPushResponse
   */
  async invokeRobotPush(request: InvokeRobotPushRequest): Promise<InvokeRobotPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new InvokeRobotPushHeaders({ });
    return await this.invokeRobotPushWithOptions(request, headers, runtime);
  }

  /**
   * 查询省份
   * 
   * @param headers - ListAllProvincesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProvincesResponse
   */
  async listAllProvincesWithOptions(headers: ListAllProvincesHeaders, runtime: $dara.RuntimeOptions): Promise<ListAllProvincesResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllProvinces",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listAllProvinces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAllProvincesResponse>(await this.callApi(params, req, runtime), new ListAllProvincesResponse({}));
    } else {
      return $dara.cast<ListAllProvincesResponse>(await this.execute(params, req, runtime), new ListAllProvincesResponse({}));
    }

  }

  /**
   * 查询省份
   * @returns ListAllProvincesResponse
   */
  async listAllProvinces(): Promise<ListAllProvincesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListAllProvincesHeaders({ });
    return await this.listAllProvincesWithOptions(headers, runtime);
  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @param headers - ListCitiesByProvinceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvinceWithOptions(request: ListCitiesByProvinceRequest, headers: ListCitiesByProvinceHeaders, runtime: $dara.RuntimeOptions): Promise<ListCitiesByProvinceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCitiesByProvince",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCitiesByProvince`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCitiesByProvinceResponse>(await this.callApi(params, req, runtime), new ListCitiesByProvinceResponse({}));
    } else {
      return $dara.cast<ListCitiesByProvinceResponse>(await this.execute(params, req, runtime), new ListCitiesByProvinceResponse({}));
    }

  }

  /**
   * 查询城市
   * 
   * @param request - ListCitiesByProvinceRequest
   * @returns ListCitiesByProvinceResponse
   */
  async listCitiesByProvince(request: ListCitiesByProvinceRequest): Promise<ListCitiesByProvinceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListCitiesByProvinceHeaders({ });
    return await this.listCitiesByProvinceWithOptions(request, headers, runtime);
  }

  /**
   * 查询自定义问答列表
   * 
   * @param tmpReq - ListCustomQARequest
   * @param headers - ListCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomQAResponse
   */
  async listCustomQAWithOptions(tmpReq: ListCustomQARequest, headers: ListCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<ListCustomQAResponse> {
    tmpReq.validate();
    let request = new ListCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCustomQAResponse>(await this.callApi(params, req, runtime), new ListCustomQAResponse({}));
    } else {
      return $dara.cast<ListCustomQAResponse>(await this.execute(params, req, runtime), new ListCustomQAResponse({}));
    }

  }

  /**
   * 查询自定义问答列表
   * 
   * @param request - ListCustomQARequest
   * @returns ListCustomQAResponse
   */
  async listCustomQA(request: ListCustomQARequest): Promise<ListCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListCustomQAHeaders({ });
    return await this.listCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @param headers - ListDialogueTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplateWithOptions(request: ListDialogueTemplateRequest, headers: ListDialogueTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<ListDialogueTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialogueTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listDialogueTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDialogueTemplateResponse>(await this.callApi(params, req, runtime), new ListDialogueTemplateResponse({}));
    } else {
      return $dara.cast<ListDialogueTemplateResponse>(await this.execute(params, req, runtime), new ListDialogueTemplateResponse({}));
    }

  }

  /**
   * 酒店场景对话模板
   * 
   * @param request - ListDialogueTemplateRequest
   * @returns ListDialogueTemplateResponse
   */
  async listDialogueTemplate(request: ListDialogueTemplateRequest): Promise<ListDialogueTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListDialogueTemplateHeaders({ });
    return await this.listDialogueTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店闹钟
   * 
   * @param tmpReq - ListHotelAlarmRequest
   * @param headers - ListHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarmWithOptions(tmpReq: ListHotelAlarmRequest, headers: ListHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelAlarmResponse> {
    tmpReq.validate();
    let request = new ListHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rooms)) {
      request.roomsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rooms, "Rooms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomsShrink)) {
      body["Rooms"] = request.roomsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/getHotelAlarmList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelAlarmResponse>(await this.callApi(params, req, runtime), new ListHotelAlarmResponse({}));
    } else {
      return $dara.cast<ListHotelAlarmResponse>(await this.execute(params, req, runtime), new ListHotelAlarmResponse({}));
    }

  }

  /**
   * 查询酒店闹钟
   * 
   * @param request - ListHotelAlarmRequest
   * @returns ListHotelAlarmResponse
   */
  async listHotelAlarm(request: ListHotelAlarmRequest): Promise<ListHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelAlarmHeaders({ });
    return await this.listHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店设备列表
   * 
   * @param tmpReq - ListHotelControlDeviceRequest
   * @param headers - ListHotelControlDeviceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDeviceWithOptions(tmpReq: ListHotelControlDeviceRequest, headers: ListHotelControlDeviceHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelControlDeviceResponse> {
    tmpReq.validate();
    let request = new ListHotelControlDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelControlDevice",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelControlDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelControlDeviceResponse>(await this.callApi(params, req, runtime), new ListHotelControlDeviceResponse({}));
    } else {
      return $dara.cast<ListHotelControlDeviceResponse>(await this.execute(params, req, runtime), new ListHotelControlDeviceResponse({}));
    }

  }

  /**
   * 酒店设备列表
   * 
   * @param request - ListHotelControlDeviceRequest
   * @returns ListHotelControlDeviceResponse
   */
  async listHotelControlDevice(request: ListHotelControlDeviceRequest): Promise<ListHotelControlDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelControlDeviceHeaders({ });
    return await this.listHotelControlDeviceWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店列表
   * 
   * @param headers - ListHotelInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelInfoResponse
   */
  async listHotelInfoWithOptions(headers: ListHotelInfoHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelInfoResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelInfo",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelInfoResponse>(await this.callApi(params, req, runtime), new ListHotelInfoResponse({}));
    } else {
      return $dara.cast<ListHotelInfoResponse>(await this.execute(params, req, runtime), new ListHotelInfoResponse({}));
    }

  }

  /**
   * 获取酒店列表
   * @returns ListHotelInfoResponse
   */
  async listHotelInfo(): Promise<ListHotelInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelInfoHeaders({ });
    return await this.listHotelInfoWithOptions(headers, runtime);
  }

  /**
   * 获取消息模板
   * 
   * @param headers - ListHotelMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplateWithOptions(headers: ListHotelMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelMessageTemplateResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelMessageTemplateResponse>(await this.callApi(params, req, runtime), new ListHotelMessageTemplateResponse({}));
    } else {
      return $dara.cast<ListHotelMessageTemplateResponse>(await this.execute(params, req, runtime), new ListHotelMessageTemplateResponse({}));
    }

  }

  /**
   * 获取消息模板
   * @returns ListHotelMessageTemplateResponse
   */
  async listHotelMessageTemplate(): Promise<ListHotelMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelMessageTemplateHeaders({ });
    return await this.listHotelMessageTemplateWithOptions(headers, runtime);
  }

  /**
   * 酒店订单列表
   * 
   * @param tmpReq - ListHotelOrderRequest
   * @param headers - ListHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelOrderResponse
   */
  async listHotelOrderWithOptions(tmpReq: ListHotelOrderRequest, headers: ListHotelOrderHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelOrderResponse> {
    tmpReq.validate();
    let request = new ListHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelOrderResponse>(await this.callApi(params, req, runtime), new ListHotelOrderResponse({}));
    } else {
      return $dara.cast<ListHotelOrderResponse>(await this.execute(params, req, runtime), new ListHotelOrderResponse({}));
    }

  }

  /**
   * 酒店订单列表
   * 
   * @param request - ListHotelOrderRequest
   * @returns ListHotelOrderResponse
   */
  async listHotelOrder(request: ListHotelOrderRequest): Promise<ListHotelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelOrderHeaders({ });
    return await this.listHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 获取酒店的所有房间
   * 
   * @param tmpReq - ListHotelRoomsRequest
   * @param headers - ListHotelRoomsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelRoomsResponse
   */
  async listHotelRoomsWithOptions(tmpReq: ListHotelRoomsRequest, headers: ListHotelRoomsHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelRoomsResponse> {
    tmpReq.validate();
    let request = new ListHotelRoomsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelAdminRoom)) {
      request.hotelAdminRoomShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelAdminRoom, "HotelAdminRoom", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelAdminRoomShrink)) {
      body["HotelAdminRoom"] = request.hotelAdminRoomShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelRooms",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelRooms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelRoomsResponse>(await this.callApi(params, req, runtime), new ListHotelRoomsResponse({}));
    } else {
      return $dara.cast<ListHotelRoomsResponse>(await this.execute(params, req, runtime), new ListHotelRoomsResponse({}));
    }

  }

  /**
   * 获取酒店的所有房间
   * 
   * @param request - ListHotelRoomsRequest
   * @returns ListHotelRoomsResponse
   */
  async listHotelRooms(request: ListHotelRoomsRequest): Promise<ListHotelRoomsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelRoomsHeaders({ });
    return await this.listHotelRoomsWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param tmpReq - ListHotelSceneBookItemsRequest
   * @param headers - ListHotelSceneBookItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItemsWithOptions(tmpReq: ListHotelSceneBookItemsRequest, headers: ListHotelSceneBookItemsHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelSceneBookItemsResponse> {
    tmpReq.validate();
    let request = new ListHotelSceneBookItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneBookItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneBookItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelSceneBookItemsResponse>(await this.callApi(params, req, runtime), new ListHotelSceneBookItemsResponse({}));
    } else {
      return $dara.cast<ListHotelSceneBookItemsResponse>(await this.execute(params, req, runtime), new ListHotelSceneBookItemsResponse({}));
    }

  }

  /**
   * 酒店场景预订列表（餐饮/SPA休闲/打车）
   * 
   * @param request - ListHotelSceneBookItemsRequest
   * @returns ListHotelSceneBookItemsResponse
   */
  async listHotelSceneBookItems(request: ListHotelSceneBookItemsRequest): Promise<ListHotelSceneBookItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelSceneBookItemsHeaders({ });
    return await this.listHotelSceneBookItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务项目
   * 
   * @param tmpReq - ListHotelSceneItemRequest
   * @param headers - ListHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItemWithOptions(tmpReq: ListHotelSceneItemRequest, headers: ListHotelSceneItemHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelSceneItemResponse> {
    tmpReq.validate();
    let request = new ListHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelSceneItemResponse>(await this.callApi(params, req, runtime), new ListHotelSceneItemResponse({}));
    } else {
      return $dara.cast<ListHotelSceneItemResponse>(await this.execute(params, req, runtime), new ListHotelSceneItemResponse({}));
    }

  }

  /**
   * 服务项目
   * 
   * @param request - ListHotelSceneItemRequest
   * @returns ListHotelSceneItemResponse
   */
  async listHotelSceneItem(request: ListHotelSceneItemRequest): Promise<ListHotelSceneItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelSceneItemHeaders({ });
    return await this.listHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param tmpReq - ListHotelSceneItemsRequest
   * @param headers - ListHotelSceneItemsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItemsWithOptions(tmpReq: ListHotelSceneItemsRequest, headers: ListHotelSceneItemsHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelSceneItemsResponse> {
    tmpReq.validate();
    let request = new ListHotelSceneItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listHotelSceneReq)) {
      request.listHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listHotelSceneReq, "ListHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listHotelSceneReqShrink)) {
      query["ListHotelSceneReq"] = request.listHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelSceneItems",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelSceneItems`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelSceneItemsResponse>(await this.callApi(params, req, runtime), new ListHotelSceneItemsResponse({}));
    } else {
      return $dara.cast<ListHotelSceneItemsResponse>(await this.execute(params, req, runtime), new ListHotelSceneItemsResponse({}));
    }

  }

  /**
   * 酒店场景列表（物品/服务/维修）
   * 
   * @param request - ListHotelSceneItemsRequest
   * @returns ListHotelSceneItemsResponse
   */
  async listHotelSceneItems(request: ListHotelSceneItemsRequest): Promise<ListHotelSceneItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelSceneItemsHeaders({ });
    return await this.listHotelSceneItemsWithOptions(request, headers, runtime);
  }

  /**
   * 服务分类列表
   * 
   * @param tmpReq - ListHotelServiceCategoryRequest
   * @param headers - ListHotelServiceCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategoryWithOptions(tmpReq: ListHotelServiceCategoryRequest, headers: ListHotelServiceCategoryHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelServiceCategoryResponse> {
    tmpReq.validate();
    let request = new ListHotelServiceCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotelServiceCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotelServiceCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelServiceCategoryResponse>(await this.callApi(params, req, runtime), new ListHotelServiceCategoryResponse({}));
    } else {
      return $dara.cast<ListHotelServiceCategoryResponse>(await this.execute(params, req, runtime), new ListHotelServiceCategoryResponse({}));
    }

  }

  /**
   * 服务分类列表
   * 
   * @param request - ListHotelServiceCategoryRequest
   * @returns ListHotelServiceCategoryResponse
   */
  async listHotelServiceCategory(request: ListHotelServiceCategoryRequest): Promise<ListHotelServiceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelServiceCategoryHeaders({ });
    return await this.listHotelServiceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param tmpReq - ListHotelsRequest
   * @param headers - ListHotelsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotelsResponse
   */
  async listHotelsWithOptions(tmpReq: ListHotelsRequest, headers: ListHotelsHeaders, runtime: $dara.RuntimeOptions): Promise<ListHotelsResponse> {
    tmpReq.validate();
    let request = new ListHotelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotelRequest)) {
      request.hotelRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotelRequest, "HotelRequest", "json");
    }

    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelRequestShrink)) {
      query["HotelRequest"] = request.hotelRequestShrink;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotels",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listHotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHotelsResponse>(await this.callApi(params, req, runtime), new ListHotelsResponse({}));
    } else {
      return $dara.cast<ListHotelsResponse>(await this.execute(params, req, runtime), new ListHotelsResponse({}));
    }

  }

  /**
   * 酒店列表(待审批/已拒绝/已通过)
   * 
   * @param request - ListHotelsRequest
   * @returns ListHotelsResponse
   */
  async listHotels(request: ListHotelsRequest): Promise<ListHotelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListHotelsHeaders({ });
    return await this.listHotelsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @param headers - ListInfraredDeviceBrandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrandsWithOptions(request: ListInfraredDeviceBrandsRequest, headers: ListInfraredDeviceBrandsHeaders, runtime: $dara.RuntimeOptions): Promise<ListInfraredDeviceBrandsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInfraredDeviceBrands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredDeviceBrands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInfraredDeviceBrandsResponse>(await this.callApi(params, req, runtime), new ListInfraredDeviceBrandsResponse({}));
    } else {
      return $dara.cast<ListInfraredDeviceBrandsResponse>(await this.execute(params, req, runtime), new ListInfraredDeviceBrandsResponse({}));
    }

  }

  /**
   * 查询红外品牌列表
   * 
   * @param request - ListInfraredDeviceBrandsRequest
   * @returns ListInfraredDeviceBrandsResponse
   */
  async listInfraredDeviceBrands(request: ListInfraredDeviceBrandsRequest): Promise<ListInfraredDeviceBrandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListInfraredDeviceBrandsHeaders({ });
    return await this.listInfraredDeviceBrandsWithOptions(request, headers, runtime);
  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @param headers - ListInfraredRemoteControllersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllersWithOptions(request: ListInfraredRemoteControllersRequest, headers: ListInfraredRemoteControllersHeaders, runtime: $dara.RuntimeOptions): Promise<ListInfraredRemoteControllersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    if (!$dara.isNull(request.serviceProvider)) {
      body["ServiceProvider"] = request.serviceProvider;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInfraredRemoteControllers",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listInfraredRemoteControllers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInfraredRemoteControllersResponse>(await this.callApi(params, req, runtime), new ListInfraredRemoteControllersResponse({}));
    } else {
      return $dara.cast<ListInfraredRemoteControllersResponse>(await this.execute(params, req, runtime), new ListInfraredRemoteControllersResponse({}));
    }

  }

  /**
   * 查询红外码库列表
   * 
   * @param request - ListInfraredRemoteControllersRequest
   * @returns ListInfraredRemoteControllersResponse
   */
  async listInfraredRemoteControllers(request: ListInfraredRemoteControllersRequest): Promise<ListInfraredRemoteControllersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListInfraredRemoteControllersHeaders({ });
    return await this.listInfraredRemoteControllersWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @param headers - ListSTBServiceProvidersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProvidersWithOptions(request: ListSTBServiceProvidersRequest, headers: ListSTBServiceProvidersHeaders, runtime: $dara.RuntimeOptions): Promise<ListSTBServiceProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.province)) {
      body["Province"] = request.province;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSTBServiceProviders",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSTBServiceProviders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSTBServiceProvidersResponse>(await this.callApi(params, req, runtime), new ListSTBServiceProvidersResponse({}));
    } else {
      return $dara.cast<ListSTBServiceProvidersResponse>(await this.execute(params, req, runtime), new ListSTBServiceProvidersResponse({}));
    }

  }

  /**
   * 查询服务提供商
   * 
   * @param request - ListSTBServiceProvidersRequest
   * @returns ListSTBServiceProvidersResponse
   */
  async listSTBServiceProviders(request: ListSTBServiceProvidersRequest): Promise<ListSTBServiceProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListSTBServiceProvidersHeaders({ });
    return await this.listSTBServiceProvidersWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @param headers - ListSceneCategoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategoryWithOptions(request: ListSceneCategoryRequest, headers: ListSceneCategoryHeaders, runtime: $dara.RuntimeOptions): Promise<ListSceneCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSceneCategory",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listSceneCategory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSceneCategoryResponse>(await this.callApi(params, req, runtime), new ListSceneCategoryResponse({}));
    } else {
      return $dara.cast<ListSceneCategoryResponse>(await this.execute(params, req, runtime), new ListSceneCategoryResponse({}));
    }

  }

  /**
   * 酒店场景分类
   * 
   * @param request - ListSceneCategoryRequest
   * @returns ListSceneCategoryResponse
   */
  async listSceneCategory(request: ListSceneCategoryRequest): Promise<ListSceneCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListSceneCategoryHeaders({ });
    return await this.listSceneCategoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务设施问答列表
   * 
   * @param tmpReq - ListServiceQARequest
   * @param headers - ListServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceQAResponse
   */
  async listServiceQAWithOptions(tmpReq: ListServiceQARequest, headers: ListServiceQAHeaders, runtime: $dara.RuntimeOptions): Promise<ListServiceQAResponse> {
    tmpReq.validate();
    let request = new ListServiceQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceQAResponse>(await this.callApi(params, req, runtime), new ListServiceQAResponse({}));
    } else {
      return $dara.cast<ListServiceQAResponse>(await this.execute(params, req, runtime), new ListServiceQAResponse({}));
    }

  }

  /**
   * 查询服务设施问答列表
   * 
   * @param request - ListServiceQARequest
   * @returns ListServiceQAResponse
   */
  async listServiceQA(request: ListServiceQARequest): Promise<ListServiceQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListServiceQAHeaders({ });
    return await this.listServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 查询工单列表
   * 
   * @param tmpReq - ListTicketsRequest
   * @param headers - ListTicketsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(tmpReq: ListTicketsRequest, headers: ListTicketsHeaders, runtime: $dara.RuntimeOptions): Promise<ListTicketsResponse> {
    tmpReq.validate();
    let request = new ListTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.isDesc)) {
      body["IsDesc"] = request.isDesc;
    }

    if (!$dara.isNull(request.isNeedCallback)) {
      body["IsNeedCallback"] = request.isNeedCallback;
    }

    if (!$dara.isNull(request.isNeedCharges)) {
      body["IsNeedCharges"] = request.isNeedCharges;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/listTickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTicketsResponse>(await this.callApi(params, req, runtime), new ListTicketsResponse({}));
    } else {
      return $dara.cast<ListTicketsResponse>(await this.execute(params, req, runtime), new ListTicketsResponse({}));
    }

  }

  /**
   * 查询工单列表
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  async listTickets(request: ListTicketsRequest): Promise<ListTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ListTicketsHeaders({ });
    return await this.listTicketsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @param headers - PageGetHotelRoomDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevicesWithOptions(request: PageGetHotelRoomDevicesRequest, headers: PageGetHotelRoomDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<PageGetHotelRoomDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageGetHotelRoomDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pageGetHotelRoomDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PageGetHotelRoomDevicesResponse>(await this.callApi(params, req, runtime), new PageGetHotelRoomDevicesResponse({}));
    } else {
      return $dara.cast<PageGetHotelRoomDevicesResponse>(await this.execute(params, req, runtime), new PageGetHotelRoomDevicesResponse({}));
    }

  }

  /**
   * 分页查询酒店房间主控设备
   * 
   * @param request - PageGetHotelRoomDevicesRequest
   * @returns PageGetHotelRoomDevicesResponse
   */
  async pageGetHotelRoomDevices(request: PageGetHotelRoomDevicesRequest): Promise<PageGetHotelRoomDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PageGetHotelRoomDevicesHeaders({ });
    return await this.pageGetHotelRoomDevicesWithOptions(request, headers, runtime);
  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @param headers - PmsEventReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PmsEventReportResponse
   */
  async pmsEventReportWithOptions(request: PmsEventReportRequest, headers: PmsEventReportHeaders, runtime: $dara.RuntimeOptions): Promise<PmsEventReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PmsEventReport",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pmsEventReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PmsEventReportResponse>(await this.callApi(params, req, runtime), new PmsEventReportResponse({}));
    } else {
      return $dara.cast<PmsEventReportResponse>(await this.execute(params, req, runtime), new PmsEventReportResponse({}));
    }

  }

  /**
   * pms事件上报
   * 
   * @param request - PmsEventReportRequest
   * @returns PmsEventReportResponse
   */
  async pmsEventReport(request: PmsEventReportRequest): Promise<PmsEventReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PmsEventReportHeaders({ });
    return await this.pmsEventReportWithOptions(request, headers, runtime);
  }

  /**
   * 推送酒店消息
   * 
   * @param tmpReq - PushHotelMessageRequest
   * @param headers - PushHotelMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessageWithOptions(tmpReq: PushHotelMessageRequest, headers: PushHotelMessageHeaders, runtime: $dara.RuntimeOptions): Promise<PushHotelMessageResponse> {
    tmpReq.validate();
    let request = new PushHotelMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pushHotelMessageReq)) {
      request.pushHotelMessageReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pushHotelMessageReq, "PushHotelMessageReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pushHotelMessageReqShrink)) {
      query["PushHotelMessageReq"] = request.pushHotelMessageReqShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushHotelMessage",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushHotelMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushHotelMessageResponse>(await this.callApi(params, req, runtime), new PushHotelMessageResponse({}));
    } else {
      return $dara.cast<PushHotelMessageResponse>(await this.execute(params, req, runtime), new PushHotelMessageResponse({}));
    }

  }

  /**
   * 推送酒店消息
   * 
   * @param request - PushHotelMessageRequest
   * @returns PushHotelMessageResponse
   */
  async pushHotelMessage(request: PushHotelMessageRequest): Promise<PushHotelMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PushHotelMessageHeaders({ });
    return await this.pushHotelMessageWithOptions(request, headers, runtime);
  }

  /**
   * 推送音箱指令
   * 
   * @param tmpReq - PushVoiceBoxCommandsRequest
   * @param headers - PushVoiceBoxCommandsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommandsWithOptions(tmpReq: PushVoiceBoxCommandsRequest, headers: PushVoiceBoxCommandsHeaders, runtime: $dara.RuntimeOptions): Promise<PushVoiceBoxCommandsResponse> {
    tmpReq.validate();
    let request = new PushVoiceBoxCommandsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commands)) {
      request.commandsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commands, "Commands", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commandsShrink)) {
      body["Commands"] = request.commandsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushVoiceBoxCommands",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushVoiceBoxCommands`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushVoiceBoxCommandsResponse>(await this.callApi(params, req, runtime), new PushVoiceBoxCommandsResponse({}));
    } else {
      return $dara.cast<PushVoiceBoxCommandsResponse>(await this.execute(params, req, runtime), new PushVoiceBoxCommandsResponse({}));
    }

  }

  /**
   * 推送音箱指令
   * 
   * @param request - PushVoiceBoxCommandsRequest
   * @returns PushVoiceBoxCommandsResponse
   */
  async pushVoiceBoxCommands(request: PushVoiceBoxCommandsRequest): Promise<PushVoiceBoxCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PushVoiceBoxCommandsHeaders({ });
    return await this.pushVoiceBoxCommandsWithOptions(request, headers, runtime);
  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @param headers - PushWelcomeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeResponse
   */
  async pushWelcomeWithOptions(request: PushWelcomeRequest, headers: PushWelcomeHeaders, runtime: $dara.RuntimeOptions): Promise<PushWelcomeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.welcomeMusicUrl)) {
      body["WelcomeMusicUrl"] = request.welcomeMusicUrl;
    }

    if (!$dara.isNull(request.welcomeText)) {
      body["WelcomeText"] = request.welcomeText;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushWelcome",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcome`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushWelcomeResponse>(await this.callApi(params, req, runtime), new PushWelcomeResponse({}));
    } else {
      return $dara.cast<PushWelcomeResponse>(await this.execute(params, req, runtime), new PushWelcomeResponse({}));
    }

  }

  /**
   * 直接推送欢迎语
   * 
   * @param request - PushWelcomeRequest
   * @returns PushWelcomeResponse
   */
  async pushWelcome(request: PushWelcomeRequest): Promise<PushWelcomeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PushWelcomeHeaders({ });
    return await this.pushWelcomeWithOptions(request, headers, runtime);
  }

  /**
   * 推送欢迎语
   * 
   * @param tmpReq - PushWelcomeTextAndMusicRequest
   * @param headers - PushWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusicWithOptions(tmpReq: PushWelcomeTextAndMusicRequest, headers: PushWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<PushWelcomeTextAndMusicResponse> {
    tmpReq.validate();
    let request = new PushWelcomeTextAndMusicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templateVariable)) {
      request.templateVariableShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateVariable, "TemplateVariable", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.templateVariableShrink)) {
      body["TemplateVariable"] = request.templateVariableShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/pushWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new PushWelcomeTextAndMusicResponse({}));
    } else {
      return $dara.cast<PushWelcomeTextAndMusicResponse>(await this.execute(params, req, runtime), new PushWelcomeTextAndMusicResponse({}));
    }

  }

  /**
   * 推送欢迎语
   * 
   * @param request - PushWelcomeTextAndMusicRequest
   * @returns PushWelcomeTextAndMusicResponse
   */
  async pushWelcomeTextAndMusic(request: PushWelcomeTextAndMusicRequest): Promise<PushWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new PushWelcomeTextAndMusicHeaders({ });
    return await this.pushWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param tmpReq - QueryDeviceStatusRequest
   * @param headers - QueryDeviceStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatusWithOptions(tmpReq: QueryDeviceStatusRequest, headers: QueryDeviceStatusHeaders, runtime: $dara.RuntimeOptions): Promise<QueryDeviceStatusResponse> {
    tmpReq.validate();
    let request = new QueryDeviceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryDeviceStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDeviceStatusResponse>(await this.callApi(params, req, runtime), new QueryDeviceStatusResponse({}));
    } else {
      return $dara.cast<QueryDeviceStatusResponse>(await this.execute(params, req, runtime), new QueryDeviceStatusResponse({}));
    }

  }

  /**
   * 查询酒店设备状态/模式状态查询
   * 
   * @param request - QueryDeviceStatusRequest
   * @returns QueryDeviceStatusResponse
   */
  async queryDeviceStatus(request: QueryDeviceStatusRequest): Promise<QueryDeviceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QueryDeviceStatusHeaders({ });
    return await this.queryDeviceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @param headers - QueryHotelRoomDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetailWithOptions(request: QueryHotelRoomDetailRequest, headers: QueryHotelRoomDetailHeaders, runtime: $dara.RuntimeOptions): Promise<QueryHotelRoomDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.sn)) {
      body["Sn"] = request.sn;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotelRoomDetail",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryHotelRoomDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryHotelRoomDetailResponse>(await this.callApi(params, req, runtime), new QueryHotelRoomDetailResponse({}));
    } else {
      return $dara.cast<QueryHotelRoomDetailResponse>(await this.execute(params, req, runtime), new QueryHotelRoomDetailResponse({}));
    }

  }

  /**
   * 查询房间详细信息
   * 
   * @param request - QueryHotelRoomDetailRequest
   * @returns QueryHotelRoomDetailResponse
   */
  async queryHotelRoomDetail(request: QueryHotelRoomDetailRequest): Promise<QueryHotelRoomDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QueryHotelRoomDetailHeaders({ });
    return await this.queryHotelRoomDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @param headers - QueryRoomControlDevicesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevicesWithOptions(request: QueryRoomControlDevicesRequest, headers: QueryRoomControlDevicesHeaders, runtime: $dara.RuntimeOptions): Promise<QueryRoomControlDevicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      query["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      query["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomControlDevices",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryRoomControlDevicesResponse>(await this.callApi(params, req, runtime), new QueryRoomControlDevicesResponse({}));
    } else {
      return $dara.cast<QueryRoomControlDevicesResponse>(await this.execute(params, req, runtime), new QueryRoomControlDevicesResponse({}));
    }

  }

  /**
   * 查询酒店房间客控设备
   * 
   * @param request - QueryRoomControlDevicesRequest
   * @returns QueryRoomControlDevicesResponse
   */
  async queryRoomControlDevices(request: QueryRoomControlDevicesRequest): Promise<QueryRoomControlDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QueryRoomControlDevicesHeaders({ });
    return await this.queryRoomControlDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @param headers - QueryRoomControlDevicesAndStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatusWithOptions(request: QueryRoomControlDevicesAndStatusRequest, headers: QueryRoomControlDevicesAndStatusHeaders, runtime: $dara.RuntimeOptions): Promise<QueryRoomControlDevicesAndStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomControlDevicesAndStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomControlDevicesAndStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryRoomControlDevicesAndStatusResponse>(await this.callApi(params, req, runtime), new QueryRoomControlDevicesAndStatusResponse({}));
    } else {
      return $dara.cast<QueryRoomControlDevicesAndStatusResponse>(await this.execute(params, req, runtime), new QueryRoomControlDevicesAndStatusResponse({}));
    }

  }

  /**
   * 查询房间被控设备包含设备状态
   * 
   * @param request - QueryRoomControlDevicesAndStatusRequest
   * @returns QueryRoomControlDevicesAndStatusResponse
   */
  async queryRoomControlDevicesAndStatus(request: QueryRoomControlDevicesAndStatusRequest): Promise<QueryRoomControlDevicesAndStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QueryRoomControlDevicesAndStatusHeaders({ });
    return await this.queryRoomControlDevicesAndStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @param headers - QueryRoomStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatusWithOptions(request: QueryRoomStatusRequest, headers: QueryRoomStatusHeaders, runtime: $dara.RuntimeOptions): Promise<QueryRoomStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRoomStatus",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/queryRoomStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryRoomStatusResponse>(await this.callApi(params, req, runtime), new QueryRoomStatusResponse({}));
    } else {
      return $dara.cast<QueryRoomStatusResponse>(await this.execute(params, req, runtime), new QueryRoomStatusResponse({}));
    }

  }

  /**
   * 查询房态信息
   * 
   * @param request - QueryRoomStatusRequest
   * @returns QueryRoomStatusResponse
   */
  async queryRoomStatus(request: QueryRoomStatusRequest): Promise<QueryRoomStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QueryRoomStatusHeaders({ });
    return await this.queryRoomStatusWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店场景列表
   * 
   * @param tmpReq - QuerySceneListRequest
   * @param headers - QuerySceneListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySceneListResponse
   */
  async querySceneListWithOptions(tmpReq: QuerySceneListRequest, headers: QuerySceneListHeaders, runtime: $dara.RuntimeOptions): Promise<QuerySceneListResponse> {
    tmpReq.validate();
    let request = new QuerySceneListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneStates)) {
      request.sceneStatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneStates, "SceneStates", "json");
    }

    if (!$dara.isNull(tmpReq.sceneTypes)) {
      request.sceneTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneTypes, "SceneTypes", "json");
    }

    if (!$dara.isNull(tmpReq.templateInfoIds)) {
      request.templateInfoIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateInfoIds, "TemplateInfoIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneStatesShrink)) {
      body["SceneStates"] = request.sceneStatesShrink;
    }

    if (!$dara.isNull(request.sceneTypesShrink)) {
      body["SceneTypes"] = request.sceneTypesShrink;
    }

    if (!$dara.isNull(request.templateInfoIdsShrink)) {
      body["TemplateInfoIds"] = request.templateInfoIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySceneList",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/querySceneList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QuerySceneListResponse>(await this.callApi(params, req, runtime), new QuerySceneListResponse({}));
    } else {
      return $dara.cast<QuerySceneListResponse>(await this.execute(params, req, runtime), new QuerySceneListResponse({}));
    }

  }

  /**
   * 查询酒店场景列表
   * 
   * @param request - QuerySceneListRequest
   * @returns QuerySceneListResponse
   */
  async querySceneList(request: QuerySceneListRequest): Promise<QuerySceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new QuerySceneListHeaders({ });
    return await this.querySceneListWithOptions(request, headers, runtime);
  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @param headers - RemoveChildAccountAuthHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuthWithOptions(request: RemoveChildAccountAuthRequest, headers: RemoveChildAccountAuthHeaders, runtime: $dara.RuntimeOptions): Promise<RemoveChildAccountAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.childAccountName)) {
      body["ChildAccountName"] = request.childAccountName;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveChildAccountAuth",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeChildAccountAuth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveChildAccountAuthResponse>(await this.callApi(params, req, runtime), new RemoveChildAccountAuthResponse({}));
    } else {
      return $dara.cast<RemoveChildAccountAuthResponse>(await this.execute(params, req, runtime), new RemoveChildAccountAuthResponse({}));
    }

  }

  /**
   * 删除子账号授权
   * 
   * @param request - RemoveChildAccountAuthRequest
   * @returns RemoveChildAccountAuthResponse
   */
  async removeChildAccountAuth(request: RemoveChildAccountAuthRequest): Promise<RemoveChildAccountAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new RemoveChildAccountAuthHeaders({ });
    return await this.removeChildAccountAuthWithOptions(request, headers, runtime);
  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @param headers - RemoveHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveHotelResponse
   */
  async removeHotelWithOptions(request: RemoveHotelRequest, headers: RemoveHotelHeaders, runtime: $dara.RuntimeOptions): Promise<RemoveHotelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/removeHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveHotelResponse>(await this.callApi(params, req, runtime), new RemoveHotelResponse({}));
    } else {
      return $dara.cast<RemoveHotelResponse>(await this.execute(params, req, runtime), new RemoveHotelResponse({}));
    }

  }

  /**
   * 删除酒店项目
   * 
   * @param request - RemoveHotelRequest
   * @returns RemoveHotelResponse
   */
  async removeHotel(request: RemoveHotelRequest): Promise<RemoveHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new RemoveHotelHeaders({ });
    return await this.removeHotelWithOptions(request, headers, runtime);
  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @param headers - ResetWelcomeTextAndMusicHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusicWithOptions(request: ResetWelcomeTextAndMusicRequest, headers: ResetWelcomeTextAndMusicHeaders, runtime: $dara.RuntimeOptions): Promise<ResetWelcomeTextAndMusicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetWelcomeTextAndMusic",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/resetWelcomeTextAndMusic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetWelcomeTextAndMusicResponse>(await this.callApi(params, req, runtime), new ResetWelcomeTextAndMusicResponse({}));
    } else {
      return $dara.cast<ResetWelcomeTextAndMusicResponse>(await this.execute(params, req, runtime), new ResetWelcomeTextAndMusicResponse({}));
    }

  }

  /**
   * 重置欢迎语信息
   * 
   * @param request - ResetWelcomeTextAndMusicRequest
   * @returns ResetWelcomeTextAndMusicResponse
   */
  async resetWelcomeTextAndMusic(request: ResetWelcomeTextAndMusicRequest): Promise<ResetWelcomeTextAndMusicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new ResetWelcomeTextAndMusicHeaders({ });
    return await this.resetWelcomeTextAndMusicWithOptions(request, headers, runtime);
  }

  /**
   * 退房
   * 
   * @param tmpReq - RoomCheckOutRequest
   * @param headers - RoomCheckOutHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RoomCheckOutResponse
   */
  async roomCheckOutWithOptions(tmpReq: RoomCheckOutRequest, headers: RoomCheckOutHeaders, runtime: $dara.RuntimeOptions): Promise<RoomCheckOutResponse> {
    tmpReq.validate();
    let request = new RoomCheckOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deviceInfo)) {
      request.deviceInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceInfo, "DeviceInfo", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceInfoShrink)) {
      query["DeviceInfo"] = request.deviceInfoShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RoomCheckOut",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/roomCheckOut`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RoomCheckOutResponse>(await this.callApi(params, req, runtime), new RoomCheckOutResponse({}));
    } else {
      return $dara.cast<RoomCheckOutResponse>(await this.execute(params, req, runtime), new RoomCheckOutResponse({}));
    }

  }

  /**
   * 退房
   * 
   * @param request - RoomCheckOutRequest
   * @returns RoomCheckOutResponse
   */
  async roomCheckOut(request: RoomCheckOutRequest): Promise<RoomCheckOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new RoomCheckOutHeaders({ });
    return await this.roomCheckOutWithOptions(request, headers, runtime);
  }

  /**
   * 提交酒店订单
   * 
   * @param tmpReq - SubmitHotelOrderRequest
   * @param headers - SubmitHotelOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrderWithOptions(tmpReq: SubmitHotelOrderRequest, headers: SubmitHotelOrderHeaders, runtime: $dara.RuntimeOptions): Promise<SubmitHotelOrderResponse> {
    tmpReq.validate();
    let request = new SubmitHotelOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      query["UserInfo"] = request.userInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotelOrder",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/submitHotelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitHotelOrderResponse>(await this.callApi(params, req, runtime), new SubmitHotelOrderResponse({}));
    } else {
      return $dara.cast<SubmitHotelOrderResponse>(await this.execute(params, req, runtime), new SubmitHotelOrderResponse({}));
    }

  }

  /**
   * 提交酒店订单
   * 
   * @param request - SubmitHotelOrderRequest
   * @returns SubmitHotelOrderResponse
   */
  async submitHotelOrder(request: SubmitHotelOrderRequest): Promise<SubmitHotelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new SubmitHotelOrderHeaders({ });
    return await this.submitHotelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @param headers - SyncDeviceStatusWithAkHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAkWithOptions(request: SyncDeviceStatusWithAkRequest, headers: SyncDeviceStatusWithAkHeaders, runtime: $dara.RuntimeOptions): Promise<SyncDeviceStatusWithAkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryCnName)) {
      body["CategoryCnName"] = request.categoryCnName;
    }

    if (!$dara.isNull(request.categoryEnName)) {
      body["CategoryEnName"] = request.categoryEnName;
    }

    if (!$dara.isNull(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.location)) {
      body["Location"] = request.location;
    }

    if (!$dara.isNull(request.locationCnName)) {
      body["LocationCnName"] = request.locationCnName;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.roomNo)) {
      body["RoomNo"] = request.roomNo;
    }

    if (!$dara.isNull(request.switch)) {
      body["Switch"] = request.switch;
    }

    if (!$dara.isNull(request.fanSpeed)) {
      body["fanSpeed"] = request.fanSpeed;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.roomTemperature)) {
      body["roomTemperature"] = request.roomTemperature;
    }

    if (!$dara.isNull(request.temperature)) {
      body["temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDeviceStatusWithAk",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/syncDeviceStatusWithAk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncDeviceStatusWithAkResponse>(await this.callApi(params, req, runtime), new SyncDeviceStatusWithAkResponse({}));
    } else {
      return $dara.cast<SyncDeviceStatusWithAkResponse>(await this.execute(params, req, runtime), new SyncDeviceStatusWithAkResponse({}));
    }

  }

  /**
   * 同步客控设备状态到主控设备
   * 
   * @param request - SyncDeviceStatusWithAkRequest
   * @returns SyncDeviceStatusWithAkResponse
   */
  async syncDeviceStatusWithAk(request: SyncDeviceStatusWithAkRequest): Promise<SyncDeviceStatusWithAkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new SyncDeviceStatusWithAkHeaders({ });
    return await this.syncDeviceStatusWithAkWithOptions(request, headers, runtime);
  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @param headers - UpdateBasicInfoQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQAWithOptions(request: UpdateBasicInfoQARequest, headers: UpdateBasicInfoQAHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateBasicInfoQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkInTime)) {
      body["CheckInTime"] = request.checkInTime;
    }

    if (!$dara.isNull(request.checkOutTime)) {
      body["CheckOutTime"] = request.checkOutTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelIntroduction)) {
      body["HotelIntroduction"] = request.hotelIntroduction;
    }

    if (!$dara.isNull(request.hotelMember)) {
      body["HotelMember"] = request.hotelMember;
    }

    if (!$dara.isNull(request.hotelService)) {
      body["HotelService"] = request.hotelService;
    }

    if (!$dara.isNull(request.parkingExpenses)) {
      body["ParkingExpenses"] = request.parkingExpenses;
    }

    if (!$dara.isNull(request.parkingPosition)) {
      body["ParkingPosition"] = request.parkingPosition;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.wifiName)) {
      body["WifiName"] = request.wifiName;
    }

    if (!$dara.isNull(request.wifiPassword)) {
      body["WifiPassword"] = request.wifiPassword;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBasicInfoQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateBasicInfoQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateBasicInfoQAResponse>(await this.callApi(params, req, runtime), new UpdateBasicInfoQAResponse({}));
    } else {
      return $dara.cast<UpdateBasicInfoQAResponse>(await this.execute(params, req, runtime), new UpdateBasicInfoQAResponse({}));
    }

  }

  /**
   * 修改基础信息问答
   * 
   * @param request - UpdateBasicInfoQARequest
   * @returns UpdateBasicInfoQAResponse
   */
  async updateBasicInfoQA(request: UpdateBasicInfoQARequest): Promise<UpdateBasicInfoQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateBasicInfoQAHeaders({ });
    return await this.updateBasicInfoQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改自定义问答
   * 
   * @param tmpReq - UpdateCustomQARequest
   * @param headers - UpdateCustomQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQAWithOptions(tmpReq: UpdateCustomQARequest, headers: UpdateCustomQAHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateCustomQAResponse> {
    tmpReq.validate();
    let request = new UpdateCustomQAShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.answers)) {
      request.answersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.answers, "Answers", "json");
    }

    if (!$dara.isNull(tmpReq.keyWords)) {
      request.keyWordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keyWords, "KeyWords", "json");
    }

    if (!$dara.isNull(tmpReq.supplementaryQuestions)) {
      request.supplementaryQuestionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supplementaryQuestions, "SupplementaryQuestions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answersShrink)) {
      body["Answers"] = request.answersShrink;
    }

    if (!$dara.isNull(request.customQAId)) {
      body["CustomQAId"] = request.customQAId;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.keyWordsShrink)) {
      body["KeyWords"] = request.keyWordsShrink;
    }

    if (!$dara.isNull(request.majorQuestion)) {
      body["MajorQuestion"] = request.majorQuestion;
    }

    if (!$dara.isNull(request.supplementaryQuestionsShrink)) {
      body["SupplementaryQuestions"] = request.supplementaryQuestionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateCustomQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCustomQAResponse>(await this.callApi(params, req, runtime), new UpdateCustomQAResponse({}));
    } else {
      return $dara.cast<UpdateCustomQAResponse>(await this.execute(params, req, runtime), new UpdateCustomQAResponse({}));
    }

  }

  /**
   * 修改自定义问答
   * 
   * @param request - UpdateCustomQARequest
   * @returns UpdateCustomQAResponse
   */
  async updateCustomQA(request: UpdateCustomQARequest): Promise<UpdateCustomQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateCustomQAHeaders({ });
    return await this.updateCustomQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店项目
   * 
   * @param tmpReq - UpdateHotelRequest
   * @param headers - UpdateHotelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelResponse
   */
  async updateHotelWithOptions(tmpReq: UpdateHotelRequest, headers: UpdateHotelHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateHotelResponse> {
    tmpReq.validate();
    let request = new UpdateHotelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.relatedPks)) {
      request.relatedPksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedPks, "RelatedPks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.estOpenTime)) {
      body["EstOpenTime"] = request.estOpenTime;
    }

    if (!$dara.isNull(request.hotelAddress)) {
      body["HotelAddress"] = request.hotelAddress;
    }

    if (!$dara.isNull(request.hotelEmail)) {
      body["HotelEmail"] = request.hotelEmail;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.hotelName)) {
      body["HotelName"] = request.hotelName;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.relatedPksShrink)) {
      body["RelatedPks"] = request.relatedPksShrink;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.roomNum)) {
      body["RoomNum"] = request.roomNum;
    }

    if (!$dara.isNull(request.tbOpenId)) {
      body["TbOpenId"] = request.tbOpenId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotel",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHotelResponse>(await this.callApi(params, req, runtime), new UpdateHotelResponse({}));
    } else {
      return $dara.cast<UpdateHotelResponse>(await this.execute(params, req, runtime), new UpdateHotelResponse({}));
    }

  }

  /**
   * 修改酒店项目
   * 
   * @param request - UpdateHotelRequest
   * @returns UpdateHotelResponse
   */
  async updateHotel(request: UpdateHotelRequest): Promise<UpdateHotelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateHotelHeaders({ });
    return await this.updateHotelWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店闹钟
   * 
   * @param tmpReq - UpdateHotelAlarmRequest
   * @param headers - UpdateHotelAlarmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarmWithOptions(tmpReq: UpdateHotelAlarmRequest, headers: UpdateHotelAlarmHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateHotelAlarmResponse> {
    tmpReq.validate();
    let request = new UpdateHotelAlarmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarms)) {
      request.alarmsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarms, "Alarms", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleInfo)) {
      request.scheduleInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleInfo, "ScheduleInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmsShrink)) {
      body["Alarms"] = request.alarmsShrink;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.scheduleInfoShrink)) {
      body["ScheduleInfo"] = request.scheduleInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelAlarm",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelAlarm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHotelAlarmResponse>(await this.callApi(params, req, runtime), new UpdateHotelAlarmResponse({}));
    } else {
      return $dara.cast<UpdateHotelAlarmResponse>(await this.execute(params, req, runtime), new UpdateHotelAlarmResponse({}));
    }

  }

  /**
   * 修改酒店闹钟
   * 
   * @param request - UpdateHotelAlarmRequest
   * @returns UpdateHotelAlarmResponse
   */
  async updateHotelAlarm(request: UpdateHotelAlarmRequest): Promise<UpdateHotelAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateHotelAlarmHeaders({ });
    return await this.updateHotelAlarmWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景预订编辑
   * 
   * @param tmpReq - UpdateHotelSceneBookItemRequest
   * @param headers - UpdateHotelSceneBookItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItemWithOptions(tmpReq: UpdateHotelSceneBookItemRequest, headers: UpdateHotelSceneBookItemHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateHotelSceneBookItemResponse> {
    tmpReq.validate();
    let request = new UpdateHotelSceneBookItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateHotelSceneBookReq)) {
      request.updateHotelSceneBookReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneBookReq, "UpdateHotelSceneBookReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateHotelSceneBookReqShrink)) {
      query["UpdateHotelSceneBookReq"] = request.updateHotelSceneBookReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelSceneBookItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneBookItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHotelSceneBookItemResponse>(await this.callApi(params, req, runtime), new UpdateHotelSceneBookItemResponse({}));
    } else {
      return $dara.cast<UpdateHotelSceneBookItemResponse>(await this.execute(params, req, runtime), new UpdateHotelSceneBookItemResponse({}));
    }

  }

  /**
   * 酒店场景预订编辑
   * 
   * @param request - UpdateHotelSceneBookItemRequest
   * @returns UpdateHotelSceneBookItemResponse
   */
  async updateHotelSceneBookItem(request: UpdateHotelSceneBookItemRequest): Promise<UpdateHotelSceneBookItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateHotelSceneBookItemHeaders({ });
    return await this.updateHotelSceneBookItemWithOptions(request, headers, runtime);
  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param tmpReq - UpdateHotelSceneItemRequest
   * @param headers - UpdateHotelSceneItemHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItemWithOptions(tmpReq: UpdateHotelSceneItemRequest, headers: UpdateHotelSceneItemHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateHotelSceneItemResponse> {
    tmpReq.validate();
    let request = new UpdateHotelSceneItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateHotelSceneOperateReq)) {
      request.updateHotelSceneOperateReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneOperateReq, "UpdateHotelSceneOperateReq", "json");
    }

    if (!$dara.isNull(tmpReq.updateHotelSceneReq)) {
      request.updateHotelSceneReqShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateHotelSceneReq, "UpdateHotelSceneReq", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateHotelSceneOperateReqShrink)) {
      query["UpdateHotelSceneOperateReq"] = request.updateHotelSceneOperateReqShrink;
    }

    if (!$dara.isNull(request.updateHotelSceneReqShrink)) {
      query["UpdateHotelSceneReq"] = request.updateHotelSceneReqShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotelSceneItem",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateHotelSceneItem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHotelSceneItemResponse>(await this.callApi(params, req, runtime), new UpdateHotelSceneItemResponse({}));
    } else {
      return $dara.cast<UpdateHotelSceneItemResponse>(await this.execute(params, req, runtime), new UpdateHotelSceneItemResponse({}));
    }

  }

  /**
   * 酒店场景修改（开启/关闭/编辑）
   * 
   * @param request - UpdateHotelSceneItemRequest
   * @returns UpdateHotelSceneItemResponse
   */
  async updateHotelSceneItem(request: UpdateHotelSceneItemRequest): Promise<UpdateHotelSceneItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateHotelSceneItemHeaders({ });
    return await this.updateHotelSceneItemWithOptions(request, headers, runtime);
  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @param headers - UpdateMessageTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplateWithOptions(request: UpdateMessageTemplateRequest, headers: UpdateMessageTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateMessageTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateDetail)) {
      body["TemplateDetail"] = request.templateDetail;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMessageTemplate",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateMessageTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateMessageTemplateResponse>(await this.callApi(params, req, runtime), new UpdateMessageTemplateResponse({}));
    } else {
      return $dara.cast<UpdateMessageTemplateResponse>(await this.execute(params, req, runtime), new UpdateMessageTemplateResponse({}));
    }

  }

  /**
   * 更新消息通知模板
   * 
   * @param request - UpdateMessageTemplateRequest
   * @returns UpdateMessageTemplateResponse
   */
  async updateMessageTemplate(request: UpdateMessageTemplateRequest): Promise<UpdateMessageTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateMessageTemplateHeaders({ });
    return await this.updateMessageTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param tmpReq - UpdateRcuSceneRequest
   * @param headers - UpdateRcuSceneHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuSceneWithOptions(tmpReq: UpdateRcuSceneRequest, headers: UpdateRcuSceneHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateRcuSceneResponse> {
    tmpReq.validate();
    let request = new UpdateRcuSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sceneRelationExtDTO)) {
      request.sceneRelationExtDTOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneRelationExtDTO, "SceneRelationExtDTO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneRelationExtDTOShrink)) {
      body["SceneRelationExtDTO"] = request.sceneRelationExtDTOShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRcuScene",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateRcuScene`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRcuSceneResponse>(await this.callApi(params, req, runtime), new UpdateRcuSceneResponse({}));
    } else {
      return $dara.cast<UpdateRcuSceneResponse>(await this.execute(params, req, runtime), new UpdateRcuSceneResponse({}));
    }

  }

  /**
   * 修改酒店自定义rcu场景
   * 
   * @param request - UpdateRcuSceneRequest
   * @returns UpdateRcuSceneResponse
   */
  async updateRcuScene(request: UpdateRcuSceneRequest): Promise<UpdateRcuSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateRcuSceneHeaders({ });
    return await this.updateRcuSceneWithOptions(request, headers, runtime);
  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @param headers - UpdateServiceQAHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQAWithOptions(request: UpdateServiceQARequest, headers: UpdateServiceQAHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateServiceQAResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.answer)) {
      body["Answer"] = request.answer;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.serviceQAId)) {
      body["ServiceQAId"] = request.serviceQAId;
    }

    if (!$dara.isNull(request.isActive)) {
      body["isActive"] = request.isActive;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceQA",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateServiceQA`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceQAResponse>(await this.callApi(params, req, runtime), new UpdateServiceQAResponse({}));
    } else {
      return $dara.cast<UpdateServiceQAResponse>(await this.execute(params, req, runtime), new UpdateServiceQAResponse({}));
    }

  }

  /**
   * 修改服务设施问答
   * 
   * @param request - UpdateServiceQARequest
   * @returns UpdateServiceQAResponse
   */
  async updateServiceQA(request: UpdateServiceQARequest): Promise<UpdateServiceQAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateServiceQAHeaders({ });
    return await this.updateServiceQAWithOptions(request, headers, runtime);
  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @param headers - UpdateTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketResponse
   */
  async updateTicketWithOptions(request: UpdateTicketRequest, headers: UpdateTicketHeaders, runtime: $dara.RuntimeOptions): Promise<UpdateTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupKey)) {
      body["GroupKey"] = request.groupKey;
    }

    if (!$dara.isNull(request.hotelId)) {
      body["HotelId"] = request.hotelId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = JSON.stringify(headers.xAcsAligenieAccessToken);
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = JSON.stringify(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicket",
      version: "ip_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ip/updateTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTicketResponse>(await this.callApi(params, req, runtime), new UpdateTicketResponse({}));
    } else {
      return $dara.cast<UpdateTicketResponse>(await this.execute(params, req, runtime), new UpdateTicketResponse({}));
    }

  }

  /**
   * 修改工单
   * 
   * @param request - UpdateTicketRequest
   * @returns UpdateTicketResponse
   */
  async updateTicket(request: UpdateTicketRequest): Promise<UpdateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new UpdateTicketHeaders({ });
    return await this.updateTicketWithOptions(request, headers, runtime);
  }

}
