// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStyleFeatureAnalysisResponseBodyPayloadOutput } from "./RunStyleFeatureAnalysisResponseBodyPayloadOutput";
import { RunStyleFeatureAnalysisResponseBodyPayloadUsage } from "./RunStyleFeatureAnalysisResponseBodyPayloadUsage";


export class RunStyleFeatureAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunStyleFeatureAnalysisResponseBodyPayloadOutput;
  usage?: RunStyleFeatureAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleFeatureAnalysisResponseBodyPayloadOutput,
      usage: RunStyleFeatureAnalysisResponseBodyPayloadUsage,
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

