// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunScriptContinueResponseBodyPayloadOutput } from "./RunScriptContinueResponseBodyPayloadOutput";
import { RunScriptContinueResponseBodyPayloadUsage } from "./RunScriptContinueResponseBodyPayloadUsage";


export class RunScriptContinueResponseBodyPayload extends $dara.Model {
  output?: RunScriptContinueResponseBodyPayloadOutput;
  usage?: RunScriptContinueResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptContinueResponseBodyPayloadOutput,
      usage: RunScriptContinueResponseBodyPayloadUsage,
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

