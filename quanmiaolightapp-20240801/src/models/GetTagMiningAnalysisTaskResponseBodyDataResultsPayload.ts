// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput } from "./GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput";
import { GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage } from "./GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage";


export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayload extends $dara.Model {
  output?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput;
  usage?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput,
      usage: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage,
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

