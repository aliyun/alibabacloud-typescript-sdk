// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMImageChatResponseBodyDataOutput } from "./HalfLlmimageChatResponseBodyDataOutput";
import { HalfLLMImageChatResponseBodyDataRt } from "./HalfLlmimageChatResponseBodyDataRt";
import { HalfLLMImageChatResponseBodyDataUsages } from "./HalfLlmimageChatResponseBodyDataUsages";


export class HalfLLMImageChatResponseBodyData extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  output?: HalfLLMImageChatResponseBodyDataOutput;
  /**
   * @example
   * 4Oy0zoqcjcclBgREcZvXF12y
   */
  requestId?: string;
  rt?: HalfLLMImageChatResponseBodyDataRt;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  usages?: HalfLLMImageChatResponseBodyDataUsages;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      output: 'output',
      requestId: 'requestId',
      rt: 'rt',
      sessionId: 'sessionId',
      usages: 'usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: HalfLLMImageChatResponseBodyDataOutput,
      requestId: 'string',
      rt: HalfLLMImageChatResponseBodyDataRt,
      sessionId: 'string',
      usages: HalfLLMImageChatResponseBodyDataUsages,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.rt && typeof (this.rt as any).validate === 'function') {
      (this.rt as any).validate();
    }
    if(this.usages && typeof (this.usages as any).validate === 'function') {
      (this.usages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

