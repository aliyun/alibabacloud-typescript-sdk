// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionFinished extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  causedBy?: string;
  reason?: string;
  /**
   * @remarks
   * true 表示结束时用量已完成 MQ 接收与通知写出；超时、取消、异常或用量不完整时为 false，不代表最终扣费结果。兼容旧版本时可省略，网关不补默认值。
   */
  usageComplete?: boolean;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      causedBy: 'caused_by',
      reason: 'reason',
      usageComplete: 'usage_complete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      causedBy: 'string',
      reason: 'string',
      usageComplete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

