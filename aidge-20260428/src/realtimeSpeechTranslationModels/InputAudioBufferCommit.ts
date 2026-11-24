// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferCommit extends $dara.Model {
  /**
   * @remarks
   * 无额外业务入参。Manual 模式提交非空缓冲；双向须等待上一提交确认，server_vad 模式拒绝显式 commit。
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * 可省略；提供时必须为非空、非纯空白字符串。
   * 
   * @example
   * evt_commit_1
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

