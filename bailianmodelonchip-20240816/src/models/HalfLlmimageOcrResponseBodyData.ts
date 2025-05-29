// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMImageOcrResponseBodyDataOutput } from "./HalfLlmimageOcrResponseBodyDataOutput";
import { HalfLLMImageOcrResponseBodyDataRt } from "./HalfLlmimageOcrResponseBodyDataRt";
import { HalfLLMImageOcrResponseBodyDataUsages } from "./HalfLlmimageOcrResponseBodyDataUsages";


export class HalfLLMImageOcrResponseBodyData extends $dara.Model {
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
  output?: HalfLLMImageOcrResponseBodyDataOutput;
  /**
   * @example
   * 4Oy0zoqcjcclBgREcZvXF12y
   */
  requestId?: string;
  rt?: HalfLLMImageOcrResponseBodyDataRt;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  usages?: HalfLLMImageOcrResponseBodyDataUsages;
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
      output: HalfLLMImageOcrResponseBodyDataOutput,
      requestId: 'string',
      rt: HalfLLMImageOcrResponseBodyDataRt,
      sessionId: 'string',
      usages: HalfLLMImageOcrResponseBodyDataUsages,
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

