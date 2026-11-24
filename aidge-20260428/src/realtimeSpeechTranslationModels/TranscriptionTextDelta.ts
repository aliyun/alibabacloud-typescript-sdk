// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionTextDelta extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  /**
   * @remarks
   * 可回改的累计全文，按最新 revision 覆盖，不作增量拼接。
   */
  text?: string;
  /**
   * @remarks
   * 仅已知原文起始边界时返回。
   */
  startMs?: number;
  /**
   * @remarks
   * 仅已知原文结束边界时返回。
   */
  endMs?: number;
  /**
   * @remarks
   * 同一原文的快照与完成事件共享此标识，不关联翻译 segment_id。
   */
  transcriptionId?: string;
  /**
   * @remarks
   * 同一 transcription_id 内单调递增；中间快照可能合并，版本号不保证连续。
   */
  revision?: number;
  /**
   * @remarks
   * 可被修正的暂存文本，可为空；仅 stash 变化也会产生新版本。
   */
  stash?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      text: 'text',
      startMs: 'start_ms',
      endMs: 'end_ms',
      transcriptionId: 'transcription_id',
      revision: 'revision',
      stash: 'stash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      text: 'string',
      startMs: 'number',
      endMs: 'number',
      transcriptionId: 'string',
      revision: 'number',
      stash: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

