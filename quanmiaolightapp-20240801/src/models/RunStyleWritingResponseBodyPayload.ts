// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStyleWritingResponseBodyPayloadOutput } from "./RunStyleWritingResponseBodyPayloadOutput";
import { RunStyleWritingResponseBodyPayloadUsage } from "./RunStyleWritingResponseBodyPayloadUsage";


export class RunStyleWritingResponseBodyPayload extends $dara.Model {
  output?: RunStyleWritingResponseBodyPayloadOutput;
  /**
   * @example
   * {
   *         "inputTokens": 1816,
   *         "outputTokens": 96,
   *         "totalTokens": 1912
   *     }
   */
  usage?: RunStyleWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleWritingResponseBodyPayloadOutput,
      usage: RunStyleWritingResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

