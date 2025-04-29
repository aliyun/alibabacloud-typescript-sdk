// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutput } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutput";
import { GetVideoAnalysisTaskResponseBodyDataPayloadUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadUsage";


export class GetVideoAnalysisTaskResponseBodyDataPayload extends $dara.Model {
  output?: GetVideoAnalysisTaskResponseBodyDataPayloadOutput;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetVideoAnalysisTaskResponseBodyDataPayloadOutput,
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadUsage,
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

