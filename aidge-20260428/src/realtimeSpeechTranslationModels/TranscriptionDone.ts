// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionDoneError extends $dara.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranscriptionDone extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  /**
   * @remarks
   * 与该原文的 TranscriptionTextDelta 共享标识，不关联翻译 segment_id。
   */
  transcriptionId?: string;
  /**
   * @remarks
   * 同一 transcription_id 内单调递增，完成后不再更新。
   */
  revision?: number;
  /**
   * @remarks
   * 最终原文，可以为空；转写失败时保留已收到的 text 与 stash 合并结果，并附带 error。
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
   * 仅原文转写失败时返回；正常完成时省略。
   */
  error?: TranscriptionDoneError;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      transcriptionId: 'transcription_id',
      revision: 'revision',
      text: 'text',
      startMs: 'start_ms',
      endMs: 'end_ms',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      transcriptionId: 'string',
      revision: 'number',
      text: 'string',
      startMs: 'number',
      endMs: 'number',
      error: TranscriptionDoneError,
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

