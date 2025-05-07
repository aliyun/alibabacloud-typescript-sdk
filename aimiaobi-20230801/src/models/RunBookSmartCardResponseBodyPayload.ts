// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunBookSmartCardResponseBodyPayloadOutput } from "./RunBookSmartCardResponseBodyPayloadOutput";
import { RunBookSmartCardResponseBodyPayloadUsage } from "./RunBookSmartCardResponseBodyPayloadUsage";


export class RunBookSmartCardResponseBodyPayload extends $dara.Model {
  output?: RunBookSmartCardResponseBodyPayloadOutput;
  usage?: RunBookSmartCardResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookSmartCardResponseBodyPayloadOutput,
      usage: RunBookSmartCardResponseBodyPayloadUsage,
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

