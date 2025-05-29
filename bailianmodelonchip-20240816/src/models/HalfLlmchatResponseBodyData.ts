// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMChatResponseBodyDataOutput } from "./HalfLlmchatResponseBodyDataOutput";


export class HalfLLMChatResponseBodyData extends $dara.Model {
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
  output?: HalfLLMChatResponseBodyDataOutput;
  /**
   * @example
   * 4Oy0zoqcjcclBgREcZvXF12y
   */
  requestId?: string;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      output: 'output',
      requestId: 'requestId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      output: HalfLLMChatResponseBodyDataOutput,
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

