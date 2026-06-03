// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemAlarmsResponseBodyAlarms extends $dara.Model {
  alarmDetail?: string;
  /**
   * @example
   * 1****
   */
  alarmId?: number;
  /**
   * @example
   * 17
   */
  alarmType?: string;
  /**
   * @example
   * 2019-06-06 05:03:17
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  readMark?: number;
  static names(): { [key: string]: string } {
    return {
      alarmDetail: 'AlarmDetail',
      alarmId: 'AlarmId',
      alarmType: 'AlarmType',
      createTime: 'CreateTime',
      readMark: 'ReadMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDetail: 'string',
      alarmId: 'number',
      alarmType: 'string',
      createTime: 'string',
      readMark: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmsResponseBody extends $dara.Model {
  alarms?: ListSystemAlarmsResponseBodyAlarms[];
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': ListSystemAlarmsResponseBodyAlarms },
      requestId: 'string',
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

