// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSubRequestAddSubscriptionInfoRequestScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The specific days of the week for weekly reminders. Valid values are 1 to 7.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * The hour of the clock when the reminder is triggered.
   * 
   * @example
   * 1
   */
  hour?: number;
  /**
   * @remarks
   * The minute of the hour when the reminder is triggered.
   * 
   * @example
   * 23
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

export class AddSubRequestAddSubscriptionInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Album ID
   * 
   * @example
   * 51999575
   */
  albumId?: string;
  /**
   * @remarks
   * Daily study quantity
   * 
   * @example
   * 2
   */
  dailyStudyCnt?: number;
  /**
   * @remarks
   * Playback pattern (currently only supports sequence)
   * 
   * @example
   * sequence
   */
  playMode?: string;
  /**
   * @remarks
   * Schedule information
   */
  scheduleInfo?: AddSubRequestAddSubscriptionInfoRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      dailyStudyCnt: 'DailyStudyCnt',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      dailyStudyCnt: 'number',
      playMode: 'string',
      scheduleInfo: AddSubRequestAddSubscriptionInfoRequestScheduleInfo,
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

export class AddSubRequestDeviceInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  id?: string;
  /**
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

export class AddSubRequestUserInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * 123
   */
  id?: string;
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

export class AddSubRequest extends $dara.Model {
  /**
   * @remarks
   * Subscribe to album request
   */
  addSubscriptionInfoRequest?: AddSubRequestAddSubscriptionInfoRequest;
  /**
   * @remarks
   * Device Information
   */
  deviceInfo?: AddSubRequestDeviceInfo;
  /**
   * @remarks
   * User Information
   */
  userInfo?: AddSubRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      addSubscriptionInfoRequest: 'AddSubscriptionInfoRequest',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSubscriptionInfoRequest: AddSubRequestAddSubscriptionInfoRequest,
      deviceInfo: AddSubRequestDeviceInfo,
      userInfo: AddSubRequestUserInfo,
    };
  }

  validate() {
    if(this.addSubscriptionInfoRequest && typeof (this.addSubscriptionInfoRequest as any).validate === 'function') {
      (this.addSubscriptionInfoRequest as any).validate();
    }
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

