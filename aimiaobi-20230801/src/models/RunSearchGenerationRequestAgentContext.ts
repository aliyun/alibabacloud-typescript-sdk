// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationRequestAgentContextBizContext } from "./RunSearchGenerationRequestAgentContextBizContext";


export class RunSearchGenerationRequestAgentContext extends $dara.Model {
  bizContext?: RunSearchGenerationRequestAgentContextBizContext;
  static names(): { [key: string]: string } {
    return {
      bizContext: 'BizContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContext: RunSearchGenerationRequestAgentContextBizContext,
    };
  }

  validate() {
    if(this.bizContext && typeof (this.bizContext as any).validate === 'function') {
      (this.bizContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

