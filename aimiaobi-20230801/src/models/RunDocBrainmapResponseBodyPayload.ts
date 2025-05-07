// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocBrainmapResponseBodyPayloadOutput } from "./RunDocBrainmapResponseBodyPayloadOutput";
import { RunDocBrainmapResponseBodyPayloadUsage } from "./RunDocBrainmapResponseBodyPayloadUsage";


export class RunDocBrainmapResponseBodyPayload extends $dara.Model {
  output?: RunDocBrainmapResponseBodyPayloadOutput;
  usage?: RunDocBrainmapResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocBrainmapResponseBodyPayloadOutput,
      usage: RunDocBrainmapResponseBodyPayloadUsage,
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

