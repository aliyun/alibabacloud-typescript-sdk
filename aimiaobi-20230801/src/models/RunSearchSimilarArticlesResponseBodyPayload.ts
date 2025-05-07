// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchSimilarArticlesResponseBodyPayloadOutput } from "./RunSearchSimilarArticlesResponseBodyPayloadOutput";
import { RunSearchSimilarArticlesResponseBodyPayloadUsage } from "./RunSearchSimilarArticlesResponseBodyPayloadUsage";


export class RunSearchSimilarArticlesResponseBodyPayload extends $dara.Model {
  output?: RunSearchSimilarArticlesResponseBodyPayloadOutput;
  usage?: RunSearchSimilarArticlesResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunSearchSimilarArticlesResponseBodyPayloadOutput,
      usage: RunSearchSimilarArticlesResponseBodyPayloadUsage,
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

