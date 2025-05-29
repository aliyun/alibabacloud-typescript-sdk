// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMAppCallResponseBodyDataOutput } from "./HalfLlmappCallResponseBodyDataOutput";
import { HalfLLMAppCallResponseBodyDataRt } from "./HalfLlmappCallResponseBodyDataRt";
import { HalfLLMAppCallResponseBodyDataUsages } from "./HalfLlmappCallResponseBodyDataUsages";


export class HalfLLMAppCallResponseBodyData extends $dara.Model {
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
  output?: HalfLLMAppCallResponseBodyDataOutput;
  /**
   * @example
   * 4Oy0zoqcjcclBgREcZvXF12y
   */
  requestId?: string;
  rt?: HalfLLMAppCallResponseBodyDataRt;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  usages?: HalfLLMAppCallResponseBodyDataUsages;
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
      output: HalfLLMAppCallResponseBodyDataOutput,
      requestId: 'string',
      rt: HalfLLMAppCallResponseBodyDataRt,
      sessionId: 'string',
      usages: HalfLLMAppCallResponseBodyDataUsages,
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

