// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamVoiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 仅描述 WebSocket 接入/握手的请求标识，不代表后续语音轮次或音频结果。成功连接后使用下文 VoiceEvent 文本事件和 VoiceOutputAudio 二进制帧，不能把整条 WSS 连接按单次 JSON 响应处理。
   * 
   * @example
   * A3677B53-C3AE-5F04-953E-AA332CABB87B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

