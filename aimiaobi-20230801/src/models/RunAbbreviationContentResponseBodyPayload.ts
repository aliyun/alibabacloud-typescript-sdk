// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunAbbreviationContentResponseBodyPayloadOutput } from "./RunAbbreviationContentResponseBodyPayloadOutput";
import { RunAbbreviationContentResponseBodyPayloadUsage } from "./RunAbbreviationContentResponseBodyPayloadUsage";


export class RunAbbreviationContentResponseBodyPayload extends $dara.Model {
  output?: RunAbbreviationContentResponseBodyPayloadOutput;
  usage?: RunAbbreviationContentResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunAbbreviationContentResponseBodyPayloadOutput,
      usage: RunAbbreviationContentResponseBodyPayloadUsage,
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

