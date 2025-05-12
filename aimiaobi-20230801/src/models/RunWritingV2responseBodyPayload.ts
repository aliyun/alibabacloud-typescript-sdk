// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingV2ResponseBodyPayloadOutput } from "./RunWritingV2responseBodyPayloadOutput";
import { RunWritingV2ResponseBodyPayloadUsage } from "./RunWritingV2responseBodyPayloadUsage";


export class RunWritingV2ResponseBodyPayload extends $dara.Model {
  output?: RunWritingV2ResponseBodyPayloadOutput;
  usage?: RunWritingV2ResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWritingV2ResponseBodyPayloadOutput,
      usage: RunWritingV2ResponseBodyPayloadUsage,
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

