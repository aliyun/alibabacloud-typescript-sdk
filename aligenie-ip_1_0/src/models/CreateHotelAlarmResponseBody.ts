// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

