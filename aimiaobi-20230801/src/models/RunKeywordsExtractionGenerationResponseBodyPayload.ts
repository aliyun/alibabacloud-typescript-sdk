// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunKeywordsExtractionGenerationResponseBodyPayloadOutput } from "./RunKeywordsExtractionGenerationResponseBodyPayloadOutput";
import { RunKeywordsExtractionGenerationResponseBodyPayloadUsage } from "./RunKeywordsExtractionGenerationResponseBodyPayloadUsage";


export class RunKeywordsExtractionGenerationResponseBodyPayload extends $dara.Model {
  output?: RunKeywordsExtractionGenerationResponseBodyPayloadOutput;
  usage?: RunKeywordsExtractionGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunKeywordsExtractionGenerationResponseBodyPayloadOutput,
      usage: RunKeywordsExtractionGenerationResponseBodyPayloadUsage,
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

