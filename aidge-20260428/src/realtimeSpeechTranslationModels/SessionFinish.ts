// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SessionFinish extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 可省略；提供时必须为非空、非纯空白字符串。
   * 
   * @example
   * evt_finish_1
   */
  eventId?: string;
  /**
   * @remarks
   * 双向省略时后端按 completed 排空结果，cancelled 立即取消；clear 进行中拒绝结束。单向客户端省略本字段，等待 SessionFinished 后关闭连接。网关不补默认值。
   * 
   * @example
   * completed
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

