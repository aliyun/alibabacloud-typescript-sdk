// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContext } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContext";


export class RunSearchGenerationResponseBodyPayloadOutput extends $dara.Model {
  agentContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContext;
  static names(): { [key: string]: string } {
    return {
      agentContext: 'AgentContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationResponseBodyPayloadOutputAgentContext,
    };
  }

  validate() {
    if(this.agentContext && typeof (this.agentContext as any).validate === 'function') {
      (this.agentContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

