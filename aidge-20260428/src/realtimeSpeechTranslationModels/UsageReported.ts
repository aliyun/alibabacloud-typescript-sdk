// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsageReportedUsageMap extends $dara.Model {
  /**
   * @remarks
   * 每段按采样时长独立四舍五入为整数秒，以字符串返回，允许为 "0"。
   */
  inputAudioSeconds?: string;
  voiceTranslationType?: string;
  static names(): { [key: string]: string } {
    return {
      inputAudioSeconds: 'InputAudioSeconds',
      voiceTranslationType: 'VoiceTranslationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputAudioSeconds: 'string',
      voiceTranslationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UsageReported extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  /**
   * @remarks
   * 与计量上报使用相同的稳定标识；不以 event_id 或翻译 segment_id 代替。
   */
  usageId?: string;
  /**
   * @remarks
   * 仅在真实 MQ 接收用量后发送；不表示已完成扣费或出账。
   */
  status?: string;
  /**
   * @remarks
   * 单次用量记录，不是会话累计值；字段名称及字符串值与计量上报保持一致。
   */
  usageMap?: UsageReportedUsageMap;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      usageId: 'usage_id',
      status: 'status',
      usageMap: 'usageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      usageId: 'string',
      status: 'string',
      usageMap: UsageReportedUsageMap,
    };
  }

  validate() {
    if(this.usageMap && typeof (this.usageMap as any).validate === 'function') {
      (this.usageMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

