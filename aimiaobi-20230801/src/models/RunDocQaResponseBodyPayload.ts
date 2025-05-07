// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocQaResponseBodyPayloadOutput } from "./RunDocQaResponseBodyPayloadOutput";
import { RunDocQaResponseBodyPayloadUsage } from "./RunDocQaResponseBodyPayloadUsage";


export class RunDocQaResponseBodyPayload extends $dara.Model {
  output?: RunDocQaResponseBodyPayloadOutput;
  usage?: RunDocQaResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocQaResponseBodyPayloadOutput,
      usage: RunDocQaResponseBodyPayloadUsage,
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

