// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferClear extends $dara.Model {
  /**
   * @remarks
   * 无额外业务入参。清理未处理缓冲，不撤回已下发结果；双向仅 manual 模式允许，server_vad 或存在待确认 commit 时拒绝。
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 可省略；提供时必须为非空、非纯空白字符串。
   * 
   * @example
   * evt_clear_1
   */
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

