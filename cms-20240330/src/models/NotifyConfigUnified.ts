// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyChannel } from "./DirectNotifyChannel";


export class NotifyConfigUnified extends $dara.Model {
  /**
   * @remarks
   * 一周中发送通知的星期，1-7
   */
  activeDays?: number[];
  /**
   * @remarks
   * 每天通知生效结束时间
   */
  activeEndTime?: string;
  /**
   * @remarks
   * 每天通知生效开始时间
   */
  activeStartTime?: string;
  /**
   * @remarks
   * 通知渠道列表
   * 
   * This parameter is required.
   */
  channels?: DirectNotifyChannel[];
  /**
   * @remarks
   * 通道沉默周期（秒）
   */
  silenceTimeSecs?: number;
  /**
   * @remarks
   * 通知配置类型
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * UTC 时区偏移量
   */
  utcOffset?: string;
  static names(): { [key: string]: string } {
    return {
      activeDays: 'activeDays',
      activeEndTime: 'activeEndTime',
      activeStartTime: 'activeStartTime',
      channels: 'channels',
      silenceTimeSecs: 'silenceTimeSecs',
      type: 'type',
      utcOffset: 'utcOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDays: { 'type': 'array', 'itemType': 'number' },
      activeEndTime: 'string',
      activeStartTime: 'string',
      channels: { 'type': 'array', 'itemType': DirectNotifyChannel },
      silenceTimeSecs: 'number',
      type: 'string',
      utcOffset: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeDays)) {
      $dara.Model.validateArray(this.activeDays);
    }
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

