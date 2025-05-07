// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMultiDocIntroductionResponseBodyPayloadOutput } from "./RunMultiDocIntroductionResponseBodyPayloadOutput";
import { RunMultiDocIntroductionResponseBodyPayloadUsage } from "./RunMultiDocIntroductionResponseBodyPayloadUsage";


export class RunMultiDocIntroductionResponseBodyPayload extends $dara.Model {
  output?: RunMultiDocIntroductionResponseBodyPayloadOutput;
  usage?: RunMultiDocIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMultiDocIntroductionResponseBodyPayloadOutput,
      usage: RunMultiDocIntroductionResponseBodyPayloadUsage,
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

