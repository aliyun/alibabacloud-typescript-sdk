// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput } from "./RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput";
import { RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage } from "./RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage";


export class RunCustomHotTopicViewPointAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput;
  usage?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage,
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

