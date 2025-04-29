// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMarketingInformationWritingResponseBodyPayloadOutput } from "./RunMarketingInformationWritingResponseBodyPayloadOutput";
import { RunMarketingInformationWritingResponseBodyPayloadUsage } from "./RunMarketingInformationWritingResponseBodyPayloadUsage";


export class RunMarketingInformationWritingResponseBodyPayload extends $dara.Model {
  output?: RunMarketingInformationWritingResponseBodyPayloadOutput;
  usage?: RunMarketingInformationWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationWritingResponseBodyPayloadOutput,
      usage: RunMarketingInformationWritingResponseBodyPayloadUsage,
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

