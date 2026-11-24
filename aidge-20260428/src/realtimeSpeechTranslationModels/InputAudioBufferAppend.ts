// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferAppend extends $dara.Model {
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
   * evt_audio_1
   */
  eventId?: string;
  /**
   * @remarks
   * 等待 SessionUpdated 后发送；必须为 JSON 文本消息中的 Base64 字符串，不能发送 binary 帧。解码后每块最多10240字节；双向必须为非空 PCM16 完整采样，字节数为偶数。解码与大小检查由后端执行。
   * 
   * This parameter is required.
   */
  audio?: Buffer;
  /**
   * @remarks
   * 仅双向使用；可省略，提供时从0开始递增。只有携带 sequence 且成功接受的块推进计数；clear 不重置。网关不补默认值，连续性由后端校验。
   * 
   * @example
   * 0
   */
  sequence?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      audio: 'audio',
      sequence: 'sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      audio: 'Buffer',
      sequence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

