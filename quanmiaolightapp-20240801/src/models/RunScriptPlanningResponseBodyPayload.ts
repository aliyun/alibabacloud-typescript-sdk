// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunScriptPlanningResponseBodyPayloadOutput } from "./RunScriptPlanningResponseBodyPayloadOutput";
import { RunScriptPlanningResponseBodyPayloadUsage } from "./RunScriptPlanningResponseBodyPayloadUsage";


export class RunScriptPlanningResponseBodyPayload extends $dara.Model {
  output?: RunScriptPlanningResponseBodyPayloadOutput;
  usage?: RunScriptPlanningResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptPlanningResponseBodyPayloadOutput,
      usage: RunScriptPlanningResponseBodyPayloadUsage,
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

