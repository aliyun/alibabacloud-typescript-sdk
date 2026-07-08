// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceAlarmResponseBody extends $dara.Model {
  /**
   * @remarks
   * 下次相同告警的最小间隔。（单位：秒）
   * 
   * @example
   * 60
   */
  alarmDelay?: number;
  /**
   * @remarks
   * 告警ID。
   * 
   * @example
   * 0hyNgTdgv2D000195842
   */
  alarmId?: string;
  /**
   * @remarks
   * URL的过期时长。（单位：秒）
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 76E11E6A-4441-51C9-AF60-D354362257A7
   */
  requestId?: string;
  /**
   * @remarks
   * 媒体上传的URL，可使用PUT上传。
   * 
   * @example
   * rtmp://demo.aliyundoc.com/live/310101*****7542007?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      alarmDelay: 'AlarmDelay',
      alarmId: 'AlarmId',
      expire: 'Expire',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDelay: 'number',
      alarmId: 'string',
      expire: 'number',
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

