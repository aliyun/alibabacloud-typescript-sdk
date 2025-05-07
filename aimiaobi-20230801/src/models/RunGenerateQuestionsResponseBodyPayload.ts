// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunGenerateQuestionsResponseBodyPayloadOutput } from "./RunGenerateQuestionsResponseBodyPayloadOutput";
import { RunGenerateQuestionsResponseBodyPayloadUsage } from "./RunGenerateQuestionsResponseBodyPayloadUsage";


export class RunGenerateQuestionsResponseBodyPayload extends $dara.Model {
  output?: RunGenerateQuestionsResponseBodyPayloadOutput;
  usage?: RunGenerateQuestionsResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunGenerateQuestionsResponseBodyPayloadOutput,
      usage: RunGenerateQuestionsResponseBodyPayloadUsage,
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

