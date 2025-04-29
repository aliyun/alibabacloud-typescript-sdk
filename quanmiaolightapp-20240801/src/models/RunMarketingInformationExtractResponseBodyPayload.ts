// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMarketingInformationExtractResponseBodyPayloadOutput } from "./RunMarketingInformationExtractResponseBodyPayloadOutput";
import { RunMarketingInformationExtractResponseBodyPayloadUsage } from "./RunMarketingInformationExtractResponseBodyPayloadUsage";


export class RunMarketingInformationExtractResponseBodyPayload extends $dara.Model {
  output?: RunMarketingInformationExtractResponseBodyPayloadOutput;
  usage?: RunMarketingInformationExtractResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationExtractResponseBodyPayloadOutput,
      usage: RunMarketingInformationExtractResponseBodyPayloadUsage,
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

