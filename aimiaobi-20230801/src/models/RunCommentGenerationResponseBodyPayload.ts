// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCommentGenerationResponseBodyPayloadOutput } from "./RunCommentGenerationResponseBodyPayloadOutput";
import { RunCommentGenerationResponseBodyPayloadUsage } from "./RunCommentGenerationResponseBodyPayloadUsage";


export class RunCommentGenerationResponseBodyPayload extends $dara.Model {
  output?: RunCommentGenerationResponseBodyPayloadOutput;
  usage?: RunCommentGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCommentGenerationResponseBodyPayloadOutput,
      usage: RunCommentGenerationResponseBodyPayloadUsage,
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

