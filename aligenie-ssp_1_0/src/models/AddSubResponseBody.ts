// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSubResponseBodyResultScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The epoch for trigger
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * The hour of the clock when the trigger occurs.
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @remarks
   * The minute of the Time when the trigger occurs.
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

export class AddSubResponseBodyResult extends $dara.Model {
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
   * Device ID
   * 
   * @example
   * 5874DBCCA3038FAA1A70A8060F07F26D
   */
  deviceId?: string;
  /**
   * @remarks
   * Subscription record ID
   * 
   * @example
   * 81
   */
  id?: number;
  /**
   * @remarks
   * Playback mode
   * 
   * @example
   * sequence
   */
  playMode?: string;
  /**
   * @remarks
   * Schedule information
   */
  scheduleInfo?: AddSubResponseBodyResultScheduleInfo;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1152893538998276761
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      dailyStudyCnt: 'DailyStudyCnt',
      deviceId: 'DeviceId',
      id: 'Id',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      dailyStudyCnt: 'number',
      deviceId: 'string',
      id: 'number',
      playMode: 'string',
      scheduleInfo: AddSubResponseBodyResultScheduleInfo,
      userId: 'string',
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

export class AddSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of 200 indicates success.
   */
  code?: number;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B99D27ED-4E12-1414-9FDE-599C57C4B204
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   */
  result?: AddSubResponseBodyResult;
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
      result: AddSubResponseBodyResult,
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

