// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContinueContentResponseBodyPayloadOutput } from "./RunContinueContentResponseBodyPayloadOutput";
import { RunContinueContentResponseBodyPayloadUsage } from "./RunContinueContentResponseBodyPayloadUsage";


export class RunContinueContentResponseBodyPayload extends $dara.Model {
  output?: RunContinueContentResponseBodyPayloadOutput;
  usage?: RunContinueContentResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunContinueContentResponseBodyPayloadOutput,
      usage: RunContinueContentResponseBodyPayloadUsage,
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

