// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunEssayCorrectionResponseBodyPayloadOutput } from "./RunEssayCorrectionResponseBodyPayloadOutput";
import { RunEssayCorrectionResponseBodyPayloadUsage } from "./RunEssayCorrectionResponseBodyPayloadUsage";


export class RunEssayCorrectionResponseBodyPayload extends $dara.Model {
  output?: RunEssayCorrectionResponseBodyPayloadOutput;
  usage?: RunEssayCorrectionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunEssayCorrectionResponseBodyPayloadOutput,
      usage: RunEssayCorrectionResponseBodyPayloadUsage,
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

