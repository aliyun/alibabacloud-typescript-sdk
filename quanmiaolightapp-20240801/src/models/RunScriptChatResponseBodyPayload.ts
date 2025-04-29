// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunScriptChatResponseBodyPayloadOutput } from "./RunScriptChatResponseBodyPayloadOutput";
import { RunScriptChatResponseBodyPayloadUsage } from "./RunScriptChatResponseBodyPayloadUsage";


export class RunScriptChatResponseBodyPayload extends $dara.Model {
  output?: RunScriptChatResponseBodyPayloadOutput;
  usage?: RunScriptChatResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptChatResponseBodyPayloadOutput,
      usage: RunScriptChatResponseBodyPayloadUsage,
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

