// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCustomHotTopicAnalysisResponseBodyPayloadOutput } from "./RunCustomHotTopicAnalysisResponseBodyPayloadOutput";
import { RunCustomHotTopicAnalysisResponseBodyPayloadUsage } from "./RunCustomHotTopicAnalysisResponseBodyPayloadUsage";


export class RunCustomHotTopicAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunCustomHotTopicAnalysisResponseBodyPayloadOutput;
  usage?: RunCustomHotTopicAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicAnalysisResponseBodyPayloadUsage,
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

